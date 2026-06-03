# MEMORY: ЭПЛ-КОЛЛЕКЦИЯ — Apple-магазин в Казани

> **Конспект для продолжения в новом чате. Прочитай полностью прежде чем что-то делать.**

---

## 🏗️ Инфраструктура

### Сайт
- **Домен:** `эпл-коллекция.рф` (Punycode: `xn----jtbjgbccazg9frdtb.xn--p1ai`)
- **Хостинг:** Timeweb App Platform → `Daring Amalthea` (ID 179693, МСК)
- **NS:** Бегет (вернули с Timeweb из-за SSL-проблем)
- **A-запись:** `92.246.76.92` (Timeweb МСК) — в DNS Бегета
- **GitHub:** `vitalmac27-sketch/epl-collecty` ветка `main`
- **Token:** в `~/.git-credentials` пользователя или попросить заново
- **Команда сборки на Timeweb:** `npm run build` (вводить вручную)
- **Директория сборки:** `/out`
- **Последний коммит:** `a70913b` — каталог /bu-iphone

### VPS (бот для б/у)
- **IP:** `186.246.7.71` (Timeweb Cloud MSK 50)
- **ОС:** Ubuntu 24.04, 4 ГБ RAM, 50 ГБ диск
- **На VPS живёт:** n8n (~1 ГБ RAM, чужой процесс — не трогать)
- **Установлено:** Node.js 20, npm 10, PM2 7, nginx 1.24, SQLite 3.45
- **⚠️ SSH-пароль и токен бота были засвечены в чате — пользователь сменил**

### Telegram-бот
- **Username:** `@AppleCollectBU_bot`
- **Папка:** `/opt/bu-bot/`
- **PM2:** имя `bu-bot`, online, ~20 МБ RAM
- **Доступ:** только Telegram ID `5549559991`

### Telegram-канал
- **Username:** `@applecollectkazan`
- **Channel ID:** `-1003862359021`
- Бот добавлен админом (публиковать/редактировать/удалять)

### ВКонтакте
- **Группа:** `vk.com/apple_collecty`
- VK_TOKEN и VK_GROUP_ID — в `/opt/bu-bot/.env`

### Cloudflare Worker (для форм с сайта в Telegram)
- **URL:** `https://black-tree-eb8a.vitalmac27.workers.dev`
- Account ID: `3f9cc490e275adb8bbd0c71c70dc9733`

---

## 📦 Бот на VPS — что сейчас работает

### Файлы /opt/bu-bot/
```
bot.js              ← Telegraf бот
text-parser.js      ← Распознавание iPhone из текста
publisher.js        ← Публикация в ТГ-канал + ВК
.env (chmod 600)    ← Все токены
photos/{id}/N.jpg   ← Скачанные фото (~100 КБ каждое)
db/database.sqlite  ← Таблица listings
```

### .env содержит:
```
TELEGRAM_BOT_TOKEN=*** (46 символов)
ALLOWED_USER_ID=5549559991
API_PORT=3001
PHOTOS_PATH=/opt/bu-bot/photos
DB_PATH=/opt/bu-bot/db/database.sqlite
TG_CHANNEL_ID=-1003862359021
SITE_URL=https://xn----jtbjgbccazg9frdtb.xn--p1ai
VK_TOKEN=***
VK_GROUP_ID=***
# Прокси (можно удалить — не используются):
PROXY_HOST=fhh5sv727n.cn.fxdx.in
PROXY_PORT=13819
PROXY_USER=boundlessmarble013926
PROXY_PASS=1D9kV7aMf4xF
```

### БД listings
```sql
CREATE TABLE listings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  avito_id TEXT UNIQUE,           -- "manual_TIMESTAMP" (Авито больше не парсим)
  avito_url TEXT,                 -- не используется
  slug TEXT UNIQUE,
  title TEXT NOT NULL,
  model TEXT, storage TEXT, color TEXT,
  sim_type TEXT,
  battery INTEGER, cycles INTEGER,
  condition TEXT,
  price INTEGER NOT NULL,
  description TEXT,
  photos TEXT,                    -- JSON массив /photos/{id}/N.jpg
  status TEXT DEFAULT 'pending',  -- pending/active/reserved/sold/deleted
  tg_message_id INTEGER,
  vk_post_id INTEGER,
  created_at, updated_at
);
```

