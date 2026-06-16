// bot.js — Telegram бот для управления б/у iPhone
// Менеджер отправляет фото + текст → бот распознаёт → публикует на сайт/ТГ/ВК

import 'dotenv/config';
import { Telegraf, Markup } from 'telegraf';
import Database from 'better-sqlite3';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { parseListingText } from './text-parser.js';
import {
  formatCard,
  publishToTelegram, markTelegramSold, deleteTelegramPost,
  publishToVK, markVKSold, deleteVKPost,
  publishToInstagram,
  editTelegramCaption, editVKPost,
} from './publisher.js';

import dns from 'node:dns';
// Telegram по IPv4 в РФ часто заблокирован провайдером — резолвим с приоритетом IPv6 (он работает)
dns.setDefaultResultOrder('ipv6first');

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const ALLOWED_USER_IDS = (process.env.ALLOWED_USER_IDS || process.env.ALLOWED_USER_ID || '')
  .split(',').map(s => parseInt(s.trim(), 10)).filter(Boolean);
const API_PORT = parseInt(process.env.API_PORT || 3001);
const DB_PATH = process.env.DB_PATH || '/opt/bu-bot/db/database.sqlite';
const PHOTOS_PATH = process.env.PHOTOS_PATH || '/opt/bu-bot/photos';

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');

// Миграция БД — добавляем поля для message_id и tg/vk
const columns = db.prepare("PRAGMA table_info(listings)").all().map(c => c.name);
const ensureColumn = (name, type) => {
  if (!columns.includes(name)) {
    db.prepare(`ALTER TABLE listings ADD COLUMN ${name} ${type}`).run();
    console.log(`[db] добавлена колонка ${name}`);
  }
};
ensureColumn('sim_type', 'TEXT');
ensureColumn('cycles', 'INTEGER');
ensureColumn('tg_message_id', 'INTEGER');
ensureColumn('vk_post_id', 'INTEGER');
ensureColumn('ig_post_id', 'TEXT');

const bot = new Telegraf(BOT_TOKEN);

// Только разрешённый пользователь
bot.use((ctx, next) => {
  // На посты в каналах/группах не реагируем — отвечаем только в личке
  if (ctx.chat?.type && ctx.chat.type !== 'private') return;
  if (!ALLOWED_USER_IDS.includes(ctx.from?.id)) {
    console.log(`[bot] Доступ запрещён: ${ctx.from?.id}`);
    return ctx.reply('🚫 Доступ запрещён');
  }
  return next();
});

// === Состояние пользователя (для пошагового добавления) ===
// Простое in-memory хранилище. При перезапуске бот забывает незавершённые добавления.
const userState = {};

function slugify(text) {
  const map = {а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'e',ж:'zh',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'h',ц:'ts',ч:'ch',ш:'sh',щ:'sch',ъ:'',ы:'y',ь:'',э:'e',ю:'yu',я:'ya'};
  return text.toLowerCase().split('').map(c => map[c] !== undefined ? map[c] : c).join('')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
}

function formatPreview(parsed) {
  const lines = [];
  lines.push('📱 ' + (parsed.model || '❓ модель не указана'));
  if (parsed.storage) lines.push(`💾 ${parsed.storage}` + (parsed.color ? ` · ${parsed.color}` : ''));
  if (parsed.simType) lines.push(`📶 ${parsed.simType}`);
  if (parsed.battery) lines.push(`🔋 АКБ ${parsed.battery}%${parsed.cycles ? `, ${parsed.cycles} циклов` : ''}`);
  if (parsed.condition) lines.push(`✨ ${parsed.condition}`);
  if (parsed.price) lines.push(`💰 ${parsed.price.toLocaleString('ru-RU')} ₽`);
  else lines.push(`💰 ❓ цена не указана`);
  if (parsed.description) {
    lines.push('');
    lines.push('📝 ' + parsed.description.slice(0, 200) + (parsed.description.length > 200 ? '…' : ''));
  }
  return lines.join('\n');
}

