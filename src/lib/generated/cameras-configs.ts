/** АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [];

const GOPRO_HERO_13_CONFIG: ProductConfig = {
  slug: "gopro-hero-13",
  category: "cameras",
  colors: [
    { id: "black", name: "Black", hex: "#888888", image: "dji-mic-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 31000 },
  ],
  defaultStorage: "std",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 31000,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "Экшн-камера" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "GoPro Hero 12",
  compare: [
    { label: "Поколение", current: "13", previous: "12", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить экшн-камера GoPro Hero 13 в Казани",
  seoText: "экшн-камера GoPro Hero 13 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 31 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему экшн-камера GoPro Hero 13 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const GOPRO_HERO_12_CONFIG: ProductConfig = {
  slug: "gopro-hero-12",
  category: "cameras",
  colors: [
    { id: "black", name: "Black", hex: "#888888", image: "dji-mic-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 27000 },
  ],
  defaultStorage: "std",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 27000,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "Экшн-камера" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "GoPro Hero 13",
  compare: [
    { label: "Цена", current: "ниже", previous: "выше", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить экшн-камера GoPro Hero 12 в Казани",
  seoText: "экшн-камера GoPro Hero 12 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 27 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему экшн-камера GoPro Hero 12 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const INSTA360_X5_CONFIG: ProductConfig = {
  slug: "insta360-x5",
  category: "cameras",
  colors: [
    { id: "standard", name: "Стандарт", hex: "#888888", image: "dji-mic-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 37500 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 37500,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "360°-камера" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "GoPro Hero 13",
  compare: [
    { label: "Съёмка 360°", current: "Да", previous: "Нет", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить панорамная камера Insta360 X5 в Казани",
  seoText: "панорамная камера Insta360 X5 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 39 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему панорамная камера Insta360 X5 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const DJI_OSMO_MOBILE_8_CONFIG: ProductConfig = {
  slug: "dji-osmo-mobile-8",
  category: "cameras",
  colors: [
    { id: "standard", name: "С лидаром", hex: "#888888", image: "dji-mic-3" },
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
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "Стабилизатор для смартфона" },
    { label: "Лидар", value: "Да" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "Osmo Mobile 8P",
  compare: [
    { label: "Цена", current: "ниже", previous: "выше", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить стабилизатор DJI Osmo Mobile 8 в Казани",
  seoText: "стабилизатор DJI Osmo Mobile 8 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 13 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему стабилизатор DJI Osmo Mobile 8 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const DJI_OSMO_MOBILE_8P_CONFIG: ProductConfig = {
  slug: "dji-osmo-mobile-8p",
  category: "cameras",
  colors: [
    { id: "standard", name: "Стандарт", hex: "#888888", image: "dji-mic-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 16000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 16000,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "Стабилизатор для смартфона" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "Osmo Mobile 8",
  compare: [
    { label: "Версия", current: "8P", previous: "8", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить стабилизатор DJI Osmo Mobile 8P в Казани",
  seoText: "стабилизатор DJI Osmo Mobile 8P в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 16 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему стабилизатор DJI Osmo Mobile 8P стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const DJI_OSMO_POCKET_3_CONFIG: ProductConfig = {
  slug: "dji-osmo-pocket-3",
  category: "cameras",
  colors: [
    { id: "creator-combo", name: "Creator Combo", hex: "#888888", image: "dji-mic-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "creator-combo", simId: "none", price: 38000 },
  ],
  defaultStorage: "std",
  defaultColor: "creator-combo",
  defaultSim: "none",
  priceFrom: 38000,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "Карманная камера со стабилизацией" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "Osmo Pocket 4",
  compare: [
    { label: "Цена", current: "ниже", previous: "выше", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить камера DJI Osmo Pocket 3 в Казани",
  seoText: "камера DJI Osmo Pocket 3 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 38 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему камера DJI Osmo Pocket 3 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const DJI_OSMO_POCKET_4_CONFIG: ProductConfig = {
  slug: "dji-osmo-pocket-4",
  category: "cameras",
  colors: [
    { id: "standard", name: "Стандарт", hex: "#888888", image: "dji-mic-3" },
    { id: "creator-combo", name: "Creator Combo", hex: "#888888", image: "dji-mic-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 43000 },
    { storageId: "std", colorId: "creator-combo", simId: "none", price: 51000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 43000,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "Карманная камера со стабилизацией" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "Osmo Pocket 3",
  compare: [
    { label: "Поколение", current: "4", previous: "3", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить камера DJI Osmo Pocket 4 в Казани",
  seoText: "камера DJI Osmo Pocket 4 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 43 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему камера DJI Osmo Pocket 4 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const CANON_G7X_MARK_3_CONFIG: ProductConfig = {
  slug: "canon-g7x-mark-3",
  category: "cameras",
  colors: [
    { id: "black", name: "Black", hex: "#888888", image: "dji-mic-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 101500 },
  ],
  defaultStorage: "std",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 101500,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "Компактная камера" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "GoPro Hero 13",
  compare: [
    { label: "Матрица", current: "1 дюйм", previous: "меньше", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить камера Canon PowerShot G7X Mark III в Казани",
  seoText: "камера Canon PowerShot G7X Mark III в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 104 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему камера Canon PowerShot G7X Mark III стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const KODAK_CHARMERA_CONFIG: ProductConfig = {
  slug: "kodak-charmera",
  category: "cameras",
  colors: [
    { id: "standard", name: "Стандарт", hex: "#888888", image: "dji-mic-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 5500 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 5500,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "Мини-камера-брелок" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "GoPro Hero 12",
  compare: [
    { label: "Цена", current: "от 5 500 ₽", previous: "выше", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить мини-камера Kodak Charmera в Казани",
  seoText: "мини-камера Kodak Charmera в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 5 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему мини-камера Kodak Charmera стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const configs: Record<string, ProductConfig> = {
  "gopro-hero-13": GOPRO_HERO_13_CONFIG,
  "gopro-hero-12": GOPRO_HERO_12_CONFIG,
  "insta360-x5": INSTA360_X5_CONFIG,
  "dji-osmo-mobile-8": DJI_OSMO_MOBILE_8_CONFIG,
  "dji-osmo-mobile-8p": DJI_OSMO_MOBILE_8P_CONFIG,
  "dji-osmo-pocket-3": DJI_OSMO_POCKET_3_CONFIG,
  "dji-osmo-pocket-4": DJI_OSMO_POCKET_4_CONFIG,
  "canon-g7x-mark-3": CANON_G7X_MARK_3_CONFIG,
  "kodak-charmera": KODAK_CHARMERA_CONFIG,
};

export function getCamerasConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const CAMERAS_CONFIG_SLUGS = Object.keys(configs);
