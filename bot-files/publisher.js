// publisher.js — публикация карточек в Telegram-канал и ВК группу
import 'dotenv/config';
import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import { HttpsProxyAgent } from 'https-proxy-agent';

const TG_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TG_CHANNEL_ID = process.env.TG_CHANNEL_ID; // -1003862359021
const VK_TOKEN = process.env.VK_TOKEN;
const VK_GROUP_ID = process.env.VK_GROUP_ID;
const VK_API_VERSION = '5.199';
const SITE_URL = process.env.SITE_URL || 'https://xn----jtbjgbccazg9frdtb.xn--p1ai';

// Telegram через локальный gost-прокси (прямого маршрута с VPS нет)
const TG_PROXY = process.env.TG_PROXY || 'http://127.0.0.1:8080';
const tgAgent = TG_PROXY ? new HttpsProxyAgent(TG_PROXY) : undefined;
const tg = axios.create(tgAgent ? { httpsAgent: tgAgent, proxy: false } : {});

/** Русское склонение существительного по числу: (1 цикл, 2 цикла, 5 циклов) */
function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
}

/**
 * Добавляет «воздух» в описание: пустая строка перед каждым пунктом с эмодзи,
 * вводные текстовые строки остаются вместе. Схлопывает лишние пустые строки.
 */
function prettifyDescription(desc) {
  if (!desc) return desc;
  const startsWithEmoji = (s) => /^\p{Extended_Pictographic}/u.test(s.trim());
  const out = [];
  for (const raw of desc.split('\n')) {
    const line = raw.trim();
    if (line === '') {
      if (out.length && out[out.length - 1] !== '') out.push('');
      continue;
    }
    const prev = out.length ? out[out.length - 1] : '';
    // Пустую строку ставим перед эмодзи-пунктом, если предыдущая строка — текст (не эмодзи)
    // или это длинное предложение (>45 симв). Короткие пункты-чеклист идут вместе.
    if (startsWithEmoji(line) && prev !== '' && (!startsWithEmoji(prev) || prev.length > 45)) {
      out.push('');
    }
    out.push(line);
  }
  while (out.length && out[out.length - 1] === '') out.pop();
  return out.join('\n');
}

/**
 * Формирует красивый текст карточки для публикации
 */
export function formatCard(listing, { withSiteLink = true, withSoldMark = false } = {}) {
  const lines = [];

  if (withSoldMark) lines.push('🔴 ПРОДАНО', '');

  // Заголовок
  const titleParts = [listing.model];
  if (listing.storage) titleParts.push(listing.storage);
  if (listing.color) titleParts.push(listing.color);
  lines.push('📱 ' + titleParts.join(' • '));

  // Характеристики — сразу под заголовком
  if (listing.simType) lines.push(`📶 ${listing.simType}`);
  if (listing.battery) {
    const cyc = listing.cycles ? `, ${listing.cycles} ${plural(listing.cycles, 'цикл', 'цикла', 'циклов')}` : '';
    lines.push(`🔋 АКБ ${listing.battery}%${cyc}`);
  }
  if (listing.condition) lines.push(`✨ Состояние: ${listing.condition}`);

  // Цена — сразу под характеристиками (в одном блоке с шапкой)
  if (listing.price && !withSoldMark) {
    lines.push(`💰 ${listing.price.toLocaleString('ru-RU')} ₽`);
  }

  if (listing.description) {
    lines.push('');
    lines.push(prettifyDescription(listing.description));
  }

  if (withSiteLink && listing.slug && !withSoldMark) {
    lines.push('');
    lines.push(`🛒 Купить: ${SITE_URL}/bu-iphone/item?slug=${listing.slug}`);
  }

  if (!withSoldMark) {
    lines.push('');
    lines.push('💬 ЭПЛ-КОЛЛЕКЦИЯ Казань · @ac_care');
  }

  return lines.join('\n');
}

/** Повтор с паузой: до attempts попыток, между ними delayMs */
async function withRetry(fn, attempts = 3, delayMs = 3000) {
  let lastErr;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      console.error(`[publisher] попытка ${i}/${attempts} не удалась: ${e.message}`);
      if (i < attempts) await new Promise(r => setTimeout(r, delayMs));
    }
  }
  throw lastErr;
}

