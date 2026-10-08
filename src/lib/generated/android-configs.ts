/** android-configs.ts — АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [
  { id: "charger-25w", name: "Блок питания 25W USB-C", description: "Быстрая зарядка для Galaxy.", price: 2490, emoji: "🔌" },
  { id: "case-android", name: "Чехол для смартфона", description: "Защита корпуса.", price: 1990, emoji: "📱" },
  { id: "glass-android", name: "Защитное стекло + установка", description: "Полное закрытие экрана.", price: 990, emoji: "🛡️" },
  { id: "headphones", name: "Беспроводные наушники", description: "Galaxy Buds 3 / Marshall.", price: 9990, emoji: "🎧" },
];

const XIAOMI_MI_15T_CONFIG: ProductConfig = {
  slug: "xiaomi-mi-15t",
  category: "android",
  colors: [
    { id: "pro-black", name: "Pro-black", hex: "#888888", image: "xiaomi-mi-15t" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "xiaomi-mi-15t" },
    { id: "gray", name: "Серый", hex: "#4E4E4F", image: "xiaomi-mi-15t" },
  ],
  storage: [
    { id: "12-512", label: "12 ГБ / 512 ГБ", available: true },
    { id: "12-256", label: "12 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "12-256", colorId: "pro-black", simId: "none", price: 0 },
    { storageId: "12-256", colorId: "gray", simId: "none", price: 0 },
    { storageId: "12-512", colorId: "black", simId: "none", price: 0 },
    { storageId: "12-512", colorId: "gray", simId: "none", price: 0 },
  ],
  defaultStorage: "12-512",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "MediaTek Dimensity 8400-Ultra" },
    { label: "Дисплей", value: "6,83\" CrystalRes AMOLED, 144 Гц" },
    { label: "Камеры", value: "Leica: 50 МП + 50 МП телефото + 12 МП Ultra Wide" },
    { label: "Батарея", value: "5500 мАч" },
    { label: "Зарядка", value: "67 Вт HyperCharge" },
    { label: "Защита", value: "IP68" },
  ],
  compareTitle: "Xiaomi 14T",
  compare: [
    { label: "Процессор", current: "Dimensity 8400-Ultra", previous: "Dimensity 8300-Ultra", better: true },
    { label: "Батарея", current: "5500 мАч", previous: "5000 мАч", better: true },
    { label: "Leica оптика", current: "Да", previous: "Да", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Xiaomi Mi 15T в Казани",
  seoText: "Xiaomi Mi 15T — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 42 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Xiaomi Mi 15T стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Xiaomi Mi 15T проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const XIAOMI_REDMI_NOTE_15_PRO_CONFIG: ProductConfig = {
  slug: "xiaomi-redmi-note-15-pro",
  category: "android",
  colors: [
    { id: "xiaomi-black", name: "Xiaomi-black", hex: "#888888", image: "xiaomi-redmi-note-15-pro" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "xiaomi-redmi-note-15-pro" },
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "xiaomi-redmi-note-15-pro" },
  ],
  storage: [
    { id: "12-512", label: "12 ГБ / 512 ГБ", available: true },
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-256", colorId: "xiaomi-black", simId: "none", price: 0 },
    { storageId: "12-512", colorId: "black", simId: "none", price: 0 },
    { storageId: "12-512", colorId: "blue", simId: "none", price: 0 },
    { storageId: "8-256", colorId: "black", simId: "none", price: 28000 },
    { storageId: "8-256", colorId: "blue", simId: "none", price: 0 },
  ],
  defaultStorage: "8-256",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 28000,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "MediaTek Dimensity 7400-Ultra" },
    { label: "Дисплей", value: "6,83\" 1.5K AMOLED, 120 Гц" },
    { label: "Камеры", value: "200 МП + 8 МП + 2 МП" },
    { label: "Батарея", value: "7000 мАч" },
    { label: "Зарядка", value: "45 Вт" },
    { label: "Защита", value: "IP68, IP69" },
  ],
  compareTitle: "Redmi Note 14 Pro",
  compare: [
    { label: "Батарея", current: "7000 мАч", previous: "5110 мАч", better: true },
    { label: "Защита", current: "IP68+IP69", previous: "IP68", better: true },
    { label: "Дисплей", current: "1.5K 120 Гц", previous: "1.5K 120 Гц", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Xiaomi Redmi Note 15 Pro в Казани",
  seoText: "Xiaomi Redmi Note 15 Pro — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 24 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Xiaomi Redmi Note 15 Pro стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Xiaomi Redmi Note 15 Pro проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const XIAOMI_REDMI_NOTE_15_CONFIG: ProductConfig = {
  slug: "xiaomi-redmi-note-15",
  category: "android",
  colors: [
    { id: "xiaomi-purple", name: "Xiaomi-purple", hex: "#888888", image: "xiaomi-redmi-note-15" },
    { id: "xiaomi-blue", name: "Xiaomi-blue", hex: "#888888", image: "xiaomi-redmi-note-15" },
    { id: "xiaomi-black", name: "Xiaomi-black", hex: "#888888", image: "xiaomi-redmi-note-15" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "xiaomi-redmi-note-15" },
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "xiaomi-redmi-note-15" },
    { id: "purple", name: "Фиолетовый", hex: "#B8A8CF", image: "xiaomi-redmi-note-15" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
    { id: "6-128", label: "6 ГБ / 128 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "6-128", colorId: "xiaomi-blue", simId: "none", price: 0 },
    { storageId: "6-128", colorId: "xiaomi-purple", simId: "none", price: 0 },
    { storageId: "6-128", colorId: "xiaomi-black", simId: "none", price: 0 },
    { storageId: "8-256", colorId: "xiaomi-blue", simId: "none", price: 0 },
    { storageId: "8-256", colorId: "xiaomi-black", simId: "none", price: 0 },
    { storageId: "6-128", colorId: "black", simId: "none", price: 0 },
    { storageId: "6-128", colorId: "blue", simId: "none", price: 0 },
    { storageId: "6-128", colorId: "purple", simId: "none", price: 21000 },
    { storageId: "8-256", colorId: "black", simId: "none", price: 23000 },
    { storageId: "8-256", colorId: "blue", simId: "none", price: 23000 },
    { storageId: "8-256", colorId: "purple", simId: "none", price: 0 },
  ],
  defaultStorage: "6-128",
  defaultColor: "purple",
  defaultSim: "none",
  priceFrom: 21000,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Snapdragon 7s Gen 4" },
    { label: "Дисплей", value: "6,83\" 1.5K AMOLED, 120 Гц" },
    { label: "Камеры", value: "108 МП + 2 МП" },
    { label: "Батарея", value: "7000 мАч" },
    { label: "Защита", value: "IP68, IP69" },
  ],
  compareTitle: "Redmi Note 14",
  compare: [
    { label: "Батарея", current: "7000 мАч", previous: "5500 мАч", better: true },
    { label: "Защита", current: "IP68+IP69", previous: "IP64", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Xiaomi Redmi Note 15 в Казани",
  seoText: "Xiaomi Redmi Note 15 — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 18 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Xiaomi Redmi Note 15 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Xiaomi Redmi Note 15 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const XIAOMI_REDMI_NOTE_14S_CONFIG: ProductConfig = {
  slug: "xiaomi-redmi-note-14s",
  category: "android",
  colors: [
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "xiaomi-redmi-note-14s" },
    { id: "purple", name: "Фиолетовый", hex: "#B8A8CF", image: "xiaomi-redmi-note-14s" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "xiaomi-redmi-note-14s" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-256", colorId: "black", simId: "none", price: 0 },
    { storageId: "8-256", colorId: "blue", simId: "none", price: 0 },
    { storageId: "8-256", colorId: "purple", simId: "none", price: 0 },
  ],
  defaultStorage: "8-256",
  defaultColor: "blue",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Дисплей", value: "6,67\" AMOLED, 120 Гц" },
    { label: "Камера", value: "108 МП" },
    { label: "Батарея", value: "5500 мАч" },
  ],
  compareTitle: "Redmi Note 13",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Xiaomi Redmi Note 14S в Казани",
  seoText: "Xiaomi Redmi Note 14S — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 19 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Xiaomi Redmi Note 14S стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Xiaomi Redmi Note 14S проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const XIAOMI_REDMI_NOTE_14_CONFIG: ProductConfig = {
  slug: "xiaomi-redmi-note-14",
  category: "android",
  colors: [
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "xiaomi-redmi-note-14" },
  ],
  storage: [
    { id: "8-128", label: "8 ГБ / 128 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-128", colorId: "blue", simId: "none", price: 0 },
  ],
  defaultStorage: "8-128",
  defaultColor: "blue",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Дисплей", value: "6,67\" AMOLED, 120 Гц" },
    { label: "Камера", value: "108 МП" },
    { label: "Батарея", value: "5500 мАч" },
  ],
  compareTitle: "Redmi Note 13",
  compare: [
    { label: "Защита", current: "IP64", previous: "Нет", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Xiaomi Redmi Note 14 в Казани",
  seoText: "Xiaomi Redmi Note 14 — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 16 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Xiaomi Redmi Note 14 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Xiaomi Redmi Note 14 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const MEIZU_NOTE_21_CONFIG: ProductConfig = {
  slug: "meizu-note-21",
  category: "android",
  colors: [
    { id: "standard", name: "Standard", hex: "#888888", image: "meizu-note-21" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-256", colorId: "standard", simId: "none", price: 0 },
  ],
  defaultStorage: "8-256",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Дисплей", value: "6,75\" AMOLED, 120 Гц" },
    { label: "Процессор", value: "Snapdragon 6 Gen 1" },
    { label: "Батарея", value: "5000 мАч" },
  ],
  compareTitle: "Meizu Note 20",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Meizu Note 21 в Казани",
  seoText: "Meizu Note 21 — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 12 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Meizu Note 21 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Meizu Note 21 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const XIAOMI_MI_17T_CONFIG: ProductConfig = {
  slug: "xiaomi-mi-17t",
  category: "android",
  colors: [
    { id: "pro-violet", name: "Pro-violet", hex: "#888888", image: "xiaomi-mi-15t" },
    { id: "pro-blue", name: "Pro-blue", hex: "#888888", image: "xiaomi-mi-15t" },
    { id: "pro-black", name: "Pro-black", hex: "#888888", image: "xiaomi-mi-15t" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "xiaomi-mi-15t" },
    { id: "violet", name: "Фиолетовый", hex: "#8B7AAF", image: "xiaomi-mi-15t" },
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "xiaomi-mi-15t" },
  ],
  storage: [
    { id: "12-256", label: "12 ГБ / 256 ГБ", available: true },
    { id: "12-512", label: "12 ГБ / 512 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "12-256", colorId: "pro-violet", simId: "none", price: 60000 },
    { storageId: "12-256", colorId: "pro-blue", simId: "none", price: 60000 },
    { storageId: "12-256", colorId: "pro-black", simId: "none", price: 60000 },
    { storageId: "12-256", colorId: "black", simId: "none", price: 48500 },
    { storageId: "12-256", colorId: "violet", simId: "none", price: 0 },
    { storageId: "12-512", colorId: "blue", simId: "none", price: 52500 },
  ],
  defaultStorage: "12-256",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 48500,
  storageLabel: "Память",
  showSim: false,
  specs: [
    { label: "Память", value: "12 ГБ / 256 ГБ, 12 ГБ / 512 ГБ" },
    { label: "Варианты", value: "Чёрный, Фиолетовый, Синий" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Xiaomi 17T в Казани",
  seoText: "Xiaomi 17T в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Xiaomi 17T стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const NOTHING_PHONE_3A_LITE_CONFIG: ProductConfig = {
  slug: "nothing-phone-3a-lite",
  category: "android",
  colors: [
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "phone-generic" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-256", colorId: "white", simId: "none", price: 25000 },
  ],
  defaultStorage: "8-256",
  defaultColor: "white",
  defaultSim: "none",
  priceFrom: 25000,
  storageLabel: "Память",
  showSim: false,
  specs: [
    { label: "Память", value: "8 ГБ / 256 ГБ" },
    { label: "Варианты", value: "Белый" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Nothing Phone (3a) Lite в Казани",
  seoText: "Nothing Phone (3a) Lite в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Nothing Phone (3a) Lite стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const NOTHING_PHONE_3A_PRO_CONFIG: ProductConfig = {
  slug: "nothing-phone-3a-pro",
  category: "android",
  colors: [
    { id: "gray", name: "Серый", hex: "#8A8D91", image: "phone-generic" },
  ],
  storage: [
    { id: "12-256", label: "12 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "12-256", colorId: "gray", simId: "none", price: 33000 },
  ],
  defaultStorage: "12-256",
  defaultColor: "gray",
  defaultSim: "none",
  priceFrom: 33000,
  storageLabel: "Память",
  showSim: false,
  specs: [
    { label: "Память", value: "12 ГБ / 256 ГБ" },
    { label: "Варианты", value: "Серый" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Nothing Phone (3a) Pro в Казани",
  seoText: "Nothing Phone (3a) Pro в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Nothing Phone (3a) Pro стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const GOOGLE_PIXEL_10A_CONFIG: ProductConfig = {
  slug: "google-pixel-10a",
  category: "android",
  colors: [
    { id: "obsidian", name: "Obsidian", hex: "#1B1B1D", image: "phone-generic" },
    { id: "fog", name: "Fog", hex: "#D9DADC", image: "phone-generic" },
  ],
  storage: [
    { id: "8-128", label: "8 ГБ / 128 ГБ", available: true },
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-128", colorId: "obsidian", simId: "none", price: 45000 },
    { storageId: "8-256", colorId: "obsidian", simId: "none", price: 47500 },
    { storageId: "8-256", colorId: "fog", simId: "none", price: 47500 },
  ],
  defaultStorage: "8-128",
  defaultColor: "obsidian",
  defaultSim: "none",
  priceFrom: 45000,
  storageLabel: "Память",
  showSim: false,
  specs: [
    { label: "Память", value: "8 ГБ / 128 ГБ, 8 ГБ / 256 ГБ" },
    { label: "Варианты", value: "Obsidian, Fog" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Google Pixel 10a в Казани",
  seoText: "Google Pixel 10a в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Google Pixel 10a стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const HONOR_600_CONFIG: ProductConfig = {
  slug: "honor-600",
  category: "android",
  colors: [
    { id: "orange", name: "Оранжевый", hex: "#E8742B", image: "phone-generic" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "phone-generic" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-256", colorId: "orange", simId: "none", price: 43000 },
    { storageId: "8-256", colorId: "black", simId: "none", price: 0 },
  ],
  defaultStorage: "8-256",
  defaultColor: "orange",
  defaultSim: "none",
  priceFrom: 43000,
  storageLabel: "Память",
  showSim: false,
  specs: [
    { label: "Память", value: "8 ГБ / 256 ГБ" },
    { label: "Варианты", value: "Оранжевый, Чёрный" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Honor 600 в Казани",
  seoText: "Honor 600 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Honor 600 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const HONOR_400_SMART_CONFIG: ProductConfig = {
  slug: "honor-400-smart",
  category: "android",
  colors: [
    { id: "gold", name: "Золотой", hex: "#D4B26A", image: "phone-generic" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-256", colorId: "gold", simId: "none", price: 0 },
  ],
  defaultStorage: "8-256",
  defaultColor: "gold",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Память",
  showSim: false,
  specs: [
    { label: "Память", value: "8 ГБ / 256 ГБ" },
    { label: "Варианты", value: "Золотой" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Honor 400 Smart в Казани",
  seoText: "Honor 400 Smart в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Honor 400 Smart стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const HONOR_X7D_CONFIG: ProductConfig = {
  slug: "honor-x7d",
  category: "android",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "phone-generic" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-256", colorId: "black", simId: "none", price: 0 },
  ],
  defaultStorage: "8-256",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Память",
  showSim: false,
  specs: [
    { label: "Память", value: "8 ГБ / 256 ГБ" },
    { label: "Варианты", value: "Чёрный" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Honor X7d в Казани",
  seoText: "Honor X7d в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Honor X7d стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const configs: Record<string, ProductConfig> = {
  "honor-x7d": HONOR_X7D_CONFIG,
  "honor-400-smart": HONOR_400_SMART_CONFIG,
  "honor-600": HONOR_600_CONFIG,
  "google-pixel-10a": GOOGLE_PIXEL_10A_CONFIG,
  "nothing-phone-3a-pro": NOTHING_PHONE_3A_PRO_CONFIG,
  "nothing-phone-3a-lite": NOTHING_PHONE_3A_LITE_CONFIG,
  "xiaomi-mi-17t": XIAOMI_MI_17T_CONFIG,
  "xiaomi-mi-15t": XIAOMI_MI_15T_CONFIG,
  "xiaomi-redmi-note-15-pro": XIAOMI_REDMI_NOTE_15_PRO_CONFIG,
  "xiaomi-redmi-note-15": XIAOMI_REDMI_NOTE_15_CONFIG,
  "xiaomi-redmi-note-14s": XIAOMI_REDMI_NOTE_14S_CONFIG,
  "xiaomi-redmi-note-14": XIAOMI_REDMI_NOTE_14_CONFIG,
  "meizu-note-21": MEIZU_NOTE_21_CONFIG,
};

export function getAndroidConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const ANDROID_CONFIG_SLUGS = Object.keys(configs);
