import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Блог о технике Apple — советы, обзоры, новости | ЭПЛ-КОЛЛЕКЦИЯ Казань",
  description: "Полезные статьи о технике Apple от экспертов ЭПЛ-КОЛЛЕКЦИЯ в Казани. Как проверить б/у iPhone, обзоры новых моделей, советы по уходу за техникой.",
  alternates: { canonical: "https://xn----jtbjgbccazg9frdtb.xn--p1ai/blog" },
};

const ARTICLES = [
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
