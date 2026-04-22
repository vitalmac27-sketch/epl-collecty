/** ipad-configs.ts — АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [
  { id: "apple-pencil", name: "Apple Pencil Pro", description: "Для рисования и заметок.", price: 14900, emoji: "✏️" },
  { id: "magic-keyboard", name: "Magic Keyboard для iPad", description: "Тачпад, подсветка клавиш, USB-C.", price: 19900, emoji: "⌨️" },
  { id: "ipad-case", name: "Smart Folio чехол", description: "Защита экрана + подставка.", price: 3490, emoji: "📱" },
  { id: "charger-30w", name: "Блок питания Apple 30W USB-C", description: "Быстрая зарядка для iPad.", price: 3490, emoji: "🔌" },
];

const IPAD_11_2025_CONFIG: ProductConfig = {
  slug: "ipad-11-2025",
  category: "ipad",
  colors: [
    { id: "pink", name: "Розовый", hex: "#F6D6D4", image: "ipad-11-2025" },
    { id: "silver", name: "Серебристый", hex: "#D8D8D8", image: "ipad-11-2025" },
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "ipad-11-2025" },
  ],
  storage: [
    { id: "128", label: "128 ГБ", available: true },
    { id: "256", label: "256 ГБ", available: true },
  ],
  sim: [
    { id: "wifi", label: "Wi-Fi", description: "Только Wi-Fi, без сотовой связи." },
  ],
  prices: [
    { storageId: "128", colorId: "blue", simId: "wifi", price: 36000 },
    { storageId: "128", colorId: "pink", simId: "wifi", price: 36000 },
    { storageId: "128", colorId: "silver", simId: "wifi", price: 36000 },
    { storageId: "256", colorId: "blue", simId: "wifi", price: 44500 },
    { storageId: "256", colorId: "pink", simId: "wifi", price: 44500 },
    { storageId: "256", colorId: "silver", simId: "wifi", price: 44500 },
  ],
  defaultStorage: "128",
  defaultColor: "pink",
  defaultSim: "wifi",
  priceFrom: 36000,
  storageLabel: "Объём памяти",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple A16 Bionic" },
    { label: "Дисплей", value: "11\" Liquid Retina" },
    { label: "Камера", value: "12 МП тыл + 12 МП фронт Center Stage" },
    { label: "Разъём", value: "USB-C" },
    { label: "Apple Pencil", value: "USB-C, 1-го поколения" },
    { label: "Батарея", value: "до 10 часов" },
  ],
  compareTitle: "iPad 10 (2022)",
  compare: [
    { label: "Процессор", current: "A16", previous: "A14", better: true },
    { label: "Дисплей", current: "11\"", previous: "10,9\"", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить iPad 11 (2025) в Казани",
  seoText: "iPad 11 (2025) — популярный планшет в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 36 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему iPad 11 (2025) стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый iPad 11 (2025) проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const IPAD_AIR_11_M3_CONFIG: ProductConfig = {
  slug: "ipad-air-11-m3",
  category: "ipad",
  colors: [
    { id: "gray", name: "Серый", hex: "#4E4E4F", image: "ipad-air-11-m3" },
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "ipad-air-11-m3" },
  ],
  storage: [
    { id: "128", label: "128 ГБ", available: true },
    { id: "256", label: "256 ГБ", available: true },
  ],
  sim: [
    { id: "wifi", label: "Wi-Fi", description: "Только Wi-Fi, без сотовой связи." },
  ],
  prices: [
    { storageId: "128", colorId: "gray", simId: "wifi", price: 53000 },
    { storageId: "256", colorId: "blue", simId: "wifi", price: 60500 },
  ],
  defaultStorage: "128",
  defaultColor: "gray",
  defaultSim: "wifi",
  priceFrom: 53000,
  storageLabel: "Объём памяти",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple M3" },
    { label: "Дисплей", value: "11\" Liquid Retina" },
    { label: "Apple Pencil", value: "Pro + USB-C" },
    { label: "Apple Intelligence", value: "Да" },
  ],
  compareTitle: "iPad Air 11 M2",
  compare: [
    { label: "Процессор", current: "M3", previous: "M2", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить iPad Air 11\" M3 в Казани",
  seoText: "iPad Air 11\" M3 — популярный планшет в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 53 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему iPad Air 11\" M3 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый iPad Air 11\" M3 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const IPAD_AIR_11_M4_CONFIG: ProductConfig = {
  slug: "ipad-air-11-m4",
  category: "ipad",
  colors: [
    { id: "gray", name: "Серый", hex: "#4E4E4F", image: "ipad-air-11-m4" },
    { id: "starlight", name: "Сияющая Звезда", hex: "#F5EFE3", image: "ipad-air-11-m4" },
    { id: "purple", name: "Фиолетовый", hex: "#B8A8CF", image: "ipad-air-11-m4" },
  ],
  storage: [
    { id: "128", label: "128 ГБ", available: true },
    { id: "256", label: "256 ГБ", available: true },
  ],
  sim: [
    { id: "wifi", label: "Wi-Fi", description: "Только Wi-Fi, без сотовой связи." },
  ],
  prices: [
    { storageId: "128", colorId: "gray", simId: "wifi", price: 56000 },
    { storageId: "128", colorId: "purple", simId: "wifi", price: 55000 },
    { storageId: "128", colorId: "starlight", simId: "wifi", price: 56000 },
    { storageId: "256", colorId: "gray", simId: "wifi", price: 66000 },
    { storageId: "256", colorId: "starlight", simId: "wifi", price: 66000 },
  ],
  defaultStorage: "128",
  defaultColor: "gray",
  defaultSim: "wifi",
  priceFrom: 55000,
  storageLabel: "Объём памяти",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple M4" },
    { label: "Дисплей", value: "11\" Liquid Retina" },
    { label: "Apple Pencil", value: "Pro + USB-C" },
    { label: "Apple Intelligence", value: "Да" },
  ],
  compareTitle: "iPad Air 11 M3",
  compare: [
    { label: "Процессор", current: "M4", previous: "M3", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить iPad Air 11\" M4 в Казани",
  seoText: "iPad Air 11\" M4 — популярный планшет в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 55 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему iPad Air 11\" M4 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый iPad Air 11\" M4 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const IPAD_PRO_11_CONFIG: ProductConfig = {
  slug: "ipad-pro-11",
  category: "ipad",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "ipad-pro-11" },
  ],
  storage: [
    { id: "256", label: "256 ГБ", available: true },
  ],
  sim: [
    { id: "wifi", label: "Wi-Fi", description: "Только Wi-Fi, без сотовой связи." },
  ],
  prices: [
    { storageId: "256", colorId: "black", simId: "wifi", price: 84000 },
  ],
  defaultStorage: "256",
  defaultColor: "black",
  defaultSim: "wifi",
  priceFrom: 84000,
  storageLabel: "Объём памяти",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple M5" },
    { label: "Дисплей", value: "11\" Ultra Retina XDR OLED, 120 Гц" },
    { label: "Разъём", value: "USB-C Thunderbolt 4" },
    { label: "Apple Pencil", value: "Pro" },
    { label: "Face ID", value: "Да" },
  ],
  compareTitle: "iPad Pro 11 M4",
  compare: [
    { label: "Процессор", current: "M5", previous: "M4", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить iPad Pro 11\" M5 в Казани",
  seoText: "iPad Pro 11\" M5 — популярный планшет в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 84 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему iPad Pro 11\" M5 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый iPad Pro 11\" M5 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const IPAD_PRO_13_CONFIG: ProductConfig = {
  slug: "ipad-pro-13",
  category: "ipad",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "ipad-pro-13" },
  ],
  storage: [
    { id: "2048", label: "2 ТБ", available: true },
  ],
  sim: [
    { id: "lte", label: "Wi-Fi + Cellular", description: "Wi-Fi и сотовая связь (LTE/5G) с eSIM." },
  ],
  prices: [
    { storageId: "2048", colorId: "black", simId: "lte", price: 157000 },
  ],
  defaultStorage: "2048",
  defaultColor: "black",
  defaultSim: "lte",
  priceFrom: 157000,
  storageLabel: "Объём памяти",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple M5" },
    { label: "Дисплей", value: "13\" Ultra Retina XDR OLED, 120 Гц" },
    { label: "Разъём", value: "USB-C Thunderbolt 4" },
    { label: "Apple Pencil", value: "Pro" },
    { label: "Face ID", value: "Да" },
  ],
  compareTitle: "iPad Pro 13 M4",
  compare: [
    { label: "Процессор", current: "M5", previous: "M4", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить iPad Pro 13\" M5 в Казани",
  seoText: "iPad Pro 13\" M5 — популярный планшет в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 157 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему iPad Pro 13\" M5 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый iPad Pro 13\" M5 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
  seoH2Sim: "Wi-Fi или Wi-Fi + Cellular?",
  seoTextSim: "Wi-Fi — для дома/офиса. Cellular (LTE) — мобильный интернет в любом месте через eSIM.",
};

const configs: Record<string, ProductConfig> = {
  "ipad-11-2025": IPAD_11_2025_CONFIG,
  "ipad-air-11-m3": IPAD_AIR_11_M3_CONFIG,
  "ipad-air-11-m4": IPAD_AIR_11_M4_CONFIG,
  "ipad-pro-11": IPAD_PRO_11_CONFIG,
  "ipad-pro-13": IPAD_PRO_13_CONFIG,
};

export function getIpadConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const IPAD_CONFIG_SLUGS = Object.keys(configs);