// === Обновление уже опубликованных постов (после правки цены/описания) ===
async function refreshPosts(id) {
  const row = db.prepare('SELECT * FROM listings WHERE id = ?').get(id);
  if (!row) return;
  if (row.tg_message_id) await editTelegramCaption(row.tg_message_id, row);
  if (row.vk_post_id) await editVKPost(row.vk_post_id, row);
}

// === Скачивание фото из Telegram ===
async function downloadTelegramPhoto(fileId, savePath) {
  // Получаем file_path
  const fileRes = await axios.get(
    `https://api.telegram.org/bot${BOT_TOKEN}/getFile`,
    { params: { file_id: fileId }, timeout: 15000 }
  );
  if (!fileRes.data.ok) throw new Error('getFile failed');
  const filePath = fileRes.data.result.file_path;

  // Скачиваем
  const fileUrl = `https://api.telegram.org/file/bot${BOT_TOKEN}/${filePath}`;
  const resp = await axios.get(fileUrl, { responseType: 'arraybuffer', timeout: 30000 });
  fs.writeFileSync(savePath, Buffer.from(resp.data));
  return savePath;
}

// === Команды ===

bot.start((ctx) => ctx.reply(
  '🤖 Бот выкупа б/у iPhone\n\n' +
  '/add — добавить новое объявление\n' +
  '   (отправьте фото + текст с характеристиками)\n\n' +
  '/list — все объявления\n' +
  '/edit <id> — изменить цену или описание\n' +
  '/reserve <id> — пометить «Бронь»\n' +
  '/sold <id> — продано\n' +
  '/delete <id> — удалить\n' +
  '/help — справка'
));

bot.help((ctx) => ctx.reply(
  '📚 Как добавить объявление:\n\n' +
  '1. Отправьте /add\n' +
  '2. Затем фото (1-10 шт) с подписью:\n\n' +
  '```\niPhone 17 Pro 512 Orange Sim+eSim\nАКБ 100%, 35 циклов\nИдеал\n101900\nВ комплекте коробка и кабель\n```\n\n' +
  'Бот разберёт текст и предложит опубликовать.\n\n' +
  'Управление: /list — список, /edit <id> — правка цены/описания,\n' +
  '/reserve <id>, /sold <id>, /delete <id>\n\n' +
  '🟢 Активно · 🟡 Резерв · 🔴 Продано',
  { parse_mode: 'Markdown' }
));

bot.command('add', (ctx) => {
  userState[ctx.from.id] = { mode: 'waiting_for_photos', photos: [], albumId: null, timer: null };
  ctx.reply(
    '📸 Отправьте фото iPhone (1-10 шт) с подписью.\n\n' +
    'Пример подписи:\n' +
    `<code>iPhone 17 Pro 512 Orange Sim+eSim\nАКБ 100%, 35 циклов\nИдеал\n101900\nВ комплекте коробка и кабель</code>\n\n` +
    'Цена обязательна — без неё карточка не создастся.',
    { parse_mode: 'HTML' }
  );
});

// === Обработка фото (одиночное или альбом) ===
bot.on('photo', async (ctx) => {
  const userId = ctx.from.id;
  const state = userState[userId];
  if (!state || state.mode !== 'waiting_for_photos') {
    return ctx.reply('Сначала отправьте /add');
  }

  const photo = ctx.message.photo[ctx.message.photo.length - 1]; // самое большое
  const caption = ctx.message.caption || '';
  const mediaGroupId = ctx.message.media_group_id;

  // Сохраняем фото
  state.photos.push({ fileId: photo.file_id, caption, mediaGroupId });

  // Если это альбом — собираем все фото за 2 секунды, потом обрабатываем
  if (mediaGroupId) {
    state.albumId = mediaGroupId;
    if (state.timer) clearTimeout(state.timer);
    state.timer = setTimeout(() => processNewListing(ctx, userId), 1500);
  } else {
    // Одиночное фото — обрабатываем сразу
    processNewListing(ctx, userId);
  }
});

