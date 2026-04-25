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
// Watch
// ─────────────────────────────────────────────────────────────────────────────

const watchModels: ProductModel[] = [
  {
    slug: "apple-watch-ultra-3",
    name: "Apple Watch Ultra 3",
    category: "watch",
    series: "Ultra",
    badge: "NEW",
    priceFrom: 65000,
    image: "apple-watch-ultra-3",
    seoTitle: "Купить Apple Watch Ultra 3 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Apple Watch Ultra 3 в Казани ✅ Спутниковая связь, S10. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Спутниковая связь, S10",
    inNav: true,
  },
  {
    slug: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    category: "watch",
    series: "Ultra",
    priceFrom: 32000,
    image: "apple-watch-ultra-2",
    seoTitle: "Купить Apple Watch Ultra 2 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Apple Watch Ultra 2 в Казани ✅ Титан, до 36 ч. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Титан, до 36 ч",
    inNav: true,
  },
  {
    slug: "apple-watch-ultra-2025",
    name: "Apple Watch Ultra (2025)",
    category: "watch",
    series: "Ultra",
    priceFrom: 32000,
    image: "apple-watch-ultra-2025",
    seoTitle: "Купить Apple Watch Ultra (2025) в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Apple Watch Ultra (2025) в Казани ✅ Обновлённая модель. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Обновлённая модель",
    inNav: true,
  },
  {
    slug: "apple-watch-series-11",
    name: "Apple Watch Series 11",
    category: "watch",
    series: "Series",
    badge: "NEW",
    priceFrom: 32000,
    image: "apple-watch-series-11",
    seoTitle: "Купить Apple Watch Series 11 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Apple Watch Series 11 в Казани ✅ S11, Always-On. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "S11, Always-On",
    inNav: true,
  },
  {
    slug: "apple-watch-series-10",
    name: "Apple Watch Series 10",
    category: "watch",
    series: "Series",
    priceFrom: 30000,
    image: "apple-watch-series-10",
    seoTitle: "Купить Apple Watch Series 10 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Apple Watch Series 10 в Казани ✅ Тонкий корпус, S10. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Тонкий корпус, S10",
  },
  {
    slug: "apple-watch-se-3",
    name: "Apple Watch SE 3",
    category: "watch",
    series: "SE",
    badge: "NEW",
    priceFrom: 24500,
    image: "apple-watch-se-3",
    seoTitle: "Купить Apple Watch SE 3 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Apple Watch SE 3 в Казани ✅ S10, Apple Intelligence. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "S10, Apple Intelligence",
  },
  {
    slug: "apple-watch-se-2",
    name: "Apple Watch SE 2",
    category: "watch",
    series: "SE",
    priceFrom: 21000,
    image: "apple-watch-se-2",
    seoTitle: "Купить Apple Watch SE 2 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Apple Watch SE 2 в Казани ✅ Доступные смарт-часы. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Доступные смарт-часы",
  },
  {
    slug: "samsung-galaxy-watch-8",
    name: "Samsung Galaxy Watch 8",
    category: "watch",
    series: "Galaxy",
    priceFrom: 23000,
    image: "samsung-galaxy-watch-8",
    seoTitle: "Купить Samsung Galaxy Watch 8 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy Watch 8 в Казани ✅ Wear OS, Exynos W1000. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Wear OS, Exynos W1000",
  },
  {
    slug: "samsung-galaxy-watch-classic-8",
    name: "Galaxy Watch Classic 8",
    category: "watch",
    series: "Galaxy",
    priceFrom: 24000,
    image: "samsung-galaxy-watch-classic-8",
    seoTitle: "Купить Galaxy Watch Classic 8 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Galaxy Watch Classic 8 в Казани ✅ Поворотный безель. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Поворотный безель",
  },
];



// ─────────────────────────────────────────────────────────────────────────────
// Android
// ─────────────────────────────────────────────────────────────────────────────

