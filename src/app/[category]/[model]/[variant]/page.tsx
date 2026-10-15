import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryConfig } from "@/lib/categories";
import { getModelBySlug } from "@/lib/models";
import { getProductConfig } from "@/lib/generated";
import { DEFAULT_CITY } from "@/lib/cities";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { formatPrice, monthlyPayment } from "@/lib/utils";
import {
  ALL_VARIANT_PARAMS,
  getVariant,
  getVariants,
  variantWord,
  colorWord,
  minPrice,
  STORAGE_TEXT,
  COLOR_TEXT,
} from "@/lib/variants";
import ProductConfigurator from "@/components/product/ProductConfigurator";
import SpecsTable from "@/components/product/SpecsTable";
import VariantLinks from "@/components/product/VariantLinks";

const city = DEFAULT_CITY;

type Params = Promise<{ category: string; model: string; variant: string }>;

export function generateStaticParams() {
  return ALL_VARIANT_PARAMS;
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category, model: slug, variant } = await params;
  const model = getModelBySlug(category, slug);
  const v = getVariant(category, slug, variant);
  if (!model || !v) return { title: "Страница не найдена" };

  const name = `${model.name} ${variantWord(v)}`;
  const price = v.price ? `цена от ${formatPrice(v.price)}` : "цена по запросу";
  const title = `${name} купить в ${city.namePre} — ${price} | ЭПЛ-КОЛЛЕКЦИЯ`;
  const description = `Купить ${name} в ${city.namePre}${v.price ? ` по цене от ${formatPrice(v.price)}` : ""}. Оригинал, гарантия 1 год, рассрочка «Халва» до 36 мес, доставка по Казани в день заказа.`;
  const url = `${city.siteUrl}/${category}/${slug}/${variant}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: `/assets/${model.image}.avif`, alt: name }] },
  };
}

const h2 = "text-2xl font-bold mb-4";
const p = "text-muted-foreground leading-relaxed mb-3";

export default async function VariantPage({ params }: { params: Params }) {
  const { category, model: slug, variant } = await params;
  const model = getModelBySlug(category, slug);
  const cat = getCategoryConfig(category);
  const cfg = getProductConfig(category, slug);
  const v = getVariant(category, slug, variant);
  if (!model || !cat || !cfg || !v) notFound();

  const variants = getVariants(category, slug);
  const base = `/${category}/${slug}`;
  const name = `${model.name} ${variantWord(v)}`;
  const url = `${city.siteUrl}${base}/${variant}`;

  const simIds = cfg.sim.map((s) => s.id);
  const simLabel = (id: string) => cfg.sim.find((s) => s.id === id)?.label ?? id;
  const fmt = (n: number) => (n ? formatPrice(n) : "—");

  // Таблица цен: для памяти — по цветам, для цвета — по объёмам памяти
  const rows =
    v.kind === "storage"
      ? cfg.colors.map((c) => ({
          label: c.name,
          href: `${base}/${c.id}`,
          prices: simIds.map((sid) => minPrice(cfg, (x) => x.storageId === v.id && x.colorId === c.id && x.simId === sid)),
        }))
      : cfg.storage.map((s) => ({
          label: s.label,
          href: `${base}/${variants.find((x) => x.kind === "storage" && x.id === s.id)?.slug ?? ""}`,
          prices: simIds.map((sid) => minPrice(cfg, (x) => x.colorId === v.id && x.storageId === s.id && x.simId === sid)),
        }));

  // Соседний объём памяти — разница в цене
  const storageVariants = variants.filter((x) => x.kind === "storage");
  const idx = storageVariants.findIndex((x) => x.slug === v.slug);
  const next = v.kind === "storage" ? storageVariants[idx + 1] : undefined;
  const prev = v.kind === "storage" ? storageVariants[idx - 1] : undefined;

  const esim = minPrice(cfg, (x) => x.simId === "esim" && (v.kind === "storage" ? x.storageId === v.id : x.colorId === v.id));
  const dual = minPrice(cfg, (x) => x.simId === "sim-esim" && (v.kind === "storage" ? x.storageId === v.id : x.colorId === v.id));

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    image: `${city.siteUrl}/assets/${model.image}.avif`,
    url: `${url}/`,
    brand: { "@type": "Brand", name: "Apple" },
    offers: {
      "@type": "Offer",
      price: String(v.price),
      priceCurrency: "RUB",
      availability: v.price ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      seller: { "@type": "Organization", name: "ЭПЛ-КОЛЛЕКЦИЯ" },
    },
  };
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Главная", url: city.siteUrl },
    { name: cat.name, url: `${city.siteUrl}/${cat.slug}` },
    { name: model.name, url: `${city.siteUrl}${base}` },
    { name: variantWord(v), url },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav aria-label="Хлебные крошки" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li><Link href="/" className="hover:text-primary transition-colors">Главная</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={`/${cat.slug}`} className="hover:text-primary transition-colors">{cat.name}</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={base} className="hover:text-primary transition-colors">{model.name}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium">{variantWord(v)}</li>
          </ol>
        </nav>

        <ProductConfigurator
          config={cfg}
          modelName={model.name}
          cityName={city.namePre}
          telegramLink={city.telegram}
          initial={v.pick}
        />

        {/* ── Текст варианта ── */}
        <section className="max-w-3xl mb-12">
          <h2 className={h2}>
            {v.kind === "storage" ? `${name}: кому подходит и сколько стоит` : `${name}: как выглядит и сколько стоит`}
          </h2>

          {v.kind === "storage" ? (
            <>
              <p className={p}>
                <strong className="text-foreground">{STORAGE_TEXT[v.id]?.who}</strong> {STORAGE_TEXT[v.id]?.detail}
              </p>
            </>
          ) : (
            <p className={p}>{COLOR_TEXT[v.id] ?? `${model.name} в цвете «${colorWord(v.label)}».`}</p>
          )}

          <p className={p}>
            {v.price ? (
              <>
                Цена {name} в {city.namePre} — <strong className="text-foreground">от {formatPrice(v.price)}</strong>, в
                рассрочку по «Халве» — от {monthlyPayment(v.price)} в месяц*.{" "}
              </>
            ) : (
              <>Эта версия сейчас поставляется под заказ — напишите нам, и менеджер назовёт цену и срок. </>
            )}
            {esim && dual && esim !== dual ? (
              <>
                Версия только с eSIM — от {formatPrice(esim)}, с nano-SIM + eSIM — от {formatPrice(dual)}
                {dual > esim ? <> (разница {formatPrice(dual - esim)})</> : null}.{" "}
              </>
            ) : null}
            {next && next.price && v.price ? (
              <>
                Версия {next.label} дороже на {formatPrice(next.price - v.price)}
                {prev && prev.price ? <>, а {prev.label} — дешевле на {formatPrice(v.price - prev.price)}</> : null}.
              </>
            ) : prev && prev.price && v.price ? (
              <>Версия {prev.label} дешевле на {formatPrice(v.price - prev.price)}.</>
            ) : null}
          </p>
          {v.kind === "color" && (
            <p className={p}>
              Цвет на фото может немного отличаться от реального из-за настроек экрана. Если сомневаетесь — приезжайте
              посмотреть вживую в магазин на {city.address} или попросите менеджера прислать живые фото.
            </p>
          )}

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
            {v.kind === "storage" ? `Цены на ${name} по цветам` : `Цены на ${name} по объёму памяти`}
          </h3>
          <div className="overflow-x-auto rounded-xl border border-border mb-2">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">{v.kind === "storage" ? "Цвет" : "Память"}</th>
                  {simIds.map((sid) => (
                    <th key={sid} className="px-4 py-3 font-semibold whitespace-nowrap">{simLabel(sid)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-t border-border">
                    <td className="px-4 py-2.5">
                      <Link href={r.href} className="font-medium hover:text-primary">{r.label}</Link>
                    </td>
                    {r.prices.map((pr, i) => (
                      <td key={i} className="px-4 py-2.5 whitespace-nowrap">{pr ? fmt(pr) : <span className="text-muted-foreground">под заказ</span>}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-6">Цены обновляются ежедневно по прайсу поставщиков.</p>

          <p className={p}>
            Все {model.name} в ЭПЛ-КОЛЛЕКЦИЯ — оригинальные, с гарантией магазина 1 год. Доставляем по {city.nameGen} в
            день заказа, устройство можно проверить при получении. Описание, характеристики и сравнение с прошлым
            поколением — на <Link href={base} className="text-primary hover:underline">странице {model.name}</Link>.
          </p>
        </section>

        <VariantLinks base={base} modelName={model.name} variants={variants} current={v.slug} />

        <SpecsTable specs={cfg.specs} modelName={model.name} />

        <p className="text-xs text-muted-foreground mt-8">
          * Рассрочка — покупка по карте «Халва» ПАО «Совкомбанк» у партнёров банка на срок до 36 месяцев. Срок и условия
          определяет банк.
        </p>
      </div>
    </>
  );
}