/**
 * Публикует в Telegram-канал (фото + подпись)
 * @returns {Promise<{message_id: number, chat_id: number}>}
 */
export async function publishToTelegram(listing, photoPaths) {
  if (!TG_CHANNEL_ID) throw new Error('TG_CHANNEL_ID не указан в .env');
  if (!photoPaths || photoPaths.length === 0) throw new Error('Нет фото для публикации');

  // В Telegram-канал ссылку на сайт не добавляем (только ВК)
  const caption = formatCard(listing, { withSiteLink: false });

  // Если 1 фото — отправляем как sendPhoto
  if (photoPaths.length === 1) {
    // Форму пересобираем на каждой попытке: стримы одноразовые
    const res = await withRetry(() => {
      const form = new FormData();
      form.append('chat_id', TG_CHANNEL_ID);
      form.append('caption', caption);
      form.append('photo', fs.createReadStream(photoPaths[0]));
      return tg.post(
        `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendPhoto`,
        form,
        { headers: form.getHeaders(), timeout: 120000, maxContentLength: Infinity, maxBodyLength: Infinity }
      );
    });

    if (!res.data.ok) throw new Error(`TG: ${res.data.description}`);
    return { message_id: res.data.result.message_id, chat_id: res.data.result.chat.id };
  }

  // Несколько фото — sendMediaGroup, подпись только у первого
  const media = photoPaths.map((p, i) => ({
    type: 'photo',
    media: `attach://photo${i}`,
    ...(i === 0 ? { caption } : {}),
  }));

  const res = await withRetry(() => {
    const form = new FormData();
    form.append('chat_id', TG_CHANNEL_ID);
    form.append('media', JSON.stringify(media));
    photoPaths.forEach((p, i) => {
      form.append(`photo${i}`, fs.createReadStream(p));
    });
    return tg.post(
      `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMediaGroup`,
      form,
      { headers: form.getHeaders(), timeout: 180000, maxContentLength: Infinity, maxBodyLength: Infinity }
    );
  });

  if (!res.data.ok) throw new Error(`TG: ${res.data.description}`);
  // sendMediaGroup возвращает массив — берём первый message_id
  return { message_id: res.data.result[0].message_id, chat_id: res.data.result[0].chat.id };
}

/**
 * Обновить подпись поста в Telegram (после правки цены/описания)
 */
export async function editTelegramCaption(messageId, listing) {
  if (!TG_CHANNEL_ID) return;
  const caption = formatCard(listing, { withSiteLink: false });
  try {
    await tg.post(`https://api.telegram.org/bot${TG_BOT_TOKEN}/editMessageCaption`, {
      chat_id: TG_CHANNEL_ID,
      message_id: messageId,
      caption,
    });
  } catch (e) {
    console.error('[publisher] editTelegramCaption error:', e.response?.data?.description || e.message);
  }
}

/**
 * Обновить текст поста ВК (после правки цены/описания)
 */
export async function editVKPost(postId, listing) {
  if (!VK_TOKEN || !VK_GROUP_ID) return;
  const message = formatCard(listing, { withSiteLink: true });
  try {
    await axios.post('https://api.vk.com/method/wall.edit', null, {
      params: {
        owner_id: `-${VK_GROUP_ID}`,
        post_id: postId,
        message,
        access_token: VK_TOKEN,
        v: VK_API_VERSION,
      },
      timeout: 30000,
    });
  } catch (e) {
    console.error('[publisher] editVKPost error:', e.message);
  }
}

/**
 * Отметить пост в Telegram как проданный (редактирует подпись)
 */
export async function markTelegramSold(messageId, listing) {
  if (!TG_CHANNEL_ID) return;
  const caption = formatCard(listing, { withSoldMark: true });

  try {
    await tg.post(`https://api.telegram.org/bot${TG_BOT_TOKEN}/editMessageCaption`, {
      chat_id: TG_CHANNEL_ID,
      message_id: messageId,
      caption,
    });
  } catch (e) {
    console.error('[publisher] editMessageCaption error:', e.response?.data?.description || e.message);
  }
}