### Команды бота
- `/start`, `/help` — справка
- **`/add`** — добавить (фото+текст с подписью)
- `/list` — все 🟢🟡🔴
- `/reserve <id>` — пометить 🟡 «Бронь»
- `/sold <id>` — продано: редактирует посты в ТГ и ВК, дописывая «🔴 ПРОДАНО»
- `/delete <id>` — удалить везде

### Логика /add
1. Менеджер: `/add` → бот ждёт фото
2. Менеджер шлёт 1-6 фото альбомом с подписью к первому:
   ```
   iPhone 17 Pro 512 Orange Sim+eSim
   АКБ 100%, 35 циклов
   Идеал
   101900
   В комплекте коробка и кабель
   ```
3. `text-parser.js` распознаёт характеристики
4. Фото скачиваются из Telegram API (~100 КБ каждое)
5. Превью + 4 кнопки:
   - 🟢 Только сайт
   - 📢 Сайт + Telegram
   - 🌐 Везде (Сайт + ТГ + ВК)
   - ✏️ Изменить цену / ❌ Отмена

### API (на 127.0.0.1:3001 — ВНУТРЕННИЙ, наружу не торчит!)
- `GET /api/bu-iphone` — список active+reserved
- `GET /api/bu-iphone/:slug` — одно объявление
- `GET /photos/{id}/{n}.jpg` — статика фото

---

## 🌐 Сайт (Next.js 15 + TypeScript + Tailwind + shadcn/ui)

### Структура
- `output: export` — статика
- ~120 страниц: главная, 9 категорий, 84+ карточки моделей, блог, about, contacts
- 9 категорий: iphone, ipad, macbook, watch, airpods, android, dyson, audio, playstation
- 3 статьи блога: проверка б/у, настройка камеры, оптимизация АКБ iOS 26

### Главная (SEO)
- **Title (61):** `Купить Айфон в Казани выгодно — в рассрочку 0% | ЭПЛ-КОЛЛЕКЦИЯ`
- **Description (159):** `Купить Айфон в Казани в магазине ЭПЛ-КОЛЛЕКЦИЯ. iPhone 13–17 с гарантией 1 год, в рассрочку 0% на 12 мес, Trade-in, бесплатная доставка по Казани в день заказа.`
- **H1:** `Купить Айфон в Казани выгодно, в рассрочку`

### Цены (после -7000 Pro / -5000 обычные)
| Модель | Цена от |
|--------|---------|
| iPhone 17 Pro Max | 101 900 ₽ |
| iPhone 17 Pro | 94 300 ₽ |
| iPhone 17 | 61 000 ₽ |
| iPhone 16 Pro Max | 87 000 ₽ |
| iPhone 16 | 52 500 ₽ |
| iPhone 16e | 42 000 ₽ |
| iPhone 15 | 47 000 ₽ |
| iPad 11 (2025) | 31 000 ₽ |
| MacBook Air 13 M5 | 95 000 ₽ |
| Mac mini M4 | 54 000 ₽ |

### Страницы каталога б/у (НОВЫЕ — добавлены в этом чате)
- **`/bu-iphone`** — каталог с фильтрами модель/состояние
- **`/bu-iphone/item?slug=xxx`** — карточка устройства (используется query-параметр т.к. сайт статика)
- Данные подгружаются с VPS через `https://api.эпл-коллекция.рф`

