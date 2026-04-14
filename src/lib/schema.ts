/**
 * schema.ts — JSON-LD Schema.org генераторы
 * URL: /[category]/[model]  (пр.: /iphone/iphone-17-pro-max)
 */

import type { CityConfig } from "./cities";
import type { ProductModel } from "./models";

// ─── LocalBusiness (один раз в layout.tsx) ───────────────────────────────────
export function buildLocalBusinessSchema(city: CityConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${city.siteUrl}/#business`,
    name: "ЭПЛ-КОЛЛЕКЦИЯ",
    alternateName: "EPL Collection",
    url: city.siteUrl,
    image: `${city.siteUrl}/assets/og-apple-collection.jpg`,
    logo: `${city.siteUrl}/assets/logo.jpg`,
    description: `Официальный магазин iPhone, iPad, MacBook, Apple Watch, Android и PlayStation ${city.namePre}. Гарантия до 1 года, рассрочка 0%, доставка в день заказа.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: city.address,
      addressLocality: city.name,
      addressRegion: city.regionFull,
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.geo.lat,
      longitude: city.geo.lng,
    },
    telephone: city.phone,
    openingHours: city.hoursSchema,
    priceRange: "₽₽",
    currenciesAccepted: "RUB",
    paymentAccepted: "Наличные, карта, рассрочка",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "315",
    },
    sameAs: [city.telegramChannel, city.vk, city.avito],
  };
}

// ─── Product (/[category]/[model]) ──────────────────────────────────────────
interface ProductSchemaOptions {
  model: ProductModel;
  city: CityConfig;
  reviews?: Array<{ name: string; date: string; text: string }>;
}

export function buildProductSchema({ model, city, reviews = [] }: ProductSchemaOptions) {
  const url = `${city.siteUrl}/${model.category}/${model.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: model.name,
    description: `Купить ${model.name} ${city.namePre}. ${model.subtitle}. Гарантия до 1 года, рассрочка 0%, Trade-in, бесплатная доставка.`,
    image: `${city.siteUrl}/assets/${model.image}.avif`,
    url,
    brand: { "@type": "Brand", name: "Apple" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: model.priceFrom.toString(),
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "ЭПЛ-КОЛЛЕКЦИЯ" },
    },
    ...(reviews.length > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: reviews.length.toString(),
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        datePublished: r.date,
        reviewBody: r.text,
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      })),
    }),
  };
}

// ─── BreadcrumbList ──────────────────────────────────────────────────────────
export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── FAQPage ─────────────────────────────────────────────────────────────────
export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

// ─── ItemList (каталог категории /[category]) ─────────────────────────────────
export function buildItemListSchema(models: ProductModel[], city: CityConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: models.map((model, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: model.name,
        url: `${city.siteUrl}/${model.category}/${model.slug}`,
        offers: {
          "@type": "AggregateOffer",
          lowPrice: model.priceFrom.toString(),
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };
}
