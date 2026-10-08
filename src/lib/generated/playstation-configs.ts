/** playstation-configs.ts — PlayStation */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [
  { id: "controller", name: "DualSense Controller", description: "Дополнительный геймпад DualSense.", price: 8990, emoji: "🎮" },
  { id: "headset", name: "Pulse 3D Headset", description: "Беспроводная гарнитура для PS5.", price: 9990, emoji: "🎧" },
  { id: "charging-stand", name: "Зарядная станция", description: "Зарядка двух геймпадов одновременно.", price: 3490, emoji: "🔌" },
  { id: "game", name: "Игра на выбор", description: "Спросите менеджера о наличии игр.", price: 4990, emoji: "💿" },
];

const PLAYSTATION_5_PRO_CONFIG: ProductConfig = {
  slug: "playstation-5-pro", category: "playstation",
  colors: [{ id: "white", name: "Белый", hex: "#F0F0F0", image: "playstation-5-pro" }],
  storage: [{ id: "2tb", label: "2 ТБ SSD", available: true }],
  sim: [{ id: "none", label: "Стандарт", description: "Стандартная комплектация." }],
  prices: [{ storageId: "2tb", colorId: "white", simId: "none", price: 124000 }],
  defaultStorage: "2tb", defaultColor: "white", defaultSim: "none", priceFrom: 124000,
  storageLabel: "Версия", showSim: false,
  specs: [
    { label: "GPU", value: "45 ТФЛОПС (на 45% мощнее PS5)" },
    { label: "SSD", value: "2 ТБ" },
    { label: "Ray Tracing", value: "До 3× быстрее" },
    { label: "Разрешение", value: "8K" },
    { label: "Геймпад", value: "DualSense" },
  ],
  compareTitle: "PlayStation 5 Slim",
  compare: [
    { label: "GPU", current: "45 ТФЛОПС", previous: "10,28 ТФЛОПС", better: true },
    { label: "SSD", current: "2 ТБ", previous: "1 ТБ", better: true },
    { label: "Дисковод", current: "Нет (встроенный опционально)", previous: "Да", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить PlayStation 5 Pro в Казани", seoText: "PS5 Pro — самая мощная консоль Sony. Цена от 89 000 ₽ в ЭПЛ-КОЛЛЕКЦИЯ. Гарантия 1 год, рассрочка 0%.",
  seoH2Why: "Чем PS5 Pro отличается от PS5 Slim?", seoTextWhy: "GPU на 45% мощнее, 2 ТБ SSD вместо 1 ТБ, трассировка лучей до 3× быстрее. Для максимального качества графики в играх.",
};

const PLAYSTATION_5_SLIM_CONFIG: ProductConfig = {
  slug: "playstation-5-slim", category: "playstation",
  colors: [{ id: "white", name: "Белый", hex: "#F0F0F0", image: "playstation-5-slim" }],
  storage: [{ id: "1tb", label: "1 ТБ SSD", available: true }],
  sim: [{ id: "none", label: "Стандарт", description: "Стандартная комплектация." }],
  prices: [{ storageId: "1tb", colorId: "white", simId: "none", price: 75500 }],
  defaultStorage: "1tb", defaultColor: "white", defaultSim: "none", priceFrom: 75500,
  storageLabel: "Версия", showSim: false,
  specs: [
    { label: "GPU", value: "10,28 ТФЛОПС" },
    { label: "SSD", value: "1 ТБ" },
    { label: "Дисковод", value: "Есть (съёмный)" },
    { label: "Размер", value: "На 30% компактнее оригинальной PS5" },
  ],
  compareTitle: "PlayStation 5 Slim Digital",
  compare: [
    { label: "Дисковод", current: "Да (съёмный)", previous: "Нет", better: true },
    { label: "Цена", current: "от 54 000 ₽", previous: "от 48 000 ₽", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить PlayStation 5 Slim в Казани", seoText: "PS5 Slim с дисководом в Казани от 54 000 ₽. Компактный корпус, 1 ТБ SSD. Гарантия 1 год.",
  seoH2Why: "Slim или Digital?", seoTextWhy: "Slim с дисководом позволяет покупать и продавать диски с играми. Digital — дешевле, но только цифровые покупки в PSN.",
};

const PLAYSTATION_5_SLIM_DIGITAL_CONFIG: ProductConfig = {
  slug: "playstation-5-slim-digital", category: "playstation",
  colors: [{ id: "white", name: "Белый", hex: "#F0F0F0", image: "playstation-5-slim-digital" }],
  storage: [{ id: "1tb", label: "1 ТБ SSD", available: true }],
  sim: [{ id: "none", label: "Стандарт", description: "Стандартная комплектация." }],
  prices: [{ storageId: "1tb", colorId: "white", simId: "none", price: 0 }],
  defaultStorage: "1tb", defaultColor: "white", defaultSim: "none", priceFrom: 0,
  storageLabel: "Версия", showSim: false,
  specs: [
    { label: "GPU", value: "10,28 ТФЛОПС" },
    { label: "SSD", value: "1 ТБ" },
    { label: "Дисковод", value: "Нет" },
    { label: "Размер", value: "Компактный, на 30% меньше оригинала" },
  ],
  compareTitle: "PlayStation 5 Slim",
  compare: [
    { label: "Дисковод", current: "Нет", previous: "Да", better: false },
    { label: "Цена", current: "от 48 000 ₽", previous: "от 54 000 ₽", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить PlayStation 5 Slim Digital в Казани", seoText: "PS5 Slim Digital Edition в Казани от 48 000 ₽. Без дисковода, только цифровые игры. Гарантия 1 год.",
  seoH2Why: "Подойдёт ли Digital Edition?", seoTextWhy: "Digital Edition подходит если вы покупаете игры только в PSN Store. Дешевле на 6 000 ₽ чем версия с дисководом.",
};

const DUALSENSE_CONFIG: ProductConfig = {
  slug: "dualsense",
  category: "playstation",
  colors: [
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "gamepad" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "gamepad" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "white", simId: "none", price: 10000 },
    { storageId: "std", colorId: "black", simId: "none", price: 10000 },
  ],
  defaultStorage: "std",
  defaultColor: "white",
  defaultSim: "none",
  priceFrom: 10000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Варианты", value: "Белый, Чёрный" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Геймпад DualSense в Казани",
  seoText: "Геймпад DualSense в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Геймпад DualSense стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const PLAYSTATION_PORTAL_CONFIG: ProductConfig = {
  slug: "playstation-portal",
  category: "playstation",
  colors: [
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "handheld" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "white", simId: "none", price: 25000 },
  ],
  defaultStorage: "std",
  defaultColor: "white",
  defaultSim: "none",
  priceFrom: 25000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Варианты", value: "Белый" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить PlayStation Portal в Казани",
  seoText: "PlayStation Portal в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему PlayStation Portal стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const PLAYSTATION_5_DISC_DRIVE_CONFIG: ProductConfig = {
  slug: "playstation-5-disc-drive",
  category: "playstation",
  colors: [
    { id: "standard", name: "Стандарт", hex: "#D0D0D0", image: "disc-drive" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 14000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 14000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Варианты", value: "Стандарт" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Дисковод для PS5 в Казани",
  seoText: "Дисковод для PS5 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Дисковод для PS5 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const configs: Record<string, ProductConfig> = {
  "playstation-5-disc-drive": PLAYSTATION_5_DISC_DRIVE_CONFIG,
  "playstation-portal": PLAYSTATION_PORTAL_CONFIG,
  "dualsense": DUALSENSE_CONFIG,
  "playstation-5-pro": PLAYSTATION_5_PRO_CONFIG,
  "playstation-5-slim": PLAYSTATION_5_SLIM_CONFIG,
  "playstation-5-slim-digital": PLAYSTATION_5_SLIM_DIGITAL_CONFIG,
};

export function getPlaystationConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const PLAYSTATION_CONFIG_SLUGS = Object.keys(configs);
