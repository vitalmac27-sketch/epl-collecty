import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

const ARTICLE = {
  title: "Как настроить камеру iPhone для лучших фото и видео: гайд по моделям",
  description: "Пошаговая настройка камеры iPhone 15, 16, 17 Pro и Pro Max. Какие режимы включить, что изменилось в iOS 26, таблица возможностей по моделям. Гайд от инженера с советами.",
  url: "https://xn----jtbjgbccazg9frdtb.xn--p1ai/blog/kak-nastroit-kameru-iphone",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  author: { name: "Александр Романов", role: "Инженер сервисного центра ЭПЛ-КОЛЛЕКЦИЯ, Казань", exp: "Снимает на iPhone с 2017 года" },
};

export const metadata: Metadata = {
  title: `${ARTICLE.title} | ЭПЛ-КОЛЛЕКЦИЯ Казань`,
  description: ARTICLE.description,
  keywords: ["настроить камеру iPhone", "настройка камеры айфон", "как фотографировать на айфон", "камера iPhone 17 Pro", "iOS 26 камера", "фотографические стили iPhone", "ProRes iPhone"],
  alternates: { canonical: ARTICLE.url },
  openGraph: {
    title: ARTICLE.title,
    description: ARTICLE.description,
    url: ARTICLE.url,
    type: "article",
    publishedTime: ARTICLE.datePublished,
    authors: [ARTICLE.author.name],
    images: [{ url: "/assets/iphone-17-pro-max-orange.avif", width: 800, height: 800, alt: "Настройка камеры iPhone — гайд по всем моделям" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE.title,
  description: ARTICLE.description,
  url: ARTICLE.url,
  datePublished: ARTICLE.datePublished,
  dateModified: ARTICLE.dateModified,
  author: { "@type": "Person", name: ARTICLE.author.name, jobTitle: ARTICLE.author.role },
  publisher: { "@type": "Organization", name: "ЭПЛ-КОЛЛЕКЦИЯ", url: "https://xn----jtbjgbccazg9frdtb.xn--p1ai" },
  image: "/assets/iphone-17-pro-max-orange.avif",
  mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE.url },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Какой формат фото лучше — HEIF или JPEG?", acceptedAnswer: { "@type": "Answer", text: "HEIF. Он занимает в 2 раза меньше места при том же качестве. JPEG нужен только для совместимости со старыми устройствами." } },
    { "@type": "Question", name: "Стоит ли снимать в 48 Мп?", acceptedAnswer: { "@type": "Answer", text: "Для повседневных фото — нет. 12 Мп (из 48 Мп через объединение пикселей) дают лучшую светочувствительность. 48 Мп нужны для сильного кадрирования или крупной печати." } },
    { "@type": "Question", name: "Что лучше для видео — 4K 30 fps или 4K 60 fps?", acceptedAnswer: { "@type": "Answer", text: "Для YouTube и архива — 4K 30 fps. 60 fps нужен для динамичных сцен или замедления при монтаже." } },
    { "@type": "Question", name: "Можно ли снимать ProRes на iPhone 17 не-Pro?", acceptedAnswer: { "@type": "Answer", text: "Нет. ProRes доступен только на Pro-моделях: 15 Pro/Pro Max, 16 Pro/Pro Max, 17 Pro/Pro Max." } },
    { "@type": "Question", name: "В iOS 26 пропали режимы камеры — что делать?", acceptedAnswer: { "@type": "Answer", text: "Они не пропали, а спрятались. Свайпните влево-вправо по нижней панели камеры — появятся Портрет, Панорама, Slo-Mo. Свайп вверх откроет настройки вспышки и стилей." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://xn----jtbjgbccazg9frdtb.xn--p1ai" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://xn----jtbjgbccazg9frdtb.xn--p1ai/blog" },
    { "@type": "ListItem", position: 3, name: ARTICLE.title, item: ARTICLE.url },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Хлебные крошки */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary">Блог</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Настройка камеры iPhone</span>
        </nav>

        <div className="mb-4">
          <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
            Советы и гайды
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Как настроить камеру iPhone для лучших фото и видео: гайд по моделям
        </h1>

        {/* Автор */}
        <div className="flex items-center gap-3 mb-6 p-4 bg-muted/40 rounded-xl border border-border">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary shrink-0">
            АР
          </div>
          <div>
            <p className="font-semibold text-sm">{ARTICLE.author.name}</p>
            <p className="text-xs text-muted-foreground">{ARTICLE.author.role}</p>
            <p className="text-xs text-muted-foreground">{ARTICLE.author.exp}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-muted-foreground">Опубликовано</p>
            <p className="text-xs font-medium">1 мая 2026</p>
          </div>
        </div>

        {/* Главное фото */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
          <Image
            src="/assets/iphone-17-pro-max-orange.avif"
            alt="Настройка камеры iPhone 17 Pro Max — гайд по лучшим фото и видео"
            fill
            sizes="(max-width: 768px) 100vw, 760px"
            className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
            priority
          />
        </div>

        {/* Лид */}
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          Камера в iPhone — мощный инструмент, но из коробки она настроена «для всех», а не для вас. Потратьте 10 минут на настройку — и разница в качестве фото и видео будет видна сразу. Разберём, что и как включить на iPhone 15, 16, 17 всех версий, и что изменилось после обновления на iOS 26.
        </p>

        {/* Содержание */}
        <div className="bg-muted/40 border border-border rounded-xl p-5 mb-10">
          <p className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Содержание</p>
          <ol className="space-y-1.5 text-sm">
            {[
              ["Сравнительная таблица камер", "#tablitsa"],
              ["Базовые настройки для всех", "#bazovye"],
              ["Настройки фото: форматы, стили, HDR", "#foto"],
              ["Настройки видео: разрешение, ProRes", "#video"],
              ["Что нового в iOS 26 vs iOS 18", "#ios26"],
              ["Фишки по моделям", "#fishki"],
              ["5 советов для лучших снимков", "#sovety"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-primary hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">

          {/* Таблица камер */}
          <h2 id="tablitsa" className="text-2xl font-bold mt-10 mb-4">Какие камеры стоят в вашем iPhone</h2>
          <p className="text-muted-foreground mb-4">Прежде чем настраивать — нужно понимать что у вас под капотом.</p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-xs border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  {["Параметр", "iPhone 15", "15 Pro/Max", "iPhone 16", "16 Pro/Max", "iPhone 17", "17 Pro/Max"].map(h => (
                    <th key={h} className="px-3 py-2.5 text-left font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Основная", "48 Мп ƒ/1.6", "48 Мп ƒ/1.78", "48 Мп Fusion", "48 Мп Fusion", "48 Мп Fusion", "48 Мп Fusion"],
                  ["Ультраширик", "12 Мп ƒ/2.4", "12 Мп ƒ/2.2", "12 Мп ƒ/2.2", "48 Мп ƒ/2.2", "48 Мп ƒ/2.2", "48 Мп Fusion"],
                  ["Телевик", "—", "12 Мп 3×/5×", "—", "12 Мп 5×", "—", "48 Мп 4×/8×"],
                  ["Фронтальная", "12 Мп ƒ/1.9", "12 Мп ƒ/1.9", "12 Мп ƒ/1.9", "12 Мп ƒ/1.9", "24 Мп ƒ/1.8", "24 Мп + Center Stage"],
                  ["Макро", "—", "✅", "—", "✅", "—", "✅"],
                  ["LiDAR", "—", "✅", "—", "✅", "—", "✅"],
                  ["Camera Control", "—", "—", "✅", "✅", "✅", "✅"],
                  ["Dual Capture", "—", "—", "—", "—", "✅", "✅"],
                  ["ProRes видео", "—", "✅", "—", "✅", "—", "✅"],
                ].map(([param, ...vals], i) => (
                  <tr key={param} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                    <td className="px-3 py-2.5 font-medium text-foreground whitespace-nowrap">{param}</td>
                    {vals.map((v, j) => <td key={j} className="px-3 py-2.5 whitespace-nowrap">{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-8">
            <p className="text-sm text-foreground">
              <strong>Вывод:</strong> Pro-модели дают телевик, макро, LiDAR и ProRes. С iPhone 17 Pro все три задние камеры — 48 Мп, а фронтальная — 24 Мп с квадратным сенсором (снимает горизонтально и вертикально без поворота телефона).
            </p>
          </div>

          {/* Базовые настройки */}
          <h2 id="bazovye" className="text-2xl font-bold mt-10 mb-4">Базовые настройки — поменять всем</h2>
          <p className="text-muted-foreground mb-4">Актуально для iPhone 15, 16, 17 на iOS 18 и iOS 26.</p>

          {[
            {
              title: "Сетка кадрирования",
              text: "Включите сетку 3×3 — помогает выстраивать композицию по правилу третей, горизонт выравнивается автоматически.",
              ios: "Настройки → Камера → Сетка → включить (одинаково в iOS 18 и iOS 26)"
            },
            {
              title: "Уровень горизонта",
              text: "Показывает перекрестие когда телефон параллелен земле. Незаменимо для архитектуры и пейзажей.",
              ios: "Настройки → Камера → Уровень → включить"
            },
            {
              title: "Отзеркаливание фронтальной камеры",
              text: "По умолчанию селфи зеркальные — текст читается наоборот. Если мешает — отключите.",
              ios: "Настройки → Камера → Зеркальная фронт. камера"
            },
            {
              title: "Сохранение настроек",
              text: "iPhone сбрасывает режим камеры при каждом открытии. Включите сохранение если вы постоянно снимаете в одном режиме.",
              ios: "iOS 18: Настройки → Камера → Сохранение настроек. iOS 26: добавлен пункт «Стили»"
            },
          ].map(({ title, text, ios }) => (
            <div key={title} className="mb-5 border border-border rounded-xl overflow-hidden">
              <div className="px-5 py-3 bg-muted/40 font-semibold">{title}</div>
              <div className="px-5 py-3">
                <p className="text-muted-foreground text-sm mb-2">{text}</p>
                <p className="text-xs bg-muted/50 px-3 py-2 rounded-lg font-mono">{ios}</p>
              </div>
            </div>
          ))}

          {/* Фото */}
          <h2 id="foto" className="text-2xl font-bold mt-10 mb-4">Настройки фото: форматы, стили, HDR</h2>

          <h3 className="text-lg font-bold mt-6 mb-3">Формат снимков</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  {["Формат", "Размер", "Качество", "Кому подходит"].map(h => (
                    <th key={h} className="px-4 py-2.5 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["HEIF (по умолчанию)", "2–4 МБ", "Отличное", "Большинству"],
                  ["JPEG", "5–8 МБ", "Хорошее", "Для совместимости"],
                  ["Apple ProRAW", "25–80 МБ", "Максимальное", "Фотографам (только Pro)"],
                  ["RAW 48 Мп", "75–100 МБ", "Максимальное", "Профессионалам"],
                ].map(([fmt, size, q, who], i) => (
                  <tr key={fmt} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                    <td className="px-4 py-2.5 font-medium">{fmt}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{size}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{q}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 my-4">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>💡 iOS 26:</strong> формат теперь переключается прямо в приложении «Камера» — свайп вверх от кнопки затвора. Больше не нужно выходить в Настройки.
            </p>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-3">Фотографические стили (Photographic Styles)</h3>
          <p className="text-muted-foreground mb-3">Стили — это не фильтры. Стиль меняет тон на этапе обработки сенсором, результат более естественный.</p>
          <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5 text-sm">
            <li>Для портретов на улице — <strong className="text-foreground">«Естественный»</strong> или <strong className="text-foreground">«Тёплый»</strong></li>
            <li>Для еды и предметки — <strong className="text-foreground">«Яркий»</strong></li>
            <li>Для пейзажей — <strong className="text-foreground">«Стандартный»</strong> или <strong className="text-foreground">«Холодный»</strong></li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-3">Ночной режим</h3>
          <p className="text-muted-foreground mb-3 text-sm">Включается автоматически при слабом освещении. На Pro-моделях работает на всех объективах, на обычных — только на основной камере.</p>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>⚠️ iPhone 17 Pro:</strong> Apple убрала ночной портретный режим. Если часто снимаете портреты в темноте — учитывайте при выборе модели.
            </p>
          </div>

          {/* Фото iPhone 16 Pro */}
          <div className="my-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
            <Image
              src="/assets/iphone-16-pro-black-titanium.avif"
              alt="Настройка камеры iPhone 16 Pro — ночной режим и фотографические стили"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

          {/* Видео */}
          <h2 id="video" className="text-2xl font-bold mt-10 mb-4">Настройки видео</h2>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  {["Режим", "Размер файла", "Для чего"].map(h => (
                    <th key={h} className="px-4 py-2.5 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["4K 24 fps", "Средний", "Кино-эффект, YouTube"],
                  ["4K 30 fps", "Средний", "Стандарт для большинства"],
                  ["4K 60 fps", "Большой", "Спорт, замедление"],
                  ["4K 120 fps (16/17 Pro)", "Очень большой", "Максимальное замедление"],
                  ["ProRes (только Pro)", "Огромный", "Профессиональный монтаж"],
                ].map(([mode, size, use], i) => (
                  <tr key={mode} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                    <td className="px-4 py-2.5 font-medium">{mode}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{size}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            <strong className="text-foreground">Action Mode</strong> — стабилизация для съёмки в движении (бег, велосипед). Включается в приложении «Камера» → иконка бегущего человека. Работает до 2.8K.
          </p>

          {/* iOS 26 */}
          <h2 id="ios26" className="text-2xl font-bold mt-10 mb-4">Что изменилось в iOS 26 vs iOS 18</h2>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  {["Функция", "iOS 18", "iOS 26"].map(h => (
                    <th key={h} className="px-4 py-2.5 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Интерфейс", "Все режимы видны внизу", "Только Фото/Видео, остальное — свайпом"],
                  ["Смена формата", "Через Настройки", "Прямо в камере, свайп вверх"],
                  ["Смена разрешения", "Через Настройки", "Прямо в камере, свайп вверх"],
                  ["Уведомление о грязном объективе", "Нет", "Да (iPhone 15+)"],
                  ["Спуск через AirPods", "Нет", "Да (AirPods 4, Pro 2)"],
                  ["Smart Capture", "Нет", "Да — авто-подбор параметров"],
                  ["Center Stage (фронталка)", "Нет", "Да (iPhone 17)"],
                ].map(([func, old, new_], i) => (
                  <tr key={func} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                    <td className="px-4 py-2.5 font-medium text-foreground">{func}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{old}</td>
                    <td className="px-4 py-2.5 text-green-700 dark:text-green-400 font-medium">{new_}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-muted/40 border border-border rounded-xl p-4 mb-6">
            <p className="font-semibold text-sm mb-2">Где найти скрытые режимы в iOS 26:</p>
            <ol className="text-muted-foreground text-sm space-y-1 list-decimal pl-5">
              <li>Откройте «Камеру» — видны только «Фото» и «Видео»</li>
              <li>Свайп влево/вправо по нижней панели — Портрет, Панорама, Slo-Mo, Cinematic</li>
              <li>Свайп вверх от кнопки затвора — вспышка, Live Photo, стили, экспозиция</li>
            </ol>
          </div>

          {/* Фото iPhone 17 Pro */}
          <div className="my-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
            <Image
              src="/assets/iphone-17-pro-max-silver.avif"
              alt="iPhone 17 Pro Max — Camera Control и новые возможности камеры в iOS 26"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

          {/* Фишки по моделям */}
          <h2 id="fishki" className="text-2xl font-bold mt-10 mb-4">Фишки по моделям</h2>

          {[
            {
              model: "iPhone 15 / 15 Pro, Pro Max",
              base: ["48 Мп основная + 12 Мп ультраширик, двухкратный кроп-зум", "Портрет, Cinematic, Action Mode", "Нет макро, ProRes, LiDAR на обычном 15"],
              pro: ["Три камеры: 48+12+12 Мп (3× в Pro, 5× в Pro Max)", "ProRes, Apple ProRAW, макро, LiDAR", "Action Button вместо переключателя бесшумного"],
              tip: "15 Pro Max: 4K 30 fps, ProRAW для фото, телевик 5× для портретов с естественным боке."
            },
            {
              model: "iPhone 16 / 16 Pro, Pro Max",
              base: ["48 Мп Fusion + 12 Мп ультраширик, Camera Control", "Впервые на не-Pro: пространственное фото/видео"],
              pro: ["Ультраширик 48 Мп (впервые)", "4K 120 fps — первый iPhone с этим", "Camera Control для быстрого управления"],
              tip: "16 Pro: используйте ультраширик 48 Мп для пейзажей. 4K 120 fps — для спорта с замедлением."
            },
            {
              model: "iPhone 17 / 17 Pro, Pro Max",
              base: ["Две Fusion-камеры 48 Мп, фронтальная 24 Мп с квадратным сенсором", "Dual Capture — одновременная съёмка на обе камеры"],
              pro: ["Все три задние камеры 48 Мп Fusion", "Телевик 48 Мп: 4× (100 мм) и 8× кроп (200 мм)", "Center Stage на фронталке, ProRes, ProRAW"],
              tip: "17 Pro Max: телевик 4× для портретов — компрессия перспективы как на профессиональной камере. Dual Capture + Center Stage для видеоблогинга."
            },
          ].map(({ model, base, pro, tip }) => (
            <div key={model} className="mb-6 border border-border rounded-xl overflow-hidden">
              <div className="px-5 py-3 bg-muted/40 font-bold">{model}</div>
              <div className="px-5 py-4 grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Обычная модель</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                    {base.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
                {pro.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Pro / Pro Max</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                      {pro.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                )}
              </div>
              <div className="px-5 pb-4">
                <p className="text-xs bg-primary/5 text-primary px-3 py-2 rounded-lg">💡 {tip}</p>
              </div>
            </div>
          ))}

          {/* 5 советов */}
          <h2 id="sovety" className="text-2xl font-bold mt-10 mb-6">5 советов для лучших снимков</h2>

          {[
            { n: "1", title: "Используйте зум с умом", text: "Не пользуйтесь цифровым зумом (щипок по экрану) — он обрезает картинку. Переключайтесь между объективами кнопками: 0.5×, 1×, 2×, 5× или 8×. На Pro нажмите и удерживайте кнопку зума — появятся промежуточные фокусные расстояния." },
            { n: "2", title: "Зафиксируйте фокус и экспозицию", text: "Нажмите на объект и удерживайте 2 секунды — появится «Фиксация автоэкспозиции/автофокуса». Камера не будет перефокусироваться при каждом движении. Полезно для предметной съёмки и портретов." },
            { n: "3", title: "Регулируйте экспозицию вручную", text: "После фокусировки проведите пальцем вверх/вниз рядом с рамкой фокуса — ручная коррекция яркости. Для закатов уведите вниз. Для портретов в тени — вверх." },
            { n: "4", title: "Снимайте в Live Photo", text: "Live Photo записывает 1.5 секунды до и после нажатия затвора. Откройте готовое фото → «Править» → листайте кадры → выберите лучший → «Сделать главным». Спасает смазанные снимки." },
            { n: "5", title: "Протрите объектив", text: "80% «мыльных» фото — это отпечатки пальцев на линзе. В iOS 26 камера сама подсказывает о загрязнении (iPhone 15+), но привычка протирать перед съёмкой работает на всех моделях." },
          ].map(({ n, title, text }) => (
            <div key={n} className="flex gap-4 mb-5">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">{n}</div>
              <div>
                <p className="font-semibold mb-1">{title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          ))}

          {/* FAQ */}
          <h2 id="faq" className="text-2xl font-bold mt-12 mb-6">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              { q: "Какой формат фото лучше — HEIF или JPEG?", a: "HEIF. Занимает в 2 раза меньше места при том же качестве. JPEG нужен только для совместимости со старыми устройствами (Android до 2020, Windows до 10)." },
              { q: "Стоит ли снимать в 48 Мп?", a: "Для повседневных фото — нет. 12 Мп через объединение пикселей дают лучшую светочувствительность. 48 Мп нужны для сильного кадрирования или крупной печати." },
              { q: "Что лучше — 4K 30 fps или 4K 60 fps?", a: "Для YouTube и архива — 4K 30 fps. Файлы легче, качество отличное. 60 fps нужен для динамичных сцен или замедления при монтаже." },
              { q: "Camera Control — нужно обязательно настраивать?", a: "Не обязательно. Оставьте 2-3 параметра (зум + экспозиция). Если кнопка срабатывает случайно — отключите одиночное нажатие в настройках." },
              { q: "Можно ли снимать ProRes на iPhone 17 не-Pro?", a: "Нет. ProRes доступен только на Pro-моделях: 15 Pro/Pro Max, 16 Pro/Pro Max, 17 Pro/Pro Max." },
              { q: "В iOS 26 пропали режимы камеры — что делать?", a: "Они не пропали. Свайпните влево-вправо по нижней панели — Портрет, Панорама, Slo-Mo. Свайп вверх — настройки вспышки, стилей и экспозиции." },
              { q: "Как использовать AirPods как пульт для камеры?", a: "Подключите AirPods 4 или Pro 2. Откройте «Камеру». Нажмите и удерживайте сенсорную ножку — снимок. Продолжайте удерживать — запись видео. Отпустите — стоп." },
            ].map(({ q, a }, i) => (
              <details key={i} className="border border-border rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 font-semibold cursor-pointer hover:bg-muted/30 list-none flex items-center justify-between">
                  <span>{q}</span>
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <div className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Заключение */}
        <div className="mt-10 p-5 bg-muted/40 border border-border rounded-2xl text-sm text-muted-foreground italic">
          Статья написана на основе опыта использования iPhone 15 Pro Max, 16 Pro и 17 Pro Max с iOS 18 и iOS 26.
          Хотите увидеть разницу камер вживую — <strong className="text-foreground not-italic">приходите в ЭПЛ-КОЛЛЕКЦИЯ в Казани</strong>, покажем на месте.
        </div>

        {/* CTA */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Link href="/iphone" className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-center">
            📱 Все iPhone с лучшей камерой
          </Link>
          <a href="https://t.me/ac_care" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors text-center">
            ✈️ Помочь с выбором модели
          </a>
        </div>

        {/* Перелинковка */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Читайте также:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/iphone/iphone-17-pro-max", label: "iPhone 17 Pro Max" },
              { href: "/iphone/iphone-17-pro", label: "iPhone 17 Pro" },
              { href: "/iphone/iphone-16-pro-max", label: "iPhone 16 Pro Max" },
              { href: "/iphone/iphone-15-pro", label: "iPhone 15 Pro" },
              { href: "/blog/kak-proverit-bu-iphone-pered-pokupkoy", label: "Как проверить б/у iPhone" },
              { href: "/blog", label: "Все статьи блога" },
            ].map(({ href, label }) => (
              <Link key={href} href={href}
                className="text-sm px-3 py-1.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
