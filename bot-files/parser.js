import 'dotenv/config';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import fs from 'fs';
import path from 'path';

puppeteer.use(StealthPlugin());

const PHOTOS_PATH = process.env.PHOTOS_PATH || '/opt/bu-bot/photos';
const COOKIES_FILE = '/opt/bu-bot/cookies.json';

const PROXY_HOST = process.env.PROXY_HOST;
const PROXY_PORT = process.env.PROXY_PORT;
const PROXY_USER = process.env.PROXY_USER;
const PROXY_PASS = process.env.PROXY_PASS;
const PROXY_URL = PROXY_HOST ? `http://${PROXY_USER}:${PROXY_PASS}@${PROXY_HOST}:${PROXY_PORT}` : null;

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

let lastRequestTime = 0;
const MIN_INTERVAL_MS = 15000;

export async function parseAndDownload(url, listingId) {
  const now = Date.now();
  const wait = MIN_INTERVAL_MS - (now - lastRequestTime);
  if (wait > 0) {
    console.log(`[parser] Жду ${Math.ceil(wait/1000)} сек...`);
    await new Promise(r => setTimeout(r, wait));
  }
  lastRequestTime = Date.now();

  console.log(`[parser] Парсим: ${url}`);

  const args = [
    '--no-sandbox', '--disable-setuid-sandbox',
    '--disable-blink-features=AutomationControlled',
    '--disable-dev-shm-usage', '--lang=ru-RU,ru',
    '--window-size=1366,768',
  ];
  if (PROXY_HOST) args.push(`--proxy-server=${PROXY_HOST}:${PROXY_PORT}`);

  const browser = await puppeteer.launch({
    headless: true,
    args,
    defaultViewport: { width: 1366, height: 768 },
  });

  try {
    const page = await browser.newPage();
    if (PROXY_USER) await page.authenticate({ username: PROXY_USER, password: PROXY_PASS });

    await page.setUserAgent(UA);
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'ru-RU,ru;q=0.9,en;q=0.8' });
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
      Object.defineProperty(navigator, 'languages', { get: () => ['ru-RU', 'ru'] });
    });

    if (fs.existsSync(COOKIES_FILE)) {
      try {
        const cookies = JSON.parse(fs.readFileSync(COOKIES_FILE, 'utf8'));
        await page.setCookie(...cookies);
      } catch {}
    }

    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
    await new Promise(r => setTimeout(r, 3000 + Math.random() * 2000));

    const blockStatus = await page.evaluate(() => {
      const text = document.body.innerText.toLowerCase();
      if (text.includes('сайт временно недоступен')) return 'TEMPORARILY_UNAVAILABLE';
      if (text.includes('доступ ограничен') || text.includes('подтвердите')) return 'BLOCKED';
      if (!document.querySelector('h1')) return 'NO_CONTENT';
      return 'OK';
    });

    if (blockStatus !== 'OK') {
      if (blockStatus === 'TEMPORARILY_UNAVAILABLE') throw new Error('Авито временно заблокировал. Подождите 10-15 минут.');
      if (blockStatus === 'BLOCKED') throw new Error('Авито показал капчу. Подождите 5-10 минут.');
      throw new Error('Авито не вернул содержимое.');
    }

    try {
      const cookies = await page.cookies();
      fs.writeFileSync(COOKIES_FILE, JSON.stringify(cookies));
    } catch {}

    await page.waitForSelector('h1', { timeout: 15000 });

    // === Кликаем по каждой миниатюре фото и собираем большие версии ===
    console.log('[parser] Ищу миниатюры для перебора...');

    const collectedPhotos = await page.evaluate(async () => {
      const sleep = ms => new Promise(r => setTimeout(r, ms));

      // Функция: найти все миниатюры (маленькие <img> 75×55 или похожие)
      const findThumbnails = () => {
        return Array.from(document.querySelectorAll('img'))
          .filter(img => {
            const src = img.src || '';
            if (!src.includes('avito.st')) return false;
            if (src.includes('logo') || src.includes('avatar') || src.includes('stub')) return false;
            const nw = img.naturalWidth || 0;
            // Миниатюры обычно меньше 200px по любой стороне
            return nw > 0 && nw < 200;
          });
      };

      // Функция: найти текущее большое фото на странице
      const findMainPhoto = () => {
        return Array.from(document.querySelectorAll('img'))
          .filter(img => {
            const src = img.src || '';
            if (!src.includes('avito.st')) return false;
            if (src.includes('logo') || src.includes('avatar') || src.includes('stub')) return false;
            return (img.naturalWidth || 0) >= 200;
          })
          .sort((a, b) => (b.naturalWidth * b.naturalHeight) - (a.naturalWidth * a.naturalHeight))[0];
      };

      const thumbnails = findThumbnails();
      const collected = [];
      const seenHashes = new Set();

      console.log(`Найдено ${thumbnails.length} миниатюр`);

      // Берём первое большое фото без клика
      const initialMain = findMainPhoto();
      if (initialMain) {
        const m = initialMain.src.match(/\/image\/\d+\/\d+\.([A-Za-z0-9_-]+)\./);
        if (m) {
          seenHashes.add(m[1]);
          collected.push({ src: initialMain.src, area: initialMain.naturalWidth * initialMain.naturalHeight });
        }
      }

      // Кликаем по каждой миниатюре (макс 7 раз, чтобы получить до 8 фото)
      for (let i = 0; i < Math.min(thumbnails.length, 7); i++) {
        try {
          // Скроллим миниатюру в зону видимости и кликаем
          thumbnails[i].scrollIntoView({ behavior: 'instant', block: 'center' });
          await sleep(200);

          // Кликаем на родительский элемент миниатюры (часто там кликабельная зона)
          const clickTarget = thumbnails[i].closest('button') ||
                              thumbnails[i].closest('[role="button"]') ||
                              thumbnails[i].closest('a') ||
                              thumbnails[i].parentElement ||
                              thumbnails[i];
          clickTarget.click();

          // Ждём загрузку большого фото
          await sleep(800);

          // Берём текущее большое фото
          const main = findMainPhoto();
          if (main) {
            const m = main.src.match(/\/image\/\d+\/\d+\.([A-Za-z0-9_-]+)\./);
            if (m && !seenHashes.has(m[1])) {
              seenHashes.add(m[1]);
              collected.push({ src: main.src, area: main.naturalWidth * main.naturalHeight });
            }
          }
        } catch (e) {
          // ignore
        }
      }

      return collected.slice(0, 6);
    });

    console.log(`[parser] Собрано ${collectedPhotos.length} уникальных больших фото:`);
    collectedPhotos.forEach((p, i) => {
      console.log(`  ${i+1}. ${p.area}px²  ${p.src.slice(0, 80)}`);
    });

    // === Скачиваем фото через axios с прокси ===
    const localPaths = [];
    if (collectedPhotos.length > 0) {
      const dir = path.join(PHOTOS_PATH, String(listingId));
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      const axiosConfig = {
        responseType: 'arraybuffer', timeout: 30000,
        headers: {
          'User-Agent': UA, 'Referer': 'https://www.avito.ru/',
          'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'Accept-Language': 'ru-RU,ru;q=0.9',
        },
      };
      if (PROXY_URL) {
        axiosConfig.httpsAgent = new HttpsProxyAgent(PROXY_URL);
        axiosConfig.httpAgent = new HttpsProxyAgent(PROXY_URL);
      }

      for (let i = 0; i < collectedPhotos.length; i++) {
        const photoUrl = collectedPhotos[i].src;
        try {
          const response = await axios.get(photoUrl, axiosConfig);
          const data = Buffer.from(response.data);
          if (data.length < 10000) {
            console.warn(`[parser] Фото ${i+1} мало (${data.length}b)`);
            continue;
          }
          fs.writeFileSync(path.join(dir, `${i+1}.jpg`), data);
          localPaths.push(`/photos/${listingId}/${i+1}.jpg`);
          console.log(`[parser] Фото ${i+1}: ${(data.length/1024).toFixed(1)} КБ`);
        } catch (e) {
          console.error(`[parser] Фото ${i+1}: ${e.message}`);
        }
      }
    }

    // === Текстовые данные ===
    const data = await page.evaluate(() => {
      const title = document.querySelector('h1')?.innerText?.trim() || '';
      let price = 0;
      const priceEl = document.querySelector('[itemprop="price"]') ||
        document.querySelector('[data-marker="item-view/item-price"]');
      if (priceEl) {
        const t = priceEl.getAttribute('content') || priceEl.innerText || '';
        price = parseInt(t.replace(/\D/g, '')) || 0;
      }
      const description =
        document.querySelector('[data-marker="item-view/item-description"]')?.innerText?.trim() || '';
      const params = {};
      document.querySelectorAll('[data-marker="item-view/item-params"] li, [class*="params"] li').forEach((li) => {
        const text = li.innerText || '';
        const [key, ...rest] = text.split(':');
        if (key && rest.length) params[key.trim()] = rest.join(':').trim();
      });
      const avitoId = location.pathname.match(/_(\d+)$/)?.[1] || '';
      return { title, price, description, params, avitoId };
    });

    const fullText = `${data.title} ${data.description}`.toLowerCase();
    let model = '';
    const mm = fullText.match(/iphone\s*(\d{1,2})\s*(pro\s*max|pro|plus|mini|air|e)?/i);
    if (mm) {
      const num = mm[1];
      const variant = mm[2]?.trim().replace(/\s+/g, ' ') || '';
      model = `iPhone ${num}${variant ? ' ' + variant.replace(/\b\w/g, c => c.toUpperCase()) : ''}`;
    }
    let storage = '';
    const sm = fullText.match(/(\d{2,4})\s*(гб|gb|тб|tb)/i);
    if (sm) storage = sm[2].toLowerCase().includes('т') ? `${sm[1]} ТБ` : `${sm[1]} ГБ`;
    let battery = null;
    const bm = fullText.match(/(?:акб|аккумулятор|battery|емкост)\D*(\d{2,3})\s*%/i);
    if (bm) battery = parseInt(bm[1]);
    const color = data.params['Цвет'] || data.params['Цвет корпуса'] || '';
    let condition = data.params['Состояние'] || '';
    if (!condition) {
      if (/идеал/i.test(fullText)) condition = 'Идеальное';
      else if (/отличн/i.test(fullText)) condition = 'Отличное';
      else if (/хорош/i.test(fullText)) condition = 'Хорошее';
    }

    return {
      avitoUrl: url, avitoId: data.avitoId, title: data.title, price: data.price,
      description: data.description, model, storage, color, battery, condition,
      photos: localPaths, params: data.params,
    };
  } finally {
    await browser.close();
  }
}