/**
 * Удалить пост в Telegram
 */
export async function deleteTelegramPost(messageId) {
  if (!TG_CHANNEL_ID) return;
  try {
    await tg.post(`https://api.telegram.org/bot${TG_BOT_TOKEN}/deleteMessage`, {
      chat_id: TG_CHANNEL_ID,
      message_id: messageId,
    });
  } catch (e) {
    console.error('[publisher] deleteMessage error:', e.response?.data?.description || e.message);
  }
}

/**
 * Загружает фото на ВК-сервер для стены группы
 * @returns {Promise<string>} строка для attachments вида "photo-XXX_YYY"
 */
async function uploadPhotoToVK(photoPath) {
  // Шаг 1: получить upload URL для стены
  const serverRes = await axios.get('https://api.vk.com/method/photos.getWallUploadServer', {
    params: { group_id: VK_GROUP_ID, access_token: VK_TOKEN, v: VK_API_VERSION },
    timeout: 30000,
  });
  if (serverRes.data.error) throw new Error(`VK getWallUploadServer: ${serverRes.data.error.error_msg}`);
  const uploadUrl = serverRes.data.response.upload_url;

  // Шаг 2: загрузить файл
  const form = new FormData();
  form.append('photo', fs.createReadStream(photoPath));
  const uploadRes = await axios.post(uploadUrl, form, {
    headers: form.getHeaders(), timeout: 60000,
    maxContentLength: Infinity, maxBodyLength: Infinity,
  });

  const { server, photo, hash } = uploadRes.data;
  if (!photo || photo === '[]') throw new Error('VK upload: пустой ответ');

  // Шаг 3: сохранить фото в альбоме группы
  const saveRes = await axios.get('https://api.vk.com/method/photos.saveWallPhoto', {
    params: {
      group_id: VK_GROUP_ID,
      server, photo, hash,
      access_token: VK_TOKEN, v: VK_API_VERSION,
    },
    timeout: 30000,
  });
  if (saveRes.data.error) throw new Error(`VK saveWallPhoto: ${saveRes.data.error.error_msg}`);

  const saved = saveRes.data.response[0];
  return `photo${saved.owner_id}_${saved.id}`;
}

/**
 * Публикует в ВК на стену группы
 * @returns {Promise<{post_id: number}>}
 */
export async function publishToVK(listing, photoPaths) {
  if (!VK_TOKEN || !VK_GROUP_ID) throw new Error('VK_TOKEN или VK_GROUP_ID не указан');
  if (!photoPaths || photoPaths.length === 0) throw new Error('Нет фото для публикации');

  // Загружаем все фото на ВК (с повторами — VK иногда отдаёт разовые 504)
  const attachments = [];
  for (const path of photoPaths.slice(0, 10)) { // ВК максимум 10 attachments
    try {
      const att = await withRetry(() => uploadPhotoToVK(path), 3, 2000);
      attachments.push(att);
    } catch (e) {
      console.error('[publisher] VK upload photo error:', e.message);
    }
  }

  if (attachments.length === 0) throw new Error('Не удалось загрузить ни одного фото в ВК');

  const message = formatCard(listing, { withSiteLink: true });

  const postRes = await axios.post('https://api.vk.com/method/wall.post', null, {
    params: {
      owner_id: `-${VK_GROUP_ID}`,
      from_group: 1,
      message,
      attachments: attachments.join(','),
      access_token: VK_TOKEN,
      v: VK_API_VERSION,
    },
    timeout: 30000,
  });

  if (postRes.data.error) throw new Error(`VK wall.post: ${postRes.data.error.error_msg}`);
  return { post_id: postRes.data.response.post_id };
}

/**
 * Отметить пост ВК как проданный (редактирует текст)
 */
