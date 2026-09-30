/** cables-configs.ts — АВТОГЕНЕРАЦИЯ (Кабели и Блоки) */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [];

const CABLE_USB_C_USB_C_CONFIG: ProductConfig = {
  slug: "cable-usb-c-usb-c",
  category: "cables",
  colors: [
    { id: "standard", name: "Стандарт", hex: "#F2F2F2", image: "cable-usb-c-usb-c" },
  ],
  storage: [
    { id: "1m", label: "1 м", available: true },
    { id: "2m", label: "2 м", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "1m", colorId: "standard", simId: "none", price: 2400 },
    { storageId: "2m", colorId: "standard", simId: "none", price: 2600 },
  ],
  defaultStorage: "1m",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 2400,
  storageLabel: "Длина",
  showSim: false,
  specs: [
    { label: "Разъёмы", value: "USB-C / USB-C" },
    { label: "Длина", value: "1 м или 2 м" },
    { label: "Совместимость", value: "iPhone 15–18, iPad, MacBook, Android" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Кабель USB-C – USB-C в Казани",
  seoText: "Кабель USB-C – USB-C в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 2 400 ₽. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Кабель USB-C – USB-C стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: проверяем работоспособность, комплектацию и оригинальность.",
};

const CABLE_USB_C_LIGHTNING_CONFIG: ProductConfig = {
  slug: "cable-usb-c-lightning",
  category: "cables",
  colors: [
    { id: "standard", name: "Стандарт", hex: "#F2F2F2", image: "cable-usb-c-lightning" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 2000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 2000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Разъёмы", value: "USB-C / Lightning" },
    { label: "Совместимость", value: "iPhone 5–14, AirPods, iPad с Lightning" },
    { label: "Быстрая зарядка", value: "Да, с блоком USB-C PD" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Кабель USB-C – Lightning в Казани",
  seoText: "Кабель USB-C – Lightning в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 2 000 ₽. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Кабель USB-C – Lightning стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: проверяем работоспособность, комплектацию и оригинальность.",
};

const CHARGER_APPLE_20W_CONFIG: ProductConfig = {
  slug: "charger-apple-20w",
  category: "cables",
  colors: [
    { id: "standard", name: "Стандарт", hex: "#F2F2F2", image: "charger-apple-20w" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 2500 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 2500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Мощность", value: "20 Вт" },
    { label: "Разъём", value: "USB-C (Power Delivery)" },
    { label: "Совместимость", value: "iPhone, iPad, AirPods, Apple Watch" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Блок питания Apple 20W в Казани",
  seoText: "Блок питания Apple 20W в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 2 500 ₽. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Блок питания Apple 20W стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: проверяем работоспособность, комплектацию и оригинальность.",
};

const CHARGER_SAMSUNG_25W_CONFIG: ProductConfig = {
  slug: "charger-samsung-25w",
  category: "cables",
  colors: [
    { id: "standard", name: "Стандарт", hex: "#F2F2F2", image: "charger-samsung-25w" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 2300 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 2300,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Мощность", value: "25 Вт" },
    { label: "Разъём", value: "USB-C (PD / PPS)" },
    { label: "Совместимость", value: "Samsung Galaxy, iPhone, другие USB-C" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Блок питания Samsung 25W в Казани",
  seoText: "Блок питания Samsung 25W в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 2 300 ₽. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Блок питания Samsung 25W стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: проверяем работоспособность, комплектацию и оригинальность.",
};

const configs: Record<string, ProductConfig> = {
  "cable-usb-c-usb-c": CABLE_USB_C_USB_C_CONFIG,
  "cable-usb-c-lightning": CABLE_USB_C_LIGHTNING_CONFIG,
  "charger-apple-20w": CHARGER_APPLE_20W_CONFIG,
  "charger-samsung-25w": CHARGER_SAMSUNG_25W_CONFIG,
};

export function getCablesConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const CABLES_CONFIG_SLUGS = Object.keys(configs);
