import type { Metadata } from "next";
import Link from "next/link";
import BuCatalog from "@/components/bu-iphone/BuCatalog";

export const dynamic = "force-static";

const URL = "https://xn----jtbjgbccazg9frdtb.xn--p1ai/bu-iphone";

export const metadata: Metadata = {
  title: "Б/У iPhone в Казани с гарантией | ЭПЛ-КОЛЛЕКЦИЯ",
  description: "Б/У iPhone 13–17 в Казани с гарантией 60 дней. Все устройства проверены, отвязаны от Apple ID. Рассрочка 0%. Доставка по Казани.",
  keywords: [
    "купить бу iphone казань", "бу айфон казань", "iphone бу казань",
    "айфон с пробегом казань", "поддержанный iphone", "iphone б/у Казань",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Б/У iPhone в Казани с гарантией",
    description: "iPhone 13–17 с пробегом. Гарантия 60 дней, рассрочка, проверка перед продажей.",
    url: URL,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://xn----jtbjgbccazg9frdtb.xn--p1ai" },
    { "@type": "ListItem", position: 2, name: "Б/У iPhone в Казани", item: URL },
  ],
};

export default function BuIphonePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Б/У iPhone</span>
        </nav>

        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Б/У iPhone в Казани с гарантией
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Проверенные iPhone 13–17 Max. Гарантия 60 дней, отвязаны от Apple ID.
          </p>
        </div>

        {/* Преимущества — компактные */}
        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {[
            { icon: "🛡️", title: "Гарантия 60 дней", text: "На все б/у устройства" },
            { icon: "✅", title: "Проверены инженером", text: "АКБ, экран, камера, Face ID" },
            { icon: "💳", title: "Рассрочка 0%", text: "На 12 месяцев без переплат" },
          ].map(({ icon, title, text }) => (
            <div key={title} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-muted/30">
              <span className="text-2xl shrink-0">{icon}</span>
              <div>
                <p className="font-semibold text-sm">{title}</p>
                <p className="text-xs text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Каталог */}
        <BuCatalog />

        {/* Перелинковка */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Смотрите также:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/iphone", label: "Новые iPhone" },
              { href: "/skupka-iphone", label: "Продать iPhone" },
              { href: "/blog/kak-proverit-bu-iphone-pered-pokupkoy", label: "Как проверять б/у iPhone" },
              { href: "/blog/optimizaciya-akkumulyatora-iphone-ios-26", label: "Оптимизация аккумулятора" },
              { href: "/about", label: "О нас" },
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
