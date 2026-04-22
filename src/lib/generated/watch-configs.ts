/** watch-configs.ts — АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [
  { id: "strap-sport", name: "Спортивный ремешок", description: "Силиконовый, для тренировок.", price: 1990, emoji: "⌚" },
  { id: "strap-leather", name: "Кожаный ремешок", description: "Для делового стиля.", price: 3490, emoji: "👔" },
  { id: "charger", name: "Зарядное устройство для Watch", description: "Магнитная зарядка.", price: 2490, emoji: "🔌" },
  { id: "case-watch", name: "Защитный кейс с пленкой", description: "Защита экрана и корпуса.", price: 990, emoji: "🛡️" },
];

const APPLE_WATCH_ULTRA_3_CONFIG: ProductConfig = {
  slug: "apple-watch-ultra-3",
  category: "watch",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "apple-watch-ultra-3" },
    { id: "natural", name: "Натуральный Титан", hex: "#B5A99A", image: "apple-watch-ultra-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 65000 },
    { storageId: "std", colorId: "natural", simId: "none", price: 72000 },
  ],
  defaultStorage: "std",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 65000,
  storageLabel: "Размер корпуса",
  showSim: false,
  specs: [
    { label: "Корпус", value: "Титан 49 мм" },
    { label: "Защита", value: "100 м водозащиты, IP6X" },
    { label: "Дисплей", value: "Always-On Retina, до 3000 нит" },
    { label: "Батарея", value: "до 36 часов" },
    { label: "Чип", value: "S10 SiP" },
    { label: "Спутниковая связь", value: "Да" },
  ],
  compareTitle: "Apple Watch Ultra 2",
  compare: [
    { label: "Спутниковая связь", current: "Да", previous: "Нет", better: true },
    { label: "Чип", current: "S10", previous: "S9", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Apple Watch Ultra 3 в Казани",
  seoText: "Apple Watch Ultra 3 — популярный умные часы в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 65 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Apple Watch Ultra 3 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Apple Watch Ultra 3 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const APPLE_WATCH_ULTRA_2_CONFIG: ProductConfig = {
  slug: "apple-watch-ultra-2",
  category: "watch",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "apple-watch-ultra-2" },
    { id: "025", name: "Стандартный", hex: "#888888", image: "apple-watch-ultra-2" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "025", simId: "none", price: 32000 },
    { storageId: "std", colorId: "black", simId: "none", price: 59000 },
  ],
  defaultStorage: "std",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 32000,
  storageLabel: "Размер корпуса",
  showSim: false,
  specs: [
    { label: "Корпус", value: "Титан 49 мм" },
    { label: "Защита", value: "100 м водозащиты" },
    { label: "Дисплей", value: "Always-On, до 3000 нит" },
    { label: "Батарея", value: "до 36 часов" },
    { label: "Чип", value: "S9 SiP" },
  ],
  compareTitle: "Apple Watch Ultra",
  compare: [
    { label: "Дисплей", current: "3000 нит", previous: "2000 нит", better: true },
    { label: "Чип", current: "S9", previous: "S8", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Apple Watch Ultra 2 в Казани",
  seoText: "Apple Watch Ultra 2 — популярный умные часы в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 32 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Apple Watch Ultra 2 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Apple Watch Ultra 2 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const APPLE_WATCH_SERIES_11_CONFIG: ProductConfig = {
  slug: "apple-watch-series-11",
  category: "watch",
  colors: [
    { id: "silver", name: "Серебристый", hex: "#D8D8D8", image: "apple-watch-series-11" },
    { id: "rose", name: "Розовый (Rose)", hex: "#E6BFC2", image: "apple-watch-series-11" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "apple-watch-series-11" },
    { id: "space", name: "Space", hex: "#888888", image: "apple-watch-series-11" },
  ],
  storage: [
    { id: "46mm", label: "46 мм", available: true },
    { id: "42mm", label: "42 мм", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "42mm", colorId: "black", simId: "none", price: 32000 },
    { storageId: "42mm", colorId: "rose", simId: "none", price: 33000 },
    { storageId: "42mm", colorId: "silver", simId: "none", price: 33000 },
    { storageId: "42mm", colorId: "space", simId: "none", price: 32500 },
    { storageId: "46mm", colorId: "black", simId: "none", price: 35000 },
    { storageId: "46mm", colorId: "rose", simId: "none", price: 34000 },
    { storageId: "46mm", colorId: "silver", simId: "none", price: 34000 },
    { storageId: "46mm", colorId: "space", simId: "none", price: 33500 },
  ],
  defaultStorage: "46mm",
  defaultColor: "silver",
  defaultSim: "none",
  priceFrom: 32000,
  storageLabel: "Размер корпуса",
  showSim: false,
  specs: [
    { label: "Корпус", value: "Алюминий 42/46 мм" },
    { label: "Дисплей", value: "Always-On Retina" },
    { label: "Чип", value: "S11 SiP" },
    { label: "Батарея", value: "до 18 часов" },
    { label: "Защита", value: "IP6X, водозащита 50 м" },
  ],
  compareTitle: "Apple Watch Series 10",
  compare: [
    { label: "Чип", current: "S11", previous: "S10", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Apple Watch Series 11 в Казани",
  seoText: "Apple Watch Series 11 — популярный умные часы в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 32 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Apple Watch Series 11 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Apple Watch Series 11 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const APPLE_WATCH_SERIES_10_CONFIG: ProductConfig = {
  slug: "apple-watch-series-10",
  category: "watch",
  colors: [
    { id: "silver", name: "Серебристый", hex: "#D8D8D8", image: "apple-watch-series-10" },
  ],
  storage: [
    { id: "46mm", label: "46 мм", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "46mm", colorId: "silver", simId: "none", price: 30000 },
  ],
  defaultStorage: "46mm",
  defaultColor: "silver",
  defaultSim: "none",
  priceFrom: 30000,
  storageLabel: "Размер корпуса",
  showSim: false,
  specs: [
    { label: "Корпус", value: "Алюминий 42/46 мм" },
    { label: "Дисплей", value: "Always-On Retina" },
    { label: "Чип", value: "S10 SiP" },
    { label: "Батарея", value: "до 18 часов" },
  ],
  compareTitle: "Apple Watch Series 9",
  compare: [
    { label: "Чип", current: "S10", previous: "S9", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Apple Watch Series 10 в Казани",
  seoText: "Apple Watch Series 10 — популярный умные часы в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 30 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Apple Watch Series 10 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Apple Watch Series 10 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const APPLE_WATCH_SE_3_CONFIG: ProductConfig = {
  slug: "apple-watch-se-3",
  category: "watch",
  colors: [
    { id: "starlight", name: "Сияющая Звезда", hex: "#F5EFE3", image: "apple-watch-se-3" },
    { id: "midnight", name: "Тёмная Ночь", hex: "#2C2D30", image: "apple-watch-se-3" },
  ],
  storage: [
    { id: "44mm", label: "44 мм", available: true },
    { id: "40mm", label: "40 мм", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "40mm", colorId: "midnight", simId: "none", price: 24500 },
    { storageId: "40mm", colorId: "starlight", simId: "none", price: 24500 },
    { storageId: "44mm", colorId: "midnight", simId: "none", price: 26500 },
    { storageId: "44mm", colorId: "starlight", simId: "none", price: 26500 },
  ],
  defaultStorage: "44mm",
  defaultColor: "starlight",
  defaultSim: "none",
  priceFrom: 24500,
  storageLabel: "Размер корпуса",
  showSim: false,
  specs: [
    { label: "Корпус", value: "Алюминий 40/44 мм" },
    { label: "Дисплей", value: "Retina" },
    { label: "Чип", value: "S10 SiP" },
    { label: "Apple Intelligence", value: "Да" },
  ],
  compareTitle: "Apple Watch SE 2",
  compare: [
    { label: "Чип", current: "S10", previous: "S8", better: true },
    { label: "Always-On", current: "Да", previous: "Нет", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Apple Watch SE 3 в Казани",
  seoText: "Apple Watch SE 3 — популярный умные часы в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 24 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Apple Watch SE 3 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Apple Watch SE 3 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const APPLE_WATCH_SE_2_CONFIG: ProductConfig = {
  slug: "apple-watch-se-2",
  category: "watch",
  colors: [
    { id: "midnight", name: "Тёмная Ночь", hex: "#2C2D30", image: "apple-watch-se-2" },
  ],
  storage: [
    { id: "44mm", label: "44 мм", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "44mm", colorId: "midnight", simId: "none", price: 21000 },
  ],
  defaultStorage: "44mm",
  defaultColor: "midnight",
  defaultSim: "none",
  priceFrom: 21000,
  storageLabel: "Размер корпуса",
  showSim: false,
  specs: [
    { label: "Корпус", value: "Алюминий 40/44 мм" },
    { label: "Чип", value: "S8 SiP" },
    { label: "Батарея", value: "до 18 часов" },
  ],
  compareTitle: "Apple Watch SE",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Apple Watch SE 2 в Казани",
  seoText: "Apple Watch SE 2 — популярный умные часы в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 21 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Apple Watch SE 2 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Apple Watch SE 2 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_WATCH_8_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-watch-8",
  category: "watch",
  colors: [
    { id: "8", name: "Стандартный", hex: "#888888", image: "samsung-galaxy-watch-8" },
  ],
  storage: [
    { id: "44mm", label: "44 мм", available: true },
    { id: "40mm", label: "40 мм", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "40mm", colorId: "8", simId: "none", price: 23000 },
    { storageId: "44mm", colorId: "8", simId: "none", price: 24500 },
  ],
  defaultStorage: "44mm",
  defaultColor: "8",
  defaultSim: "none",
  priceFrom: 23000,
  storageLabel: "Размер корпуса",
  showSim: false,
  specs: [
    { label: "Корпус", value: "40/44 мм" },
    { label: "ОС", value: "Wear OS / One UI Watch" },
    { label: "Чип", value: "Exynos W1000" },
  ],
  compareTitle: "Galaxy Watch 7",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy Watch 8 в Казани",
  seoText: "Samsung Galaxy Watch 8 — популярный умные часы в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 23 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy Watch 8 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy Watch 8 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_WATCH_CLASSIC_8_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-watch-classic-8",
  category: "watch",
  colors: [
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "samsung-galaxy-watch-classic-8" },
  ],
  storage: [
    { id: "46mm", label: "46 мм", available: true },
  ],
  sim: [
    { id: "lte", label: "Wi-Fi + Cellular", description: "Wi-Fi и сотовая связь (LTE/5G) с eSIM." },
  ],
  prices: [
    { storageId: "46mm", colorId: "white", simId: "lte", price: 27500 },
    { storageId: "46mm", colorId: "white", simId: "none", price: 24000 },
  ],
  defaultStorage: "46mm",
  defaultColor: "white",
  defaultSim: "lte",
  priceFrom: 24000,
  storageLabel: "Размер корпуса",
  showSim: false,
  specs: [
    { label: "Корпус", value: "Стальной 46 мм" },
    { label: "Безель", value: "Поворотный" },
    { label: "ОС", value: "Wear OS / One UI Watch" },
  ],
  compareTitle: "Galaxy Watch 7 Classic",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Galaxy Watch Classic 8 в Казани",
  seoText: "Galaxy Watch Classic 8 — популярный умные часы в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 24 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Galaxy Watch Classic 8 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Galaxy Watch Classic 8 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const configs: Record<string, ProductConfig> = {
  "apple-watch-ultra-3": APPLE_WATCH_ULTRA_3_CONFIG,
  "apple-watch-ultra-2": APPLE_WATCH_ULTRA_2_CONFIG,
  "apple-watch-series-11": APPLE_WATCH_SERIES_11_CONFIG,
  "apple-watch-series-10": APPLE_WATCH_SERIES_10_CONFIG,
  "apple-watch-se-3": APPLE_WATCH_SE_3_CONFIG,
  "apple-watch-se-2": APPLE_WATCH_SE_2_CONFIG,
  "samsung-galaxy-watch-8": SAMSUNG_GALAXY_WATCH_8_CONFIG,
  "samsung-galaxy-watch-classic-8": SAMSUNG_GALAXY_WATCH_CLASSIC_8_CONFIG,
};

export function getWatchConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const WATCH_CONFIG_SLUGS = Object.keys(configs);