const androidModels: ProductModel[] = [
  {
    slug: "samsung-galaxy-s26-ultra",
    name: "Samsung Galaxy S26 Ultra",
    category: "android",
    series: "Galaxy S",
    badge: "NEW",
    priceFrom: 88000,
    image: "samsung-galaxy-s26-ultra",
    seoTitle: "Купить Samsung Galaxy S26 Ultra в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy S26 Ultra в Казани ✅ S Pen, 200 МП камера. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "S Pen, 200 МП камера",
    inNav: true,
  },
  {
    slug: "samsung-galaxy-s26-plus",
    name: "Samsung Galaxy S26+",
    category: "android",
    series: "Galaxy S",
    badge: "NEW",
    priceFrom: 73000,
    image: "samsung-galaxy-s26-plus",
    seoTitle: "Купить Samsung Galaxy S26+ в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy S26+ в Казани ✅ 6.7\" QHD+ AMOLED. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "6.7\" QHD+ AMOLED",
    inNav: true,
  },
  {
    slug: "samsung-galaxy-s26",
    name: "Samsung Galaxy S26",
    category: "android",
    series: "Galaxy S",
    badge: "NEW",
    priceFrom: 59500,
    image: "samsung-galaxy-s26",
    seoTitle: "Купить Samsung Galaxy S26 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy S26 в Казани ✅ Snapdragon 8 Elite Gen 5. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Snapdragon 8 Elite Gen 5",
    inNav: true,
  },
  {
    slug: "samsung-galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    category: "android",
    series: "Galaxy S",
    priceFrom: 74500,
    image: "samsung-galaxy-s25-ultra",
    seoTitle: "Купить Samsung Galaxy S25 Ultra в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy S25 Ultra в Казани ✅ S Pen, флагман 2024. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "S Pen, флагман 2024",
    inNav: true,
  },
  {
    slug: "samsung-galaxy-s25-fe",
    name: "Samsung Galaxy S25 FE",
    category: "android",
    series: "Galaxy S",
    priceFrom: 46000,
    image: "samsung-galaxy-s25-fe",
    seoTitle: "Купить Samsung Galaxy S25 FE в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy S25 FE в Казани ✅ Доступный флагман. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Доступный флагман",
  },
  {
    slug: "samsung-galaxy-s25",
    name: "Samsung Galaxy S25",
    category: "android",
    series: "Galaxy S",
    priceFrom: 52000,
    image: "samsung-galaxy-s25",
    seoTitle: "Купить Samsung Galaxy S25 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy S25 в Казани ✅ Snapdragon 8 Elite. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Snapdragon 8 Elite",
  },
  {
    slug: "samsung-galaxy-a56",
    name: "Samsung Galaxy A56",
    category: "android",
    series: "Galaxy A",
    priceFrom: 32500,
    image: "samsung-galaxy-a56",
    seoTitle: "Купить Samsung Galaxy A56 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy A56 в Казани ✅ AMOLED 6.7\", 5000 мАч. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "AMOLED 6.7\", 5000 мАч",
  },
  {
    slug: "samsung-galaxy-a36",
    name: "Samsung Galaxy A36",
    category: "android",
    series: "Galaxy A",
    priceFrom: 25000,
    image: "samsung-galaxy-a36",
    seoTitle: "Купить Samsung Galaxy A36 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy A36 в Казани ✅ Snapdragon 6 Gen 3. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Snapdragon 6 Gen 3",
  },
  {
    slug: "samsung-galaxy-a26",
    name: "Samsung Galaxy A26",
    category: "android",
    series: "Galaxy A",
    priceFrom: 22500,
    image: "samsung-galaxy-a26",
    seoTitle: "Купить Samsung Galaxy A26 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy A26 в Казани ✅ AMOLED 6.5\", Exynos. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "AMOLED 6.5\", Exynos",
  },
  {
    slug: "samsung-galaxy-a17",
    name: "Samsung Galaxy A17",
    category: "android",
    series: "Galaxy A",
    priceFrom: 18000,
    image: "samsung-galaxy-a17",
    seoTitle: "Купить Samsung Galaxy A17 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy A17 в Казани ✅ Бюджетный с AMOLED. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Бюджетный с AMOLED",
  },
  {
    slug: "samsung-galaxy-a07",
    name: "Samsung Galaxy A07",
    category: "android",
    series: "Galaxy A",
    priceFrom: 14000,
    image: "samsung-galaxy-a07",
    seoTitle: "Купить Samsung Galaxy A07 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy A07 в Казани ✅ Доступный смартфон. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Доступный смартфон",
  },
  {
    slug: "xiaomi-mi-15t",
    name: "Xiaomi Mi 15T",
    category: "android",
    series: "Xiaomi",
    badge: "NEW",
    priceFrom: 42500,
    image: "xiaomi-mi-15t",
    seoTitle: "Купить Xiaomi Mi 15T в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Xiaomi Mi 15T в Казани ✅ Флагман Xiaomi 2025. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Флагман Xiaomi 2025",
  },
  {
    slug: "xiaomi-redmi-note-15-pro",
    name: "Xiaomi Redmi Note 15 Pro",
    category: "android",
    series: "Xiaomi",
    priceFrom: 24500,
    image: "xiaomi-redmi-note-15-pro",
    seoTitle: "Купить Xiaomi Redmi Note 15 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Xiaomi Redmi Note 15 Pro в Казани ✅ Хит продаж. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Хит продаж",
  },
  {
    slug: "xiaomi-redmi-note-15",
    name: "Xiaomi Redmi Note 15",
    category: "android",
    series: "Xiaomi",
    priceFrom: 18000,
    image: "xiaomi-redmi-note-15",
    seoTitle: "Купить Xiaomi Redmi Note 15 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Xiaomi Redmi Note 15 в Казани ✅ Народный смартфон. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Народный смартфон",
  },
  {
    slug: "xiaomi-redmi-note-14s",
    name: "Xiaomi Redmi Note 14S",
    category: "android",
    series: "Xiaomi",
    priceFrom: 19500,
    image: "xiaomi-redmi-note-14s",
    seoTitle: "Купить Xiaomi Redmi Note 14S в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Xiaomi Redmi Note 14S в Казани ✅ Note 14 Special. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Note 14 Special",
  },
  {
    slug: "xiaomi-redmi-note-14",
    name: "Xiaomi Redmi Note 14",
    category: "android",
    series: "Xiaomi",
    priceFrom: 16500,
    image: "xiaomi-redmi-note-14",
    seoTitle: "Купить Xiaomi Redmi Note 14 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Xiaomi Redmi Note 14 в Казани ✅ Бюджетный Redmi. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Бюджетный Redmi",
  },
  {
    slug: "meizu-note-21",
    name: "Meizu Note 21",
    category: "android",
    series: "Meizu",
    priceFrom: 12500,
    image: "meizu-note-21",
    seoTitle: "Купить Meizu Note 21 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Meizu Note 21 в Казани ✅ Альтернатива Xiaomi. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Альтернатива Xiaomi",
  },
];