bot.on('text', async (ctx, next) => {
  // Пропускаем команды — отдаём управление обработчикам команд ниже
  if (ctx.message.text.startsWith('/')) return next();

  const state = userState[ctx.from.id];

  // Изменение цены при создании (кнопка ✏️ на превью)
  if (state && state.mode === 'edit_price' && state.listingId) {
    const newPrice = parseInt(ctx.message.text.replace(/\D/g, ''));
    if (!newPrice || newPrice < 10000 || newPrice > 500000) {
      return ctx.reply('❌ Введите цену числом (например: 95000)');
    }
    db.prepare('UPDATE listings SET price = ? WHERE id = ?').run(newPrice, state.listingId);
    delete userState[ctx.from.id];
    ctx.reply(`✅ Цена изменена на ${newPrice.toLocaleString('ru-RU')} ₽`);
    return;
  }

  // Редактирование цены существующего объявления (/edit → 💰 Цена)
  if (state && state.mode === 'editing_price' && state.listingId) {
    const id = state.listingId;
    const newPrice = parseInt(ctx.message.text.replace(/\D/g, ''));
    if (!newPrice || newPrice < 10000 || newPrice > 500000) {
      return ctx.reply('❌ Введите цену числом (например: 95000)');
    }
    db.prepare('UPDATE listings SET price = ? WHERE id = ?').run(newPrice, id);
    delete userState[ctx.from.id];
    await ctx.reply(`✅ Цена #${id} изменена на ${newPrice.toLocaleString('ru-RU')} ₽. Обновляю посты…`);
    await refreshPosts(id);
    return ctx.reply('🔄 Посты в Telegram и ВК обновлены (если были опубликованы).');
  }

  // Редактирование описания существующего объявления (/edit → 📝 Описание)
  if (state && state.mode === 'editing_desc' && state.listingId) {
    const id = state.listingId;
    const newDesc = ctx.message.text.trim();
    if (newDesc.length < 3) {
      return ctx.reply('❌ Слишком короткое описание. Отправьте текст ещё раз.');
    }
    db.prepare('UPDATE listings SET description = ? WHERE id = ?').run(newDesc, id);
    delete userState[ctx.from.id];
    await ctx.reply(`✅ Описание #${id} обновлено. Обновляю посты…`);
    await refreshPosts(id);
    return ctx.reply('🔄 Посты в Telegram и ВК обновлены (если были опубликованы).');
  }

  // Если просто текст без контекста — игнорируем
});