export async function markVKSold(postId, listing) {
  if (!VK_TOKEN || !VK_GROUP_ID) return;
  const message = formatCard(listing, { withSoldMark: true, withSiteLink: false });

  try {
    await axios.post('https://api.vk.com/method/wall.edit', null, {
      params: {
        owner_id: `-${VK_GROUP_ID}`,
        post_id: postId,
        message,
        access_token: VK_TOKEN,
        v: VK_API_VERSION,
      },
      timeout: 30000,
    });
  } catch (e) {
    console.error('[publisher] VK edit error:', e.message);
  }
}

/**
 * Удалить пост ВК
 */
export async function deleteVKPost(postId) {
  if (!VK_TOKEN || !VK_GROUP_ID) return;
  try {
    await axios.post('https://api.vk.com/method/wall.delete', null, {
      params: {
        owner_id: `-${VK_GROUP_ID}`,
        post_id: postId,
        access_token: VK_TOKEN,
        v: VK_API_VERSION,
      },
      timeout: 30000,
    });
  } catch (e) {
    console.error('[publisher] VK delete error:', e.message);
  }
}

// ============================================================
// === Instagram через Zernio (zernio.com) ===
// ============================================================
const ZERNIO_API_KEY = process.env.ZERNIO_API_KEY;
const ZERNIO_ACCOUNT_ID = process.env.ZERNIO_ACCOUNT_ID;
const ZERNIO_BASE = 'https://zernio.com/api/v1';

/** Обрезает подпись до лимита по границе слова */
function trimToLimit(text, limit) {
  if (!text || text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > limit * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

/** Заливает локальный файл в хранилище Zernio → возвращает публичный URL */
async function uploadToZernio(filePath, contentType) {
  const filename = filePath.split('/').pop() || 'media.jpg';
  const presign = await axios.post(`${ZERNIO_BASE}/media/presign`,
    { filename, contentType },
    { headers: { Authorization: `Bearer ${ZERNIO_API_KEY}`, 'Content-Type': 'application/json' }, timeout: 30000 });
  const { uploadUrl, publicUrl } = presign.data || {};
  if (!uploadUrl || !publicUrl) throw new Error('Zernio presign: пустой ответ');

  const bytes = fs.readFileSync(filePath);
  await axios.put(uploadUrl, bytes, {
    headers: { 'Content-Type': contentType },
    timeout: 120000, maxContentLength: Infinity, maxBodyLength: Infinity,
  });
  return publicUrl;
}

/**
 * Публикует в Instagram (лента, до 10 фото каруселью) через Zernio
 * @returns {Promise<{post_id: string}>}
 */
export async function publishToInstagram(listing, photoPaths) {
  if (!ZERNIO_API_KEY || !ZERNIO_ACCOUNT_ID) throw new Error('ZERNIO_API_KEY или ZERNIO_ACCOUNT_ID не указан в .env');
  if (!photoPaths || photoPaths.length === 0) throw new Error('Нет фото для публикации');

  const mediaItems = [];
  for (const p of photoPaths.slice(0, 10)) { // Instagram карусель — максимум 10
    try {
      const url = await withRetry(() => uploadToZernio(p, 'image/jpeg'), 3, 2000);
      mediaItems.push({ type: 'image', url });
    } catch (e) {
      console.error('[publisher] Zernio upload error:', e.message);
    }
  }
  if (mediaItems.length === 0) throw new Error('Не удалось загрузить ни одного фото в Zernio');

  // В Instagram ссылки в подписи не кликабельны — без ссылки на сайт; режем до 2200
  const caption = trimToLimit(formatCard(listing, { withSiteLink: false }), 2200);

  const postRes = await withRetry(() => axios.post(`${ZERNIO_BASE}/posts`,
    {
      content: caption,
      publishNow: true,
      mediaItems,
      platforms: [{ platform: 'instagram', accountId: ZERNIO_ACCOUNT_ID }],
    },
    { headers: { Authorization: `Bearer ${ZERNIO_API_KEY}`, 'Content-Type': 'application/json' }, timeout: 60000 }
  ), 3, 3000);

  const data = postRes.data || {};
  const postId = data.id || data.postId || (data.post && data.post.id) || 'ok';
  return { post_id: String(postId) };
}
