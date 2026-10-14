import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://xn----jtbjgbccazg9frdtb.xn--p1ai";

export interface ArticleMeta {
  slug: string;
  title: string;
  /** Короткое название для хлебных крошек */
  short: string;
  description: string;
  keywords: string[];
  tag: string;
  date: string; // YYYY-MM-DD
  dateLabel: string; // «14 октября 2026»
  readTime: string;
  image: string; // имя файла в /assets без расширения
  imageAlt: string;
}

export interface Faq { q: string; a: string }

export function articleMetadata(a: ArticleMeta): Metadata {
  const url = `${SITE}/blog/${a.slug}/`;
  return {
    title: `${a.title} | ЭПЛ-КОЛЛЕКЦИЯ Казань`,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: a.title, description: a.description, url, type: "article", publishedTime: a.date,
      images: [{ url: `/assets/${a.image}.avif`, width: 800, height: 800, alt: a.imageAlt }],
    },
  };
}

export default function ArticleLayout({
  meta, toc, faq, related, children,
}: {
  meta: ArticleMeta;
  toc: Array<[string, string]>;
  faq: Faq[];
  related: Array<{ href: string; label: string }>;
  children: React.ReactNode;
}) {
  const url = `${SITE}/blog/${meta.slug}/`;
  const schemas = [
    {
      "@context": "https://schema.org", "@type": "Article", headline: meta.title, description: meta.description, url,
      datePublished: meta.date, dateModified: meta.date,
      author: { "@type": "Organization", name: "ЭПЛ-КОЛЛЕКЦИЯ", url: SITE },
      publisher: { "@type": "Organization", name: "ЭПЛ-КОЛЛЕКЦИЯ", url: SITE },
      image: `${SITE}/assets/${meta.image}.avif`, mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faq.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Блог", item: `${SITE}/blog/` },
        { "@type": "ListItem", position: 3, name: meta.title, item: url },
      ],
    },
  ];
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog/" className="hover:text-primary">Блог</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{meta.short}</span>
        </nav>

        <div className="mb-4">
          <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">{meta.tag}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{meta.title}</h1>

        <div className="flex items-center gap-3 mb-6 p-4 bg-muted/40 rounded-xl border border-border">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">ЭК</div>
          <div>
            <p className="font-semibold text-sm">Редакция ЭПЛ-КОЛЛЕКЦИЯ</p>
            <p className="text-xs text-muted-foreground">Магазин техники в Казани · {meta.readTime} чтения</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-muted-foreground">Опубликовано</p>
            <p className="text-xs font-medium">{meta.dateLabel}</p>
          </div>
        </div>

        <div className="mb-8 rounded-2xl overflow-hidden bg-muted/20 aspect-[16/9] relative">
          <Image src={`/assets/${meta.image}.avif`} alt={meta.imageAlt} fill sizes="(max-width: 768px) 100vw, 760px"
            className="object-contain p-6 mix-blend-multiply dark:mix-blend-normal" priority />
        </div>

        <div className="bg-muted/40 border border-border rounded-xl p-5 mb-10">
          <p className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Содержание</p>
          <ol className="space-y-1.5 text-sm list-decimal pl-4">
            {toc.map(([label, href]) => (
              <li key={href}><a href={href} className="text-primary hover:underline">{label}</a></li>
            ))}
          </ol>
        </div>

        <div className="article-body text-muted-foreground leading-relaxed space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5">
          {children}
        </div>

        <h2 id="faq" className="text-2xl font-bold mt-12 mb-6">Частые вопросы</h2>
        <div className="space-y-3">
          {faq.map(({ q, a }, i) => (
            <details key={i} className="border border-border rounded-xl overflow-hidden group">
              <summary className="px-5 py-4 font-semibold cursor-pointer hover:bg-muted/30 list-none flex items-center justify-between text-sm">
                <span>{q}</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{a}</div>
            </details>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <a href="https://t.me/ac_care" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-center">
            💬 Задать вопрос в Telegram
          </a>
          <Link href="/iphone/"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors text-center">
            📱 Каталог iPhone в Казани
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Читайте также:</p>
          <div className="flex flex-wrap gap-2">
            {related.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm px-3 py-1.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/** Цветная врезка в статье: совет, важно, предупреждение, вывод */
export function Callout({ tone = "info", title, children }: { tone?: "info" | "tip" | "warn" | "verdict"; title?: string; children: React.ReactNode }) {
  const cls = {
    info: "border-blue-400 bg-blue-50 dark:bg-blue-950/20",
    tip: "border-green-500 bg-green-50 dark:bg-green-950/20",
    warn: "border-amber-400 bg-amber-50 dark:bg-amber-950/20",
    verdict: "border-primary bg-primary/5",
  }[tone];
  return (
    <div className={`border-l-4 ${cls} pl-4 pr-5 py-4 rounded-r-xl my-6`}>
      {title && <p className="font-semibold text-sm text-foreground mb-1">{title}</p>}
      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

/** Простая таблица для статей */
export function ArticleTable({ head, rows }: { head: string[]; rows: Array<Array<React.ReactNode>> }) {
  return (
    <div className="overflow-x-auto -mx-1 my-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border text-left text-foreground">
            {head.map((h, i) => <th key={i} className="py-2 pr-3 font-semibold">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/60 align-top">
              {r.map((c, j) => <td key={j} className={`py-2 pr-3 ${j === 0 ? "font-medium text-foreground" : ""}`}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
