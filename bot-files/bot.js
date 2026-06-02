import 'dotenv/config';
import { Telegraf, Markup } from 'telegraf';
import Database from 'better-sqlite3';
import express from 'express';
import cors from 'cors';
import { parseAndDownload } from './parser.js';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const ALLOWED_USER_ID = parseInt(process.env.ALLOWED_USER_ID);
const API_PORT = parseInt(process.env.API_PORT || 3001);
const DB_PATH = process.env.DB_PATH || '/opt/bu-bot/db/database.sqlite';

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');

const bot = new Telegraf(BOT_TOKEN);

bot.use((ctx, next) => {
  if (ctx.from?.id !== ALLOWED_USER_ID) {
    console.log(`[bot] Доступ запрещён: ${ctx.from?.id}`);
    return ctx.reply('🚫 Доступ запрещён');
  }
  return next();
});

function slugify(text) {
  const map = {а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'e',ж:'zh',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'h',ц:'ts',ч:'ch',ш:'sh',щ:'sch',ъ:'',ы:'y',ь:'',э:'e',ю:'yu',я:'ya'};
  return text.toLowerCase()
    .split('').map(c => map[c] !== undefined ? map[c] : c).join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

bot.start((ctx) => ctx.reply(
  '🤖 Бот выкупа б/у iPhone\n\n' +
  '/import <ссылка> — добавить с Авито\n' +
  '/list — все объявления на сайте\n' +
  '/sold <id> — пометить проданным\n' +
  '/delete <id> — удалить полностью\n' +
  '/help — справка'
));

bot.help((ctx) => ctx.reply(
  '📚 Справка\n\n' +
  '/import https://avito.ru/... — парсит и добавляет\n' +
  '/list — все активные\n' +
  '/sold 5 — пометить #5 проданным\n' +
  '/delete 5 — удалить #5 полностью'
));

bot.command('import', async (ctx) => {
  const text = ctx.message.text.replace('/import', '').trim();
  if (!text || !text.includes('avito.ru')) {
    return ctx.reply('❌ Укажите ссылку: /import https://avito.ru/...');
  }

  const msg = await ctx.reply('⏳ Парсю объявление с Авито... (30-60 сек)');

  try {
    const tempAvitoId = 'temp_' + Date.now();
    const reserved = db.prepare(
      `INSERT INTO listings (avito_id, title, price, status) VALUES (?, '', 0, 'pending') RETURNING id`
    ).get(tempAvitoId);
    const reservedId = reserved.id;

    const data = await parseAndDownload(text, reservedId);

    if (!data.title || !data.price) {
      db.prepare('DELETE FROM listings WHERE id = ?').run(reservedId);
      await ctx.telegram.editMessageText(msg.chat.id, msg.message_id, undefined,
        '❌ Не удалось получить данные. Попробуйте ещё раз.');
      return;
    }

    const existing = db.prepare('SELECT id FROM listings WHERE avito_id = ? AND id != ?').get(data.avitoId, reservedId);
    if (existing) {
      db.prepare('DELETE FROM listings WHERE id = ?').run(reservedId);
      return ctx.telegram.editMessageText(msg.chat.id, msg.message_id, undefined,
        `⚠️ Уже добавлено как #${existing.id}`);
    }

    const slug = slugify(`${data.title}-${data.avitoId}`);

    db.prepare(`UPDATE listings SET
      avito_id=?, avito_url=?, slug=?, title=?, model=?, storage=?, color=?,
      battery=?, condition=?, price=?, description=?, photos=?, status='active'
      WHERE id=?`).run(
      data.avitoId, data.avitoUrl, slug, data.title,
      data.model, data.storage, data.color, data.battery, data.condition,
      data.price, data.description, JSON.stringify(data.photos),
      reservedId
    );

    const preview = [
      `✅ Добавлено #${reservedId}`,
      ``,
      `📱 ${data.title}`,
      `💰 ${data.price.toLocaleString('ru-RU')} ₽`,
      data.model && `Модель: ${data.model}`,
      data.storage && `Память: ${data.storage}`,
      data.color && `Цвет: ${data.color}`,
      data.battery && `АКБ: ${data.battery}%`,
      data.condition && `Состояние: ${data.condition}`,
      ``,
      `📸 Фото: ${data.photos.length} шт`,
      ``,
      `Будет на сайте: /bu-iphone/${slug}`,
    ].filter(Boolean).join('\n');

    await ctx.telegram.editMessageText(msg.chat.id, msg.message_id, undefined, preview);
    await ctx.reply('Управление:', Markup.inlineKeyboard([
      [Markup.button.callback('🗑 Удалить', `delete_${reservedId}`)],
    ]));

  } catch (err) {
    console.error('[bot] /import error:', err);
    await ctx.telegram.editMessageText(msg.chat.id, msg.message_id, undefined,
      `❌ Ошибка: ${err.message}`);
  }
});

bot.command('list', (ctx) => {
  const rows = db.prepare(
    `SELECT id, title, price, status FROM listings WHERE status != 'deleted' ORDER BY id DESC LIMIT 30`
  ).all();
  if (rows.length === 0) return ctx.reply('📭 Пусто. Добавьте через /import');

  const lines = rows.map(r => {
    const icon = r.status === 'active' ? '🟢' : (r.status === 'sold' ? '🔴' : '⚪');
    return `${icon} #${r.id} ${r.title.slice(0, 50)} — ${r.price.toLocaleString('ru-RU')} ₽`;
  });

  ctx.reply(`📋 Всего: ${rows.length}\n\n${lines.join('\n')}`);
});

bot.command('sold', (ctx) => {
  const id = parseInt(ctx.message.text.replace('/sold', '').trim());
  if (!id) return ctx.reply('Укажите ID: /sold 5');
  const r = db.prepare('UPDATE listings SET status = ? WHERE id = ?').run('sold', id);
  ctx.reply(r.changes ? `✅ #${id} помечен проданным` : `❌ #${id} не найден`);
});

bot.command('delete', (ctx) => {
  const id = parseInt(ctx.message.text.replace('/delete', '').trim());
  if (!id) return ctx.reply('Укажите ID: /delete 5');
  const r = db.prepare('UPDATE listings SET status = ? WHERE id = ?').run('deleted', id);
  ctx.reply(r.changes ? `🗑 #${id} удалён` : `❌ #${id} не найден`);
});

bot.action(/^delete_(\d+)$/, (ctx) => {
  const id = parseInt(ctx.match[1]);
  db.prepare('UPDATE listings SET status = ? WHERE id = ?').run('deleted', id);
  ctx.editMessageText(`🗑 #${id} удалён с сайта`);
  ctx.answerCbQuery();
});

const app = express();
app.use(cors());
app.use('/photos', express.static('/opt/bu-bot/photos'));

app.get('/api/bu-iphone', (req, res) => {
  const rows = db.prepare(
    `SELECT id, slug, title, model, storage, color, battery, condition, price, description, photos, created_at
     FROM listings WHERE status = 'active' ORDER BY created_at DESC`
  ).all();

  const data = rows.map(r => ({ ...r, photos: JSON.parse(r.photos || '[]') }));
  res.json({ count: data.length, items: data });
});

app.get('/api/bu-iphone/:slug', (req, res) => {
  const row = db.prepare(
    `SELECT * FROM listings WHERE slug = ? AND status = 'active'`
  ).get(req.params.slug);
  if (!row) return res.status(404).json({ error: 'Not found' });
  row.photos = JSON.parse(row.photos || '[]');
  res.json(row);
});

app.listen(API_PORT, '127.0.0.1', () => {
  console.log(`[api] Listening on http://127.0.0.1:${API_PORT}`);
});

bot.launch().then(() => console.log('[bot] Started'));
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
