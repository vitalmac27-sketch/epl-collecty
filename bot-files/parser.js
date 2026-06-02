import 'dotenv/config';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import fs from 'fs';
import path from 'path';

puppeteer.use(StealthPlugin());

const PHOTOS_PATH = process.env.PHOTOS_PATH || '/opt/bu-bot/photos';
const COOKIES_FILE = '/opt/bu-bot/cookies.json';

const PROXY_HOST = process.env.PROXY_HOST;
const PROXY_PORT = process.env.PROXY_PORT;
const PROXY_USER = process.env.PROXY_USER;
const PROXY_PASS = process.env.PROXY_PASS;

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
    await page.evaluate(() => window.scrollBy(0, 300));
    await new Promise(r => setTimeout(r, 1000));

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

    console.log('[parser] Открываем галерею...');
    const bigPhotos = [];
    try {
      const galleryBtn = await page.$('[data-marker="image-frame/image-wrapper"]');
      if (galleryBtn) {
        await galleryBtn.click();
        await new Promise(r => setTimeout(r, 2000));

        for (let i = 0; i < 10; i++) {
          const currentPhoto = await page.evaluate(() => {
            const imgs = Array.from(document.querySelectorAll('img'));
            const big = imgs
              .filter(img => img.src && img.src.includes('avito.st') &&
                !img.src.includes('logo') && !img.src.includes('avatar'))
              .map(img => ({
                src: img.src,
                area: (img.naturalWidth || img.width) * (img.naturalHeight || img.height)
              }))
              .sort((a, b) => b.area - a.area);
            return big[0]?.src || null;
          });

          if (currentPhoto && !bigPhotos.includes(currentPhoto)) {
            bigPhotos.push(currentPhoto);
            console.log(`[parser] Фото ${bigPhotos.length}: ${currentPhoto.slice(0, 80)}`);
          }

          if (bigPhotos.length >= 6) break;

          await page.keyboard.press('ArrowRight');
          await new Promise(r => setTimeout(r, 800));
        }
        await page.keyboard.press('Escape');
        await new Promise(r => setTimeout(r, 500));
      }
    } catch (e) {
      console.error('[parser] Ошибка галереи:', e.message);
    }

    console.log(`[parser] Собрано ${bigPhotos.length} больших фото`);

    const localPaths = [];
    if (bigPhotos.length > 0) {
      const dir = path.join(PHOTOS_PATH, String(listingId));
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      for (let i = 0; i < bigPhotos.length; i++) {
        try {
          const photoUrl = bigPhotos[i];
          const buffer = await page.evaluate(async (u) => {
            const res = await fetch(u, { credentials: 'include' });
            const blob = await res.blob();
            const arr = await blob.arrayBuffer();
            return Array.from(new Uint8Array(arr));
          }, photoUrl);

          const data = Buffer.from(buffer);
          if (data.length < 10000) {
            console.warn(`[parser] Фото ${i+1} мало (${data.length}b)`);
            continue;
          }
          fs.writeFileSync(path.join(dir, `${i+1}.jpg`), data);
          localPaths.push(`/photos/${listingId}/${i+1}.jpg`);
          console.log(`[parser] Фото ${i+1}: ${(data.length/1024).toFixed(1)} КБ`);
        } catch (e) {
          console.error(`[parser] Фото ${i+1} ошибка:`, e.message);
        }
      }
    }

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
