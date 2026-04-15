/**
 * categories.ts — конфигурация товарных категорий
 *
 * Структура URL:
 *   /[category]/                     — каталог категории   (/iphone/, /ipad/, ...)
 *   /[category]/[model]/             — страница модели      (/iphone/iphone-17-pro-max/)
 *
 * Чтобы добавить новую категорию:
 *   1. Добавь объект в `categories`
 *   2. Добавь модели в `lib/models.ts` с нужным `category`
 *   3. Готово — Navigation, sitemap, schema подхватят автоматически
 */

export interface CategoryConfig {
  /** URL slug: "iphone", "ipad", ... */
  slug: string;
  /** Отображаемое название */
  name: string;
  /** Иконка-эмодзи для мобильного меню */
  emoji: string;
  /** Заголовок страницы каталога */
  pageTitle: string;
  /** SEO description для страницы каталога */
  pageDescription: string;
  /** H1 на странице каталога */
  h1: string;
  /** Порядок в Navigation */
  order: number;
  /** Показывать в основном меню (false = только в "Ещё") */
  inMainNav: boolean;
}

export const categories = {
  iphone: {
    slug: "iphone",
    name: "iPhone",
    emoji: "📱",
    pageTitle: "Купить iPhone в Казани — все модели с гарантией | ЭПЛ-КОЛЛЕКЦИЯ",
    pageDescription:
      "Купить iPhone в Казани выгодно. iPhone 13–17 новые и б/у, гарантия 1 год, рассрочка 0%, Trade-in, бесплатная доставка в день заказа.",
    h1: "Купить iPhone в Казани",
    order: 1,
    inMainNav: true,
  },
  ipad: {
    slug: "ipad",
    name: "iPad",
    emoji: "🖥️",
    pageTitle: "Купить iPad в Казани — все модели с гарантией | ЭПЛ-КОЛЛЕКЦИЯ",
    pageDescription:
      "Купить iPad в Казани: iPad Air, iPad Pro, iPad mini с гарантией 1 год. Рассрочка 0%, Trade-in, доставка в день заказа.",
    h1: "Купить iPad в Казани",
    order: 2,
    inMainNav: true,
  },
  macbook: {
    slug: "macbook",
    name: "MacBook",
    emoji: "💻",
    pageTitle: "Купить MacBook в Казани — Air и Pro с гарантией | ЭПЛ-КОЛЛЕКЦИЯ",
    pageDescription:
      "Купить MacBook Air и MacBook Pro в Казани. Новые и б/у, гарантия 1 год, рассрочка 0%, Trade-in.",
    h1: "Купить MacBook в Казани",
    order: 3,
    inMainNav: true,
  },
  watch: {
    slug: "watch",
    name: "Apple Watch",
    emoji: "⌚",
    pageTitle: "Купить Apple Watch в Казани — все серии | ЭПЛ-КОЛЛЕКЦИЯ",
    pageDescription:
      "Купить Apple Watch в Казани: Series 9, Ultra 2, SE. Гарантия, рассрочка 0%, доставка в день заказа.",
    h1: "Купить Apple Watch в Казани",
    order: 4,
    inMainNav: true,
  },
  android: {
    slug: "android",
    name: "Android",
    emoji: "🤖",
    pageTitle: "Купить Android смартфон в Казани — Samsung, Xiaomi | ЭПЛ-КОЛЛЕКЦИЯ",
    pageDescription:
      "Купить Android смартфон в Казани: Samsung Galaxy, Xiaomi, Google Pixel. Гарантия, рассрочка 0%.",
    h1: "Купить Android смартфон в Казани",
    order: 5,
    inMainNav: false,
  },
  playstation: {
    slug: "playstation",
    name: "PlayStation",
    emoji: "🎮",
    pageTitle: "Купить PlayStation в Казани — PS5 и PS4 | ЭПЛ-КОЛЛЕКЦИЯ",
    pageDescription:
      "Купить PlayStation 5 и PlayStation 4 в Казани. Новые и б/у приставки с гарантией, рассрочка 0%.",
    h1: "Купить PlayStation в Казани",
    order: 6,
    inMainNav: false,
  },
} as const;

export type CategorySlug = keyof typeof categories;

/** Список всех категорий отсортированный по order */
export const ALL_CATEGORIES = Object.values(categories).sort(
  (a, b) => a.order - b.order
);

/** Категории для основного меню Navigation */
export const MAIN_NAV_CATEGORIES = ALL_CATEGORIES.filter((c) => c.inMainNav);

/** Категории для "Ещё" в Navigation */
export const MORE_NAV_CATEGORIES = ALL_CATEGORIES.filter((c) => !c.inMainNav);

/** Получить конфиг категории по slug */
export function getCategoryConfig(slug: string): CategoryConfig | undefined {
  return categories[slug as CategorySlug];
}

/** Все slugи категорий для generateStaticParams */
export const ALL_CATEGORY_SLUGS = Object.keys(categories) as CategorySlug[];