// ─────────────────────────────────────────────────────────────────────────────
// Airpods
// ─────────────────────────────────────────────────────────────────────────────

const airpodsModels: ProductModel[] = [
  {
    slug: "airpods-max",
    name: "AirPods Max",
    category: "airpods",
    series: "AirPods",
    priceFrom: 44500,
    image: "airpods-max",
    seoTitle: "Купить AirPods Max в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "AirPods Max в Казани ✅ Полноразмерные с ANC, USB-C. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Полноразмерные с ANC, USB-C",
    inNav: true,
  },
  {
    slug: "airpods-pro-3",
    name: "AirPods Pro 3",
    category: "airpods",
    series: "AirPods",
    badge: "NEW",
    priceFrom: 21000,
    image: "airpods-pro-3",
    seoTitle: "Купить AirPods Pro 3 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "AirPods Pro 3 в Казани ✅ H3, новый ANC, IP54. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "H3, новый ANC, IP54",
    inNav: true,
  },
  {
    slug: "airpods-pro-2",
    name: "AirPods Pro 2 (USB-C)",
    category: "airpods",
    series: "AirPods",
    priceFrom: 18500,
    image: "airpods-pro-2",
    seoTitle: "Купить AirPods Pro 2 (USB-C) в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "AirPods Pro 2 (USB-C) в Казани ✅ H2, MagSafe, USB-C. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "H2, MagSafe, USB-C",
    inNav: true,
  },
  {
    slug: "airpods-4",
    name: "AirPods 4",
    category: "airpods",
    series: "AirPods",
    badge: "NEW",
    priceFrom: 13000,
    image: "airpods-4",
    seoTitle: "Купить AirPods 4 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "AirPods 4 в Казани ✅ H2, опционально с ANC. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "H2, опционально с ANC",
    inNav: true,
  },
  {
    slug: "galaxy-buds",
    name: "Samsung Galaxy Buds",
    category: "airpods",
    series: "Galaxy",
    priceFrom: 11000,
    image: "galaxy-buds",
    seoTitle: "Купить Samsung Galaxy Buds в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Samsung Galaxy Buds в Казани ✅ Buds 3 / Buds 3 FE. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Buds 3 / Buds 3 FE",
  },
  {
    slug: "marshall-headphones",
    name: "Наушники Marshall",
    category: "airpods",
    series: "Marshall",
    priceFrom: 9000,
    image: "marshall-headphones",
    seoTitle: "Купить Наушники Marshall в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Наушники Marshall в Казани ✅ Marshall 4 / 5. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Marshall 4 / 5",
  },
];



