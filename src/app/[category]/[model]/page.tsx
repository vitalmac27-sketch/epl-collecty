import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCategoryConfig } from "@/lib/categories";
import { getModelBySlug, ALL_MODEL_PARAMS, getModelUrl, getModelsByCategory } from "@/lib/models";
import { getProductConfig } from "@/lib/generated";
import { DEFAULT_CITY } from "@/lib/cities";
import { buildProductSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { formatPrice, monthlyPayment } from "@/lib/utils";
import ProductConfigurator from "@/components/product/ProductConfigurator";
import SpecsTable from "@/components/product/SpecsTable";
import CompareTable from "@/components/product/CompareTable";
import UpsellBlock from "@/components/product/UpsellBlock";

const city = DEFAULT_CITY;

export function generateStaticParams() {
  return ALL_MODEL_PARAMS;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; model: string }>;
}): Promise<Metadata> {
  const { category, model: modelSlug } = await params;
  const model = getModelBySlug(category, modelSlug);
  if (!model) return { title: "Страница не найдена" };

  const cfg = getProductConfig(category, modelSlug);
  const canonicalUrl = `${city.siteUrl}/${category}/${modelSlug}`;

  const title = cfg
    ? `${model.name} купить в ${city.nameGen} — от ${formatPrice(model.priceFrom)} | ЭПЛ-КОЛЛЕКЦИЯ`
    : model.seoTitle;

  const description = cfg
    ? `Купить ${model.name} в ${city.nameGen} ✅ Выбор цвета и конфигурации. Цена от ${formatPrice(model.priceFrom)} 💳 Рассрочка 0% 🛡️ Гарантия 1 год 🚚 Доставка в день заказа`
    : model.seoDescription;

  return {
    title,
    description,
    keywords: [
      `${model.name} ${city.nameGen}`,
      `купить ${model.name} ${city.nameGen}`,
      `${model.name} цена`,
      `${model.name} рассрочка`,
      ...city.keywords,
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [{ url: `/assets/${model.image}.avif`, width: 800, height: 800, alt: `Купить ${model.name} в ${city.namePre}` }],
    },
  };
}

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

  const productCfg = getProductConfig(category, modelSlug);

  const relatedModels = getModelsByCategory(category)
    .filter((m) => m.slug !== modelSlug)
    .slice(0, 4);

  const productSchema = buildProductSchema({ model, city });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Главная",  url: city.siteUrl },
    { name: cat.name,   url: `${city.siteUrl}/${cat.slug}` },
    { name: model.name, url: `${city.siteUrl}/${category}/${modelSlug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Хлебные крошки */}
        <nav aria-label="Хлебные крошки" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li><Link href="/" className="hover:text-primary transition-colors">Главная</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={`/${cat.slug}`} className="hover:text-primary transition-colors">{cat.name}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium">{model.name}</li>
          </ol>
        </nav>

        {/* Конфигуратор или базовая карточка */}
        {productCfg ? (
          <ProductConfigurator
            config={productCfg}
            modelName={model.name}
            cityName={city.namePre}
            telegramLink={city.telegram}
          />
        ) : (
          <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <div className="relative">
              {model.badge && (
                <span className={`absolute top-4 left-4 z-10 text-xs font-bold px-3 py-1 rounded-full ` +
                  (model.badge === "NEW" ? "bg-primary text-primary-foreground" :
                   model.badge === "SALE" ? "bg-red-500 text-white" : "bg-amber-500 text-white")}>
                  {model.badge === "NEW" ? "Новинка" : model.badge}
                </span>
              )}
              <div className="rounded-3xl p-6 flex items-center justify-center aspect-square max-w-md mx-auto overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10">
                <Image src={`/assets/${model.image}.avif`} alt={`Купить ${model.name} в ${city.namePre}`} width={500} height={500} className="object-contain w-full h-full mix-blend-multiply dark:mix-blend-normal" priority />
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{model.name} {city.namePre}</h1>
              <p className="text-lg text-muted-foreground mb-6">{model.subtitle}</p>
              <div className="bg-card border border-border rounded-2xl p-5 mb-6">
                <p className="text-sm text-muted-foreground mb-1">Цена от</p>
                <p className="text-4xl font-bold text-primary mb-1">{formatPrice(model.priceFrom)}</p>
                <p className="text-sm text-muted-foreground">или {monthlyPayment(model.priceFrom)} / мес при рассрочке 0% × 10 мес</p>
              </div>
              <ul className="grid grid-cols-2 gap-3 mb-7">
                {[{ icon: "🛡️", text: "Гарантия 1 год" }, { icon: "🚚", text: "Доставка в день заказа" }, { icon: "✅", text: "Проверка при получении" }, { icon: "🔄", text: "Trade-in до 70%" }].map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-2 text-sm"><span>{icon}</span><span>{text}</span></li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={city.telegram} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">✈️ Написать в Telegram</a>
                <Link href="/#calculator-section" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">🔄 Калькулятор</Link>
              </div>
            </div>
          </section>
        )}

        {/* Характеристики */}
        {productCfg && <SpecsTable specs={productCfg.specs} modelName={model.name} />}

        {/* Сравнение */}
        {productCfg && <CompareTable currentName={model.name} previousName={productCfg.compareTitle} rows={productCfg.compare} />}

        {/* Upsell */}
        {productCfg && <UpsellBlock items={productCfg.upsell} telegramLink={city.telegram} />}

        {/* SEO-текст */}
        <section className="max-w-3xl mb-12">
          {productCfg ? (
            <>
              <h2 className="text-2xl font-bold mb-4">{productCfg.seoH2}</h2>
              <div className="prose prose-gray max-w-none text-muted-foreground space-y-3">
                {productCfg.seoText.split("\n").filter(Boolean).map((p, i) => <p key={i}>{p.trim()}</p>)}
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">{productCfg.seoH2Why}</h2>
              <div className="prose prose-gray max-w-none text-muted-foreground space-y-3">
                {productCfg.seoTextWhy.split("\n").filter(Boolean).map((p, i) => <p key={i}>{p.trim()}</p>)}
              </div>

              {productCfg.seoH2Sim && productCfg.seoTextSim && (
                <>
                  <h2 className="text-2xl font-bold mt-8 mb-4">{productCfg.seoH2Sim}</h2>
                  <div className="prose prose-gray max-w-none text-muted-foreground space-y-3">
                    {productCfg.seoTextSim.split("\n").filter(Boolean).map((p, i) => <p key={i}>{p.trim()}</p>)}
                  </div>
                </>
              )}

              <h2 className="text-2xl font-bold mt-8 mb-4">Гарантия и сервис в ЭПЛ-КОЛЛЕКЦИЯ Казань</h2>
              <div className="prose prose-gray max-w-none text-muted-foreground space-y-3">
                <p>Перед продажей каждый {model.name} проходит полную диагностику — проверяем серийный номер по базе Apple, тестируем все функции.</p>
                <p>Новые устройства — гарантия 1 год, б/у — 60 дней. При любой проблеме бесплатно отремонтируем или заменим устройство.</p>
                <p>При покупке активируем {model.name} прямо в магазине и поможем перенести данные со старого устройства.</p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">Купить {model.name} {city.namePre} — ЭПЛ-КОЛЛЕКЦИЯ</h2>
              <div className="prose prose-gray max-w-none text-muted-foreground space-y-3">
                <p><strong className="text-foreground">Купить {model.name} {city.namePre}</strong> можно в магазине ЭПЛ-КОЛЛЕКЦИЯ по лучшей цене — от <strong className="text-foreground">{formatPrice(model.priceFrom)}</strong>.</p>
                <p><strong className="text-foreground">Рассрочка 0% на 10 месяцев</strong> — платите всего {monthlyPayment(model.priceFrom)} в месяц без переплат.</p>
                <p><strong className="text-foreground">Гарантия 1 год</strong>, бесплатная доставка по всей {city.nameGen} в день заказа.</p>
              </div>
            </>
          )}
        </section>

        {/* Похожие модели */}
        {relatedModels.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Похожие модели</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedModels.map((rel) => (
                <Link key={rel.slug} href={getModelUrl(rel)} className="group bg-card border border-border rounded-2xl p-4 hover:border-primary/40 hover:shadow-md transition-all">
                  <div className="aspect-square relative mb-3 bg-muted/20 rounded-xl overflow-hidden">
                    <Image src={`/assets/${rel.image}.avif`} alt={rel.name} fill sizes="25vw" className="object-contain p-2 group-hover:scale-105 transition-transform mix-blend-multiply dark:mix-blend-normal" />
                  </div>
                  <p className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">{rel.name}</p>
                  <p className="text-sm font-bold text-primary mt-1">от {formatPrice(rel.priceFrom)}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Финальный CTA */}
        <section className="rounded-3xl bg-primary text-primary-foreground p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Готовы купить {model.name}?</h2>
          <p className="opacity-90 mb-6">Напишите нам — подберём лучшую конфигурацию и цену</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={city.telegram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-primary font-semibold hover:opacity-90 transition-opacity">
              ✈️ Написать в Telegram
            </a>
            <Link href="/#calculator-section" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              🔄 Калькулятор с Trade-in
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
