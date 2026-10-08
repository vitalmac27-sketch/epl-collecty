/** laptops-configs.ts — АВТОГЕНЕРАЦИЯ (Ноутбуки) */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [];

const ACER_ASPIRE_LITE_CONFIG: ProductConfig = {
  slug: "acer-aspire-lite",
  category: "laptops",
  colors: [
    { id: "gray", name: "Серый", hex: "#8A8D91", image: "laptop-generic" },
  ],
  storage: [
    { id: "r3-5400u-8-256", label: "Ryzen 3 5400U · 8 ГБ / 256 ГБ", available: true },
    { id: "r7-7730u-16-512", label: "Ryzen 7 7730U · 16 ГБ / 512 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "r3-5400u-8-256", colorId: "gray", simId: "none", price: 46000 },
    { storageId: "r7-7730u-16-512", colorId: "gray", simId: "none", price: 64500 },
  ],
  defaultStorage: "r3-5400u-8-256",
  defaultColor: "gray",
  defaultSim: "none",
  priceFrom: 46000,
  storageLabel: "Конфигурация",
  showSim: false,
  specs: [
    { label: "Экран", value: "15.6' IPS" },
    { label: "Конфигураций", value: "2" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Acer Aspire Lite в Казани",
  seoText: "Acer Aspire Lite в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Acer Aspire Lite стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const ACER_ASPIRE_3_CONFIG: ProductConfig = {
  slug: "acer-aspire-3",
  category: "laptops",
  colors: [
    { id: "gray", name: "Серый", hex: "#8A8D91", image: "laptop-generic" },
  ],
  storage: [
    { id: "r3-7320u-8-512", label: "Ryzen 3 7320U · 8 ГБ / 512 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "r3-7320u-8-512", colorId: "gray", simId: "none", price: 49500 },
  ],
  defaultStorage: "r3-7320u-8-512",
  defaultColor: "gray",
  defaultSim: "none",
  priceFrom: 49500,
  storageLabel: "Конфигурация",
  showSim: false,
  specs: [
    { label: "Экран", value: "15.6'" },
    { label: "Конфигураций", value: "1" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Acer Aspire 3 в Казани",
  seoText: "Acer Aspire 3 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Acer Aspire 3 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const ASUS_VIVOBOOK_GO_CONFIG: ProductConfig = {
  slug: "asus-vivobook-go",
  category: "laptops",
  colors: [
    { id: "gray", name: "Серый", hex: "#8A8D91", image: "laptop-generic" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "laptop-generic" },
  ],
  storage: [
    { id: "r5-40-16-512", label: "Ryzen 5 40 · 16 ГБ / 512 ГБ", available: true },
    { id: "r3-7320u-8-256", label: "Ryzen 3 7320U · 8 ГБ / 256 ГБ", available: true },
    { id: "r5-40-8-256", label: "Ryzen 5 40 · 8 ГБ / 256 ГБ", available: true },
    { id: "r5-7520u-8-512", label: "Ryzen 5 7520U · 8 ГБ / 512 ГБ", available: true },
    { id: "r5-40-8-512", label: "Ryzen 5 40 · 8 ГБ / 512 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "r5-40-16-512", colorId: "black", simId: "none", price: 58500 },
    { storageId: "r3-7320u-8-256", colorId: "gray", simId: "none", price: 47000 },
    { storageId: "r5-40-8-256", colorId: "gray", simId: "none", price: 49500 },
    { storageId: "r5-7520u-8-512", colorId: "gray", simId: "none", price: 51500 },
    { storageId: "r5-40-8-512", colorId: "black", simId: "none", price: 52500 },
  ],
  defaultStorage: "r3-7320u-8-256",
  defaultColor: "gray",
  defaultSim: "none",
  priceFrom: 47000,
  storageLabel: "Конфигурация",
  showSim: false,
  specs: [
    { label: "Экран", value: "15.6' IPS" },
    { label: "Конфигураций", value: "4" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Asus Vivobook Go в Казани",
  seoText: "Asus Vivobook Go в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Asus Vivobook Go стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const HONOR_MAGICBOOK_X16_CONFIG: ProductConfig = {
  slug: "honor-magicbook-x16",
  category: "laptops",
  colors: [
    { id: "gray", name: "Серый", hex: "#8A8D91", image: "laptop-generic" },
  ],
  storage: [
    { id: "i5-13420h-16-512", label: "I5 13420H · 16 ГБ / 512 ГБ", available: true },
    { id: "r5-6600h-16-512", label: "Ryzen 5 6600H · 16 ГБ / 512 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "i5-13420h-16-512", colorId: "gray", simId: "none", price: 0 },
    { storageId: "r5-6600h-16-512", colorId: "gray", simId: "none", price: 0 },
  ],
  defaultStorage: "i5-13420h-16-512",
  defaultColor: "gray",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Конфигурация",
  showSim: false,
  specs: [
    { label: "Экран", value: "—" },
    { label: "Конфигураций", value: "2" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Honor MagicBook X16 в Казани",
  seoText: "Honor MagicBook X16 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Honor MagicBook X16 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const HUAWEI_MATEBOOK_D16_CONFIG: ProductConfig = {
  slug: "huawei-matebook-d16",
  category: "laptops",
  colors: [
    { id: "gray", name: "Серый", hex: "#8A8D91", image: "laptop-generic" },
  ],
  storage: [
    { id: "i5-13420h-16-512", label: "I5 13420H · 16 ГБ / 512 ГБ", available: true },
    { id: "i5-12450h-16-1tb", label: "Core i5 12450H · 16 ГБ / 1 ТБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "i5-13420h-16-512", colorId: "gray", simId: "none", price: 0 },
    { storageId: "i5-12450h-16-1tb", colorId: "gray", simId: "none", price: 0 },
  ],
  defaultStorage: "i5-13420h-16-512",
  defaultColor: "gray",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Конфигурация",
  showSim: false,
  specs: [
    { label: "Экран", value: "—" },
    { label: "Конфигураций", value: "2" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Huawei MateBook D16 в Казани",
  seoText: "Huawei MateBook D16 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Huawei MateBook D16 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const ACER_NITRO_V_15_CONFIG: ProductConfig = {
  slug: "acer-nitro-v-15",
  category: "laptops",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "laptop-generic" },
  ],
  storage: [
    { id: "i5-210h-16-512", label: "I5-210H · 16 ГБ / 512 ГБ · RTX 5050", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "i5-210h-16-512", colorId: "black", simId: "none", price: 100500 },
  ],
  defaultStorage: "i5-210h-16-512",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 100500,
  storageLabel: "Конфигурация",
  showSim: false,
  specs: [
    { label: "Экран", value: "15.6' 165Hz" },
    { label: "Видеокарта", value: "RTX 5050 8Gb" },
    { label: "Конфигураций", value: "1" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Acer Nitro V 15 в Казани",
  seoText: "Acer Nitro V 15 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Acer Nitro V 15 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const MSI_CYBORG_15_CONFIG: ProductConfig = {
  slug: "msi-cyborg-15",
  category: "laptops",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "laptop-generic" },
  ],
  storage: [
    { id: "i5-13420h-16-512", label: "I5 13420H · 16 ГБ / 512 ГБ · RTX 5060", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "i5-13420h-16-512", colorId: "black", simId: "none", price: 119000 },
  ],
  defaultStorage: "i5-13420h-16-512",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 119000,
  storageLabel: "Конфигурация",
  showSim: false,
  specs: [
    { label: "Экран", value: "144Hz" },
    { label: "Видеокарта", value: "RTX 5060" },
    { label: "Конфигураций", value: "1" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить MSI Cyborg 15 в Казани",
  seoText: "MSI Cyborg 15 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему MSI Cyborg 15 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const MSI_CYBORG_17_CONFIG: ProductConfig = {
  slug: "msi-cyborg-17",
  category: "laptops",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "laptop-generic" },
  ],
  storage: [
    { id: "i5-13420h-16-1tb", label: "I5 13420H · 16 ГБ / 1 ТБ · RTX 5060", available: true },
    { id: "c5-210h-16-1tb", label: "Core 5 210H · 16 ГБ / 1 ТБ · RTX 5060", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "i5-13420h-16-1tb", colorId: "black", simId: "none", price: 128000 },
    { storageId: "c5-210h-16-1tb", colorId: "black", simId: "none", price: 130500 },
  ],
  defaultStorage: "i5-13420h-16-1tb",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 128000,
  storageLabel: "Конфигурация",
  showSim: false,
  specs: [
    { label: "Экран", value: "144Hz" },
    { label: "Видеокарта", value: "RTX 5060 8Gb" },
    { label: "Конфигураций", value: "2" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить MSI Cyborg 17 в Казани",
  seoText: "MSI Cyborg 17 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему MSI Cyborg 17 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const configs: Record<string, ProductConfig> = {
  "msi-cyborg-17": MSI_CYBORG_17_CONFIG,
  "msi-cyborg-15": MSI_CYBORG_15_CONFIG,
  "acer-nitro-v-15": ACER_NITRO_V_15_CONFIG,
  "huawei-matebook-d16": HUAWEI_MATEBOOK_D16_CONFIG,
  "honor-magicbook-x16": HONOR_MAGICBOOK_X16_CONFIG,
  "asus-vivobook-go": ASUS_VIVOBOOK_GO_CONFIG,
  "acer-aspire-3": ACER_ASPIRE_3_CONFIG,
  "acer-aspire-lite": ACER_ASPIRE_LITE_CONFIG,
};

export function getLaptopsConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const LAPTOPS_CONFIG_SLUGS = Object.keys(configs);
