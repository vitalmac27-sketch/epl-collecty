import type { Metadata } from "next";
import { DEFAULT_CITY } from "@/lib/cities";
import { allModels, getModelUrl } from "@/lib/models";
import { ALL_CATEGORIES } from "@/lib/categories";
import {
  buildFAQSchema,
  buildItemListSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";
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

const city = DEFAULT_CITY;

// ─── Metadata (SSR) ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `Купить iPhone в ${city.nameGen} выгодно — рассрочка 0% | ЭПЛ-КОЛЛЕКЦИЯ`,
  description: `Купить iPhone в ${city.nameGen} в магазине ЭПЛ-КОЛЛЕКЦИЯ. iPhone 13–17 с гарантией 1 год, рассрочка 0% на 10 мес, Trade-in, бесплатная доставка по ${city.nameGen} в день заказа.`,
  keywords: city.keywords,
  alternates: { canonical: city.siteUrl },
  openGraph: {
    title: `Купить iPhone в ${city.namePre} — ЭПЛ-КОЛЛЕКЦИЯ`,
    description: `iPhone 13–17 с гарантией 1 год. Рассрочка 0%, Trade-in, бесплатная доставка по ${city.nameGen}.`,
    url: city.siteUrl,
    images: [{ url: "/assets/og-apple-collection.jpg", width: 1200, height: 630 }],
  },
};

// ─── FAQ данные ───────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: `Как купить iPhone в рассрочку в ${city.namePre}?`,
    answer: `В ЭПЛ-КОЛЛЕКЦИЯ вы можете оформить рассрочку 0% на 10 месяцев без первоначального взноса. Оформление занимает всего 5 минут онлайн, одобрение — в день обращения. Нужен только паспорт.`,
  },
  {
    question: `Где находится магазин iPhone в ${city.namePre}?`,
    answer: `Наш магазин находится в ${city.district} по адресу: г. ${city.name}, ${city.address}. Работаем каждый день ${city.hours}. ${city.metroNote}. Также доступна бесплатная доставка по всей ${city.nameGen}.`,
  },
  {
    question: "Какая гарантия на б/у iPhone?",
    answer: "На новые устройства — гарантия 1 год, на б/у — 60 дней. Каждый iPhone проходит тщательную диагностику перед продажей. При возникновении проблем мы бесплатно устраним неисправность или заменим устройство.",
  },
  {
    question: "Можно ли проверить iPhone перед покупкой?",
    answer: "Да, обязательно! Вы можете полностью протестировать iPhone перед оплатой: проверить работу всех функций, состояние экрана, камеры и аккумулятора. Если что-то не устроит — можете отказаться без каких-либо обязательств.",
  },
  {
    question: `Есть ли доставка iPhone по ${city.nameGen}?`,
    answer: `Да, мы осуществляем бесплатную доставку по всей ${city.nameGen} в день заказа. Курьер привезёт iPhone в удобное для вас время и место. Оплата — только после проверки устройства при получении.`,
  },
  {
    question: "Принимаете ли вы старый iPhone в зачёт нового?",
    answer: "Да, у нас работает программа Trade-in. Сдайте свой старый iPhone или смартфон любого производителя и получите скидку на покупку нового. Оценка честная и прозрачная.",
  },
];

// iPhone-модели для ItemList JSON-LD (только iphone категория)
const iphoneModels = allModels.filter((m) => m.category === "iphone").slice(0, 8);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const faqSchema = buildFAQSchema(faqItems);
  const itemListSchema = buildItemListSchema(iphoneModels, city);

  return (
    <>
      {/* ── JSON-LD: FAQ + ItemList ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="min-h-screen">

        {/* ── Hero: H1 "Купить iPhone Казань выгодно" ── */}
        <HeroSection city={city} />

        <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">

          {/* ── Срочность + Доверие ── */}
          <UrgencyBanner />
          <TrustBadges />

          {/* ── Категории товаров ── */}
          <CategoryGrid categories={ALL_CATEGORIES} />

          {/* ── Квиз + Сайдбар ── */}
          <section id="calculator-section" aria-label="Подбор iPhone">
            <div className="grid lg:grid-cols-3 gap-6 items-start">
              {/* Квиз (Client Component) */}
              <div className="lg:col-span-2">
                <QuizContainer />
              </div>
              {/* Сводка заказа (Client Component) */}
              <aside className="hidden lg:block">
                <OrderSummary />
              </aside>
            </div>
          </section>

          {/* ── Отзывы ── */}
          <TestimonialsSection />

          {/* ── Каталог iPhone ── */}
          <ModelCatalogSection
            title={`Популярные модели iPhone в ${city.namePre}`}
            models={iphoneModels}
          />

          {/* ── Преимущества ── */}
          <BenefitsSection />

          {/* ── Районы доставки ── */}
          <DeliverySection city={city} />

          {/* ── SEO-текст + FAQ ── */}
          <SeoTextSection city={city} />
          <FaqSection items={faqItems} />

        </div>
      </div>
    </>
  );
}