async function processNewListing(ctx, userId) {
  const state = userState[userId];
  if (!state || state.photos.length === 0) return;

  // Берём подпись из первого фото с подписью
  const captionedPhoto = state.photos.find(p => p.caption) || state.photos[0];
  const text = captionedPhoto.caption;

  if (!text || text.trim().length < 10) {
    delete userState[userId];
    return ctx.reply('❌ Не хватает текста с характеристиками. Отправьте /add и приложите фото с подписью.');
  }

  const parsed = parseListingText(text);

  if (parsed.errors && parsed.errors.length > 0) {
    delete userState[userId];
    return ctx.reply(`❌ Не удалось разобрать:\n• ${parsed.errors.join('\n• ')}\n\nПопробуйте ещё раз /add`);
  }

  // Создаём запись в БД со статусом pending — фото скачаем сейчас
  const stmt = db.prepare(`INSERT INTO listings
    (avito_id, title, model, storage, color, sim_type, battery, cycles, condition, price, description, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`);

  const fakeAvitoId = `manual_${Date.now()}`;
  const titleParts = [parsed.model];
  if (parsed.storage) titleParts.push(parsed.storage);
  if (parsed.color) titleParts.push(parsed.color);
  const title = titleParts.join(' · ');

  const result = stmt.run(
    fakeAvitoId, title, parsed.model, parsed.storage, parsed.color,
    parsed.simType, parsed.battery, parsed.cycles, parsed.condition,
    parsed.price, parsed.description,
  );
  const listingId = result.lastInsertRowid;

  const slug = slugify(title) + `-${listingId}`;
  db.prepare('UPDATE listings SET slug = ? WHERE id = ?').run(slug, listingId);

  // Скачиваем фото из Telegram
  await ctx.reply(`⏳ Скачиваю ${state.photos.length} фото...`);

  const dir = path.join(PHOTOS_PATH, String(listingId));
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const localPaths = [];

  for (let i = 0; i < state.photos.length; i++) {
    try {
      const savePath = path.join(dir, `${i + 1}.jpg`);
      await downloadTelegramPhoto(state.photos[i].fileId, savePath);
      const stats = fs.statSync(savePath);
      console.log(`[bot] Фото ${i+1}: ${(stats.size / 1024).toFixed(1)} КБ`);
      localPaths.push(`/photos/${listingId}/${i + 1}.jpg`);
    } catch (e) {
      console.error(`[bot] Не удалось скачать фото ${i+1}:`, e.message);
    }
  }

  db.prepare('UPDATE listings SET photos = ? WHERE id = ?')
    .run(JSON.stringify(localPaths), listingId);

  // Сохраняем фото в state для публикации
  state.localPhotoPaths = localPaths.map(p => path.join(PHOTOS_PATH, p.replace('/photos/', '')));
  state.listingId = listingId;
  state.parsed = { ...parsed, slug };
  state.mode = 'waiting_for_confirm';

  // Показываем превью и кнопки
  await ctx.reply(
    '📋 Карточка готова:\n\n' + formatPreview({ ...parsed, slug }) +
    `\n\n📸 Фото: ${localPaths.length} шт\n🔗 URL: /bu-iphone/${slug}`,
    Markup.inlineKeyboard([
      [Markup.button.callback('🟢 Только сайт', `pub_site_${listingId}`)],
      [Markup.button.callback('📢 Сайт + Telegram', `pub_tg_${listingId}`)],
      [Markup.button.callback('🌐 Везде (Сайт + ТГ + ВК + IG)', `pub_all_${listingId}`)],
      [Markup.button.callback('✏️ Изменить цену', `editprice_${listingId}`),
       Markup.button.callback('❌ Отмена', `cancel_${listingId}`)],
    ])
  );
}

// === Кнопки публикации ===

bot.action(/^pub_site_(\d+)$/, async (ctx) => {
  const id = parseInt(ctx.match[1]);
  db.prepare("UPDATE listings SET status = 'active' WHERE id = ?").run(id);
  delete userState[ctx.from.id];
  await ctx.editMessageText(`✅ #${id} опубликован на сайте`);
  ctx.answerCbQuery('На сайте!');
});

bot.action(/^pub_tg_(\d+)$/, async (ctx) => {
  const id = parseInt(ctx.match[1]);
  await ctx.answerCbQuery('Публикую в Telegram-канал...');

  const row = db.prepare('SELECT * FROM listings WHERE id = ?').get(id);
  row.photos = JSON.parse(row.photos || '[]');
  const localPaths = row.photos.map(p => path.join(PHOTOS_PATH, p.replace('/photos/', '')));

  try {
    const tg = await publishToTelegram(row, localPaths);
    db.prepare("UPDATE listings SET status = 'active', tg_message_id = ? WHERE id = ?").run(tg.message_id, id);
    await ctx.editMessageText(`✅ #${id} опубликован:\n• Сайт ✓\n• Telegram ✓ (msg ${tg.message_id})`);
  } catch (e) {
    db.prepare("UPDATE listings SET status = 'active' WHERE id = ?").run(id);
    await ctx.editMessageText(`⚠️ #${id} на сайте, но в Telegram ошибка:\n${e.message}`);
  }

  delete userState[ctx.from.id];
});

