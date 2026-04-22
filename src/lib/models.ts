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
    priceFrom: 108900,
    image: "iphone-17-pro-max",
    seoTitle: "Купить iPhone 17 Pro Max в Казани недорого | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 17 Pro Max в Казани ✅ A19 Pro, камера 48MP, титан. Гарантия 1 год, рассрочка 0%, Trade-in, бесплатная доставка!",
    subtitle: "Флагман 2025 года с A19 Pro",
    inNav: true,
  },
  {
    slug: "iphone-17-pro",
    name: "iPhone 17 Pro",
    category: "iphone",
    series: "17",
    badge: "NEW",
    priceFrom: 101300,
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
      "iPhone 17 Air в Казани ✅ Самый тонкий iPhone в истории. Рассрочка 0%, гарантия 1 год.",
    subtitle: "Самый тонкий iPhone",
    inNav: true,
  },
  {
    slug: "iphone-17",
    name: "iPhone 17",
    category: "iphone",
    series: "17",
    badge: "NEW",
    priceFrom: 66000,
    image: "iphone-17",
    seoTitle: "Купить iPhone 17 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 17 в Казани ✅ Хит продаж 2025. Гарантия 1 год, рассрочка 0%, доставка бесплатно.",
    subtitle: "Хит продаж 2025",
    inNav: true,
  },
  {
    slug: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    category: "iphone",
    series: "16",
    priceFrom: 94000,
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
    priceFrom: 70000,
    image: "iphone-16-plus",
    seoTitle: "Купить iPhone 16 Plus в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 16 Plus в Казани ✅ Большой экран, A18 chip. Гарантия 1 год, рассрочка 0%.",
    subtitle: "Большой экран A18",
    inNav: true,
  },
  {
    slug: "iphone-16",
    name: "iPhone 16",
    category: "iphone",
    series: "16",
    priceFrom: 57500,
    image: "iphone-16",
    seoTitle: "Купить iPhone 16 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription:
      "iPhone 16 в Казани ✅ Apple Intelligence, A18. Гарантия 1 год, рассрочка 0%, доставка.",
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
    priceFrom: 52000,
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
    slug: "ipad-pro-13",
    name: "iPad Pro 13\" M5",
    category: "ipad",
    series: "Pro",
    badge: "NEW",
    priceFrom: 157000,
    image: "ipad-pro-13",
    seoTitle: "Купить iPad Pro 13 M5 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "iPad Pro 13\" M5 в Казани ✅ OLED 120 Гц, Thunderbolt 4. Гарантия, рассрочка 0%.",
    subtitle: "OLED 120 Гц, Thunderbolt 4",
    inNav: true,
  },
  {
    slug: "ipad-pro-11",
    name: "iPad Pro 11\" M5",
    category: "ipad",
    series: "Pro",
    badge: "NEW",
    priceFrom: 84000,
    image: "ipad-pro-11",
    seoTitle: "Купить iPad Pro 11 M5 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "iPad Pro 11\" M5 в Казани ✅ OLED 120 Гц, Apple Pencil Pro. Гарантия, рассрочка 0%.",
    subtitle: "Компактный Pro с OLED",
    inNav: true,
  },
  {
    slug: "ipad-air-11-m4",
    name: "iPad Air 11\" M4",
    category: "ipad",
    series: "Air",
    badge: "NEW",
    priceFrom: 55000,
    image: "ipad-air-11-m4",
    seoTitle: "Купить iPad Air 11 M4 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "iPad Air 11\" M4 в Казани ✅ Чип M4, Apple Intelligence. Гарантия, рассрочка 0%.",
    subtitle: "Чип M4 + Apple Intelligence",
    inNav: true,
  },
  {
    slug: "ipad-air-11-m3",
    name: "iPad Air 11\" M3",
    category: "ipad",
    series: "Air",
    priceFrom: 53000,
    image: "ipad-air-11-m3",
    seoTitle: "Купить iPad Air 11 M3 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "iPad Air 11\" M3 в Казани ✅ Чип M3, Apple Pencil Pro. Гарантия, рассрочка 0%.",
    subtitle: "Чип M3 с Apple Intelligence",
    inNav: true,
  },
  {
    slug: "ipad-11-2025",
    name: "iPad 11 (2025)",
    category: "ipad",
    series: "base",
    badge: "NEW",
    priceFrom: 36000,
    image: "ipad-11-2025",
    seoTitle: "Купить iPad 11 (2025) в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "iPad 11 2025 в Казани ✅ A16 Bionic, 11\" дисплей. Гарантия, рассрочка 0%, доставка.",
    subtitle: "Базовый с A16 Bionic",
    inNav: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MacBook
// ─────────────────────────────────────────────────────────────────────────────
const macBookModels: ProductModel[] = [
  {
    slug: "macbook-pro-14-m5-pro",
    name: "MacBook Pro 14\" M5 Pro",
    category: "macbook",
    series: "Pro",
    badge: "NEW",
    priceFrom: 189000,
    image: "macbook-pro-14-m5-pro",
    seoTitle: "Купить MacBook Pro 14 M5 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "MacBook Pro 14\" M5 Pro в Казани ✅ Профессиональный ноутбук, Thunderbolt 5. Гарантия, рассрочка 0%.",
    subtitle: "Профессиональный M5 Pro",
    inNav: true,
  },
  {
    slug: "macbook-pro-14-m5",
    name: "MacBook Pro 14\" M5",
    category: "macbook",
    series: "Pro",
    badge: "NEW",
    priceFrom: 132000,
    image: "macbook-pro-14-m5",
    seoTitle: "Купить MacBook Pro 14 M5 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "MacBook Pro 14\" M5 в Казани ✅ Чип M5, Liquid Retina XDR. Гарантия, рассрочка 0%.",
    subtitle: "Pro с новейшим M5",
    inNav: true,
  },
  {
    slug: "macbook-air-15-m5",
    name: "MacBook Air 15\" M5",
    category: "macbook",
    series: "Air",
    badge: "NEW",
    priceFrom: 116000,
    image: "macbook-air-15-m5",
    seoTitle: "Купить MacBook Air 15 M5 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "MacBook Air 15\" M5 в Казани ✅ Большой экран, чип M5. Гарантия, рассрочка 0%.",
    subtitle: "Большой 15\" экран + M5",
    inNav: true,
  },
  {
    slug: "macbook-air-15-m4",
    name: "MacBook Air 15\" M4",
    category: "macbook",
    series: "Air",
    priceFrom: 109000,
    image: "macbook-air-15-m4",
    seoTitle: "Купить MacBook Air 15 M4 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "MacBook Air 15\" M4 в Казани ✅ 15\" Liquid Retina, M4. Гарантия, рассрочка 0%.",
    subtitle: "Большой экран с M4",
    inNav: true,
  },
  {
    slug: "macbook-air-13-m5",
    name: "MacBook Air 13\" M5",
    category: "macbook",
    series: "Air",
    badge: "NEW",
    priceFrom: 100000,
    image: "macbook-air-13-m5",
    seoTitle: "Купить MacBook Air 13 M5 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "MacBook Air 13\" M5 в Казани ✅ Новейший M5, 18ч батареи. Гарантия, рассрочка 0%.",
    subtitle: "Хит 13\" с M5",
    inNav: true,
  },
  {
    slug: "macbook-air-13-m2",
    name: "MacBook Air 13\" M2",
    category: "macbook",
    series: "Air",
    priceFrom: 77500,
    image: "macbook-air-13-m2",
    seoTitle: "Купить MacBook Air 13 M2 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "MacBook Air 13\" M2 в Казани ✅ Надёжный M2, MagSafe 3. Гарантия, рассрочка 0%.",
    subtitle: "Проверенный M2",
  },
  {
    slug: "macbook-neo",
    name: "MacBook Neo",
    category: "macbook",
    series: "Neo",
    priceFrom: 64500,
    image: "macbook-neo",
    seoTitle: "Купить MacBook Neo в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "MacBook Neo в Казани ✅ Доступный ноутбук, 18ч батареи. Гарантия, рассрочка 0%.",
    subtitle: "Доступный ноутбук 13\"",
  },
  {
    slug: "mac-mini-m4",
    name: "Mac mini M4",
    category: "macbook",
    series: "mini",
    badge: "NEW",
    priceFrom: 59000,
    image: "mac-mini-m4",
    seoTitle: "Купить Mac mini M4 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Mac mini M4 в Казани ✅ Компактный десктоп Apple. Гарантия, рассрочка 0%.",
    subtitle: "Компактный десктоп M4",
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
