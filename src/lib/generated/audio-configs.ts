/** audio-configs.ts — АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [
  { id: "case-speaker", name: "Чехол для колонки", description: "Защита от ударов и пыли.", price: 1990, emoji: "💼" },
  { id: "cable-audio", name: "Аудио-кабель (Aux/USB-C)", description: "Качественный кабель 1.5 м.", price: 990, emoji: "🔗" },
  { id: "charger-fast", name: "Зарядное устройство быстрое", description: "Для колонок и микрофонов.", price: 1990, emoji: "🔌" },
];

const JBL_BOOMBOX_4_CONFIG: ProductConfig = {
  slug: "jbl-boombox-4",
  category: "audio",
  colors: [
    { id: "standard", name: "Standard", hex: "#888888", image: "jbl-boombox-4" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 42000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 42000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить JBL Boombox 4 в Казани",
  seoText: "JBL Boombox 4 — популярный аудио-устройство в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 42 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему JBL Boombox 4 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый JBL Boombox 4 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const YANDEX_STATION_LIGHT_2_CONFIG: ProductConfig = {
  slug: "yandex-station-light-2",
  category: "audio",
  colors: [
    { id: "default", name: "Розовая", hex: "#888888", image: "yandex-station-light-2" },
    { id: "default", name: "Зеленая", hex: "#888888", image: "yandex-station-light-2" },
    { id: "default", name: "Синяя", hex: "#888888", image: "yandex-station-light-2" },
    { id: "default", name: "Фиолетовая", hex: "#888888", image: "yandex-station-light-2" },
    { id: "default", name: "Коралловая", hex: "#888888", image: "yandex-station-light-2" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "default", simId: "none", price: 8000 },
  ],
  defaultStorage: "std",
  defaultColor: "default",
  defaultSim: "none",
  priceFrom: 8000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Яндекс Станция Лайт 2 в Казани",
  seoText: "Яндекс Станция Лайт 2 — популярный аудио-устройство в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 8 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Яндекс Станция Лайт 2 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Яндекс Станция Лайт 2 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DJI_MIC_3_CONFIG: ProductConfig = {
  slug: "dji-mic-3",
  category: "audio",
  colors: [
    { id: "standard", name: "Standard", hex: "#888888", image: "dji-mic-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 31000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 31000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить DJI Mic 3 (2TX + 1RX) в Казани",
  seoText: "DJI Mic 3 (2TX + 1RX) — популярный аудио-устройство в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 31 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему DJI Mic 3 (2TX + 1RX) стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый DJI Mic 3 (2TX + 1RX) проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DJI_MIC_2_CONFIG: ProductConfig = {
  slug: "dji-mic-2",
  category: "audio",
  colors: [
    { id: "standard", name: "Standard", hex: "#888888", image: "dji-mic-2" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 22500 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 22500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить DJI Mic 2 (2TX + 1RX) в Казани",
  seoText: "DJI Mic 2 (2TX + 1RX) — популярный аудио-устройство в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 22 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему DJI Mic 2 (2TX + 1RX) стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый DJI Mic 2 (2TX + 1RX) проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DJI_MIC_MINI_CONFIG: ProductConfig = {
  slug: "dji-mic-mini",
  category: "audio",
  colors: [
    { id: "standard", name: "Standard", hex: "#888888", image: "dji-mic-mini" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 14500 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 14500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить DJI Mic Mini (2TX + 1RX) в Казани",
  seoText: "DJI Mic Mini (2TX + 1RX) — популярный аудио-устройство в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 14 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему DJI Mic Mini (2TX + 1RX) стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый DJI Mic Mini (2TX + 1RX) проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const configs: Record<string, ProductConfig> = {
  "jbl-boombox-4": JBL_BOOMBOX_4_CONFIG,
  "yandex-station-light-2": YANDEX_STATION_LIGHT_2_CONFIG,
  "dji-mic-3": DJI_MIC_3_CONFIG,
  "dji-mic-2": DJI_MIC_2_CONFIG,
  "dji-mic-mini": DJI_MIC_MINI_CONFIG,
};

export function getAudioConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const AUDIO_CONFIG_SLUGS = Object.keys(configs);
