/**
 * cities.ts — конфигурация городов для локального SEO
 *
 * Чтобы добавить новый город:
 * 1. Добавь объект в `cities` (скопируй `kazan` как шаблон)
 * 2. Добавь slug в тип CitySlug
 * 3. Создай папку src/app/[city]/ (опционально — для поддомена)
 * 4. Готово — все компоненты подхватят данные автоматически
 */

export interface CityConfig {
  slug: string;
  /** Именительный: "Казань" */
  name: string;
  /** Родительный: "Казани" */
  nameGen: string;
  /** Предложный: "в Казани" */
  namePre: string;
  address: string;
  district: string;
  regionFull: string;
  phone: string;
  phoneFormatted: string;
  telegram: string;
  telegramChannel: string;
  vk: string;
  avito: string;
  hours: string;
  hoursSchema: string; // формат Schema.org: "Mo-Su 13:00-20:00"
  metroNote: string;
  /** Районы для блока доставки */
  deliveryDistricts: string[];
  /** Ключевые слова для SEO (Title/Description) */
  keywords: string[];
  /** Координаты для Schema.org LocalBusiness */
  geo: { lat: number; lng: number };
  /** Полный URL сайта для canonical и OG */
  siteUrl: string;
}

export const cities = {
  kazan: {
    slug: "kazan",
    name: "Казань",
    nameGen: "Казани",
    namePre: "в Казани",
    address: "ул. Сибгата Хакима, 40а, Офис 7",
    district: "Ново-Савиновский район",
    regionFull: "Республика Татарстан",
    phone: "+79992673933",
    phoneFormatted: "+7 (999) 267-39-33",
    telegram: "https://t.me/ac_care",
    telegramChannel: "https://t.me/apple_collecty",
    vk: "https://vk.com/apple_collecty",
    avito: "https://www.avito.ru/brands/i141094380",
    hours: "Пн–Вс 13:00–20:00",
    hoursSchema: "Mo-Su 13:00-20:00",
    metroNote: "15 мин пешком от м. Козья слобода",
    deliveryDistricts: [
      "Вахитовский",
      "Ново-Савиновский",
      "Приволжский (Азино)",
      "Московский",
      "Авиастроительный",
      "Кировский",
      "Советский",
      "Горки",
    ],
    keywords: [
      "купить айфон",
      "купить айфон казань",
      "где купить выгодно айфон",
      "купить айфон рассрочка",
    ],
    geo: { lat: 55.8304, lng: 49.0661 },
    siteUrl: "https://xn----7sbabf5ahb9bfkc.xn--p1ai",
  } satisfies CityConfig,

  // ── Шаблон для будущих городов ──────────────────────────────────────────
  // spb: {
  //   slug: "spb",
  //   name: "Санкт-Петербург",
  //   nameGen: "Санкт-Петербурга",
  //   namePre: "в Санкт-Петербурге",
  //   address: "ул. ...",
  //   ...
  //   siteUrl: "https://spb.timewe.claud",
  // } satisfies CityConfig,
} as const;

export type CitySlug = keyof typeof cities;

/** Город по умолчанию — всегда Казань */
export const DEFAULT_CITY: CityConfig = cities.kazan;

/** Получить конфиг города по slug (с fallback на default) */
export function getCityConfig(slug?: string): CityConfig {
  if (slug && slug in cities) {
    return cities[slug as CitySlug];
  }
  return DEFAULT_CITY;
}

/** Все slugи для генерации статических путей */
export const ALL_CITY_SLUGS = Object.keys(cities) as CitySlug[];