bot.action(/^pub_all_(\d+)$/, async (ctx) => {
  const id = parseInt(ctx.match[1]);
  await ctx.answerCbQuery('Публикую везде...');

  const row = db.prepare('SELECT * FROM listings WHERE id = ?').get(id);
  row.photos = JSON.parse(row.photos || '[]');
  const localPaths = row.photos.map(p => path.join(PHOTOS_PATH, p.replace('/photos/', '')));

  const results = [];

  // Telegram
  try {
    const tg = await publishToTelegram(row, localPaths);
    db.prepare('UPDATE listings SET tg_message_id = ? WHERE id = ?').run(tg.message_id, id);
    results.push('• Telegram ✓');
  } catch (e) {
    results.push(`• Telegram ✗ (${e.message})`);
  }

  // VK
  try {
    const vk = await publishToVK(row, localPaths);
    db.prepare('UPDATE listings SET vk_post_id = ? WHERE id = ?').run(vk.post_id, id);
    results.push('• ВКонтакте ✓');
  } catch (e) {
    results.push(`• ВКонтакте ✗ (${e.message})`);
  }

  // Instagram (через Zernio)
  try {
    const ig = await publishToInstagram(row, localPaths);
    db.prepare('UPDATE listings SET ig_post_id = ? WHERE id = ?').run(ig.post_id, id);
    results.push('• Instagram ✓');
  } catch (e) {
    results.push(`• Instagram ✗ (${e.message})`);
  }

  db.prepare("UPDATE listings SET status = 'active' WHERE id = ?").run(id);
  await ctx.editMessageText(`✅ #${id} опубликован:\n• Сайт ✓\n${results.join('\n')}`);
  delete userState[ctx.from.id];
});

bot.action(/^cancel_(\d+)$/, async (ctx) => {
  const id = parseInt(ctx.match[1]);
  // Удаляем запись и фото
  db.prepare('DELETE FROM listings WHERE id = ?').run(id);
  const dir = path.join(PHOTOS_PATH, String(id));
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  delete userState[ctx.from.id];
  await ctx.editMessageText(`❌ #${id} отменён, фото удалены`);
  ctx.answerCbQuery();
});

bot.action(/^editprice_(\d+)$/, (ctx) => {
  const id = parseInt(ctx.match[1]);
  userState[ctx.from.id] = { mode: 'edit_price', listingId: id };
  ctx.answerCbQuery();
  ctx.reply(`Введите новую цену для #${id} (только число, например: 95000)`);
});

// === Управление существующими ===

bot.command('list', (ctx) => {
  const rows = db.prepare(
    `SELECT id, title, price, status FROM listings
     WHERE status != 'deleted' AND status != 'pending'
     ORDER BY id DESC LIMIT 30`
  ).all();
  if (rows.length === 0) return ctx.reply('📭 Пусто. Добавьте через /add');

  const lines = rows.map(r => {
    const icon = r.status === 'active' ? '🟢' : (r.status === 'sold' ? '🔴' : (r.status === 'reserved' ? '🟡' : '⚪'));
    return `${icon} #${r.id} ${r.title.slice(0, 50)} — ${r.price.toLocaleString('ru-RU')} ₽`;
  });

  ctx.reply(`📋 Всего: ${rows.length}\n\n${lines.join('\n')}`);
});

// === Редактирование цены/описания существующего объявления ===
bot.command('edit', (ctx) => {
  const id = parseInt(ctx.message.text.replace('/edit', '').trim());
  if (!id) return ctx.reply('Укажите ID: /edit 5');
  const row = db.prepare('SELECT id, title, price FROM listings WHERE id = ?').get(id);
  if (!row) return ctx.reply(`❌ #${id} не найден`);
  ctx.reply(
    `✏️ Что изменить у #${id}?\n${row.title} — ${row.price.toLocaleString('ru-RU')} ₽`,
    Markup.inlineKeyboard([
      [Markup.button.callback('💰 Цена', `edit_price_${id}`)],
      [Markup.button.callback('📝 Описание', `edit_desc_${id}`)],
      [Markup.button.callback('❌ Отмена', `edit_cancel_${id}`)],
    ])
  );
});

