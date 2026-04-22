import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCategoryConfig, ALL_CATEGORY_SLUGS } from "@/lib/categories";
import { getModelsByCategory, getModelUrl } from "@/lib/models";
import { DEFAULT_CITY } from "@/lib/cities";
import { buildItemListSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { formatPrice } from "@/lib/utils";

const city = DEFAULT_CITY;

// ─── Static params ─────────────────────────────────────────────────────────
export function generateStaticParams() {
  return ALL_CATEGORY_SLUGS.map((slug) => ({ category: slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryConfig(category);
  if (!cat) return { title: "Страница не найдена" };

  return {
    title: cat.pageTitle,
    description: cat.pageDescription,
    alternates: { canonical: `${city.siteUrl}/${cat.slug}` },
    openGraph: {
      title: cat.pageTitle,
      description: cat.pageDescription,
      url: `${city.siteUrl}/${cat.slug}`,
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryConfig(category);
  if (!cat) notFound();

  const models = getModelsByCategory(category);

  const itemListSchema = buildItemListSchema(models, city);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Главная", url: city.siteUrl },
    { name: cat.name, url: `${city.siteUrl}/${cat.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Хлебные крошки" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary transition-colors">Главная</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium">{cat.name}</li>
          </ol>
        </nav>

        {/* ── H1 ── */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{cat.h1}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{cat.pageDescription}</p>
        </header>

        {/* ── Сетка моделей ── */}
        {models.length > 0 ? (
          <section aria-label={`Каталог ${cat.name}`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {models.map((model) => (
                <Link
                  key={model.slug}
                  href={getModelUrl(model)}
                  className="group relative bg-card border border-border rounded-2xl p-4 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {/* Бейдж */}
                  {model.badge && (
                    <span className={
                      `absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full z-10 ` +
                      (model.badge === "NEW"  ? "bg-primary text-primary-foreground" :
                       model.badge === "SALE" ? "bg-red-500 text-white" :
                                               "bg-amber-500 text-white")
                    }>
                      {model.badge}
                    </span>
                  )}

                  {/* Изображение */}
                  <div className="aspect-square relative mb-3 flex items-center justify-center bg-muted/30 rounded-xl overflow-hidden">
                    <Image
                      src={`/assets/${model.image}.avif`}
                      alt={`Купить ${model.name} в ${city.namePre} — ЭПЛ-КОЛЛЕКЦИЯ`}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 23vw"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Название */}
                  <h2 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {model.name}
                  </h2>

                  {/* Подзаголовок */}
                  <p className="text-xs text-muted-foreground mb-3 flex-1 line-clamp-2">
                    {model.subtitle}
                  </p>

                  {/* Цена */}
                  <div className="mt-auto">
                    <p className="text-xs text-muted-foreground">от</p>
                    <p className="text-lg font-bold text-primary">
                      {formatPrice(model.priceFrom)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      или {formatPrice(Math.ceil(model.priceFrom / 10))}/мес
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          /* Пустой каталог — скоро появится */
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-5xl mb-4">{cat.emoji}</p>
            <h2 className="text-xl font-semibold mb-2">Каталог {cat.name} скоро появится</h2>
            <p className="mb-6">Напишите нам — поможем подобрать и закажем для вас</p>
            <a
              href={city.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Написать в Telegram
            </a>
          </div>
        )}

        {/* ── SEO-текст для категории ── */}
        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">
            {cat.name} {city.namePre} — ЭПЛ-КОЛЛЕКЦИЯ
          </h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">Купить {cat.name} {city.namePre}</strong> выгодно можно в магазине ЭПЛ-КОЛЛЕКЦИЯ.
              Все устройства — оригинальные, с полным комплектом документов и гарантией 1 год.
            </p>
            <p>
              Мы предлагаем <strong className="text-foreground">рассрочку 0% на 10 месяцев</strong> без первоначального взноса и переплат.
              Оформление занимает 5 минут онлайн, одобрение — в день обращения.
            </p>
            <p>
              Доставка <strong className="text-foreground">бесплатно по всей {city.nameGen}</strong> в день заказа.
              Оплата только после проверки устройства при получении.
              Магазин: <strong className="text-foreground">{city.name}, {city.address}</strong>, {city.hours}.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
