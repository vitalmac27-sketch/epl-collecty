import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCategoryConfig } from "@/lib/categories";
import { getModelBySlug, ALL_MODEL_PARAMS, getModelUrl, getModelsByCategory } from "@/lib/models";
import { DEFAULT_CITY } from "@/lib/cities";
import {
  buildProductSchema,
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";
import { formatPrice, monthlyPayment } from "@/lib/utils";

const city = DEFAULT_CITY;

// ─── Static params (SSG для всех моделей) ─────────────────────────────────
export function generateStaticParams() {
  return ALL_MODEL_PARAMS; // [{ category: "iphone", model: "iphone-17-pro-max" }, ...]
}

// ─── Metadata ─────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; model: string }>;
}): Promise<Metadata> {
  const { category, model: modelSlug } = await params;
  const model = getModelBySlug(category, modelSlug);
  if (!model) return { title: "Страница не найдена" };

  const canonicalUrl = `${city.siteUrl}/${category}/${modelSlug}`;

  return {
    title: model.seoTitle,
    description: model.seoDescription,
    keywords: [
      `${model.name} ${city.nameGen}`,
      `купить ${model.name}`,
      `${model.name} цена ${city.nameGen}`,
      ...city.keywords,
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: model.seoTitle,
      description: model.seoDescription,
      url: canonicalUrl,
      images: [
        {
          url: `/assets/${model.image}.avif`,
          width: 800,
          height: 800,
          alt: `Купить ${model.name} ${city.namePre}`,
        },
      ],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default async function ModelPage({
  params,
}: {
  params: Promise<{ category: string; model: string }>;
}) {
  const { category, model: modelSlug } = await params;

  const model = getModelBySlug(category, modelSlug);
  if (!model) notFound();

  const cat = getCategoryConfig(category);
  if (!cat) notFound();

  // Похожие модели той же категории (исключаем текущую, берём 4)
  const relatedModels = getModelsByCategory(category)
    .filter((m) => m.slug !== modelSlug)
    .slice(0, 4);

  const productSchema = buildProductSchema({ model, city });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Главная", url: city.siteUrl },
    { name: cat.name, url: `${city.siteUrl}/${cat.slug}` },
    { name: model.name, url: `${city.siteUrl}/${category}/${modelSlug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Хлебные крошки" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li><Link href="/" className="hover:text-primary transition-colors">Главная</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={`/${cat.slug}`} className="hover:text-primary transition-colors">{cat.name}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium">{model.name}</li>
          </ol>
        </nav>

        {/* ── Hero: изображение + цена + кнопки ── */}
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">

          {/* Изображение */}
          <div className="relative">
            {model.badge && (
              <span className={
                `absolute top-4 left-4 z-10 text-xs font-bold px-3 py-1 rounded-full ` +
                (model.badge === "NEW"  ? "bg-primary text-primary-foreground" :
                 model.badge === "SALE" ? "bg-red-500 text-white" :
                                         "bg-amber-500 text-white")
              }>
                {model.badge === "NEW" ? "Новинка" : model.badge}
              </span>
            )}
            <div className="bg-muted/20 rounded-3xl p-6 flex items-center justify-center aspect-square max-w-md mx-auto">
              <Image
                src={`/assets/${model.image}.avif`}
                alt={`Купить ${model.name} ${city.namePre} — ЭПЛ-КОЛЛЕКЦИЯ`}
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Информация */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{model.name} {city.namePre}</h1>
            <p className="text-lg text-muted-foreground mb-6">{model.subtitle}</p>

            {/* Цена */}
            <div className="bg-card border border-border rounded-2xl p-5 mb-6">
              <p className="text-sm text-muted-foreground mb-1">Цена от</p>
              <p className="text-4xl font-bold text-primary mb-1">
                {formatPrice(model.priceFrom)}
              </p>
              <p className="text-sm text-muted-foreground">
                или {monthlyPayment(model.priceFrom)} / мес при рассрочке 0% × 10 мес
              </p>
            </div>

            {/* Гарантии */}
            <ul className="grid grid-cols-2 gap-3 mb-7">
              {[
                { icon: "🛡️", text: "Гарантия до 1 года" },
                { icon: "🚚", text: "Доставка в день заказа" },
                { icon: "✅", text: "Проверка при получении" },
                { icon: "🔄", text: "Trade-in до 70%" },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-sm">
                  <span>{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#calculator-section"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Рассчитать стоимость
              </Link>
              <a
                href={city.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </section>

        {/* ── SEO текст ── */}
        <section className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Купить {model.name} {city.namePre} — ЭПЛ-КОЛЛЕКЦИЯ
          </h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">Купить {model.name} {city.namePre}</strong> можно в магазине ЭПЛ-КОЛЛЕКЦИЯ
              по лучшей цене — от <strong className="text-foreground">{formatPrice(model.priceFrom)}</strong>.
              {model.badge === "NEW" ? " Это новинка 2025 года с актуальными технологиями Apple." : " Это проверенная модель с отличным соотношением цены и качества."}
            </p>
            <p>
              <strong className="text-foreground">Рассрочка 0% на 10 месяцев</strong> — платите всего {monthlyPayment(model.priceFrom)} в месяц без переплат и первоначального взноса. Оформление онлайн за 5 минут.
            </p>
            <p>
              <strong className="text-foreground">Гарантия до 1 года</strong>, бесплатная доставка по всей {city.nameGen} в день заказа. Магазин: г. {city.name}, {city.address}. {city.hours}.
            </p>
          </div>
        </section>

        {/* ── Похожие модели ── */}
        {relatedModels.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Похожие модели</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedModels.map((rel) => (
                <Link
                  key={rel.slug}
                  href={getModelUrl(rel)}
                  className="group bg-card border border-border rounded-2xl p-4 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="aspect-square relative mb-3 bg-muted/20 rounded-xl overflow-hidden">
                    <Image
                      src={`/assets/${rel.image}.avif`}
                      alt={rel.name}
                      fill
                      sizes="25vw"
                      className="object-contain p-2 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {rel.name}
                  </p>
                  <p className="text-sm font-bold text-primary mt-1">
                    от {formatPrice(rel.priceFrom)}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA блок ── */}
        <section className="rounded-3xl bg-primary text-primary-foreground p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Готовы купить {model.name}?</h2>
          <p className="opacity-90 mb-6">Рассчитайте итоговую стоимость с учётом Trade-in и рассрочки</p>
          <Link
            href="/#calculator-section"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-primary font-semibold hover:opacity-90 transition-opacity"
          >
            Перейти в калькулятор
          </Link>
        </section>

      </div>
    </>
  );
}
