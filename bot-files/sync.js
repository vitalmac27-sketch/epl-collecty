// sync.js — синхронизация объявлений с Авито через Apify (2 актора Zen Studio)
//  1) avito-seller-profile-scraper → весь список объявлений продавца (id, title, status)
//  2) avito-listings-scraper (includeDetails) → детали новых: описание, все фото, характеристики
import 'dotenv/config';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const APIFY_TOKEN = process.env.APIFY_TOKEN;
const AVITO_SELLER_ID = process.env.AVITO_SELLER_ID;
const PHOTOS_PATH = process.env.PHOTOS_PATH || '/opt/bu-bot/photos';
const APIFY_BASE = 'https://api.apify.com/v2/acts';

const PROFILE_ACTOR = 'zen-studio~avito-seller-profile-scraper';
const LISTINGS_ACTOR = 'zen-studio~avito-listings-scraper';

// Запуск актора синхронно: возвращает массив элементов датасета
async function runActor(actorId, input, timeoutMs = 300000) {
  if (!APIFY_TOKEN) throw new Error('APIFY_TOKEN не задан в .env');
  const url = `${APIFY_BASE}/${actorId}/run-sync-get-dataset-items?token=${APIFY_TOKEN}`;
  const res = await axios.post(url, input, {
    headers: { 'Content-Type': 'application/json' },
    timeout: timeoutMs,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });
  return Array.isArray(res.data) ? res.data : [];
}

// Только айфоны: категория телефонов (84) + заголовок начинается с iPhone
function isIphone(l) {
  return (l.categoryId === 84 || l.category === 'Телефоны') && /^\s*iphone/i.test(l.title || '');
}

// 1) Список объявлений продавца (активные + закрытые), только айфоны
export async function fetchSellerListings() {
  if (!AVITO_SELLER_ID) throw new Error('AVITO_SELLER_ID не задан в .env');
  const items = await runActor(PROFILE_ACTOR, {
    urls: [AVITO_SELLER_ID],
    fetchAllListings: true,
  });
  const profile = items[0] || {};
  const active = (profile.activeListings || []).filter(isIphone);
  const closed = (profile.closedListings || []).filter(isIphone);
  return {
    active,
    closed,
    activeCount: profile.activeListingCount,
    closedCount: profile.closedListingCount,
    sellerName: profile.name,
  };
}

// 2) Детали новых объявлений по id (листинг-скрапер принимает и голые id)
export async function fetchListingDetails(ids) {
  if (!ids || !ids.length) return [];
  let items = [];
  try {
    items = await runActor(LISTINGS_ACTOR, { listingUrls: ids.map(String), includeDetails: true });
  } catch (e) {
    console.error('[sync] батч деталей упал:', e.message);
  }
  const have = new Set(items.map(d => String(d.id)));
  const missing = ids.map(String).filter(id => !have.has(id));
  if (missing.length) {
    console.log(`[sync] добираю поштучно: ${missing.length}`);
    for (const id of missing) {
      try {
        const one = await runActor(LISTINGS_ACTOR, { listingUrls: [id], includeDetails: true });
        if (one[0]) items.push(one[0]);
      } catch (e) { console.error('[sync] деталь', id, e.message); }
    }
  }
  console.log(`[sync] деталей итого: ${items.length}/${ids.length}`);
  return items;
}

// Достаёт значение параметра по части имени (регистронезависимо)
function param(details, needle) {
  const p = (details.parameters || []).find(x =>
    (x.name || '').toLowerCase().includes(needle.toLowerCase()));
  return p ? String(p.value).trim() : null;
}

// Маппинг: профиль-элемент + детали → поля нашей карточки
// Чистка подменённых Авито символов (латиница↔кириллица внутри слов)
const L2C = { A:'А',B:'В',C:'С',E:'Е',H:'Н',K:'К',M:'М',O:'О',P:'Р',T:'Т',X:'Х',Y:'У',a:'а',c:'с',e:'е',o:'о',p:'р',x:'х',y:'у' };
const C2L = {}; for (const [l, c] of Object.entries(L2C)) C2L[c] = l;
export function fixHomoglyphs(text) {
  if (!text) return text;
  return String(text).replace(/[A-Za-zА-Яа-яЁё]+/g, (word) => {
    let cyr = 0, lat = 0;
    for (const ch of word) {
      if (/[А-Яа-яЁё]/.test(ch)) cyr++;
      else if (/[A-Za-z]/.test(ch)) lat++;
    }
    return cyr >= lat
      ? word.replace(/[A-Za-z]/g, ch => L2C[ch] || ch)   // русское слово → латинские двойники в кириллицу
      : word.replace(/[А-Яа-яЁё]/g, ch => C2L[ch] || ch); // латинское слово → кириллические двойники в латиницу
  });
}

export function mapAvitoListing(listItem, details = {}) {
  const title = fixHomoglyphs(listItem.title || details.title || '');
  const parts = title.split(',').map(s => s.trim());
  const model = parts[0] || title;
  const storagePart = parts.find(p => /\d+\s*(ГБ|ТБ|GB|TB)/i.test(p));
  const simPart = parts.find(p => /e?sim/i.test(p));

  // цвет/состояние/акб — из параметров детальной карточки
  const color = param(details, 'цвет');
  const condition = param(details, 'состояние аккумулятора') ? null : param(details, 'состояние');
  const battRaw = param(details, 'аккумулятор') || param(details, 'акб');
  const battery = battRaw ? parseInt(String(battRaw).replace(/\D/g, ''), 10) || null : null;

  return {
    avito_id: String(listItem.id),
    avito_url: details.url || listItem.url || null,
    title,
    model,
    storage: storagePart || null,
    color: color || null,
    sim_type: simPart || null,
    condition: condition || null,
    battery,
    cycles: null, // Авито отдельным полем не даёт; при желании — из описания
    price: listItem.price || details.price || null,
    description: fixHomoglyphs(details.description || ''),
    images: Array.isArray(details.images) ? details.images : (listItem.image ? [listItem.image] : []),
  };
}

// Скачивает фото Авито в /photos/<listingId>/ и возвращает относительные пути
export async function downloadAvitoPhotos(listingId, imageUrls) {
  const dir = path.join(PHOTOS_PATH, String(listingId));
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const rel = [];
  for (let i = 0; i < imageUrls.length && i < 10; i++) {
    try {
      const resp = await axios.get(imageUrls[i], { responseType: 'arraybuffer', timeout: 30000 });
      const savePath = path.join(dir, `${i + 1}.jpg`);
      fs.writeFileSync(savePath, resp.data);
      rel.push(`/photos/${listingId}/${i + 1}.jpg`);
    } catch (e) {
      console.error(`[sync] фото ${i + 1} не скачалось:`, e.message);
    }
  }
  return rel;
}
