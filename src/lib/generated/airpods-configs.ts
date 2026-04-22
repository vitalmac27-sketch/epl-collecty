/** airpods-configs.ts — АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [
  { id: "charger-20w", name: "Блок питания Apple 20W USB-C", description: "Для быстрой зарядки кейса.", price: 2490, emoji: "🔌" },
  { id: "case-airpods", name: "Чехол для кейса AirPods", description: "Силиконовый защитный чехол.", price: 990, emoji: "📦" },
  { id: "eartips", name: "Сменные амбушюры", description: "Для AirPods Pro: 4 размера.", price: 1490, emoji: "👂" },
  { id: "cable-usb-c", name: "Кабель USB-C / Lightning", description: "Оригинальный 1 м.", price: 1290, emoji: "🔗" },
];

const AIRPODS_MAX_CONFIG: ProductConfig = {
  slug: "airpods-max",
  category: "airpods",
  colors: [
    { id: "purple", name: "Фиолетовый", hex: "#B8A8CF", image: "airpods-max" },
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "airpods-max" },
    { id: "orange", name: "Оранжевый (Cosmic Orange)", hex: "#D55A2B", image: "airpods-max" },
    { id: "starlight", name: "Сияющая Звезда", hex: "#F5EFE3", image: "airpods-max" },
    { id: "midnight", name: "Тёмная Ночь", hex: "#2C2D30", image: "airpods-max" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "blue", simId: "none", price: 47500 },
    { storageId: "std", colorId: "midnight", simId: "none", price: 44500 },
    { storageId: "std", colorId: "orange", simId: "none", price: 45500 },
    { storageId: "std", colorId: "purple", simId: "none", price: 45000 },
    { storageId: "std", colorId: "starlight", simId: "none", price: 47500 },
  ],
  defaultStorage: "std",
  defaultColor: "purple",
  defaultSim: "none",
  priceFrom: 44500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Тип", value: "Полноразмерные накладные" },
    { label: "Шумоподавление", value: "Активное (ANC)" },
    { label: "Adaptive EQ", value: "Да" },
    { label: "Разъём", value: "USB-C" },
    { label: "Батарея", value: "до 20 часов с ANC" },
  ],
  compareTitle: "AirPods Max (2020)",
  compare: [
    { label: "Разъём", current: "USB-C", previous: "Lightning", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить AirPods Max в Казани",
  seoText: "AirPods Max — популярный наушники в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 44 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему AirPods Max стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый AirPods Max проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const AIRPODS_PRO_3_CONFIG: ProductConfig = {
  slug: "airpods-pro-3",
  category: "airpods",
  colors: [
    { id: "standard", name: "Standard", hex: "#888888", image: "airpods-pro-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 21000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 21000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Шумоподавление", value: "Активное, нового поколения" },
    { label: "Adaptive Audio", value: "Да" },
    { label: "Чип", value: "H3" },
    { label: "Кейс", value: "USB-C, MagSafe" },
    { label: "Защита", value: "IP54" },
  ],
  compareTitle: "AirPods Pro 2",
  compare: [
    { label: "Чип", current: "H3", previous: "H2", better: true },
    { label: "Защита", current: "IP54", previous: "IP54", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить AirPods Pro 3 в Казани",
  seoText: "AirPods Pro 3 — популярный наушники в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 21 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему AirPods Pro 3 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый AirPods Pro 3 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const AIRPODS_PRO_2_CONFIG: ProductConfig = {
  slug: "airpods-pro-2",
  category: "airpods",
  colors: [
    { id: "standard", name: "Standard", hex: "#888888", image: "airpods-pro-2" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 18500 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 18500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Шумоподавление", value: "Активное (ANC)" },
    { label: "Adaptive Audio", value: "Да" },
    { label: "Чип", value: "H2" },
    { label: "Кейс", value: "USB-C, MagSafe" },
  ],
  compareTitle: "AirPods Pro (1st gen)",
  compare: [
    { label: "Шумоподавление", current: "2× лучше", previous: "Стандарт", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить AirPods Pro 2 (USB-C) в Казани",
  seoText: "AirPods Pro 2 (USB-C) — популярный наушники в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 18 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему AirPods Pro 2 (USB-C) стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый AirPods Pro 2 (USB-C) проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const AIRPODS_4_CONFIG: ProductConfig = {
  slug: "airpods-4",
  category: "airpods",
  colors: [
    { id: "standard", name: "Standard", hex: "#888888", image: "airpods-4" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 13000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 13000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Тип", value: "Открытые с шумоподавлением (опция)" },
    { label: "Чип", value: "H2" },
    { label: "Кейс", value: "USB-C, опционально MagSafe" },
  ],
  compareTitle: "AirPods 3",
  compare: [
    { label: "Чип", current: "H2", previous: "H1", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить AirPods 4 в Казани",
  seoText: "AirPods 4 — популярный наушники в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 13 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему AirPods 4 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый AirPods 4 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const GALAXY_BUDS_CONFIG: ProductConfig = {
  slug: "galaxy-buds",
  category: "airpods",
  colors: [
    { id: "silver", name: "Серебристый", hex: "#D8D8D8", image: "galaxy-buds" },
    { id: "gray", name: "Серый", hex: "#4E4E4F", image: "galaxy-buds" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "gray", simId: "none", price: 11000 },
    { storageId: "std", colorId: "silver", simId: "none", price: 11500 },
  ],
  defaultStorage: "std",
  defaultColor: "silver",
  defaultSim: "none",
  priceFrom: 11000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy Buds в Казани",
  seoText: "Samsung Galaxy Buds — популярный наушники в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 11 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy Buds стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy Buds проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const MARSHALL_HEADPHONES_CONFIG: ProductConfig = {
  slug: "marshall-headphones",
  category: "airpods",
  colors: [
    { id: "cream", name: "Кремовый", hex: "#EFE5D2", image: "marshall-headphones" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "marshall-headphones" },
    { id: "brown", name: "Коричневый", hex: "#5C3B29", image: "marshall-headphones" },
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "marshall-headphones" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 10000 },
    { storageId: "std", colorId: "blue", simId: "none", price: 10000 },
    { storageId: "std", colorId: "brown", simId: "none", price: 9000 },
    { storageId: "std", colorId: "cream", simId: "none", price: 10000 },
  ],
  defaultStorage: "std",
  defaultColor: "cream",
  defaultSim: "none",
  priceFrom: 9000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Наушники Marshall в Казани",
  seoText: "Наушники Marshall — популярный наушники в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 9 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Наушники Marshall стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Наушники Marshall проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const configs: Record<string, ProductConfig> = {
  "airpods-max": AIRPODS_MAX_CONFIG,
  "airpods-pro-3": AIRPODS_PRO_3_CONFIG,
  "airpods-pro-2": AIRPODS_PRO_2_CONFIG,
  "airpods-4": AIRPODS_4_CONFIG,
  "galaxy-buds": GALAXY_BUDS_CONFIG,
  "marshall-headphones": MARSHALL_HEADPHONES_CONFIG,
};

export function getAirpodsConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const AIRPODS_CONFIG_SLUGS = Object.keys(configs);