// ─────────────────────────────────────────────────────────────────────────────
// Dyson
// ─────────────────────────────────────────────────────────────────────────────

const dysonModels: ProductModel[] = [
  {
    slug: "dyson-hd18-pro",
    name: "Фен Dyson HD18 Pro",
    category: "dyson",
    series: "Фены",
    badge: "NEW",
    priceFrom: 39000,
    image: "dyson-hd18-pro",
    seoTitle: "Купить Фен Dyson HD18 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Фен Dyson HD18 Pro в Казани ✅ Pro-фен Dyson. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Pro-фен Dyson",
    inNav: true,
  },
  {
    slug: "dyson-hd17",
    name: "Фен Dyson HD17",
    category: "dyson",
    series: "Фены",
    priceFrom: 34000,
    image: "dyson-hd17",
    seoTitle: "Купить Фен Dyson HD17 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Фен Dyson HD17 в Казани ✅ Популярный Dyson. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Популярный Dyson",
    inNav: true,
  },
  {
    slug: "dyson-hd16",
    name: "Фен Dyson HD16",
    category: "dyson",
    series: "Фены",
    priceFrom: 34000,
    image: "dyson-hd16",
    seoTitle: "Купить Фен Dyson HD16 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Фен Dyson HD16 в Казани ✅ Классический фен. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Классический фен",
    inNav: true,
  },
  {
    slug: "dyson-airwrap-hs09",
    name: "Стайлер Dyson Airwrap HS09 Coanda 2x",
    category: "dyson",
    series: "Стайлеры",
    badge: "NEW",
    priceFrom: 50000,
    image: "dyson-airwrap-hs09",
    seoTitle: "Купить Стайлер Dyson Airwrap HS09 Coanda 2x в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Стайлер Dyson Airwrap HS09 Coanda 2x в Казани ✅ 5 насадок Coanda 2x. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "5 насадок Coanda 2x",
    inNav: true,
  },
  {
    slug: "dyson-airwrap-hs08",
    name: "Стайлер Dyson Airwrap HS08",
    category: "dyson",
    series: "Стайлеры",
    priceFrom: 35000,
    image: "dyson-airwrap-hs08",
    seoTitle: "Купить Стайлер Dyson Airwrap HS08 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Стайлер Dyson Airwrap HS08 в Казани ✅ Long iD. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Long iD",
  },
  {
    slug: "dyson-airwrap-hs05",
    name: "Стайлер Dyson Airwrap HS05",
    category: "dyson",
    series: "Стайлеры",
    priceFrom: 31000,
    image: "dyson-airwrap-hs05",
    seoTitle: "Купить Стайлер Dyson Airwrap HS05 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Стайлер Dyson Airwrap HS05 в Казани ✅ Long Nickel/Cooper. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Long Nickel/Cooper",
  },
  {
    slug: "dyson-airstrait-ht01",
    name: "Выпрямитель Dyson Airstrait HT01",
    category: "dyson",
    series: "Выпрямители",
    priceFrom: 33500,
    image: "dyson-airstrait-ht01",
    seoTitle: "Купить Выпрямитель Dyson Airstrait HT01 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Выпрямитель Dyson Airstrait HT01 в Казани ✅ Сушит и выпрямляет. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Сушит и выпрямляет",
  },
  {
    slug: "dyson-wash-g1",
    name: "Пылесос Dyson WashG1",
    category: "dyson",
    series: "Пылесосы",
    badge: "NEW",
    priceFrom: 44000,
    image: "dyson-wash-g1",
    seoTitle: "Купить Пылесос Dyson WashG1 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Пылесос Dyson WashG1 в Казани ✅ Моющий пылесос. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Моющий пылесос",
  },
  {
    slug: "dyson-gen5-detect",
    name: "Пылесос Dyson Gen5 Detect",
    category: "dyson",
    series: "Пылесосы",
    priceFrom: 56000,
    image: "dyson-gen5-detect",
    seoTitle: "Купить Пылесос Dyson Gen5 Detect в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Пылесос Dyson Gen5 Detect в Казани ✅ Лазерная индикация. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Лазерная индикация",
  },
  {
    slug: "dyson-v16s",
    name: "Пылесос Dyson V16s Submarine",
    category: "dyson",
    series: "Пылесосы",
    badge: "NEW",
    priceFrom: 74500,
    image: "dyson-v16s",
    seoTitle: "Купить Пылесос Dyson V16s Submarine в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Пылесос Dyson V16s Submarine в Казани ✅ Сухая и влажная уборка. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Сухая и влажная уборка",
  },
  {
    slug: "dyson-v15s",
    name: "Пылесос Dyson V15s Submarine",
    category: "dyson",
    series: "Пылесосы",
    priceFrom: 56000,
    image: "dyson-v15s",
    seoTitle: "Купить Пылесос Dyson V15s Submarine в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Пылесос Dyson V15s Submarine в Казани ✅ Submarine версия. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Submarine версия",
  },
  {
    slug: "dyson-v15",
    name: "Пылесос Dyson V15 Detect",
    category: "dyson",
    series: "Пылесосы",
    priceFrom: 51000,
    image: "dyson-v15",
    seoTitle: "Купить Пылесос Dyson V15 Detect в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Пылесос Dyson V15 Detect в Казани ✅ С лазерной индикацией. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "С лазерной индикацией",
  },
  {
    slug: "dyson-v12s",
    name: "Пылесос Dyson V12s Submarine",
    category: "dyson",
    series: "Пылесосы",
    priceFrom: 47000,
    image: "dyson-v12s",
    seoTitle: "Купить Пылесос Dyson V12s Submarine в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Пылесос Dyson V12s Submarine в Казани ✅ Влажная уборка. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Влажная уборка",
  },
  {
    slug: "dyson-v12",
    name: "Пылесос Dyson V12 Detect Slim",
    category: "dyson",
    series: "Пылесосы",
    priceFrom: 40000,
    image: "dyson-v12",
    seoTitle: "Купить Пылесос Dyson V12 Detect Slim в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Пылесос Dyson V12 Detect Slim в Казани ✅ Тонкий и лёгкий. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Тонкий и лёгкий",
  },
  {
    slug: "dyson-v8",
    name: "Пылесос Dyson V8",
    category: "dyson",
    series: "Пылесосы",
    priceFrom: 26500,
    image: "dyson-v8",
    seoTitle: "Купить Пылесос Dyson V8 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Пылесос Dyson V8 в Казани ✅ Базовая модель. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Базовая модель",
  },
];



