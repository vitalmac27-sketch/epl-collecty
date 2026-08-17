// prices.js — автообновление цен новых моделей из прайса в канале @applecollectkazan
// Парсит пост → обновляет src/lib/generated/iphone-configs.ts → коммитит в GitHub через API
import 'dotenv/config';
import axios from 'axios';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO || 'vitalmac27-sketch/epl-collecty';
const CONFIG_PATH = 'src/lib/generated/iphone-configs.ts';

// --- Парсер прайса ---
export function parsePriceList(text) {
  const lines = String(text).split('\n').map((l) => l.trim());
  const out = [];
  let model = null, storageId = null;
  for (const line of lines) {
    if (!line) continue;
    const mm = line.match(/^📱\s*(.+)$/);
    if (mm) { model = mm[1].trim(); storageId = null; continue; }
    const sm = line.match(/^(\d+)\s*(GB|TB|ГБ|ТБ)$/i);
    if (sm) {
      const n = sm[1], u = sm[2].toUpperCase();
      storageId = (u === 'TB' || u === 'ТБ') ? String(parseInt(n) * 1024) : n;
      continue;
    }
    const pm = line.match(/^[•\-\*]\s*(.+?)\s*[-–—]\s*([\d\s]+)$/);
    if (pm && model && storageId) {
      const left = pm[1].trim();
      const price = parseInt(pm[2].replace(/\s/g, ''), 10);
      let simId, color;
      if (/sim\s*\+\s*esim/i.test(left)) { simId = 'sim-esim'; color = left.replace(/sim\s*\+\s*esim/i, '').trim(); }
      else if (/esim/i.test(left)) { simId = 'esim'; color = left.replace(/esim/i, '').trim(); }
      else { simId = null; color = left.trim(); }
      out.push({ model, storageId, colorId: color.toLowerCase().replace(/\s+/g, ''), simId, price });
    }
  }
  return out;
}

function slugOf(model) { return model.toLowerCase().replace(/\s+/g, '-'); }

// --- Применение цен к тексту конфига ---
export function applyPrices(fileText, rows) {
  const report = { updated: 0, unmatched: [], models: {} };
  const bySlug = {};
  for (const r of rows) (bySlug[slugOf(r.model)] ||= []).push(r);

  for (const [slug, items] of Object.entries(bySlug)) {
    const re = new RegExp(`(const \\w+: ProductConfig = \\{[\\s\\S]*?slug: "${slug}"[\\s\\S]*?\\n\\};)`);
    const m = fileText.match(re);
    if (!m) { items.forEach((r) => report.unmatched.push(`${slug} ${r.storageId}/${r.colorId} (нет модели)`)); continue; }
    let block = m[1]; const orig = block;
    for (const r of items) {
      const pre = r.simId
        ? new RegExp(`(storageId: "${r.storageId}", colorId: "${r.colorId}", simId: "${r.simId}", price: )\\d+`)
        : new RegExp(`(storageId: "${r.storageId}", colorId: "${r.colorId}", simId: "[^"]+", price: )\\d+`, 'g');
      if (pre.test(block)) { block = block.replace(pre, `$1${r.price}`); report.updated++; }
      else report.unmatched.push(`${slug} ${r.storageId}/${r.colorId}/${r.simId || '*'}`);
    }
    const prices = [...block.matchAll(/price: (\d+)/g)].map((x) => parseInt(x[1]));
    if (prices.length) {
      const min = Math.min(...prices);
      block = block.replace(/priceFrom: \d+/, `priceFrom: ${min}`);
      report.models[slug] = min;
    }
    fileText = fileText.replace(orig, block);
  }
  return { fileText, report };
}

// --- GitHub API ---
const gh = () => axios.create({
  baseURL: `https://api.github.com/repos/${GITHUB_REPO}/contents`,
  headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: 'application/vnd.github+json', 'User-Agent': 'epl-bot' },
  timeout: 30000,
});

async function getFile(path) {
  const r = await gh().get(`/${path}?ref=main`);
  return { text: Buffer.from(r.data.content, 'base64').toString('utf8'), sha: r.data.sha };
}
async function putFile(path, text, sha, message) {
  await gh().put(`/${path}`, {
    message, branch: 'main', sha,
    content: Buffer.from(text, 'utf8').toString('base64'),
  });
}

// --- Оркестратор: парс → апдейт → коммит. Возвращает отчёт или null (не прайс) ---
export async function runPriceUpdate(priceText) {
  const rows = parsePriceList(priceText);
  if (rows.length < 3) return null; // не похоже на прайс
  if (!GITHUB_TOKEN) throw new Error('GITHUB_TOKEN не задан в .env');
  const { text, sha } = await getFile(CONFIG_PATH);
  const { fileText, report } = applyPrices(text, rows);
  if (fileText === text) return { ...report, nochange: true };
  await putFile(CONFIG_PATH, fileText, sha, 'chore(prices): автообновление цен из прайса');
  return report;
}