bot.action(/^edit_price_(\d+)$/, (ctx) => {
  const id = parseInt(ctx.match[1]);
  userState[ctx.from.id] = { mode: 'editing_price', listingId: id };
  ctx.answerCbQuery();
  ctx.reply(`Введите новую цену для #${id} (только число, например: 95000):`);
});

bot.action(/^edit_desc_(\d+)$/, (ctx) => {
  const id = parseInt(ctx.match[1]);
  userState[ctx.from.id] = { mode: 'editing_desc', listingId: id };
  ctx.answerCbQuery();
  ctx.reply(`Отправьте новое описание для #${id} одним сообщением (можно в несколько строк):`);
});

bot.action(/^edit_cancel_(\d+)$/, async (ctx) => {
  delete userState[ctx.from.id];
  await ctx.answerCbQuery('Отменено');
  await ctx.editMessageText('❌ Редактирование отменено');
});

bot.command('reserve', (ctx) => {
  const id = parseInt(ctx.message.text.replace('/reserve', '').trim());
  if (!id) return ctx.reply('Укажите ID: /reserve 5');
  const r = db.prepare("UPDATE listings SET status = 'reserved' WHERE id = ?").run(id);
  ctx.reply(r.changes ? `🟡 #${id} в резерве` : `❌ #${id} не найден`);
});

bot.command('sold', async (ctx) => {
  const id = parseInt(ctx.message.text.replace('/sold', '').trim());
  if (!id) return ctx.reply('Укажите ID: /sold 5');

  const row = db.prepare('SELECT * FROM listings WHERE id = ?').get(id);
  if (!row) return ctx.reply(`❌ #${id} не найден`);

  // Помечаем продано
  db.prepare("UPDATE listings SET status = 'sold' WHERE id = ?").run(id);

  // Редактируем посты в Telegram и ВК
  if (row.tg_message_id) {
    await markTelegramSold(row.tg_message_id, row);
  }
  if (row.vk_post_id) {
    await markVKSold(row.vk_post_id, row);
  }

  ctx.reply(`🔴 #${id} помечен проданным`);
});

bot.command('delete', async (ctx) => {
  const id = parseInt(ctx.message.text.replace('/delete', '').trim());
  if (!id) return ctx.reply('Укажите ID: /delete 5');

  const row = db.prepare('SELECT * FROM listings WHERE id = ?').get(id);
  if (!row) return ctx.reply(`❌ #${id} не найден`);

  if (row.tg_message_id) await deleteTelegramPost(row.tg_message_id);
  if (row.vk_post_id) await deleteVKPost(row.vk_post_id);

  db.prepare("UPDATE listings SET status = 'deleted' WHERE id = ?").run(id);
  ctx.reply(`🗑 #${id} удалён везде`);
});

// === API для сайта ===

const app = express();
app.use(cors());
app.use('/photos', express.static(PHOTOS_PATH));

app.get('/api/bu-iphone', (req, res) => {
  const rows = db.prepare(
    `SELECT id, slug, title, model, storage, color, sim_type, battery, cycles, condition, price, description, photos, status, created_at
     FROM listings WHERE status IN ('active', 'reserved') ORDER BY created_at DESC`
  ).all();
  const data = rows.map(r => ({ ...r, photos: JSON.parse(r.photos || '[]') }));
  res.json({ count: data.length, items: data });
});

app.get('/api/bu-iphone/:slug', (req, res) => {
  const row = db.prepare(
    `SELECT * FROM listings WHERE slug = ? AND status IN ('active', 'reserved')`
  ).get(req.params.slug);
  if (!row) return res.status(404).json({ error: 'Not found' });
  row.photos = JSON.parse(row.photos || '[]');
  res.json(row);
});

app.listen(API_PORT, '127.0.0.1', () => {
  console.log(`[api] Listening on http://127.0.0.1:${API_PORT}`);
});

bot.launch()
  .then(() => console.log('[bot] Started'))
  .catch((e) => console.error('[bot] launch error (продолжаем работу):', e.message));
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
