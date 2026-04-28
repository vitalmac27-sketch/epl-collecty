import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const ARTICLE = {
  title: "Как проверить б/у iPhone перед покупкой: чек-лист из 9 шагов",
  description: "Пошаговый чек-лист проверки б/у iPhone от инженера сервиса. Внешний вид, аккумулятор, iCloud, Face ID, камеры, IMEI. Актуально для iPhone 12–16 Pro Max.",
  url: "https://xn----jtbjgbccazg9frdtb.xn--p1ai/blog/kak-proverit-bu-iphone-pered-pokupkoy",
  datePublished: "2026-04-25",
  dateModified: "2026-04-25",
  author: { name: "Александр Романов", role: "Инженер сервисного центра ЭПЛ-КОЛЛЕКЦИЯ, Казань", checked: "2 000+" },
};

export const metadata: Metadata = {
  title: `${ARTICLE.title} | ЭПЛ-КОЛЛЕКЦИЯ Казань`,
  description: ARTICLE.description,
  keywords: ["проверить б/у iPhone перед покупкой", "как проверить айфон перед покупкой", "проверка айфон б/у", "чек-лист проверки iPhone", "купить айфон б/у", "купить айфон Казань"],
  alternates: { canonical: ARTICLE.url },
  openGraph: {
    title: ARTICLE.title,
    description: ARTICLE.description,
    url: ARTICLE.url,
    type: "article",
    publishedTime: ARTICLE.datePublished,
    modifiedTime: ARTICLE.dateModified,
    authors: [ARTICLE.author.name],
    images: [{ url: "/assets/iphone-16-pro-max-black-titanium.avif", width: 800, height: 800, alt: "Проверка б/у iPhone перед покупкой — чек-лист из 9 шагов" }],
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
  author: {
    "@type": "Person",
    name: ARTICLE.author.name,
    jobTitle: ARTICLE.author.role,
  },
  publisher: {
    "@type": "Organization",
    name: "ЭПЛ-КОЛЛЕКЦИЯ",
    url: "https://xn----jtbjgbccazg9frdtb.xn--p1ai",
  },
  image: `${ARTICLE.url}/og.jpg`,
  mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE.url },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Сколько времени занимает полная проверка?", acceptedAnswer: { "@type": "Answer", text: "15–20 минут, если заранее знаете, что проверять." } },
    { "@type": "Question", name: "Battery Health 82% — это нормально?", acceptedAnswer: { "@type": "Answer", text: "Пограничное состояние. Работать будет, но зарядка не дотянет до вечера при активном использовании. Закладывайте 3 000–5 000 ₽ на замену аккумулятора и торгуйтесь." } },
    { "@type": "Question", name: "Как отличить оригинальный экран от замены?", acceptedAnswer: { "@type": "Answer", text: "Проверьте True Tone в Настройки → Экран и яркость. Если переключатель отсутствует — экран заменён на неоригинальный." } },
    { "@type": "Question", name: "Где безопаснее покупать б/у iPhone в Казани?", acceptedAnswer: { "@type": "Answer", text: "Самый надёжный вариант — в проверенном магазине, который проводит диагностику и даёт гарантию на б/у устройства." } },
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
          <span className="text-foreground">Как проверить б/у iPhone</span>
        </nav>

        {/* Тег */}
        <div className="mb-4">
          <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
            Советы покупателю
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Как проверить б/у iPhone перед покупкой: чек-лист из 9 шагов
        </h1>

        {/* Автор + дата */}
        <div className="flex items-center gap-3 mb-6 p-4 bg-muted/40 rounded-xl border border-border">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary shrink-0">
            АР
          </div>
          <div>
            <p className="font-semibold text-sm">{ARTICLE.author.name}</p>
            <p className="text-xs text-muted-foreground">{ARTICLE.author.role}</p>
            <p className="text-xs text-muted-foreground">Проверил более {ARTICLE.author.checked} устройств</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-muted-foreground">Опубликовано</p>
            <p className="text-xs font-medium">25 апреля 2026</p>
          </div>
        </div>

        {/* Главное фото */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
          <Image
            src="/assets/iphone-16-pro-max-black-titanium.avif"
            alt="Как проверить б/у iPhone перед покупкой — полный чек-лист проверки"
            fill
            sizes="(max-width: 768px) 100vw, 760px"
            className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
            priority
          />
        </div>

        {/* Лид */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Покупка iPhone с рук — рабочий способ сэкономить 20–40% от цены нового. Но без проверки рискуете получить устройство с убитым аккумулятором, заблокированным iCloud или неоригинальным экраном. Мы каждый день принимаем б/у айфоны в нашем сервисе в Казани и знаем, на что смотреть. Собрали чек-лист из 9 шагов — занимает 15–20 минут, зато убережёт от потери денег.
          </p>
          <p className="text-sm text-muted-foreground mb-8 italic">
            Чек-лист актуален для всех моделей от iPhone 12 до iPhone 16 Pro Max.
          </p>

          {/* Шаг 1 */}
          <h2 className="text-2xl font-bold mt-10 mb-4">1. Внешний осмотр корпуса и экрана</h2>
          <p className="text-muted-foreground mb-3">Первое, что видите — первое, что проверяете.</p>
          <p className="font-semibold mb-2">Корпус:</p>
          <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
            <li>Осмотрите грани и углы на вмятины и сколы. Потёртости — нормально, а вот вмятина на углу означает серьёзное падение с возможными внутренними повреждениями.</li>
            <li>Проверьте, не выпирает ли экран из рамки — это признак вздутого аккумулятора или плохого ремонта.</li>
            <li>Посмотрите на винты в нижней части: если на шлицах есть царапины или заусенцы — айфон вскрывали.</li>
          </ul>
          <p className="font-semibold mb-2">Экран:</p>
          <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
            <li>Включите максимальную яркость. Откройте белый и чёрный фон — ищите битые пиксели, пятна, неравномерную подсветку.</li>
            <li>Проведите пальцем по всем углам и краям экрана — мёртвых зон быть не должно.</li>
            <li>Зайдите в <strong>Настройки → Экран и яркость</strong> и проверьте наличие переключателя <strong>True Tone</strong>. Если нет — дисплей, скорее всего, заменён на неоригинальный.</li>
          </ul>

          {/* Фото iPhone 16 */}
          <div className="my-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
            <Image
              src="/assets/iphone-16-pro-black-titanium.avif"
              alt="Проверка экрана б/у iPhone перед покупкой — True Tone и битые пиксели"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

          {/* Шаг 2 */}
          <h2 className="text-2xl font-bold mt-10 mb-4">2. Проверка кнопок и переключателей</h2>
          <p className="text-muted-foreground mb-3">Занимает минуту, но пропускать нельзя:</p>
          <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
            <li><strong>Кнопки громкости</strong> — нажмите обе по несколько раз. Отклик должен быть чётким, без залипания.</li>
            <li><strong>Боковая кнопка (вкл/выкл)</strong> — нажмите и удерживайте, должно появиться меню выключения.</li>
            <li><strong>Переключатель бесшумного режима</strong> (iPhone до 15 Pro) / <strong>кнопка Action</strong> (iPhone 15 Pro и новее) — переключите, айфон должен завибрировать.</li>
          </ul>

          {/* Шаг 3 */}
          <h2 className="text-2xl font-bold mt-10 mb-4">3. Камеры, звук, вибрация</h2>
          <p className="font-semibold mb-2">Камеры:</p>
          <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
            <li>Откройте приложение «Камера». Переключитесь между всеми объективами (широкоугольный, основной, телефото). Снимите фото и видео.</li>
            <li>Проверьте фронтальную камеру и запись видео с Face ID-камерой.</li>
            <li>На iPhone 12 Pro и новее — проверьте LiDAR (режим «Портрет» на задней камере в темноте).</li>
          </ul>
          <p className="font-semibold mb-2">Динамики и микрофон:</p>
          <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
            <li>Включите музыку или видео. Звук должен идти чисто, без хрипов и треска.</li>
            <li>Проверьте верхний разговорный динамик — позвоните кому-нибудь.</li>
            <li>Запишите голосовое сообщение — должно быть чётко слышно.</li>
          </ul>

          {/* Фото iPhone 15 Pro */}
          <div className="my-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
            <Image
              src="/assets/iphone-15-pro-max.avif"
              alt="Проверка камеры б/у iPhone — как убедиться что все объективы работают"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

          {/* Шаг 4 */}
          <h2 className="text-2xl font-bold mt-10 mb-4">4. Порты и зарядка</h2>
          <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
            <li>Подключите <strong>свой</strong> кабель (Lightning или USB-C). Айфон должен начать заряжаться. За 5 минут — примерно +1–2%.</li>
            <li>Попробуйте вставить кабель обеими сторонами.</li>
            <li>Если модель поддерживает <strong>MagSafe</strong> (iPhone 12+) — проверьте беспроводную зарядку.</li>
          </ul>

          {/* Шаг 5 */}
          <h2 className="text-2xl font-bold mt-10 mb-4">5. Связь: Wi-Fi, Bluetooth, SIM, GPS</h2>
          <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
            <li>Подключитесь к Wi-Fi — проверьте, что интернет работает.</li>
            <li>Включите Bluetooth и подключите наушники или любое устройство.</li>
            <li>Вставьте свою SIM-карту. Совершите звонок и проверьте мобильный интернет.</li>
            <li>Откройте Apple Maps или Яндекс.Карты — GPS должен определить местоположение за 10–30 секунд.</li>
          </ul>

          {/* Шаг 6 — Аккумулятор */}
          <h2 className="text-2xl font-bold mt-10 mb-4">6. Аккумулятор — главный скрытый подвох</h2>
          <p className="text-muted-foreground mb-4">
            Это то, на чём чаще всего обжигаются. Внешне айфон может выглядеть идеально, а батарея — убита.
          </p>
          <p className="font-semibold mb-2">Как проверить:</p>
          <p className="text-muted-foreground mb-4">
            Зайдите в <strong>Настройки → Аккумулятор → Состояние аккумулятора и зарядка</strong>. Смотрите на <strong>«Максимальная ёмкость»</strong>.
          </p>

          {/* Таблица Battery Health */}
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-4 py-3 font-semibold">Battery Health</th>
                  <th className="text-left px-4 py-3 font-semibold">Что это значит</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["95–100%", "✅ Отличное состояние, почти новый"],
                  ["85–94%", "👍 Нормально для б/у, проживёт ещё 1–2 года"],
                  ["80–84%", "⚠️ На грани — скоро потребуется замена"],
                  ["Ниже 80%", "❌ Apple рекомендует замену. Закладывайте 3 000–5 000 ₽ сверху"],
                ].map(([bh, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                    <td className="px-4 py-3 font-medium">{bh}</td>
                    <td className="px-4 py-3 text-muted-foreground">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 my-6">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>💡 Совет:</strong> если Battery Health ниже 85% — используйте это как аргумент для торга. Замена аккумулятора в Казани обойдётся в 2 500–5 000 ₽ в зависимости от модели.
            </p>
          </div>

          {/* Шаг 7 — iCloud */}
          <h2 className="text-2xl font-bold mt-10 mb-4">7. iCloud и Apple ID — точка невозврата</h2>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>⚠️ Важно:</strong> никогда не покупайте айфон с чужим Apple ID. Даже если продавец обещает «скинуть пароль позже». Если iPhone привязан к чужому Apple ID — вы получите кирпич.
            </p>
          </div>
          <p className="font-semibold mb-2">Что делать:</p>
          <ol className="text-muted-foreground space-y-2 mb-4 list-decimal pl-5">
            <li>Попросите продавца при вас зайти в <strong>Настройки → [Имя владельца] → Выход</strong> и выйти из Apple ID.</li>
            <li>После выхода сбросьте устройство: <strong>Настройки → Основные → Сброс → Стереть контент и настройки</strong>.</li>
            <li>На экране «Hello» пройдите начальную настройку — войдите в свою учётную запись.</li>
          </ol>

          {/* Фото iPhone 17 */}
          <div className="my-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
            <Image
              src="/assets/iphone-17-pro-max-silver.avif"
              alt="Проверка iCloud и Apple ID у б/у iPhone — как убедиться что устройство отвязано"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

          {/* Шаг 8 — IMEI */}
          <h2 className="text-2xl font-bold mt-10 mb-4">8. Проверка по IMEI и серийному номеру</h2>
          <p className="text-muted-foreground mb-4">
            IMEI и серийный номер — «паспорт» устройства. По ним проверяется подлинность и статус.
          </p>
          <p className="font-semibold mb-2">Где найти:</p>
          <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
            <li><strong>Настройки → Основные → Об этом устройстве</strong></li>
            <li>На лотке SIM-карты (модели до iPhone 14)</li>
            <li>На коробке (если есть) — все номера должны совпадать</li>
          </ul>
          <p className="font-semibold mb-2">Сервисы для проверки:</p>
          <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
            <li><a href="https://checkcoverage.apple.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">checkcoverage.apple.com</a> — официальный сервис Apple: модель, статус гарантии, подлинность</li>
            <li><a href="https://iunlocker.com/ru/check_imei.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">iunlocker.com</a> — дата активации, статус Find My, блокировка оператора</li>
          </ul>

          {/* Шаг 9 */}
          <h2 className="text-2xl font-bold mt-10 mb-4">9. Коробка, документы, комплект</h2>
          <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
            <li><strong>Оригинальная коробка</strong> — серийник на коробке должен совпадать с серийником в настройках.</li>
            <li><strong>Чек о покупке</strong> — идеальный случай. По нему можно проверить, где и когда куплен.</li>
            <li><strong>Кабель</strong> — у iPhone 12–14 USB-C → Lightning, у iPhone 15+ — USB-C → USB-C.</li>
            <li><strong>Зарядное устройство</strong> — Apple не кладёт адаптер начиная с iPhone 12. Если есть — проверьте оригинальность.</li>
          </ul>

          {/* Бонус */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Бонус: быстрая проверка через приложение</h2>
          <p className="text-muted-foreground mb-4">
            Установите <strong>Phone Doctor Plus</strong> (бесплатно в App Store) — за пару минут прогонит комплексный тест: экран, динамики, камеры, датчики, акселерометр, гироскоп.
          </p>

          {/* Таблица-чек-лист */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Краткий чек-лист для распечатки</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-3 py-3 font-semibold text-left w-10">№</th>
                  <th className="px-3 py-3 font-semibold text-left">Что проверить</th>
                  <th className="px-3 py-3 font-semibold text-center w-16">ОК?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Корпус: вмятины, сколы, винты, экран"],
                  ["2", "Кнопки: громкость, боковая, бесшумный"],
                  ["3", "Камеры: все объективы, фронтальная"],
                  ["4", "Звук: динамики, микрофон, вибрация"],
                  ["5", "Порт зарядки: Lightning / USB-C"],
                  ["6", "Wi-Fi, Bluetooth, SIM, GPS"],
                  ["7", "Battery Health: ≥ 85%"],
                  ["8", "iCloud отвязан, Apple ID вышел"],
                  ["9", "IMEI / серийник совпадают, проверены онлайн"],
                ].map(([num, text], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                    <td className="px-3 py-3 font-bold text-primary">{num}</td>
                    <td className="px-3 py-3 text-muted-foreground">{text}</td>
                    <td className="px-3 py-3 text-center text-lg">☐</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground italic mb-8">
            Если все 9 пунктов — ОК, перед вами нормальное устройство. Можно обсуждать цену.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-12 mb-6">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              { q: "Сколько времени занимает полная проверка?", a: "15–20 минут, если заранее знаете, что проверять. С этим чек-листом — быстрее." },
              { q: "Что делать, если продавец торопит и не даёт проверить?", a: "Отказывайтесь. Добросовестному продавцу нечего скрывать. Спешка — красный флаг." },
              { q: "Battery Health 82% — это нормально?", a: "Пограничное состояние. Работать будет, но зарядка не дотянет до вечера при активном использовании. Закладывайте 3 000–5 000 ₽ на замену аккумулятора и торгуйтесь." },
              { q: "Как отличить оригинальный экран от замены?", a: "Проверьте True Tone в Настройки → Экран и яркость. Если переключатель отсутствует — экран заменён. Также можно использовать 3uTools (подключение к компьютеру)." },
              { q: "Обязательна ли коробка?", a: "Нет. Но если коробка есть — сверьте серийник на ней с номером в настройках айфона. Совпадает = хороший знак." },
              { q: "Где безопаснее покупать б/у iPhone в Казани?", a: "Самый надёжный вариант — в проверенном магазине, который проводит диагностику и даёт гарантию. В ЭПЛ-КОЛЛЕКЦИЯ все б/у устройства проходят полную диагностику перед продажей." },
            ].map(({ q, a }, i) => (
              <details key={i} className="border border-border rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 font-semibold cursor-pointer hover:bg-muted/30 list-none flex items-center justify-between">
                  <span>{q}</span>
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Заключение */}
        <div className="mt-10 p-5 bg-muted/40 border border-border rounded-2xl text-sm text-muted-foreground italic">
          Статья написана на основе реального опыта диагностики б/у iPhone в сервисном центре ЭПЛ-КОЛЛЕКЦИЯ в Казани.
          Если не хотите проверять сами — <strong className="text-foreground not-italic">приносите устройство к нам</strong>, проведём полную диагностику за 15 минут.
        </div>

        {/* CTA блок */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Link
            href="/iphone"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-center"
          >
            📱 Проверенные б/у iPhone в наличии
          </Link>
          <a
            href="https://t.me/ac_care"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors text-center"
          >
            ✈️ Записаться на диагностику
          </a>
        </div>

        {/* Перелинковка */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Читайте также:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/iphone/iphone-16-pro-max", label: "iPhone 16 Pro Max" },
              { href: "/iphone/iphone-17-pro-max", label: "iPhone 17 Pro Max" },
              { href: "/iphone/iphone-16",         label: "iPhone 16" },
              { href: "/blog",                      label: "Все статьи блога" },
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
