# MEMORY: ЭПЛ-КОЛЛЕКЦИЯ — Apple-магазин в Казани

> **Конспект для продолжения в новом чате. Прочитай полностью прежде чем что-то делать.**
> **СТАТУС: система работает целиком — бот → сайт + Telegram + ВК. Доводка по мелочам.**

---

## 🏗️ Инфраструктура

### Сайт
- **Домен:** `эпл-коллекция.рф` (Punycode: `xn----jtbjgbccazg9frdtb.xn--p1ai`)
- **Хостинг:** Timeweb App Platform → `Daring Amalthea` (ID 179693, МСК)
- **NS:** Бегет. **A-запись сайта:** `92.246.76.92` (Timeweb МСК)
- **GitHub:** `vitalmac27-sketch/epl-collecty` ветка `main` (репо ПУБЛИЧНЫЙ — raw читается без токена)
- **Сборка на Timeweb:** `npm run build` (вручную). Директория `/out`

### 🆕 API-поддомен (НАСТРОЕНО — nginx + SSL)
- **`api.эпл-коллекция.рф`** → A-запись `186.246.7.71` (в DNS Бегета)
- nginx + Let's Encrypt (certbot) настроены, работают. Сертификат до 2026-09-01, автопродление. Email: apple.collecty@gmail.com
- Конфиг: `/etc/nginx/sites-available/bu-api` → proxy на `127.0.0.1:3001`
- **CORS:** nginx CORS-заголовки УБРАНЫ. Их ставит Express `cors()` в bot.js = `Access-Control-Allow-Origin: *`. (Если nginx тоже добавит — будет дубль, браузер заблокирует.)
- Проверка: `curl https://api.эпл-коллекция.рф/api/bu-iphone` → JSON

### VPS (бот для б/у)
- **IP:** `186.246.7.71` (Timeweb Cloud, Ubuntu 24.04, 4 ГБ RAM, 50 ГБ диск)
- **На VPS живут (НЕ ТРОГАТЬ):** n8n (Docker, порт 5678) + **комбайн** `/opt/content-machine/` + `gost`-прокси (см. раздел gost)
- **Установлено:** Node 20, PM2, nginx, SQLite
- 🆕 **Безопасность:** установлен `fail2ban` (бан перебора SSH), добавлен swap 2 ГБ (`/swapfile`)
- ⚠️ **Telegram по IPv4 БЛОКИРУЕТ провайдер** (РФ). Бот ходит в Telegram по **IPv6** (в bot.js `dns.setDefaultResultOrder('ipv6first')`). ВК и прочее — по IPv4 норм. Проверка: `curl -6 ... api.telegram.org` = 302, `curl -4 ... api.telegram.org` = таймаут.

### Telegram-бот
- `@AppleCollectBU_bot`, папка `/opt/bu-bot/`, PM2 имя `bu-bot`
- Доступ только Telegram ID `5549559991`

### Telegram-канал
- `@applecollectkazan`, Channel ID `-1003862359021`, бот админ

### 🆕 ВКонтакте — ВАЖНО ПРО ТОКЕН
- Группа `vk.com/apple_collecty`
- **VK_TOKEN в .env ДОЛЖЕН быть ПОЛЬЗОВАТЕЛЬСКИМ, НЕ групповым!**
  - Групповой токен НЕ умеет `photos.getWallUploadServer` → ошибка «Group authorization failed» → фото не грузятся.
  - Пользовательский: аккаунт **Максим (id 302524623, `gold_elabuga`)** — админ группы. Выпущен через Kate Mobile: `https://oauth.vk.com/authorize?client_id=2685278&scope=photos,wall,groups,offline&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1&v=5.199` → токен из `blank.html#access_token=vk1.a...` (бессрочный).
  - **Проверка типа:** `node -e "import('dotenv/config').then(async()=>{const t=process.env.VK_TOKEN;const h=await import('https');h.get('https://api.vk.com/method/account.getProfileInfo?access_token='+t+'&v=5.199',r=>{let d='';r.on('data',c=>d+=c);r.on('end',()=>console.log(d))})})"` → профиль = пользовательский, «group auth» = групповой.

---

## 📦 Бот /opt/bu-bot/
```
bot.js              ← Telegraf бот (JS, не Python!)
text-parser.js      ← Распознавание iPhone из текста
publisher.js        ← Публикация в ТГ-канал + ВК
.env (chmod 600)    ← Токены
photos/{id}/N.jpg   ← Фото
db/database.sqlite  ← listings
```

