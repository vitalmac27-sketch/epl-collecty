import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCategoryConfig } from "@/lib/categories";
import { getModelBySlug, ALL_MODEL_PARAMS } from "@/lib/models";
import { getCityConfig, ALL_CITY_SLUGS } from "@/lib/cities";
import { buildProductSchema, buildBreadcrumbSchema } from "@/lib/schema";
import QuizContainer from "@/components/quiz/QuizContainer";
import OrderSummary from "@/components/quiz/OrderSummary";
import { formatPrice, monthlyPayment } from "@/lib/utils";

export function generateStaticParams() {
  const params = [];
  for (const city of ALL_CITY_SLUGS) {
    for (const { category, model } of ALL_MODEL_PARAMS) {
      params.push({ city, category, model });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; category: string; model: string }>;
}): Promise<Metadata> {
  const { city: citySlug, category, model: modelSlug } = await params;
  const city = getCityConfig(citySlug);
  const model = getModelBySlug(category, modelSlug);
  if (!city || !model) return { title: "Страница не найдена" };

  return {
    title: `Купить ${model.name} ${city.namePre} — цена, рассрочка 0% | ЭПЛ-КОЛЛЕКЦИЯ`,
    description: `${model.name} ${city.namePre} от ${formatPrice(model.priceFrom)}. Гарантия 1 год, рассрочка 0%, доставка в день заказа.`,
    alternates: { canonical: `${city.siteUrl}/${citySlug}/${category}/${modelSlug}` },
  };
}

export default async function CityModelDetailPage({
  params,
}: {
  params: Promise<{ city: string; category: string; model: string }>;
}) {
  const { city: citySlug, category, model: modelSlug } = await params;
  const city = getCityConfig(citySlug);
  const model = getModelBySlug(category, modelSlug);
  const cat = getCategoryConfig(category);
  if (!city || !model || !cat) notFound();

  const productSchema = buildProductSchema({ model, city });
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Главная", url: city.siteUrl },
    { name: city.name, url: `${city.siteUrl}/${citySlug}` },
    { name: cat.name, url: `${city.siteUrl}/${citySlug}/${category}` },
    { name: model.name, url: `${city.siteUrl}/${citySlug}/${category}/${modelSlug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/">Главная</Link> / <Link href={`/${citySlug}`}>{city.name}</Link> / <Link href={`/${citySlug}/${category}`}>{cat.name}</Link> / <span>{model.name}</span>
        </nav>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <Image
                src={`/assets/${model.image}.avif`}
                alt={`${model.name} ${city.namePre}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{model.name}</h1>
            <p className="text-muted-foreground mb-4">
              Купить {model.name} {city.namePre} в магазине ЭПЛ-КОЛЛЕКЦИЯ
            </p>
            <div className="text-4xl font-bold text-primary mb-2">
              от {formatPrice(model.priceFrom)}
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              или {monthlyPayment(model.priceFrom)}/мес в рассрочку 0% на 10 мес
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="#quiz"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-center hover:opacity-90 transition-opacity"
              >
                Подобрать конфигурацию
              </Link>
              <a
                href={`tel:${city.phone}`}
                className="px-6 py-3 border border-border rounded-xl font-semibold text-center hover:bg-muted transition-colors"
              >
                {city.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
        <section id="quiz" className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2"><QuizContainer /></div>
          <aside className="hidden lg:block"><OrderSummary /></aside>
        </section>
      </div>
    </>
  );
}
