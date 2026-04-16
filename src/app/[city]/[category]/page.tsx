import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCategoryConfig, ALL_CATEGORY_SLUGS } from "@/lib/categories";
import { getModelsByCategory, getModelUrl } from "@/lib/models";
import { getCityConfig, ALL_CITY_SLUGS } from "@/lib/cities";
import { buildBreadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  const params = [];
  for (const city of ALL_CITY_SLUGS) {
    for (const category of ALL_CATEGORY_SLUGS) {
      params.push({ city, category });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; category: string }>;
}): Promise<Metadata> {
  const { city: citySlug, category } = await params;
  const city = getCityConfig(citySlug);
  const cat = getCategoryConfig(category);
  if (!city || !cat) return { title: "Страница не найдена" };

  return {
    title: `Купить ${cat.name} ${city.namePre} — ЭПЛ-КОЛЛЕКЦИЯ | Рассрочка 0%`,
    description: `${cat.name} ${city.namePre} с гарантией 1 год. Рассрочка 0%, Trade-in, доставка в день заказа.`,

  };
}

export default async function CityModelPage({
  params,
}: {
  params: Promise<{ city: string; category: string }>;
}) {
  const { city: citySlug, category } = await params;
  const city = getCityConfig(citySlug);
  const cat = getCategoryConfig(category);
  if (!city || !cat) notFound();

  const models = getModelsByCategory(category);
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Главная", url: city.siteUrl },
    { name: city.name, url: `${city.siteUrl}/${citySlug}` },
    { name: cat.name, url: `${city.siteUrl}/${citySlug}/${category}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/">Главная</Link> / <Link href={`/${citySlug}`}>{city.name}</Link> / <span>{cat.name}</span>
        </nav>
        <h1 className="text-3xl font-bold mb-2">
          Купить {cat.name} {city.namePre}
        </h1>
        <p className="text-muted-foreground mb-8">
          Гарантия 1 год · Рассрочка 0% · Доставка в день заказа
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {models.map((model) => (
            <Link
              key={model.slug}
              href={`/${citySlug}/${category}/${model.slug}`}
              className="group flex flex-col items-center p-4 rounded-xl border-2 border-border hover:border-primary/40 hover:bg-muted/30 transition-all"
            >
              <div className="w-24 h-24 relative mb-3">
                <Image
                  src={`/assets/${model.image}.avif`}
                  alt={`${model.name} ${city.namePre}`}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <span className="font-semibold text-sm text-center">{model.name}</span>
              <span className="text-xs text-primary mt-1">от {(model.priceFrom / 1000).toFixed(0)} 000 ₽</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
