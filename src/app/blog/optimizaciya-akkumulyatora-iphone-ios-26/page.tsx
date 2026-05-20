import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

const ARTICLE = {
  title: "Как оптимизировать аккумулятор Айфона на iOS 26–27: полный гайд",
  description: "Пошаговая настройка аккумулятора iPhone 15, 16, 17 на iOS 26 и 27. Adaptive Power, лимит зарядки, 10 настроек которые реально работают. Таблица по моделям.",
  url: "https://xn----jtbjgbccazg9frdtb.xn--p1ai/blog/optimizaciya-akkumulyatora-iphone-ios-26",
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  author: { name: "Александр Романов", role: "Инженер сервисного центра ЭПЛ-КОЛЛЕКЦИЯ, Казань", exp: "Тестирует батарею на всех моделях с 2018 года" },
};

export const metadata: Metadata = {
  title: `${ARTICLE.title} | ЭПЛ-КОЛЛЕКЦИЯ Казань`,
  description: ARTICLE.description,
  keywords: ["оптимизировать аккумулятор айфон", "настройка аккумулятора айфон", "батарея айфон ios 26", "экономия заряда айфон", "Adaptive Power айфон", "лимит зарядки айфон", "Battery Health", "быстро разряжается айфон"],
  alternates: { canonical: ARTICLE.url },
  openGraph: {
    title: ARTICLE.title,
    description: ARTICLE.description,
    url: ARTICLE.url,
    type: "article",
    publishedTime: ARTICLE.datePublished,
    authors: [ARTICLE.author.name],
    images: [{ url: "/assets/iphone-17-pro-max-silver.avif", width: 800, height: 800, alt: "Оптимизация аккумулятора iPhone на iOS 26" }],
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
  image: "/assets/iphone-17-pro-max-silver.avif",
  mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE.url },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Нужно ли отключать Wi-Fi и Bluetooth для экономии батареи?", acceptedAnswer: { "@type": "Answer", text: "Нет. В 2026 году Wi-Fi и Bluetooth потребляют минимум энергии в режиме ожидания. Отключать их имеет смысл только в авиарежиме." } },
    { "@type": "Question", name: "Adaptive Power — это то же самое что режим энергосбережения?", acceptedAnswer: { "@type": "Answer", text: "Нет. Режим энергосбережения грубо обрезает функции. Adaptive Power тонко подкручивает десятки параметров — вы почти не замечаете разницы в использовании, но батарея живёт дольше." } },
    { "@type": "Question", name: "Сколько стоит замена аккумулятора iPhone в Казани?", acceptedAnswer: { "@type": "Answer", text: "iPhone 13–14 — от 3 000 до 5 000 ₽, iPhone 15 — от 4 500 до 7 000 ₽, iPhone 16–17 — уточняйте в ЭПЛ-КОЛЛЕКЦИЯ. Замена имеет смысл если Battery Health ниже 80%." } },
    { "@type": "Question", name: "Почему iPhone быстро разряжается после обновления iOS 26?", acceptedAnswer: { "@type": "Answer", text: "Первые 2–5 дней после обновления iOS переиндексирует данные для Apple Intelligence. Это нормально. Подключите iPhone к зарядке и Wi-Fi с выключенным экраном — ускорит процесс." } },
    { "@type": "Question", name: "Какой лимит зарядки поставить на iPhone?", acceptedAnswer: { "@type": "Answer", text: "Если заряжаете каждую ночь — 80–85%. Если активное использование — 90–95%. Если нужен максимум — 100% с включённой оптимизированной зарядкой." } },
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
          <span className="text-foreground">Оптимизация аккумулятора</span>
        </nav>

        <div className="mb-4">
          <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
            Советы и гайды
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Как оптимизировать аккумулятор Айфона на iOS 26–27: полный гайд
        </h1>

        {/* Автор */}
        <div className="flex items-center gap-3 mb-6 p-4 bg-muted/40 rounded-xl border border-border">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary shrink-0">АР</div>
          <div>
            <p className="font-semibold text-sm">{ARTICLE.author.name}</p>
            <p className="text-xs text-muted-foreground">{ARTICLE.author.role}</p>
            <p className="text-xs text-muted-foreground">{ARTICLE.author.exp}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-muted-foreground">Опубликовано</p>
            <p className="text-xs font-medium">20 мая 2026</p>
          </div>
        </div>

        {/* Главное фото */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
          <Image
            src="/assets/iphone-17-pro-max-silver.avif"
            alt="Оптимизация аккумулятора iPhone на iOS 26 — настройка батареи для iPhone 15, 16, 17"
            fill sizes="(max-width: 768px) 100vw, 760px"
            className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
            priority
          />
        </div>

        {/* Лид */}
        <p className="text-lg leading-relaxed text-muted-foreground mb-4">
          После обновления на iOS 26 многие жалуются: «Айфон стал разряжаться быстрее». В большинстве случаев это нормально — первые 2–3 дня система переиндексирует данные, и на это уходит энергия. Но если через неделю ситуация не улучшилась — пора разобраться в настройках.
        </p>
        <p className="text-muted-foreground mb-8">
          В этом гайде — только то, что реально влияет на автономность iPhone 15, 16 и 17 серий на iOS 26. Без воды, без советов из 2015 года вроде «отключите Wi-Fi».
        </p>

        {/* Содержание */}
        <div className="bg-muted/40 border border-border rounded-xl p-5 mb-10">
          <p className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Содержание</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-4">
            {[
              ["Что нового в батарее на iOS 26", "#ios26"],
              ["Adaptive Power — главная фишка", "#adaptive"],
              ["Лимит зарядки — как правильно настроить", "#limit"],
              ["10 настроек, которые реально работают", "#nastroyki"],
              ["Различия по моделям — таблица", "#modeli"],
              ["Айфон быстро разряжается после обновления", "#razryad"],
              ["Что ожидать от iOS 27", "#ios27"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <li key={href}><a href={href} className="text-primary hover:underline">{label}</a></li>
            ))}
          </ol>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">

          {/* iOS 26 */}
          <h2 id="ios26" className="text-2xl font-bold mt-10 mb-5">Что нового в батарее на iOS 26</h2>
          <p className="text-muted-foreground mb-4">Apple полностью переработала раздел «Аккумулятор» в настройках. Вот главные изменения по сравнению с iOS 18:</p>

          <div className="space-y-4 mb-6">
            {[
              { title: "Новый интерфейс статистики", text: "Вместо разбивки 24 часа / 10 дней — недельный обзор с объяснением причин расхода. iOS теперь показывает какие приложения тратят заряд в фоне и почему: уведомления, фоновая активность или время на экране." },
              { title: "Время до полной зарядки", text: "На экране блокировки теперь видно оставшееся время до 100%. Не нужно гадать когда отключать зарядку." },
              { title: "Серый значок батареи", text: "Если зарядка приостановлена из-за перегрева или оптимизации — значок батареи становится серым. Раньше люди думали что зарядка сломалась." },
              { title: "Оптимизация Liquid Glass", text: "iOS 26.0 тратила заряд на тяжёлые HDR-эффекты интерфейса. В iOS 26.1 Apple это исправила. Если вы на 26.0 — обновитесь как минимум до 26.1." },
            ].map(({ title, text }) => (
              <div key={title} className="border border-border rounded-xl overflow-hidden">
                <div className="px-5 py-2.5 bg-muted/40 font-semibold text-sm">{title}</div>
                <div className="px-5 py-3 text-sm text-muted-foreground">{text}</div>
              </div>
            ))}
          </div>

          {/* Adaptive Power */}
          <h2 id="adaptive" className="text-2xl font-bold mt-10 mb-4">Adaptive Power — главная фишка, которую нужно включить</h2>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-5">
            <p className="font-semibold mb-1">Если вы ничего больше не сделаете из этого гайда — включите хотя бы это.</p>
            <p className="text-sm text-muted-foreground">Adaptive Power — умный режим который подстраивает работу iPhone под текущий заряд. В отличие от режима энергосбережения который грубо обрезает функции, Adaptive Power работает точечно: чуть снижает яркость, чуть реже обновляет фоновые приложения, чуть сдерживает анимации. Вы почти не замечаете разницы, но батарея живёт дольше.</p>
          </div>

          <p className="text-sm font-semibold mb-2">Где включить:</p>
          <p className="text-sm bg-muted/50 px-4 py-2.5 rounded-xl font-mono mb-5">Настройки → Аккумулятор → Режим питания → Adaptive Power → включить</p>

          <p className="font-semibold mb-3 text-sm">Какие модели поддерживают:</p>
          <div className="overflow-x-auto rounded-xl border border-border mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-2.5 text-left font-semibold">Модель</th>
                  <th className="px-4 py-2.5 text-left font-semibold">Adaptive Power</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["iPhone 15", "❌"],
                  ["iPhone 15 Pro / Pro Max", "✅"],
                  ["iPhone 16 / 16 Plus", "✅"],
                  ["iPhone 16 Pro / Pro Max", "✅"],
                  ["iPhone 17 / 17 Air", "✅"],
                  ["iPhone 17 Pro / Pro Max", "✅"],
                ].map(([model, support], i) => (
                  <tr key={model} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                    <td className="px-4 py-2.5 font-medium">{model}</td>
                    <td className={`px-4 py-2.5 font-medium ${support === "✅" ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}>{support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>💡 Почему iPhone 15 не поддерживает:</strong> Adaptive Power требует тех же ресурсов что Apple Intelligence — нейронный движок чипа A17 Pro и выше. iPhone 15 работает на A16 Bionic.
            </p>
          </div>

          {/* Лимит зарядки */}
          <h2 id="limit" className="text-2xl font-bold mt-10 mb-4">Лимит зарядки — как правильно настроить</h2>
          <p className="text-muted-foreground mb-4 text-sm">Литий-ионные аккумуляторы живут дольше если их не держать постоянно на 100%. С iOS 18 Apple добавила настройку лимита зарядки по процентам.</p>

          <div className="space-y-3 mb-5">
            <div className="border border-border rounded-xl p-4">
              <p className="font-semibold text-sm mb-1">iPhone 15, 16, 17:</p>
              <p className="text-xs font-mono bg-muted/50 px-3 py-2 rounded-lg">Настройки → Аккумулятор → Зарядка → выберите процент (80%, 85%, 90%, 95% или 100%)</p>
            </div>
            <div className="border border-border rounded-xl p-4">
              <p className="font-semibold text-sm mb-1">iPhone 14 и старше (на iOS 26):</p>
              <p className="text-xs font-mono bg-muted/50 px-3 py-2 rounded-lg">Настройки → Аккумулятор → Состояние и зарядка → Оптимизированная зарядка</p>
              <p className="text-xs text-muted-foreground mt-1">Лимит по процентам на этих моделях недоступен.</p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-2.5 text-left font-semibold">Ваш сценарий</th>
                  <th className="px-4 py-2.5 text-left font-semibold">Рекомендуемый лимит</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Заряжаете каждую ночь, хватает на день", "80–85%"],
                  ["Активное использование, иногда не хватает", "90–95%"],
                  ["Путешествия, длинные дни без зарядки", "100% + оптимизированная зарядка"],
                  ["Не хотите думать об этом", "100% + оптимизированная зарядка"],
                ].map(([scenario, limit], i) => (
                  <tr key={scenario} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                    <td className="px-4 py-2.5 text-muted-foreground">{scenario}</td>
                    <td className="px-4 py-2.5 font-semibold text-primary">{limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-muted/40 border border-border rounded-xl p-4 mb-8">
            <p className="font-semibold text-sm mb-1">🆕 Новинка iOS 26.4 — автоматизация через «Команды»</p>
            <p className="text-sm text-muted-foreground">Появилось действие «Установить лимит зарядки» в Shortcuts. Можно настроить: дома заряжать до 85%, в поездке до 100%. Или привязать к режиму «Сон» — лимит 80%.</p>
          </div>

          {/* Фото */}
          <div className="my-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
            <Image
              src="/assets/iphone-16-pro-black-titanium.avif"
              alt="Настройка аккумулятора iPhone 16 Pro — лимит зарядки и Adaptive Power на iOS 26"
              fill sizes="(max-width: 768px) 100vw, 760px"
              className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

          {/* 10 настроек */}
          <h2 id="nastroyki" className="text-2xl font-bold mt-10 mb-6">10 настроек, которые реально экономят заряд</h2>

          <div className="space-y-4 mb-8">
            {[
              {
                n: 1, title: "Отключите ненужную фоновую активность приложений",
                where: "Настройки → Основные → Обновление контента",
                text: "Отключите приложения которым не нужно обновляться в фоне: игры, соцсети, магазины. Мессенджеры и почту оставьте. В iOS 26 раздел Аккумулятор показывает какие приложения тратят заряд в фоне — ориентируйтесь на эти данные.",
                effect: "⚡⚡⚡ Заметный",
              },
              {
                n: 2, title: "Переключите 5G на «Авто»",
                where: "Настройки → Сотовая связь → Голос и данные → 5G Авто",
                text: "В режиме «5G Вкл» модем постоянно ищет 5G-сеть даже если покрытие слабое. «5G Авто» использует 5G только когда это реально быстрее. В Казани 5G-покрытие неоднородное — «Авто» оптимальный выбор.",
                effect: "⚡⚡ Умеренный",
              },
              {
                n: 3, title: "Настройте геолокацию по приложениям",
                where: "Настройки → Конфиденциальность → Службы геолокации",
                text: "Ставьте «При использовании» для всего кроме навигации. Отключите «Точная геолокация» для соцсетей, новостей, магазинов — им не нужна ваша улица.",
                effect: "⚡⚡⚡ Заметный",
              },
              {
                n: 4, title: "Включите автояркость",
                where: "Настройки → Универсальный доступ → Дисплей и размер текста → Автояркость",
                text: "Экран — главный потребитель энергии. Автояркость снижает яркость в темноте и увеличивает на солнце. Если держите яркость на максимуме постоянно — это самый быстрый способ посадить батарею.",
                effect: "⚡⚡⚡⚡ Значительный",
              },
              {
                n: 5, title: "Используйте тёмный режим",
                where: "Настройки → Экран и яркость → Тёмная тема",
                text: "Все модели iPhone 15, 16, 17 имеют OLED-дисплей. На OLED тёмные пиксели потребляют меньше энергии чем белые. Тёмный режим экономит 15–30% заряда экрана — особенно если вы много читаете и сидите в мессенджерах.",
                effect: "⚡⚡⚡⚡ Значительный",
              },
              {
                n: 6, title: "Отключите Always-On Display (только Pro)",
                where: "Настройки → Экран и яркость → Всегда на экране",
                text: "Always-On показывает время на заблокированном экране. Удобно, но тратит 10–15% батареи за день. Доступно на iPhone 15 Pro/Pro Max, 16 Pro/Pro Max, 17 Pro/Pro Max.",
                effect: "⚡⚡⚡ Заметный (только Pro)",
              },
              {
                n: 7, title: "Ограничьте Push-уведомления",
                where: "Настройки → Уведомления → пройдитесь по приложениям",
                text: "Каждое push-уведомление будит экран, включает модем, запускает процесс. Отключите уведомления от маркетплейсов, игр, рекламных рассылок — тех что не требуют мгновенной реакции.",
                effect: "⚡⚡ Умеренный",
              },
              {
                n: 8, title: "Отключите «Поднятие для активации»",
                where: "Настройки → Экран и яркость → Поднятие для активации",
                text: "Каждый наклон телефона включает экран. Если iPhone в кармане постоянно срабатывает — это лишний расход. Если удобно — оставьте, экономия небольшая.",
                effect: "⚡ Небольшой",
              },
              {
                n: 9, title: "Включите Wi-Fi Calling",
                where: "Настройки → Сотовая связь → Wi-Fi-вызовы",
                text: "Звонки через Wi-Fi расходуют меньше энергии чем через сотовую сеть. Особенно актуально дома и в офисе.",
                effect: "⚡ Небольшой",
              },
              {
                n: 10, title: "Перезагружайте iPhone раз в неделю",
                where: "Боковая кнопка + кнопка громкости → «Выключить»",
                text: "Перезагрузка очищает оперативную память и завершает зависшие процессы. Особенно актуально после обновления iOS.",
                effect: "⚡⚡ Умеренный",
              },
            ].map(({ n, title, where, text, effect }) => (
              <div key={n} className="border border-border rounded-xl overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-3 bg-muted/40">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">{n}</span>
                  <span className="font-semibold">{title}</span>
                  <span className="ml-auto text-xs text-muted-foreground whitespace-nowrap">{effect}</span>
                </div>
                <div className="px-5 py-3">
                  <p className="text-xs font-mono bg-muted/50 px-3 py-2 rounded-lg mb-2">{where}</p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Таблица по моделям */}
          <h2 id="modeli" className="text-2xl font-bold mt-10 mb-4">Различия по моделям</h2>

          <div className="overflow-x-auto rounded-xl border border-border mb-6">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  {["Функция", "iPhone 15", "15 Pro/Max", "iPhone 16", "16 Pro/Max", "iPhone 17", "17 Pro/Max"].map(h => (
                    <th key={h} className="px-3 py-2.5 text-left font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Adaptive Power", "❌", "✅", "✅", "✅", "✅", "✅"],
                  ["Лимит зарядки", "✅", "✅", "✅", "✅", "✅", "✅"],
                  ["Оптимизированная зарядка", "✅", "✅", "✅", "✅", "✅", "✅"],
                  ["Always-On Display", "❌", "✅", "❌", "✅", "❌", "✅"],
                  ["ProMotion 120 Гц", "❌", "✅", "❌", "✅", "❌", "✅"],
                  ["Автоматизация лимита (26.4)", "✅", "✅", "✅", "✅", "✅", "✅"],
                  ["Ёмкость батареи", "3 877", "3 274 / 4 422", "3 561", "3 582 / 4 685", "~3 600", "~3 800 / ~4 700"],
                  ["Типичное время (экран)", "8–10 ч", "9–11 / 12–14 ч", "9–11 ч", "10–12 / 13–16 ч", "10–12 ч", "11–13 / 14–17 ч"],
                ].map(([func, ...vals], i) => (
                  <tr key={func} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                    <td className="px-3 py-2.5 font-medium text-foreground whitespace-nowrap">{func}</td>
                    {vals.map((v, j) => (
                      <td key={j} className={`px-3 py-2.5 whitespace-nowrap ${v === "✅" ? "text-green-600 dark:text-green-400" : v === "❌" ? "text-red-500" : ""}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-8">
            <p className="text-sm"><strong>Вывод:</strong> Pro Max модели — чемпионы автономности за счёт больших батарей. Обычные 15 и 16 выигрывают от отсутствия Always-On Display. iPhone 17 Pro Max — рекордсмен серии с батареей ~4 700 мАч.</p>
          </div>

          {/* Быстро разряжается */}
          <h2 id="razryad" className="text-2xl font-bold mt-10 mb-4">Что делать если iPhone быстро разряжается после обновления</h2>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/20 pl-4 pr-5 py-4 rounded-r-xl">
              <p className="font-semibold text-sm mb-1">Первые 2–3 дня: не паникуйте</p>
              <p className="text-sm text-muted-foreground">После iOS 26 система переиндексирует фото, сообщения и данные для Apple Intelligence. В разделе «Аккумулятор» может быть надпись «Идёт настройка устройства» — это нормально. Подключите iPhone к зарядке и Wi-Fi с выключенным экраном — ускорит процесс.</p>
            </div>
            <div className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/20 pl-4 pr-5 py-4 rounded-r-xl">
              <p className="font-semibold text-sm mb-1">Через неделю: проверьте виновников</p>
              <p className="text-sm text-muted-foreground">Настройки → Аккумулятор → посмотрите топ потребителей. iOS 26 показывает причину: фоновая активность, уведомления или экранное время. Найдите проблемное приложение и ограничьте через «Обновление контента».</p>
            </div>
            <div className="border-l-4 border-red-400 bg-red-50 dark:bg-red-950/20 pl-4 pr-5 py-4 rounded-r-xl">
              <p className="font-semibold text-sm mb-2">Если ничего не помогает — план действий:</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal pl-4">
                <li>Перезагрузите iPhone (боковая кнопка + кнопка громкости вниз)</li>
                <li>Обновитесь до последней версии iOS (26.1 исправила проблемы с Liquid Glass)</li>
                <li>Сбросьте все настройки: Настройки → Основные → Перенос или сброс → Сбросить все настройки</li>
                <li>Если Battery Health ниже 80% — никакие настройки не помогут. Нужна замена аккумулятора.</li>
              </ol>
            </div>
          </div>

          {/* Фото */}
          <div className="my-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
            <Image
              src="/assets/iphone-17-black.avif"
              alt="iPhone 17 — оптимизация аккумулятора и Battery Health на iOS 26"
              fill sizes="(max-width: 768px) 100vw, 760px"
              className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

          {/* iOS 27 */}
          <h2 id="ios27" className="text-2xl font-bold mt-10 mb-4">Что ожидать от iOS 27</h2>
          <p className="text-muted-foreground mb-4 text-sm">Apple анонсирует iOS 27 на WWDC 2026 (8 июня 2026). На основе утечек и логики развития:</p>
          <ul className="text-muted-foreground space-y-2 mb-6 text-sm list-disc pl-5">
            <li>Расширение Adaptive Power на все модели с чипом A16 и новее — потенциально включая обычный iPhone 15</li>
            <li>Точные рекомендации по лимиту зарядки на основе машинного обучения — система сама предложит оптимальный процент</li>
            <li>Прогноз автономности: «При текущем темпе заряда хватит до 22:30»</li>
            <li>Дальнейшая оптимизация Liquid Glass для снижения энергопотребления интерфейса</li>
          </ul>
          <div className="bg-muted/40 border border-border rounded-xl p-4 mb-8">
            <p className="text-sm text-muted-foreground">Когда iOS 27 выйдет (ожидается сентябрь 2026), мы обновим эту статью с новыми настройками.</p>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-2xl font-bold mt-12 mb-6">Частые вопросы</h2>
          <div className="space-y-3">
            {[
              { q: "Нужно ли отключать Wi-Fi и Bluetooth для экономии батареи?", a: "Нет. В 2026 году они потребляют минимум энергии в режиме ожидания. Отключать имеет смысл только в авиарежиме когда каждый процент на счету." },
              { q: "Adaptive Power — это то же самое что режим энергосбережения?", a: "Нет. Low Power Mode грубо обрезает функции: убирает анимации, снижает частоту обновления экрана. Adaptive Power тонко подкручивает десятки параметров — вы почти не замечаете разницы в использовании." },
              { q: "Вреден ли лимит зарядки 80% для повседневного использования?", a: "Не вреден для батареи — наоборот, продлевает её жизнь. Но может быть неудобен: 80% — это 6–8 часов экрана вместо 10–14 на Pro Max. Если не хватает на день — ставьте 90–95%." },
              { q: "Почему iPhone 15 не поддерживает Adaptive Power?", a: "Функция требует нейронного движка чипа A17 Pro и выше. iPhone 15 работает на A16 Bionic — ему не хватает вычислительной мощности для постоянного анализа энергопотребления." },
              { q: "Что лучше — зарядить до 100% перед долгим днём или оставить лимит?", a: "Если знаете что день будет тяжёлым — снимите лимит накануне или используйте «Разрешить до завтра» в настройках зарядки. Один раз до 100% ничего не сломает." },
              { q: "Замена аккумулятора в Казани — сколько стоит?", a: "iPhone 13–14 — от 3 000 до 5 000 ₽, iPhone 15 — от 4 500 до 7 000 ₽, iPhone 16–17 — уточняйте. Замена имеет смысл если Battery Health ниже 80%." },
              { q: "Стоит ли обновляться на iOS 26 если батарея и так плохая?", a: "Если Battery Health выше 85% — да, обновляйтесь. Adaptive Power и новая аналитика помогут. Если ниже 80% — обновление не спасёт, нужна замена аккумулятора." },
            ].map(({ q, a }, i) => (
              <details key={i} className="border border-border rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 font-semibold cursor-pointer hover:bg-muted/30 list-none flex items-center justify-between text-sm">
                  <span>{q}</span>
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Заключение */}
        <div className="mt-10 p-5 bg-muted/40 border border-border rounded-2xl text-sm text-muted-foreground italic">
          Если iPhone разряжается слишком быстро и настройки не помогают — возможно дело в износе аккумулятора.{" "}
          <strong className="text-foreground not-italic">Принесите устройство в ЭПЛ-КОЛЛЕКЦИЯ в Казани</strong> — проверим Battery Health за 5 минут и подскажем нужна ли замена.
        </div>

        {/* CTA */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <a href="https://t.me/ac_care" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-center">
            🔋 Проверить аккумулятор
          </a>
          <Link href="/iphone"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors text-center">
            📱 Купить iPhone с отличной батареей
          </Link>
        </div>

        {/* Перелинковка */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Читайте также:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/iphone/iphone-17-pro-max", label: "iPhone 17 Pro Max" },
              { href: "/iphone/iphone-16-pro-max", label: "iPhone 16 Pro Max" },
              { href: "/skupka-iphone", label: "Продать iPhone в Казани" },
              { href: "/blog/kak-proverit-bu-iphone-pered-pokupkoy", label: "Как проверить б/у iPhone" },
              { href: "/blog/kak-nastroit-kameru-iphone", label: "Настройка камеры iPhone" },
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
