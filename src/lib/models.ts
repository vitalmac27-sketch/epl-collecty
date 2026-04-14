/**
 * models.ts — центральный реестр всех моделей по категориям
 *
 * URL структура: /[category]/[model]
 * Примеры:
 *   /iphone/iphone-17-pro-max
 *   /ipad/ipad-pro-m4
 *   /macbook/macbook-air-m3
 *   /watch/apple-watch-series-10
 *   /android/samsung-galaxy-s25-ultra
 *   /playstation/playstation-5
 */

import type { CategorySlug } from "./categories";

export interface ProductModel {
  /** URL slug модели: "iphone-17-pro-max" */
  slug: string;
  /** Полное название: "iPhone 17 Pro Max" */
  name: string;
  /** Категория — определяет первый сегмент URL */
  category: CategorySlug;
  /** Серия внутри категории (для группировки в меню) */
  series: string;
  /** Бейдж в Navigation и каталоге */
  badge?: "NEW" | "SALE" | "HIT";
  /** Стартовая цена */
  priceFrom: number;
  /** Имя файла изображения без расширения (в /public/assets/) */
  image: string;
  /** SEO title страницы модели */
  seoTitle: string;
  /** SEO description страницы модели */
  seoDescription: string;
  /** Короткий подзаголовок для карточки */
  subtitle: string;
  /** Показывать в Navigation dropdown */
  inNav?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// iPhone
// ─────────────────────────────────────────────────────────────────────────────
const iPhoneModels: ProductModel[] = [
  {
    slug: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    category: "iphone",
    series: "17",
    badge: "NEW",
    priceFrom: 101000,
    image: "iphone-17-pro-max",
    seoTitle: "Купить iPhone 17 Pro Max в Казани недорого | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 17 Pro Max в Казани ✅ A19 Pro, камера 48MP, титан. Гарантия до 1 года, рассрочка 0%, Trade-in, бесплатная доставка!",
    subtitle: "Флагман 2025 года с A19 Pro",
    inNav: true,
  },
  {
    slug: "iphone-17-pro",
    name: "iPhone 17 Pro",
    category: "iphone",
    series: "17",
    badge: "NEW",
    priceFrom: 88700,
    image: "iphone-17-pro",
    seoTitle: "Купить iPhone 17 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 17 Pro в Казани ✅ A19 Pro, компактный Pro-флагман. Гарантия, рассрочка 0%, доставка в день заказа.",
    subtitle: "Компактный Pro-флагман",
    inNav: true,
  },
  {
    slug: "iphone-17-air",
    name: "iPhone 17 Air",
    category: "iphone",
    series: "17",
    badge: "NEW",
    priceFrom: 80700,
    image: "iphone-17-air",
    seoTitle: "Купить iPhone 17 Air в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 17 Air в Казани ✅ Самый тонкий iPhone в истории. Рассрочка 0%, гарантия до 1 года.",
    subtitle: "Самый тонкий iPhone",
    inNav: true,
  },
  {
    slug: "iphone-17",
    name: "iPhone 17",
    category: "iphone",
    series: "17",
    badge: "NEW",
    priceFrom: 64500,
    image: "iphone-17",
    seoTitle: "Купить iPhone 17 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 17 в Казани ✅ Хит продаж 2025. Гарантия до 1 года, рассрочка 0%, доставка бесплатно.",
    subtitle: "Хит продаж 2025",
    inNav: true,
  },
  {
    slug: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    category: "iphone",
    series: "16",
    priceFrom: 96800,
    image: "iphone-16-pro-max",
    seoTitle: "Купить iPhone 16 Pro Max в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 16 Pro Max в Казани ✅ A18 Pro, камера 48MP. Гарантия, рассрочка 0%, Trade-in, доставка.",
    subtitle: "Pro-флагман A18 Pro",
    inNav: true,
  },
  {
    slug: "iphone-16-pro",
    name: "iPhone 16 Pro",
    category: "iphone",
    series: "16",
    priceFrom: 80700,
    image: "iphone-16-pro",
    seoTitle: "Купить iPhone 16 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 16 Pro в Казани ✅ Компактный Pro с A18 Pro. Гарантия, рассрочка 0%, бесплатная доставка.",
    subtitle: "Компактный Pro A18",
    inNav: true,
  },
  {
    slug: "iphone-16-plus",
    name: "iPhone 16 Plus",
    category: "iphone",
    series: "16",
    priceFrom: 72600,
    image: "iphone-16-plus",
    seoTitle: "Купить iPhone 16 Plus в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 16 Plus в Казани ✅ Большой экран, A18 chip. Гарантия до 1 года, рассрочка 0%.",
    subtitle: "Большой экран A18",
    inNav: true,
  },
  {
    slug: "iphone-16",
    name: "iPhone 16",
    category: "iphone",
    series: "16",
    priceFrom: 56400,
    image: "iphone-16",
    seoTitle: "Купить iPhone 16 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 16 в Казани ✅ Apple Intelligence, A18. Гарантия до 1 года, рассрочка 0%, доставка.",
    subtitle: "Apple Intelligence A18",
    inNav: true,
  },
  {
    slug: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    category: "iphone",
    series: "15",
    priceFrom: 79900,
    image: "iphone-15-pro-max",
    seoTitle: "Купить iPhone 15 Pro Max в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 15 Pro Max в Казани ✅ A17 Pro, 5x зум. Б/у и новые, гарантия, рассрочка 0%.",
    subtitle: "A17 Pro с 5x зумом",
  },
  {
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    category: "iphone",
    series: "15",
    priceFrom: 64900,
    image: "iphone-15-pro",
    seoTitle: "Купить iPhone 15 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 15 Pro в Казани ✅ A17 Pro, Action Button. Гарантия, рассрочка 0%.",
    subtitle: "A17 Pro + Action Button",
  },
  {
    slug: "iphone-15-plus",
    name: "iPhone 15 Plus",
    category: "iphone",
    series: "15",
    priceFrom: 54900,
    image: "iphone-15-plus",
    seoTitle: "Купить iPhone 15 Plus в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 15 Plus в Казани ✅ Большой экран, Dynamic Island. Гарантия, рассрочка 0%.",
    subtitle: "Dynamic Island, большой экран",
  },
  {
    slug: "iphone-15",
    name: "iPhone 15",
    category: "iphone",
    series: "15",
    priceFrom: 44900,
    image: "iphone-15",
    seoTitle: "Купить iPhone 15 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 15 в Казани ✅ Dynamic Island, USB-C. Гарантия, рассрочка 0%.",
    subtitle: "Dynamic Island + USB-C",
  },
  {
    slug: "iphone-14-pro-max",
    name: "iPhone 14 Pro Max",
    category: "iphone",
    series: "14",
    priceFrom: 54900,
    image: "iphone-14-pro-max",
    seoTitle: "Купить iPhone 14 Pro Max в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 14 Pro Max в Казани ✅ A16 Bionic, 48MP. Б/у с гарантией, рассрочка 0%.",
    subtitle: "A16 Bionic, камера 48MP",
  },
  {
    slug: "iphone-14-pro",
    name: "iPhone 14 Pro",
    category: "iphone",
    series: "14",
    priceFrom: 44900,
    image: "iphone-14-pro",
    seoTitle: "Купить iPhone 14 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 14 Pro в Казани ✅ A16 Bionic, Dynamic Island. Б/у с гарантией, рассрочка 0%.",
    subtitle: "A16 Bionic + Dynamic Island",
  },
  {
    slug: "iphone-14",
    name: "iPhone 14",
    category: "iphone",
    series: "14",
    priceFrom: 34900,
    image: "iphone-14",
    seoTitle: "Купить iPhone 14 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 14 в Казани ✅ A15 Bionic. Выгодно купить б/у с гарантией, рассрочка 0%.",
    subtitle: "Надёжный A15 Bionic",
  },
  {
    slug: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    category: "iphone",
    series: "13",
    priceFrom: 39900,
    image: "iphone-13-pro-max",
    seoTitle: "Купить iPhone 13 Pro Max в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 13 Pro Max в Казани ✅ ProMotion 120Hz. Б/у с гарантией, рассрочка 0%.",
    subtitle: "ProMotion 120Hz",
  },
  {
    slug: "iphone-13-pro",
    name: "iPhone 13 Pro",
    category: "iphone",
    series: "13",
    priceFrom: 34900,
    image: "iphone-13-pro",
    seoTitle: "Купить iPhone 13 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 13 Pro в Казани ✅ ProMotion 120Hz, тройная камера. Б/у с гарантией.",
    subtitle: "ProMotion + тройная камера",
  },
  {
    slug: "iphone-13-mini",
    name: "iPhone 13 mini",
    category: "iphone",
    series: "13",
    priceFrom: 24900,
    image: "iphone-13-mini",
    seoTitle: "Купить iPhone 13 mini в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 13 mini в Казани ✅ Компактный iPhone с A15 Bionic. Б/у с гарантией.",
    subtitle: "Компактный A15 Bionic",
  },
  {
    slug: "iphone-13",
    name: "iPhone 13",
    category: "iphone",
    series: "13",
    priceFrom: 28900,
    image: "iphone-13",
    seoTitle: "Купить iPhone 13 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 13 в Казани ✅ A15 Bionic. Выгодно купить б/у с гарантией, рассрочка 0%.",
    subtitle: "Хит продаж A15 Bionic",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// iPad
// ─────────────────────────────────────────────────────────────────────────────
const iPadModels: ProductModel[] = [
  {
    slug: "ipad-pro-m4",
    name: "iPad Pro M4",
    category: "ipad",
    series: "Pro",
    badge: "NEW",
    priceFrom: 89900,
    image: "ipad-pro-m4",
    seoTitle: "Купить iPad Pro M4 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPad Pro M4 в Казани ✅ Самый тонкий iPad, чип M4, OLED. Гарантия, рассрочка 0%.",
    subtitle: "Тончайший iPad с OLED и M4",
    inNav: true,
  },
  {
    slug: "ipad-air-m2",
    name: "iPad Air M2",
    category: "ipad",
    series: "Air",
    badge: "NEW",
    priceFrom: 59900,
    image: "ipad-air-m2",
    seoTitle: "Купить iPad Air M2 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPad Air M2 в Казани ✅ Лёгкий и мощный, чип M2. Гарантия, рассрочка 0%, доставка.",
    subtitle: "Лёгкий и мощный с M2",
    inNav: true,
  },
  {
    slug: "ipad-mini-7",
    name: "iPad mini 7",
    category: "ipad",
    series: "mini",
    badge: "NEW",
    priceFrom: 49900,
    image: "ipad-mini-7",
    seoTitle: "Купить iPad mini 7 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPad mini 7 в Казани ✅ Компактный iPad с A17 Pro. Гарантия, рассрочка 0%.",
    subtitle: "Компактный с A17 Pro",
    inNav: true,
  },
  {
    slug: "ipad-10",
    name: "iPad (10-е поколение)",
    category: "ipad",
    series: "base",
    priceFrom: 36900,
    image: "ipad-10",
    seoTitle: "Купить iPad 10 поколения в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPad 10 поколения в Казани ✅ USB-C, яркий экран. Гарантия, рассрочка 0%.",
    subtitle: "Базовый с USB-C",
    inNav: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MacBook
// ─────────────────────────────────────────────────────────────────────────────
const macBookModels: ProductModel[] = [
  {
    slug: "macbook-pro-m4-pro",
    name: "MacBook Pro M4 Pro",
    category: "macbook",
    series: "Pro",
    badge: "NEW",
    priceFrom: 189900,
    image: "macbook-pro-m4-pro",
    seoTitle: "Купить MacBook Pro M4 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "MacBook Pro M4 Pro в Казани ✅ Профессиональный ноутбук. Гарантия, рассрочка 0%.",
    subtitle: "Профессиональный с M4 Pro",
    inNav: true,
  },
  {
    slug: "macbook-pro-m4",
    name: "MacBook Pro M4",
    category: "macbook",
    series: "Pro",
    badge: "NEW",
    priceFrom: 149900,
    image: "macbook-pro-m4",
    seoTitle: "Купить MacBook Pro M4 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "MacBook Pro M4 в Казани ✅ Мощный Pro-ноутбук, Liquid Retina. Гарантия, рассрочка 0%.",
    subtitle: "Мощность M4 в Pro",
    inNav: true,
  },
  {
    slug: "macbook-air-m3",
    name: "MacBook Air M3",
    category: "macbook",
    series: "Air",
    priceFrom: 99900,
    image: "macbook-air-m3",
    seoTitle: "Купить MacBook Air M3 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "MacBook Air M3 в Казани ✅ Самый популярный ноутбук Apple. Гарантия, рассрочка 0%.",
    subtitle: "Хит продаж — лёгкий с M3",
    inNav: true,
  },
  {
    slug: "macbook-air-m2",
    name: "MacBook Air M2",
    category: "macbook",
    series: "Air",
    priceFrom: 84900,
    image: "macbook-air-m2",
    seoTitle: "Купить MacBook Air M2 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "MacBook Air M2 в Казани ✅ Тонкий и лёгкий, новый дизайн. Гарантия, рассрочка 0%.",
    subtitle: "Новый дизайн с M2",
    inNav: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Apple Watch
// ─────────────────────────────────────────────────────────────────────────────
const watchModels: ProductModel[] = [
  {
    slug: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    category: "watch",
    series: "Ultra",
    badge: "NEW",
    priceFrom: 79900,
    image: "apple-watch-ultra-2",
    seoTitle: "Купить Apple Watch Ultra 2 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "Apple Watch Ultra 2 в Казани ✅ Titanium, 60-часовая батарея. Гарантия, рассрочка 0%.",
    subtitle: "Titanium, 60ч батарея",
    inNav: true,
  },
  {
    slug: "apple-watch-series-10",
    name: "Apple Watch Series 10",
    category: "watch",
    series: "Series",
    badge: "NEW",
    priceFrom: 39900,
    image: "apple-watch-series-10",
    seoTitle: "Купить Apple Watch Series 10 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "Apple Watch Series 10 в Казани ✅ Самые тонкие часы Apple. Гарантия, рассрочка 0%.",
    subtitle: "Тончайшие Apple Watch",
    inNav: true,
  },
  {
    slug: "apple-watch-se-2",
    name: "Apple Watch SE 2",
    category: "watch",
    series: "SE",
    priceFrom: 24900,
    image: "apple-watch-se-2",
    seoTitle: "Купить Apple Watch SE 2 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "Apple Watch SE 2 в Казани ✅ Доступные умные часы Apple. Гарантия, рассрочка 0%.",
    subtitle: "Доступные умные часы",
    inNav: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Android
// ─────────────────────────────────────────────────────────────────────────────
const androidModels: ProductModel[] = [
  {
    slug: "samsung-galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    category: "android",
    series: "Samsung",
    badge: "NEW",
    priceFrom: 99900,
    image: "samsung-galaxy-s25-ultra",
    seoTitle: "Купить Samsung Galaxy S25 Ultra в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "Samsung Galaxy S25 Ultra в Казани ✅ S Pen, камера 200MP. Гарантия, рассрочка 0%.",
    subtitle: "S Pen + камера 200MP",
    inNav: true,
  },
  {
    slug: "samsung-galaxy-s25",
    name: "Samsung Galaxy S25",
    category: "android",
    series: "Samsung",
    badge: "NEW",
    priceFrom: 69900,
    image: "samsung-galaxy-s25",
    seoTitle: "Купить Samsung Galaxy S25 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "Samsung Galaxy S25 в Казани ✅ Флагман Android 2025. Гарантия, рассрочка 0%.",
    subtitle: "Флагман Android 2025",
    inNav: true,
  },
  {
    slug: "google-pixel-9-pro",
    name: "Google Pixel 9 Pro",
    category: "android",
    series: "Google",
    priceFrom: 79900,
    image: "google-pixel-9-pro",
    seoTitle: "Купить Google Pixel 9 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "Google Pixel 9 Pro в Казани ✅ Лучший AI-смартфон. Гарантия, рассрочка 0%.",
    subtitle: "Лучший AI-смартфон",
    inNav: true,
  },
  {
    slug: "xiaomi-15-pro",
    name: "Xiaomi 15 Pro",
    category: "android",
    series: "Xiaomi",
    priceFrom: 59900,
    image: "xiaomi-15-pro",
    seoTitle: "Купить Xiaomi 15 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "Xiaomi 15 Pro в Казани ✅ Leica камера, Snapdragon 8 Elite. Гарантия, рассрочка 0%.",
    subtitle: "Leica + Snapdragon 8 Elite",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PlayStation
// ─────────────────────────────────────────────────────────────────────────────
const playstationModels: ProductModel[] = [
  {
    slug: "playstation-5-pro",
    name: "PlayStation 5 Pro",
    category: "playstation",
    series: "PS5",
    badge: "NEW",
    priceFrom: 79900,
    image: "playstation-5-pro",
    seoTitle: "Купить PlayStation 5 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "PlayStation 5 Pro в Казани ✅ 4K 60fps, Ray Tracing. Гарантия, рассрочка 0%.",
    subtitle: "4K 60fps, Ray Tracing",
    inNav: true,
  },
  {
    slug: "playstation-5",
    name: "PlayStation 5",
    category: "playstation",
    series: "PS5",
    priceFrom: 54900,
    image: "playstation-5",
    seoTitle: "Купить PlayStation 5 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "PlayStation 5 в Казани ✅ SSD 825GB, DualSense. Гарантия, рассрочка 0%.",
    subtitle: "SSD 825GB + DualSense",
    inNav: true,
  },
  {
    slug: "playstation-5-digital",
    name: "PlayStation 5 Digital",
    category: "playstation",
    series: "PS5",
    priceFrom: 44900,
    image: "playstation-5-digital",
    seoTitle: "Купить PlayStation 5 Digital в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "PlayStation 5 Digital Edition в Казани ✅ Без дисковода, выгодная цена. Гарантия, рассрочка 0%.",
    subtitle: "Без дисковода — выгоднее",
    inNav: true,
  },
  {
    slug: "playstation-4-pro",
    name: "PlayStation 4 Pro",
    category: "playstation",
    series: "PS4",
    priceFrom: 24900,
    image: "playstation-4-pro",
    seoTitle: "Купить PlayStation 4 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "PlayStation 4 Pro в Казани ✅ Б/у с гарантией. Рассрочка 0%, доставка в день заказа.",
    subtitle: "Б/у с гарантией",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Единый реестр
// ─────────────────────────────────────────────────────────────────────────────
export const allModels: ProductModel[] = [
  ...iPhoneModels,
  ...iPadModels,
  ...macBookModels,
  ...watchModels,
  ...androidModels,
  ...playstationModels,
];

// ─── Хелперы ─────────────────────────────────────────────────────────────────

/** Получить модель по категории + slug */
export function getModelBySlug(
  category: string,
  slug: string
): ProductModel | undefined {
  return allModels.find((m) => m.category === category && m.slug === slug);
}

/** Все модели категории */
export function getModelsByCategory(category: string): ProductModel[] {
  return allModels.filter((m) => m.category === category);
}

/** Модели для Navigation dropdown (только inNav: true) */
export function getNavModels(category: string): ProductModel[] {
  return allModels.filter((m) => m.category === category && m.inNav);
}

/** Полный URL модели: /iphone/iphone-17-pro-max */
export function getModelUrl(model: ProductModel): string {
  return `/${model.category}/${model.slug}`;
}

/** Все пары [category, slug] для generateStaticParams */
export const ALL_MODEL_PARAMS = allModels.map((m) => ({
  category: m.category,
  model: m.slug,
}));
