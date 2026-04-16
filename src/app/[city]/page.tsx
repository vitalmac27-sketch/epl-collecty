import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityConfig, ALL_CITY_SLUGS } from "@/lib/cities";
import { ALL_CATEGORIES } from "@/lib/categories";
import { allModels, getModelUrl } from "@/lib/models";
import { buildFAQSchema, buildItemListSchema, buildLocalBusinessSchema } from "@/lib/schema";
import HeroSection from "@/components/sections/HeroSection";
import UrgencyBanner from "@/components/sections/UrgencyBanner";
import TrustBadges from "@/components/sections/TrustBadges";
import CategoryGrid from "@/components/sections/CategoryGrid";
import QuizContainer from "@/components/quiz/QuizContainer";
import OrderSummary from "@/components/quiz/OrderSummary";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SeoTextSection from "@/components/sections/SeoTextSection";
import FaqSection from "@/components/sections/FaqSection";
import DeliverySection from "@/components/sections/DeliverySection";
import ModelCatalogSection from "@/components/sections/ModelCatalogSection";

export function generateStaticParams() {
  return ALL_CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityConfig(citySlug);
  if (!city || citySlug === "kazan") return { title: "Страница не найдена" };

  return {
    title: `Купить Айфон iPhone ${city.namePre} выгодно — рассрочка 0% | ЭПЛ-КОЛЛЕКЦИЯ`,
    description: `Купить iPhone ${city.namePre} в магазине ЭПЛ-КОЛЛЕКЦИЯ. iPhone 13–17 с гарантией 1 год, рассрочка 0% на 10 мес, Trade-in, бесплатная доставка.`,
    keywords: city.keywords,

  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCityConfig(citySlug);
  if (!city || citySlug === "kazan") notFound();

  const faqItems = [
    {
      question: `Как купить iPhone в рассрочку ${city.namePre}?`,
      answer: `В ЭПЛ-КОЛЛЕКЦИЯ вы можете оформить рассрочку 0% на 10 месяцев. Оформление занимает 5 минут онлайн.`,
    },
    {
      question: `Где находится магазин iPhone ${city.namePre}?`,
      answer: `Наш магазин находится по адресу: г. ${city.name}, ${city.address}. Работаем ${city.hours}.`,
    },
    {
      question: "Какая гарантия на б/у iPhone?",
      answer: "На новые устройства — гарантия 1 год, на б/у — 60 дней.",
    },
  ];

  const iphoneModels = allModels.filter((m) => m.category === "iphone").slice(0, 8);
  const faqSchema = buildFAQSchema(faqItems);
  const itemListSchema = buildItemListSchema(iphoneModels, city);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="min-h-screen">
        <HeroSection city={city} />
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
          <UrgencyBanner />
          <TrustBadges />
          <CategoryGrid categories={ALL_CATEGORIES} />
          <section id="calculator-section" aria-label="Подбор iPhone">
            <div className="grid lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2"><QuizContainer /></div>
              <aside className="hidden lg:block"><OrderSummary /></aside>
            </div>
          </section>
          <TestimonialsSection />
          <ModelCatalogSection title={`Популярные модели iPhone ${city.namePre}`} models={iphoneModels} />
          <BenefitsSection />
          <DeliverySection city={city} />
          <SeoTextSection city={city} />
          <FaqSection items={faqItems} />
        </div>
      </div>
    </>
  );
}
