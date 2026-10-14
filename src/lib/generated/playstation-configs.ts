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
  prices: [{ storageId: "2tb", colorId: "white", simId: "none", price: 0 }],
  defaultStorage: "2tb", defaultColor: "white", defaultSim: "none", priceFrom: 0,
  storageLabel: "Версия", showSim: false,
  specs: [
    { label: "GPU", value: "На 67% больше вычислительных блоков, рендеринг до 45% быстрее" },
    { label: "Трассировка лучей", value: "В 2–3 раза быстрее" },
    { label: "Апскейлинг", value: "PSSR (ИИ-масштабирование)" },
    { label: "SSD", value: "2 ТБ" },
    { label: "Дисковод", value: "Нет, подключается отдельно" },
    { label: "Wi-Fi", value: "Wi-Fi 7" },
    { label: "Вывод", value: "до 4K 120 Гц, 8K" },
    { label: "Геймпад", value: "DualSense в комплекте" },
  ],
  compareTitle: "PlayStation 5 Slim",
  compare: [
    { label: "Рендеринг", current: "до 45% быстрее", previous: "—", better: true },
    { label: "Трассировка лучей", current: "в 2–3 раза быстрее", previous: "—", better: true },
    { label: "PSSR", current: "Да", previous: "Нет", better: true },
    { label: "SSD", current: "2 ТБ", previous: "1 ТБ", better: true },
    { label: "Wi-Fi", current: "Wi-Fi 7", previous: "Wi-Fi 6", better: true },
    { label: "Дисковод", current: "Отдельно", previous: "Встроен", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить PlayStation 5 Pro в Казани", seoText: "PS5 Pro — самая мощная консоль Sony. Цена от 89 000 ₽ в ЭПЛ-КОЛЛЕКЦИЯ. Гарантия 1 год, рассрочка до 36 мес.",
  seoH2Why: "Чем PS5 Pro отличается от PS5 Slim?", seoTextWhy: "GPU на 45% мощнее, 2 ТБ SSD вместо 1 ТБ, трассировка лучей до 3× быстрее. Для максимального качества графики в играх.",
};

const PLAYSTATION_5_SLIM_CONFIG: ProductConfig = {
  slug: "playstation-5-slim", category: "playstation",
  colors: [{ id: "white", name: "Белый", hex: "#F0F0F0", image: "playstation-5-slim" }],
  storage: [{ id: "1tb", label: "1 ТБ SSD", available: true }],
  sim: [{ id: "none", label: "Стандарт", description: "Стандартная комплектация." }],
  prices: [{ storageId: "1tb", colorId: "white", simId: "none", price: 76000 }],
  defaultStorage: "1tb", defaultColor: "white", defaultSim: "none", priceFrom: 76000,
  storageLabel: "Версия", showSim: false,
  specs: [
    { label: "GPU", value: "10,28 ТФЛОПС" },
    { label: "SSD", value: "1 ТБ" },
    { label: "Дисковод", value: "Ultra HD Blu-ray, съёмный" },
    { label: "Вывод", value: "до 4K 120 Гц" },
    { label: "Размер", value: "На 30% компактнее оригинальной PS5" },
    { label: "Вес", value: "≈ 3,2 кг" },
    { label: "Геймпад", value: "DualSense в комплекте" },
  ],
  compareTitle: "PlayStation 5 Slim Digital",
  compare: [
    { label: "Дисковод", current: "Да (съёмный)", previous: "Нет", better: true },
    { label: "Диски и б/у игры", current: "Да", previous: "Только цифровые", better: true },
    { label: "SSD", current: "1 ТБ", previous: "1 ТБ", better: false },
    { label: "GPU", current: "10,28 ТФЛОПС", previous: "10,28 ТФЛОПС", better: false },
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
    { label: "Дисковод", value: "Нет — можно докупить отдельно" },
    { label: "Вывод", value: "до 4K 120 Гц" },
    { label: "Размер", value: "На 30% компактнее оригинальной PS5" },
    { label: "Вес", value: "≈ 2,6 кг" },
    { label: "Геймпад", value: "DualSense в комплекте" },
  ],
  compareTitle: "",
  compare: [
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
    { label: "Отдача", value: "Тактильная отдача и адаптивные курки" },
    { label: "Микрофон", value: "Встроенный, кнопка отключения" },
    { label: "Аудио", value: "Встроенный динамик, разъём 3,5 мм" },
    { label: "Зарядка", value: "USB-C" },
    { label: "Совместимость", value: "PS5, PS5 Pro, PS Portal, ПК, iPhone и Android" },
    { label: "Вес", value: "≈ 280 г" },
  ],
  compareTitle: "",
  compare: [
  ],
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
    { storageId: "std", colorId: "white", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "white",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Тип", value: "Портативный пульт дистанционной игры для PS5" },
    { label: "Экран", value: "8\" LCD, 1080p, 60 fps" },
    { label: "Управление", value: "Тактильная отдача и адаптивные курки, как у DualSense" },
    { label: "Подключение", value: "Remote Play через Wi-Fi к вашей PS5" },
    { label: "Облако", value: "Облачный стриминг игр с PS Plus Premium" },
    { label: "Зарядка", value: "USB-C" },
  ],
  compareTitle: "",
  compare: [
  ],
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
    { label: "Тип", value: "Съёмный дисковод Ultra HD Blu-ray" },
    { label: "Совместимость", value: "PS5 Slim Digital и PS5 Pro" },
    { label: "Установка", value: "Подключается к консоли без инструментов" },
    { label: "Активация", value: "Однократная, нужен интернет" },
    { label: "Форматы", value: "Игры PS5/PS4 на дисках, 4K Blu-ray, Blu-ray, DVD" },
  ],
  compareTitle: "",
  compare: [
  ],
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