### .env
```
TELEGRAM_BOT_TOKEN=*** (46 симв)
ALLOWED_USER_ID=5549559991
API_PORT=3001
PHOTOS_PATH=/opt/bu-bot/photos
DB_PATH=/opt/bu-bot/db/database.sqlite
TG_CHANNEL_ID=-1003862359021
SITE_URL=https://xn----jtbjgbccazg9frdtb.xn--p1ai
VK_TOKEN=***   ← ПОЛЬЗОВАТЕЛЬСКИЙ (vk1.a...), см. раздел ВК
VK_GROUP_ID=***
```

### Команды бота
- `/start`, `/help` — справка
- **`/add`** — добавить (фото 1-10 + текст с подписью)
- `/list` — все 🟢🟡🔴
- 🆕 **`/edit <id>`** — изменить цену или описание (кнопки 💰 Цена / 📝 Описание); **обновляет уже опубликованные посты в ТГ и ВК** (editTelegramCaption/editVKPost)
- `/reserve <id>` — 🟡 бронь
- `/sold <id>` — продано (правит посты ТГ/ВК: «🔴 ПРОДАНО», убирает с сайта)
- `/delete <id>` — удалить везде

### 🆕 Формат постов (publisher.js — настроен под эталон)
Шапка одним блоком, потом описание с «воздухом»:
```
📱 Модель • Память • Цвет
🔋 АКБ N%, M циклов
✨ Состояние: ...
💰 ЦЕНА ₽

[вводный текст вместе]

🔥 [длинное предложение — отдельно]

📦 короткий пункт
🔓 короткий пункт
🛡️ короткий пункт

💬 ЭПЛ-КОЛЛЕКЦИЯ Казань · @ac_care
```
- `prettifyDescription`: пустая строка перед эмодзи-пунктом, если предыдущая строка — текст ИЛИ длинное предложение (>45 симв). Короткие пункты-чеклист идут вместе.
- **ТГ — БЕЗ ссылки «🛒 Купить»** (`withSiteLink:false`). **ВК — СО ссылкой.**
- Склонение: 1 цикл / 2 цикла / 5 циклов.

### API (127.0.0.1:3001 — внутренний, наружу через nginx)
- `GET /api/bu-iphone` (active+reserved), `GET /api/bu-iphone/:slug`, `GET /photos/...`

---

## 🌐 Сайт (Next.js 15, output: export — статика)
- Каталог б/у: `/bu-iphone` и `/bu-iphone/item?slug=xxx` — тянут данные с `https://api.эпл-коллекция.рф` (клиентский fetch, не при сборке)
- 🆕 **Мобильное меню:** добавлена вкладка **🔄 Б/У iPhone** в `src/components/layout/Navigation.tsx` (в списке «Доп. страницы» бургер-меню, ~строка 175). На десктопе была в меню «Ещё».
- `src/lib/models.ts` — `priceFrom` (синхронизировать руками с `generated/*-configs.ts`)
- `src/lib/cities.ts` — `namePre: "Казани"` (без «в»)

---

## ✅ Что РАБОТАЕТ (вся система)
- ✅ Бот стабилен, Telegram по IPv6, при сбоях не падает в цикл
- ✅ `/add`, `/list`, `/edit`, `/reserve`, `/sold`, `/delete`
- ✅ Парсер: модель/память/цвет/sim/АКБ/циклы/состояние/цена + чистое описание
- ✅ API наружу по HTTPS (nginx+SSL)
- ✅ Сайт `/bu-iphone` показывает карточки
- ✅ Публикация **🌐 Везде**: Telegram ✓ (IPv6) + ВК ✓ (IPv4, пользовательский токен) + сайт ✓
- ✅ Формат постов как в эталоне, «Доступ запрещён» в канал больше НЕ летит

## ✅ ЗАКРЫТО сегодня (бывшее «не доделано»)
- ✅ nginx + SSL для API
- ✅ `/edit` (цена + описание, с обновлением постов)
- ✅ Чистка описания от мусора («📱 Оригинальный», «Характеристики:», «ГБ», «всего 1 цикл»)
- ✅ Кириллический баг парсера (`\w*` → `[а-яё]*`): «Состояние идеальное» больше не режется
- ✅ Роутинг команд (текст-обработчик не глотал `/list` и др.)

## 🟡 Осталось опционально
- Блок «Б/У iPhone с гарантией» на главной (топ-3)
- Schema.org Product на карточке б/у
- Кнопка «Купить» → Telegram с пометкой `🔄 Б/У #N`

---