### Ключевые файлы сайта
- `src/lib/bu-api.ts` — клиент API на VPS
- `src/lib/proxy.ts` — Cloudflare Worker URL
- `src/lib/cities.ts` — `namePre: "Казани"` (БЕЗ "в", добавлять явно)
- `src/lib/models.ts` — `priceFrom` (синхронизировать руками!)
- `src/lib/generated/*-configs.ts` — генерируется парсером прайса
- `src/components/bu-iphone/BuCard.tsx`
- `src/components/bu-iphone/BuCatalog.tsx`
- `src/app/bu-iphone/page.tsx`
- `src/app/bu-iphone/item/page.tsx`
- `src/components/layout/Navigation.tsx` — «Б/У iPhone 🔄» в Ещё-меню
- `src/app/sitemap.ts` — /bu-iphone priority 0.9, daily

### Переменные окружения на Timeweb
```
NEXT_PUBLIC_SITE_URL=https://xn----jtbjgbccazg9frdtb.xn--p1ai
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=*** (это бот ФОРМ сайта, не путать с ботом б/у!)
NEXT_PUBLIC_TELEGRAM_CHAT_ID=5549559991
NEXT_PUBLIC_PROXY_URL=https://black-tree-eb8a.vitalmac27.workers.dev
```

---

## ✅ Что РАБОТАЕТ

- ✅ Бот @AppleCollectBU_bot отвечает в Telegram
- ✅ `/add` принимает фото + текст
- ✅ Парсер распознаёт модель/память/цвет/sim/АКБ/циклы/состояние/цену
- ✅ 6 фото скачиваются с Telegram (~100 КБ каждое)
- ✅ API на 127.0.0.1:3001 работает локально
- ✅ Тестовый листинг: #8, iPhone 16 Pro Max 512 Black, 80 900 ₽

## ⏳ ЧТО НЕ ДОДЕЛАНО (СРОЧНО ЭТО ПЕРВЫМ ДЕЛОМ)

### 🔴 nginx + SSL для API

**Проблема:** API на VPS работает только на `127.0.0.1:3001`. Сайт не может его читать.

**Шаги:**

1. **Пользователь:** Добавляет в DNS Бегета A-запись:
   - Тип: A
   - Имя: `api`
   - Значение: `186.246.7.71`
   - TTL: 300
   
   Проверка: `nslookup api.xn----jtbjgbccazg9frdtb.xn--p1ai` → должен вернуть `186.246.7.71`

2. **Через SSH:** Настроить nginx + Let's Encrypt (готовый скрипт):
   ```bash
   apt install -y certbot python3-certbot-nginx
   
   cat > /etc/nginx/sites-available/bu-api << 'EOF'
   server {
     listen 80;
     server_name api.xn----jtbjgbccazg9frdtb.xn--p1ai;
   
     location /api/ {
       proxy_pass http://127.0.0.1:3001;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       add_header Access-Control-Allow-Origin "https://xn----jtbjgbccazg9frdtb.xn--p1ai" always;
       add_header Access-Control-Allow-Methods "GET, OPTIONS" always;
     }
     location /photos/ {
       proxy_pass http://127.0.0.1:3001;
       add_header Access-Control-Allow-Origin "*" always;
       expires 7d;
     }
   }
   EOF
   
   ln -sf /etc/nginx/sites-available/bu-api /etc/nginx/sites-enabled/
   nginx -t && systemctl reload nginx
   
   certbot --nginx -d api.xn----jtbjgbccazg9frdtb.xn--p1ai \
     --non-interactive --agree-tos \
     --email YOUR_EMAIL --redirect
   ```

3. **Проверить:** `curl https://api.xn----jtbjgbccazg9frdtb.xn--p1ai/api/bu-iphone` → должен вернуть JSON с iPhone 16 Pro Max.

4. **На сайте:** Передеплоить через Timeweb (`npm run build`). После этого `/bu-iphone` начнёт показывать карточки.

### 🟡 Опциональные улучшения

- Блок «Б/У iPhone с гарантией» на главной — топ-3 карточки
- Команда `/edit <id> <field> <value>` — изменить цену/АКБ/описание после публикации
- Описание чистить от мусорных строк ("📱 Оригинальный" и т.п.) — в text-parser.js
- Schema.org Product на странице карточки б/у
- При нажатии «Купить» на карточке — отправлять в Telegram через прокси с пометкой `🔄 Б/У #N`