// ─────────────────────────────────────────────────────────────────────────────
// Audio
// ─────────────────────────────────────────────────────────────────────────────

const audioModels: ProductModel[] = [
  {
    slug: "jbl-boombox-4",
    name: "JBL Boombox 4",
    category: "audio",
    series: "JBL",
    badge: "NEW",
    priceFrom: 42000,
    image: "jbl-boombox-4",
    seoTitle: "Купить JBL Boombox 4 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "JBL Boombox 4 в Казани ✅ Мощная Bluetooth-колонка. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Мощная Bluetooth-колонка",
    inNav: true,
  },
  {
    slug: "yandex-station-light-2",
    name: "Яндекс Станция Лайт 2",
    category: "audio",
    series: "Яндекс",
    priceFrom: 8000,
    image: "yandex-station-light-2",
    seoTitle: "Купить Яндекс Станция Лайт 2 в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "Яндекс Станция Лайт 2 в Казани ✅ Умная колонка с Алисой. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Умная колонка с Алисой",
    inNav: true,
  },
  {
    slug: "dji-mic-3",
    name: "DJI Mic 3 (2TX + 1RX)",
    category: "audio",
    series: "DJI",
    badge: "NEW",
    priceFrom: 31000,
    image: "dji-mic-3",
    seoTitle: "Купить DJI Mic 3 (2TX + 1RX) в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "DJI Mic 3 (2TX + 1RX) в Казани ✅ 2 передатчика + приёмник. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "2 передатчика + приёмник",
    inNav: true,
  },
  {
    slug: "dji-mic-2",
    name: "DJI Mic 2 (2TX + 1RX)",
    category: "audio",
    series: "DJI",
    priceFrom: 22500,
    image: "dji-mic-2",
    seoTitle: "Купить DJI Mic 2 (2TX + 1RX) в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "DJI Mic 2 (2TX + 1RX) в Казани ✅ Беспроводной микрофон. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Беспроводной микрофон",
    inNav: true,
  },
  {
    slug: "dji-mic-mini",
    name: "DJI Mic Mini (2TX + 1RX)",
    category: "audio",
    series: "DJI",
    badge: "NEW",
    priceFrom: 14500,
    image: "dji-mic-mini",
    seoTitle: "Купить DJI Mic Mini (2TX + 1RX) в Казани | ЭПЛ-КОЛЛЕКЦИЯ",
    seoDescription: "DJI Mic Mini (2TX + 1RX) в Казани ✅ Компактный набор. Гарантия 1 год, рассрочка 0%, доставка.",
    subtitle: "Компактный набор",
  },
];


