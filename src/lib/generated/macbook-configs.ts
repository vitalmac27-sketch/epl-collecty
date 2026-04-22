/** macbook-configs.ts — АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [
  { id: "magic-mouse", name: "Magic Mouse", description: "Беспроводная мышь Apple.", price: 8990, emoji: "🖱️" },
  { id: "magic-keyboard", name: "Magic Keyboard с Touch ID", description: "Беспроводная клавиатура с Touch ID.", price: 12990, emoji: "⌨️" },
  { id: "usb-c-hub", name: "USB-C Hub (HDMI + USB-A + SD)", description: "Расширение разъёмов для MacBook.", price: 3490, emoji: "🔌" },
  { id: "macbook-sleeve", name: "Чехол-конверт для MacBook", description: "Защита от царапин.", price: 2490, emoji: "💼" },
];

const MAC_MINI_M4_CONFIG: ProductConfig = {
  slug: "mac-mini-m4",
  category: "macbook",
  colors: [
    { id: "silver", name: "Серебристый", hex: "#D8D8D8", image: "mac-mini-m4" },
  ],
  storage: [
    { id: "16-256", label: "16 ГБ / 256 ГБ SSD", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "16-256", colorId: "silver", simId: "none", price: 59000 },
  ],
  defaultStorage: "16-256",
  defaultColor: "silver",
  defaultSim: "none",
  priceFrom: 59000,
  storageLabel: "Конфигурация RAM/SSD",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple M4 (10 ядер CPU, 10 ядер GPU)" },
    { label: "Размер", value: "12,7 × 12,7 × 5,0 см" },
    { label: "Порты", value: "2× Thunderbolt 4, 3× USB-C, HDMI, Gigabit Ethernet, 3,5 мм jack" },
    { label: "Wi-Fi", value: "Wi-Fi 6E" },
    { label: "Bluetooth", value: "5.3" },
    { label: "Apple Intelligence", value: "Да" },
    { label: "Hardware Ray Tracing", value: "Да" },
  ],
  compareTitle: "Mac mini M2",
  compare: [
    { label: "Процессор", current: "M4", previous: "M2", better: true },
    { label: "Ядер CPU", current: "10", previous: "8", better: true },
    { label: "Размер корпуса", current: "12,7 × 12,7 см", previous: "19,7 × 19,7 см", better: true },
    { label: "Thunderbolt", current: "TB4", previous: "TB4", better: false },
    { label: "Hardware Ray Tracing", current: "Да", previous: "Нет", better: true },
    { label: "Apple Intelligence", current: "Да", previous: "Нет", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Mac mini M4 в Казани",
  seoText: "Mac mini M4 — популярный ноутбук в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 59 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Mac mini M4 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Mac mini M4 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const MACBOOK_NEO_CONFIG: ProductConfig = {
  slug: "macbook-neo",
  category: "macbook",
  colors: [
    { id: "silver", name: "Серебристый", hex: "#D8D8D8", image: "macbook-neo" },
    { id: "indigo", name: "Индиго", hex: "#4B4D76", image: "macbook-neo" },
    { id: "citrus", name: "Цитрусовый", hex: "#DDD389", image: "macbook-neo" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ SSD", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-256", colorId: "citrus", simId: "none", price: 67000 },
    { storageId: "8-256", colorId: "indigo", simId: "none", price: 64500 },
    { storageId: "8-256", colorId: "silver", simId: "none", price: 66000 },
  ],
  defaultStorage: "8-256",
  defaultColor: "silver",
  defaultSim: "none",
  priceFrom: 64500,
  storageLabel: "Конфигурация RAM/SSD",
  showSim: false,
  specs: [
    { label: "Процессор", value: "MediaTek Kompanio Ultra" },
    { label: "Дисплей", value: "13\" Liquid Retina" },
    { label: "Память", value: "8 ГБ RAM / 256 ГБ SSD" },
    { label: "Батарея", value: "до 18 часов" },
    { label: "ОС", value: "Neo OS (не macOS)" },
    { label: "Порты", value: "USB-C, USB-A, HDMI" },
    { label: "Вес", value: "около 1,3 кг" },
  ],
  compareTitle: "MacBook Air 13\" M2",
  compare: [
    { label: "ОС", current: "Neo OS", previous: "macOS", better: false },
    { label: "Процессор", current: "MediaTek Kompanio Ultra", previous: "Apple M2", better: false },
    { label: "Цена старт", current: "от 64 500 ₽", previous: "от 77 500 ₽", better: true },
    { label: "macOS и Mac App Store", current: "Нет", previous: "Да", better: false },
    { label: "Apple Intelligence", current: "Нет", previous: "Нет", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить MacBook Neo в Казани",
  seoText: "MacBook Neo — популярный ноутбук в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 64 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему MacBook Neo стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый MacBook Neo проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const MACBOOK_AIR_13_M2_CONFIG: ProductConfig = {
  slug: "macbook-air-13-m2",
  category: "macbook",
  colors: [
    { id: "midnight", name: "Тёмная Ночь", hex: "#2C2D30", image: "macbook-air-13-m2" },
  ],
  storage: [
    { id: "16-256", label: "16 ГБ / 256 ГБ SSD", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "16-256", colorId: "midnight", simId: "none", price: 77500 },
  ],
  defaultStorage: "16-256",
  defaultColor: "midnight",
  defaultSim: "none",
  priceFrom: 77500,
  storageLabel: "Конфигурация RAM/SSD",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple M2 (8 ядер CPU, 8 / 10 ядер GPU)" },
    { label: "Дисплей", value: "13,6\" Liquid Retina, True Tone, P3" },
    { label: "Память", value: "от 8 ГБ / 256 ГБ SSD" },
    { label: "Батарея", value: "до 18 часов" },
    { label: "Разъёмы", value: "2× Thunderbolt / USB-C, MagSafe 3, 3,5 мм jack" },
    { label: "Камера", value: "1080p FaceTime HD" },
    { label: "Вес", value: "1,24 кг" },
  ],
  compareTitle: "MacBook Air 13\" M1",
  compare: [
    { label: "Процессор", current: "M2", previous: "M1", better: true },
    { label: "MagSafe 3", current: "Да", previous: "Нет", better: true },
    { label: "Дисплей", current: "13,6\" (2560×1664)", previous: "13,3\" (2560×1600)", better: true },
    { label: "Дизайн", current: "Плоский", previous: "Клин", better: true },
    { label: "Камера", current: "1080p", previous: "720p", better: true },
    { label: "Динамики", current: "4 динамика", previous: "2 динамика", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить MacBook Air 13\" M2 в Казани",
  seoText: "MacBook Air 13\" M2 — популярный ноутбук в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 77 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему MacBook Air 13\" M2 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый MacBook Air 13\" M2 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const MACBOOK_AIR_13_M5_CONFIG: ProductConfig = {
  slug: "macbook-air-13-m5",
  category: "macbook",
  colors: [
    { id: "skyblue", name: "Небесно-голубой", hex: "#BDD3E0", image: "macbook-air-13-m5" },
    { id: "silver", name: "Серебристый", hex: "#D8D8D8", image: "macbook-air-13-m5" },
    { id: "starlight", name: "Сияющая Звезда", hex: "#F5EFE3", image: "macbook-air-13-m5" },
  ],
  storage: [
    { id: "16-512", label: "16 ГБ / 512 ГБ SSD", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "16-512", colorId: "silver", simId: "none", price: 100000 },
    { storageId: "16-512", colorId: "skyblue", simId: "none", price: 101000 },
    { storageId: "16-512", colorId: "starlight", simId: "none", price: 100000 },
  ],
  defaultStorage: "16-512",
  defaultColor: "skyblue",
  defaultSim: "none",
  priceFrom: 100000,
  storageLabel: "Конфигурация RAM/SSD",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple M5" },
    { label: "Дисплей", value: "13,6\" Liquid Retina" },
    { label: "Память", value: "от 16 ГБ RAM / 512 ГБ SSD" },
    { label: "Батарея", value: "до 18 часов" },
    { label: "Apple Intelligence", value: "Да" },
    { label: "MagSafe 3", value: "Да" },
    { label: "Разъёмы", value: "2× Thunderbolt 4, MagSafe 3" },
  ],
  compareTitle: "MacBook Air 13\" M4",
  compare: [
    { label: "Процессор", current: "M5", previous: "M4", better: true },
    { label: "Neural Engine", current: "Новое поколение", previous: "M4 Neural Engine", better: true },
    { label: "Apple Intelligence", current: "Да", previous: "Да", better: false },
    { label: "Память минимум", current: "16 ГБ", previous: "16 ГБ", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить MacBook Air 13\" M5 в Казани",
  seoText: "MacBook Air 13\" M5 — популярный ноутбук в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 100 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему MacBook Air 13\" M5 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый MacBook Air 13\" M5 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const MACBOOK_AIR_15_M4_CONFIG: ProductConfig = {
  slug: "macbook-air-15-m4",
  category: "macbook",
  colors: [
    { id: "skyblue", name: "Небесно-голубой", hex: "#BDD3E0", image: "macbook-air-15-m4" },
  ],
  storage: [
    { id: "16-256", label: "16 ГБ / 256 ГБ SSD", available: true },
    { id: "16-512", label: "16 ГБ / 512 ГБ SSD", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "16-256", colorId: "skyblue", simId: "none", price: 109000 },
    { storageId: "16-512", colorId: "skyblue", simId: "none", price: 117000 },
  ],
  defaultStorage: "16-256",
  defaultColor: "skyblue",
  defaultSim: "none",
  priceFrom: 109000,
  storageLabel: "Конфигурация RAM/SSD",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple M4" },
    { label: "Дисплей", value: "15,3\" Liquid Retina" },
    { label: "Память", value: "от 16 ГБ RAM / от 256 ГБ SSD" },
    { label: "Батарея", value: "до 18 часов" },
    { label: "Apple Intelligence", value: "Да" },
    { label: "Динамики", value: "6 динамиков с Spatial Audio" },
  ],
  compareTitle: "MacBook Air 15\" M3",
  compare: [
    { label: "Процессор", current: "M4", previous: "M3", better: true },
    { label: "Apple Intelligence", current: "Да", previous: "Да", better: false },
    { label: "Память минимум", current: "16 ГБ", previous: "8 ГБ", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить MacBook Air 15\" M4 в Казани",
  seoText: "MacBook Air 15\" M4 — популярный ноутбук в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 109 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему MacBook Air 15\" M4 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый MacBook Air 15\" M4 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const MACBOOK_AIR_15_M5_CONFIG: ProductConfig = {
  slug: "macbook-air-15-m5",
  category: "macbook",
  colors: [
    { id: "skyblue", name: "Небесно-голубой", hex: "#BDD3E0", image: "macbook-air-15-m5" },
    { id: "silver", name: "Серебристый", hex: "#D8D8D8", image: "macbook-air-15-m5" },
    { id: "midnight", name: "Тёмная Ночь", hex: "#2C2D30", image: "macbook-air-15-m5" },
    { id: "starlight", name: "Сияющая Звезда", hex: "#F5EFE3", image: "macbook-air-15-m5" },
  ],
  storage: [
    { id: "16-512", label: "16 ГБ / 512 ГБ SSD", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "16-512", colorId: "midnight", simId: "none", price: 116000 },
    { storageId: "16-512", colorId: "silver", simId: "none", price: 116000 },
    { storageId: "16-512", colorId: "skyblue", simId: "none", price: 117000 },
    { storageId: "16-512", colorId: "starlight", simId: "none", price: 117000 },
  ],
  defaultStorage: "16-512",
  defaultColor: "skyblue",
  defaultSim: "none",
  priceFrom: 116000,
  storageLabel: "Конфигурация RAM/SSD",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple M5" },
    { label: "Дисплей", value: "15,3\" Liquid Retina" },
    { label: "Память", value: "16 ГБ RAM / 512 ГБ SSD" },
    { label: "Apple Intelligence", value: "Да" },
  ],
  compareTitle: "MacBook Air 15\" M4",
  compare: [
    { label: "Процессор", current: "M5", previous: "M4", better: true },
    { label: "Neural Engine", current: "Новое поколение", previous: "M4 NE", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить MacBook Air 15\" M5 в Казани",
  seoText: "MacBook Air 15\" M5 — популярный ноутбук в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 116 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему MacBook Air 15\" M5 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый MacBook Air 15\" M5 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const MACBOOK_PRO_14_M5_CONFIG: ProductConfig = {
  slug: "macbook-pro-14-m5",
  category: "macbook",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "macbook-pro-14-m5" },
  ],
  storage: [
    { id: "16-512", label: "16 ГБ / 512 ГБ SSD", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "16-512", colorId: "black", simId: "none", price: 132000 },
  ],
  defaultStorage: "16-512",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 132000,
  storageLabel: "Конфигурация RAM/SSD",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple M5" },
    { label: "Дисплей", value: "14,2\" Liquid Retina XDR, ProMotion 120 Гц" },
    { label: "Память", value: "от 16 ГБ RAM / от 512 ГБ SSD" },
    { label: "Разъёмы", value: "3× Thunderbolt 4, HDMI, SD, MagSafe 3, 3,5 мм" },
    { label: "Apple Intelligence", value: "Да" },
    { label: "Батарея", value: "до 24 часов" },
  ],
  compareTitle: "MacBook Pro 14\" M4",
  compare: [
    { label: "Процессор", current: "M5", previous: "M4", better: true },
    { label: "Hardware Ray Tracing", current: "Да (улучшенный)", previous: "Да", better: true },
    { label: "Дисплей", current: "120 Гц ProMotion", previous: "120 Гц ProMotion", better: false },
    { label: "Разъёмы", current: "Thunderbolt 4", previous: "Thunderbolt 4", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить MacBook Pro 14\" M5 в Казани",
  seoText: "MacBook Pro 14\" M5 — популярный ноутбук в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 132 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему MacBook Pro 14\" M5 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый MacBook Pro 14\" M5 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const MACBOOK_PRO_14_M5_PRO_CONFIG: ProductConfig = {
  slug: "macbook-pro-14-m5-pro",
  category: "macbook",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "macbook-pro-14-m5-pro" },
  ],
  storage: [
    { id: "24-1tb", label: "24 ГБ / 1 ТБ SSD", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "24-1tb", colorId: "black", simId: "none", price: 189000 },
  ],
  defaultStorage: "24-1tb",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 189000,
  storageLabel: "Конфигурация RAM/SSD",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Apple M5 Pro" },
    { label: "Дисплей", value: "14,2\" Liquid Retina XDR, ProMotion 120 Гц" },
    { label: "Память", value: "24 ГБ RAM / 1 ТБ SSD" },
    { label: "Разъёмы", value: "3× Thunderbolt 5, HDMI, SD, MagSafe 3, 3,5 мм" },
    { label: "Apple Intelligence", value: "Да" },
    { label: "Батарея", value: "до 22 часов" },
  ],
  compareTitle: "MacBook Pro 14\" M4 Pro",
  compare: [
    { label: "Процессор", current: "M5 Pro", previous: "M4 Pro", better: true },
    { label: "Thunderbolt", current: "TB5 (120 Гбит/с)", previous: "TB5 (120 Гбит/с)", better: false },
    { label: "Hardware Ray Tracing", current: "Да (улучшенный)", previous: "Да", better: true },
    { label: "Память старт", current: "24 ГБ", previous: "24 ГБ", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить MacBook Pro 14\" M5 Pro в Казани",
  seoText: "MacBook Pro 14\" M5 Pro — популярный ноутбук в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 189 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему MacBook Pro 14\" M5 Pro стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый MacBook Pro 14\" M5 Pro проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const configs: Record<string, ProductConfig> = {
  "mac-mini-m4": MAC_MINI_M4_CONFIG,
  "macbook-neo": MACBOOK_NEO_CONFIG,
  "macbook-air-13-m2": MACBOOK_AIR_13_M2_CONFIG,
  "macbook-air-13-m5": MACBOOK_AIR_13_M5_CONFIG,
  "macbook-air-15-m4": MACBOOK_AIR_15_M4_CONFIG,
  "macbook-air-15-m5": MACBOOK_AIR_15_M5_CONFIG,
  "macbook-pro-14-m5": MACBOOK_PRO_14_M5_CONFIG,
  "macbook-pro-14-m5-pro": MACBOOK_PRO_14_M5_PRO_CONFIG,
};

export function getMacbookConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const MACBOOK_CONFIG_SLUGS = Object.keys(configs);