---

## 📋 Workflow обновления цен (когда менеджер пришлёт новый прайс)

1. Сохранить xlsx в `/home/claude/прайс_updated.xlsx`
2. `cd /home/claude/epl-collecty && python3 scripts/parse-prices.py`
3. Синхронизировать `src/lib/models.ts` `priceFrom` с `generated/*-configs.ts`
4. Коммит + push
5. Передеплой через Timeweb

**Пороги iPhone 17 в парсере:** `< 101000` (Pro Max→Pro), `< 83000` (Pro→17)

---

## 🚨 КРИТИЧЕСКИ ВАЖНО

1. **n8n на VPS НЕ ТРОГАТЬ** — это рабочий процесс пользователя
2. **При больших файлах в SSH** — НЕ через heredoc (ломается). Положить в `bot-files/` в GitHub → `curl` на VPS
3. **Токены/пароли** — никогда не просить в открытом чате. Класть в .env через SSH самому пользователю
4. **При правке `text-parser.js`** — прогонять тесты в конце файла: `node text-parser.js`
5. **bot-files/ в репо** — временно, для удобной заливки на VPS. Можно удалить после стабилизации

---

## 📂 GitHub bot-files/ (свежие файлы для VPS)

Эти файлы лежат в репозитории сайта в папке `bot-files/`:
- `bot-files/bot.js`
- `bot-files/text-parser.js`
- `bot-files/publisher.js`

**Команды для обновления на VPS:**
```bash
cd /opt/bu-bot
curl -fsSL https://raw.githubusercontent.com/vitalmac27-sketch/epl-collecty/main/bot-files/text-parser.js -o text-parser.js
curl -fsSL https://raw.githubusercontent.com/vitalmac27-sketch/epl-collecty/main/bot-files/publisher.js -o publisher.js
curl -fsSL https://raw.githubusercontent.com/vitalmac27-sketch/epl-collecty/main/bot-files/bot.js -o bot.js
pm2 restart bu-bot
pm2 logs bu-bot --lines 15 --nostream
```

---

## 📍 Точка входа в новый чат

1. **Прочитай этот файл целиком**
2. **Спроси пользователя:**
   - Добавил ли A-запись `api` → `186.246.7.71` в DNS Бегета?
   - Запустил ли передеплой сайта на Timeweb после последнего коммита?
3. **Если DNS готов** — даёшь команды для nginx + certbot (см. выше)
4. **Если нет** — напоминаешь добавить, пока работаешь над опциональными улучшениями
5. **Проверка готовности всей системы:**
   ```bash
   # Bot status
   pm2 list
   # API локально
   curl -s http://127.0.0.1:3001/api/bu-iphone | head -c 500
   # DNS
   nslookup api.xn----jtbjgbccazg9frdtb.xn--p1ai
   # API наружу (после nginx)
   curl https://api.xn----jtbjgbccazg9frdtb.xn--p1ai/api/bu-iphone
   ```

---

## История чата (краткая хронология)

1. ✅ Добавили статью «Настройка камеры iPhone» в блог
2. ✅ Создали страницу `/skupka-iphone` с формой + SEO-контентом
3. ✅ Поменяли ссылку «Выкуп iPhone» в навигации
4. ✅ Снизили цены: -7000 Pro / -5000 обычные iPhone, -5000 iPad/MacBook
5. ✅ Добавили статью «Оптимизация аккумулятора iPhone на iOS 26»
6. ❌ Пробовали парсер Авито через Puppeteer + iProxy — отказались (фото плохие, капчи)
7. ✅ Переключились на ручной ввод через бот: текст+фото → распознавание → публикация ТГ/ВК/сайт
8. ✅ Создали страницы `/bu-iphone` и `/bu-iphone/item?slug=...` на сайте
9. ⏳ **ОСТАНОВИЛИСЬ ЗДЕСЬ:** нужно nginx+SSL для API, тогда система заработает целиком