// ─────────────────────────────────────────────────────────────────────────────
// Единый реестр
// ─────────────────────────────────────────────────────────────────────────────
// ─── PlayStation ──────────────────────────────────────────────────────────────
const playstationModels: ProductModel[] = [
  { slug: "playstation-5-pro", name: "PlayStation 5 Pro", category: "playstation", series: "PS5", badge: "NEW", priceFrom: 89000, image: "playstation-5-pro", seoTitle: "Купить PlayStation 5 Pro в Казани | ЭПЛ-КОЛЛЕКЦИЯ", seoDescription: "PS5 Pro в Казани ✅ 45 ТФЛОПС GPU, 2 ТБ SSD. Гарантия 1 год, рассрочка 0%.", subtitle: "Самая мощная PS5", inNav: true },
  { slug: "playstation-5-slim", name: "PlayStation 5 Slim", category: "playstation", series: "PS5", priceFrom: 54000, image: "playstation-5-slim", seoTitle: "Купить PlayStation 5 Slim в Казани | ЭПЛ-КОЛЛЕКЦИЯ", seoDescription: "PS5 Slim в Казани ✅ Компактный дизайн, 1 ТБ SSD. Гарантия 1 год, рассрочка 0%.", subtitle: "Компактная с дисководом", inNav: true },
  { slug: "playstation-5-slim-digital", name: "PlayStation 5 Slim Digital", category: "playstation", series: "PS5", priceFrom: 48000, image: "playstation-5-slim-digital", seoTitle: "Купить PlayStation 5 Slim Digital в Казани | ЭПЛ-КОЛЛЕКЦИЯ", seoDescription: "PS5 Slim Digital Edition в Казани ✅ Без дисковода, 1 ТБ SSD. Гарантия 1 год.", subtitle: "Без дисковода", inNav: true },
];

export const allModels: ProductModel[] = [
  ...iPhoneModels,
  ...iPadModels,
  ...macBookModels,
  ...watchModels,
  ...airpodsModels,
  ...androidModels,
  ...dysonModels,
  ...audioModels,
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