## 🚨 КРИТИЧЕСКИ ВАЖНО
1. **n8n + комбайн (`/opt/content-machine`) + gost на VPS — НЕ ТРОГАТЬ** (рабочие процессы)
2. **Большие файлы на VPS — через GitHub `bot-files/` + `curl`.** base64-вставка длинной строки в SSH **ЗАВИСАЕТ** — не использовать. heredoc тоже ломается.
3. **Токены/пароли — не просить в открытом чате.** Класть в .env через SSH самому пользователю
4. **text-parser.js** — прогонять `node text-parser.js` (тесты в конце)
5. **PM2 кэширует окружение:** dotenv НЕ перезаписывает уже заданные переменные. После правки .env (особенно VK_TOKEN) → `unset VK_TOKEN && pm2 delete bu-bot && pm2 start bot.js --name bu-bot && pm2 save` (НЕ просто restart)
6. **НЕ включать Timeweb-фаервол (allow-list) на весь сервер** — он рубит исходящий IPv4 → ломает бота и ВК. Пробовали (группа «Wise Corvus») — отвязали. Блок Telegram-IPv4 — это провайдер, не фаервол.
7. **bot.launch() не должен делать `process.exit` при сбоях** — был crash-loop. Только логировать (`.catch(e => console.error(...))`). IPv6-приоритет обязателен.

## 🔒 gost / комбайн — security (чинить в ЧАТЕ КОМБАЙНА, не здесь)
- На VPS `gost` (systemd `/opt/gost.service`): `gost -L http://0.0.0.0:8080 -F socks5://...@90.156.145.246:62317` — HTTP-прокси, открыт ВСЕМУ интернету без авторизации → чужие гоняют через него трафик (всплески, CPU, расход внешнего SOCKS5). **Это часть комбайна, НЕ взлом.**
- `python /opt/content-machine/tg_image.py` — порт 8888.
- **Фикс (в чате комбайна):** привязать gost к `127.0.0.1` + docker-шлюз (не `0.0.0.0`), не сломав n8n (он в Docker, ему нужен доступ к gost изнутри).

---

## 📂 Deploy bot-files (свежие файлы для VPS)
В репо в папке `bot-files/`: `bot.js`, `text-parser.js`, `publisher.js`. Обновление на VPS:
```bash
cd /opt/bu-bot
curl -fsSL https://raw.githubusercontent.com/vitalmac27-sketch/epl-collecty/main/bot-files/bot.js -o bot.js
curl -fsSL https://raw.githubusercontent.com/vitalmac27-sketch/epl-collecty/main/bot-files/publisher.js -o publisher.js
curl -fsSL https://raw.githubusercontent.com/vitalmac27-sketch/epl-collecty/main/bot-files/text-parser.js -o text-parser.js
node --check bot.js && node --check publisher.js && echo OK
pm2 restart bu-bot && pm2 logs bu-bot --lines 8 --nostream
```

---

## 📍 Точка входа в новый чат
1. **Прочитай файл целиком.** Система РАБОТАЕТ.
2. **Проверка готовности:**
   ```bash
   pm2 list                                            # bu-bot online, ↺ не растёт
   curl -s http://127.0.0.1:3001/api/bu-iphone | head -c 300
   curl https://api.эпл-коллекция.рф/api/bu-iphone     # JSON наружу
   ```
   В боте `/list` — отвечает.
3. **Если бот «не отвечает» / crash-loop:** проверь IPv6 к Telegram (`curl -6 -m8 -o/dev/null -w "%{http_code}" https://api.telegram.org/` = 302); в bot.js должно быть `dns.setDefaultResultOrder('ipv6first')` и launch без `process.exit`.
4. **Если ВК не публикует фото:** VK_TOKEN должен быть ПОЛЬЗОВАТЕЛЬСКИМ (раздел ВК — проверка через account.getProfileInfo).
5. **Если «Доступ запрещён» летит в канал:** в bot.js middleware должно пропускать не-личные чаты (`if (ctx.chat?.type && ctx.chat.type !== 'private') return;`).

---

## История чата
1-9. (ранее) Блог, /skupka-iphone, цены, отказ от парсера Авито, ручной ввод через бот, страницы /bu-iphone.
10. ✅ nginx + Let's Encrypt SSL для `api.эпл-коллекция.рф`, исправлен CORS (убран дубль).
11. ✅ Парсер: фикс кириллицы, чистка описания, склонение циклов, абзацы.
12. ✅ publisher: формат постов (шапка+цена, prettifyDescription), ТГ без ссылки/ВК со ссылкой, editTelegram/VK для /edit.
13. ✅ bot.js: фикс роутинга команд, `/edit`, IPv6-first, без crash-loop, middleware не отвечает в каналы.
14. ✅ ВК: разобрались — нужен ПОЛЬЗОВАТЕЛЬСКИЙ токен (Kate Mobile), групповой не грузит фото. Выпустили, заработало.
15. ✅ Сайт: мобильное меню — вкладка Б/У iPhone.
16. ✅ Сервер: fail2ban + swap. Пробовали Timeweb-фаервол — сломал IPv4, отвязали.
17. ⏳ gost-прокси (8080) открыт наружу — чинить в чате комбайна (привязать к localhost/docker).
