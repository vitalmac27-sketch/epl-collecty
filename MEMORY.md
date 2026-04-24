# ЭПЛ-КОЛЛЕКЦИЯ — Memory.md

## Проект
Сайт магазина Apple техники в Казани — **ЭПЛ-КОЛЛЕКЦИЯ**
Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui

---

## GitHub
- **Репозиторий:** `vitalmac27-sketch/epl-collecty`
- **Ветка:** `main`
- **GitHub Token:** `ghp_XXXX_ХРАНИТЕ_В_БЕЗОПАСНОМ_МЕСТЕ`
- **Клонировать:** `git clone https://TOKEN@github.com/vitalmac27-sketch/epl-collecty.git`

---

## Хостинг — TimeWeb Cloud App Platform
- **Панель:** https://timeweb.cloud/my/apps/179693
- **Приложение:** Daring Amalthea (ID: 179693)
- **Аккаунт:** vm665249
- **Временный домен:** `vitalmac27-sketch-epl-collecty-b816.twc1.net`
- **IP приложения:** `92.246.76.92`
- **⚠️ Проблема:** Поле «Команда сборки» не сохраняется — вводить `npm run build` вручную перед каждым деплоем

---

## Домены
- **Основной:** `https://эпл-коллекция.рф` (xn----jtbjgbccazg9frdtb.xn--p1ai)
- **Старый сайт:** `apple-collecty.ru` — 301 редирект на новый (сделан)
- **Регистратор:** Бегет
- **DNS:** NS-серверы TimeWeb (перенесены с Бегета)
- **SSL:** куплен на Бегете, работает

---

## Деплой
- **Фреймворк:** Next.js 15
- **Версия Node:** 20
- **Режим:** `output: export` (статика — TimeWeb не поддерживает SSR в App Platform)
- **Команда сборки:** `npm run build` (вводить вручную в настройках TimeWeb)

---

## Переменные окружения в TimeWeb
```
NEXT_PUBLIC_SITE_URL = https://xn----jtbjgbccazg9frdtb.xn--p1ai
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN = BOT_TOKEN_В_TIMEWEB_ENV
NEXT_PUBLIC_TELEGRAM_CHAT_ID = 5549559991
```

---

## Telegram (заявки → Telegram)
- **Бот токен:** `BOT_TOKEN_В_TIMEWEB_ENV`
- **Chat ID:** `5549559991`
- **Прокси:** Cloudflare Worker (НЕ Supabase — он заморожен!)
- **Worker URL:** `https://black-tree-eb8a.vitalmac27.workers.dev`
- **Cloudflare аккаунт:** vitalmac27 (Account ID: 3f9cc490e275adb8bbd0c71c70dc9733)
- **Worker имя:** `black-tree-eb8a`
- **Файл воркера:** `cloudflare-worker/worker.js` в репозитории
- **Конфиг прокси в коде:** `src/lib/proxy.ts` — PROXY_URL

### Почему Cloudflare, не Supabase:
- Старый Supabase (`kepaooewfbztxvcknawo`) принадлежит Lovable-аккаунту — доступа нет
- Free tier Supabase замерзает через 7 дней неактивности
- Cloudflare Workers бесплатный, не замерзает, работает в РФ

---

## Данные магазина
- **Название:** ЭПЛ-КОЛЛЕКЦИЯ
- **Город:** Казань
- **Адрес:** ул. Сибгата Хакима, 40а, Офис 7
- **Район:** Ново-Савиновский
- **Телефон:** +7 (999) 267-39-33
- **Режим работы:** Пн–Вс 13:00–20:00
- **Telegram:** https://t.me/ac_care
- **Telegram канал:** https://t.me/apple_collecty
- **VK:** https://vk.com/apple_collecty
- **Avito:** https://www.avito.ru/brands/i141094380
- **Метро:** 15 мин пешком от м. Козья слобода

---

## Технологии
- **Next.js 15** + TypeScript + Tailwind CSS + shadcn/ui
- **output: export** — статическая генерация
- **101 страница** (главная + категории + модели)

---

## Структура сайта

### Категории
| Slug | Название | Моделей |
|------|----------|---------|
| `/iphone/` | iPhone | 19 |
| `/ipad/` | iPad | 5 |
| `/macbook/` | MacBook | 8 |
| `/watch/` | Apple Watch | 9 |
| `/airpods/` | Наушники | 6 |
| `/android/` | Android | 17 |
| `/dyson/` | Dyson | 15 |
| `/audio/` | Аудио и гаджеты | 5 |

### Ключевые страницы
| URL | Описание |
|-----|----------|
| `/` | Главная — квиз + каталог + SEO |
| `/[category]/` | Каталог категории |
| `/[category]/[model]/` | Карточка товара с конфигуратором |
| `/about/` | О магазине |
| `/contacts/` | Контакты с Яндекс картой |
| `/offer/` | Публичная оферта |
| `/privacy/` | Политика конфиденциальности |
| `/sitemap.xml` | Sitemap |
| `/robots.txt` | Robots |

---

## Прайс и конфигурации товаров

### Файл прайса
`прайс_apple_collecty.xlsx` — актуальный прайс с моделями, цветами, памятью, ценами

### Как обновить цены
1. Обновить `прайс_apple_collecty.xlsx`
2. Запустить `python3 scripts/parse-prices.py`
3. Коммит + пуш → автодеплой

