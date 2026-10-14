import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Блог о технике Apple — советы, обзоры, новости | ЭПЛ-КОЛЛЕКЦИЯ Казань",
  description: "Полезные статьи о технике Apple от экспертов ЭПЛ-КОЛЛЕКЦИЯ в Казани. Как проверить б/у iPhone, обзоры новых моделей, советы по уходу за техникой.",
  alternates: { canonical: "https://xn----jtbjgbccazg9frdtb.xn--p1ai/blog" },
};

const ARTICLES = [
  {
    slug: "kakoy-iphone-kupit-v-2026",
    title: "Какой iPhone купить в 2026 году: гид по моделям и бюджету",
    description: "Сравнение iPhone 18 Pro, 17 Pro, 17, Air, 17e, 16 и 15 с актуальными ценами в Казани. Сколько памяти брать и какую версию SIM.",
    image: "/assets/iphone-17-pro-max-orange.avif",
    imageAlt: "Какой iPhone купить в 2026 году: гид по моделям и бюджету",
    date: "2026-10-14",
    readTime: "9 мин",
    author: "Редакция ЭПЛ-КОЛЛЕКЦИЯ",
    tag: "Советы покупателю",
  },
  {
    slug: "iphone-17-pro-max-ili-18-pro-max",
    title: "iPhone 17 Pro Max или 18 Pro Max: что выбрать и стоит ли переплачивать",
    description: "Переменная диафрагма, A20 Pro, автономность и вес — честное сравнение двух Pro Max и кому стоит переходить.",
    image: "/assets/iphone-18-pro-max.avif",
    imageAlt: "iPhone 17 Pro Max или 18 Pro Max: что выбрать и стоит ли переплачивать",
    date: "2026-10-14",
    readTime: "6 мин",
    author: "Редакция ЭПЛ-КОЛЛЕКЦИЯ",
    tag: "Сравнения",
  },
  {
    slug: "sim-ili-esim-iphone-v-rossii",
    title: "SIM или eSIM в iPhone: что выбрать в России в 2026 году",
    description: "Чем отличаются версии iPhone, какие операторы выдают eSIM, как её подключить и какую версию брать.",
    image: "/assets/iphone-17-air.avif",
    imageAlt: "SIM или eSIM в iPhone: что выбрать в России в 2026 году",
    date: "2026-10-14",
    readTime: "7 мин",
    author: "Редакция ЭПЛ-КОЛЛЕКЦИЯ",
    tag: "Советы покупателю",
  },
  {
    slug: "kak-perenesti-dannye-so-starogo-iphone",
    title: "Как перенести данные со старого iPhone на новый: 3 способа",
    description: "«Быстрое начало», iCloud или компьютер, перенос с Android, WhatsApp и банковские приложения — пошагово.",
    image: "/assets/iphone-17-pro-max-silver.avif",
    imageAlt: "Как перенести данные со старого iPhone на новый: 3 способа",
    date: "2026-10-14",
    readTime: "8 мин",
    author: "Редакция ЭПЛ-КОЛЛЕКЦИЯ",
    tag: "Советы и гайды",
  },
  {
    slug: "optimizaciya-akkumulyatora-iphone-ios-26",
    title: "Как оптимизировать аккумулятор Айфона на iOS 26–27: полный гайд",
    description: "Adaptive Power, лимит зарядки, 10 настроек которые реально работают. Таблица по моделям iPhone 15, 16, 17. Что делать если быстро разряжается.",
    image: "/assets/iphone-17-pro-max-silver.avif",
    imageAlt: "Оптимизация аккумулятора iPhone на iOS 26",
    date: "2026-05-20",
    readTime: "12 мин",
    author: "Александр Романов",
    tag: "Советы и гайды",
  },
  {
    slug: "kak-nastroit-kameru-iphone",
    title: "Как настроить камеру iPhone для лучших фото и видео: гайд по моделям",
    description: "Пошаговая настройка камеры iPhone 15, 16, 17 Pro. Форматы, стили, HDR, ProRes, iOS 26 — что включить для максимального качества.",
    image: "/assets/iphone-17-pro-max-orange.avif",
    imageAlt: "Настройка камеры iPhone 17 Pro Max — гайд по всем моделям",
    date: "2026-05-01",
    readTime: "10 мин",
    author: "Александр Романов",
    tag: "Советы и гайды",
  },
  {
    slug: "kak-proverit-bu-iphone-pered-pokupkoy",
    title: "Как проверить б/у iPhone перед покупкой: чек-лист из 9 шагов",
    description: "Пошаговая проверка б/у iPhone от инженера сервисного центра. Аккумулятор, iCloud, Face ID, IMEI, экран — ничего не пропустите.",
    image: "/assets/iphone-16-pro-max-black-titanium.avif",
    imageAlt: "Проверка б/у iPhone перед покупкой — чек-лист",
    date: "2026-04-25",
    readTime: "8 мин",
    author: "Александр Романов",
    tag: "Советы покупателю",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Хлебные крошки */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Блог</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-3">Блог об Apple</h1>
      <p className="text-muted-foreground text-lg mb-10">
        Советы, обзоры и полезные статьи от экспертов ЭПЛ-КОЛЛЕКЦИЯ в Казани
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
          >
            <div className="aspect-[16/9] relative overflow-hidden bg-muted/20">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4 mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                  {article.tag}
                </span>
                <span className="text-xs text-muted-foreground">{article.readTime} чтения</span>
              </div>
              <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                {article.description}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>✍️ {article.author}</span>
                <span>{new Date(article.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