### Сгенерированные конфиги
`src/lib/generated/` — автогенерируется из прайса (не редактировать вручную):
- `iphone-configs.ts` — 8 моделей с ценами из прайса
- `ipad-configs.ts` — 5 моделей
- `macbook-configs.ts` — 8 моделей
- `watch-configs.ts` — 9 моделей
- `airpods-configs.ts` — 6 моделей
- `android-configs.ts` — 17 моделей
- `dyson-configs.ts` — 15 моделей
- `audio-configs.ts` — 5 моделей
- `index.ts` — единый экспорт `getProductConfig(category, slug)`

### Карточка товара (ProductConfigurator)
- Выбор цвета (кружки), памяти, SIM — цена меняется динамически
- Кнопка **«🛒 Купить»** — открывает модальную форму заказа
- Кнопка **«🔄 Рассчитать с Trade-in»** — открывает форму Trade-in с полями (модель, память, АКБ)
- Если конфигурации нет в прайсе — «Уточняйте у менеджера»
- Telegram-сообщение формируется автоматически из выбранной конфигурации
- Компоненты: `src/components/product/ProductConfigurator.tsx`, `BuyForm.tsx`, `SpecsTable.tsx`, `CompareTable.tsx`, `UpsellBlock.tsx`

---

## SEO

### Верификация
- **Яндекс.Вебмастер:** `72880077d2fe664a` (в metadata.verification)
- **Google Search Console:** `RgqQ2tZ9Mie_viRI716Dot5bnz48JFC8jX_wPfIvlzI`
- HTML-файлы для резервной верификации в `/public/`

### Schema.org разметки
- `LocalBusiness` — адрес, телефон, часы
- `FAQPage` — FAQ на главной
- `ItemList` + `Product` — каталог и карточки
- `BreadcrumbList` — хлебные крошки

### Title/Description
Автогенерируются для каждой конфигурации: `generateMetadata()` в `[model]/page.tsx`

---

## Favicon / Иконки
Сгенерированы из `public/assets/logo.jpg`:
- `public/favicon.ico` (16/32/48px multi-size)
- `public/favicon-16x16.png`, `public/favicon-32x32.png`
- `public/apple-touch-icon.png` (180px)
- `public/icon-192.png`, `public/icon-512.png`
Подключены через `metadata.icons` в `layout.tsx`

---

## Важные нюансы

### namePre
`cities.ts` → `namePre: "Казани"` (БЕЗ "в "). В шаблонах всегда добавлять "в " явно: `в ${city.namePre}`. Иначе будет "в в Казани".

### SIM варианты
- `eSIM` — без "(США)", просто "eSIM"
- `Nano-SIM + eSIM` — европейская/РФ версия
- `2 Nano-SIM` — гонконгская версия (популярна в Казани)

### Добавление новой категории
1. Добавить лист в `прайс_apple_collecty.xlsx`
2. Добавить парсер в `scripts/parse-prices.py`
3. Добавить категорию в `src/lib/categories.ts`
4. Добавить модели в `src/lib/models.ts`
5. Добавить в `src/lib/generated/index.ts`
6. Запустить `python3 scripts/parse-prices.py`

### Добавление нового города
- Структура: `/[city]/`, `/[city]/[category]/`, `/[city]/[category]/[model]/`
- Файлы были в `src/app/[city]/` (удалены, восстановить при необходимости)
- При добавлении настроить canonical

---

## Связанные репозитории
- **Старый SPA сайт:** `vitalmac27-sketch/iphone-collector-quiz` (Vite + React, apple-collecty.ru)
- **Supabase старый:** проект `kepaooewfbztxvcknawo` — НЕ ИСПОЛЬЗОВАТЬ (заморожен, принадлежит Lovable)

---

## Что сделано ✅
- [x] Проект создан и задеплоен на GitHub + TimeWeb
- [x] Домен эпл-коллекция.рф подключён, NS перенесены на TimeWeb
- [x] SSL сертификат (с Бегета)
- [x] 101 страница с SEO метатегами
- [x] Конфигуратор товаров (цвет/память/SIM) для всех категорий
- [x] Форма «Купить» с отправкой в Telegram через Cloudflare Worker
- [x] Форма «Trade-in» с полями (модель/память/АКБ)
- [x] Cloudflare Worker прокси (не замерзает, работает в РФ)
- [x] Таблицы характеристик и сравнения с предыдущим поколением
- [x] Блок «С этим берут» (upsell) для каждой категории
- [x] Все картинки iPhone добавлены в public/assets
- [x] Квиз отправляет заявки через Cloudflare Worker
- [x] Гарантия везде "1 год"
- [x] Страница /about с полным SEO
- [x] Страница /contacts с Яндекс картой и мессенджерами
- [x] 301 редирект с apple-collecty.ru на эпл-коллекция.рф
- [x] Favicon из логотипа магазина
- [x] Яндекс.Вебмастер и Google Search Console верификация
- [x] Исправлено "в в Казани" → "в Казани"
- [x] Убрано "США" из SIM вариантов
- [x] Автогенерация конфигов из Excel прайса (`scripts/parse-prices.py`)
- [x] 8 категорий, 72 модели с конфигураторами
- [x] SEO H1 генерируется динамически из выбранной конфигурации

## Что осталось сделать
- [ ] Добавить картинки iPad, MacBook, Watch, AirPods, Android, Dyson, Audio в `/public/assets/`
- [ ] Добавить сайт в Яндекс.Вебмастер (подтвердить верификацию)
- [ ] Добавить в Google Search Console
- [ ] Подать sitemap в Яндекс и Google
- [ ] Зарегистрировать в Яндекс.Бизнес (адрес Казани)
- [ ] Зарегистрировать в 2ГИС
- [ ] Собрать первые отзывы (Яндекс.Карты, Авито)
- [ ] Добавить второй город и городские страницы /[city]/
- [ ] Дополнить прайс моделями iPhone 14/13 серии (для конфигуратора)
