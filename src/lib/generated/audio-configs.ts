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
    { storageId: "std", colorId: "standard", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Мощность", value: "от сети 2 × 65 Вт + 2 × 40 Вт, от батареи 2 × 60 Вт + 2 × 40 Вт" },
    { label: "Работа от батареи", value: "до 34 часов" },
    { label: "Аккумулятор", value: "99 Вт·ч, сменный, функция powerbank" },
    { label: "Защита", value: "IP68" },
    { label: "Bluetooth", value: "5.4, Auracast" },
    { label: "AI Sound Boost", value: "Да" },
    { label: "Вход", value: "USB-C с lossless-воспроизведением" },
    { label: "Вес", value: "5,9 кг" },
    { label: "Размеры", value: "51 × 26 × 21 см" },
  ],
  compareTitle: "JBL Boombox 3",
  compare: [
    { label: "Работа от батареи", current: "до 34 ч", previous: "до 24 ч", better: true },
    { label: "Защита", current: "IP68", previous: "IP67", better: true },
    { label: "Auracast", current: "Да", previous: "Нет", better: true },
    { label: "Сменный аккумулятор", current: "Да", previous: "Нет", better: true },
    { label: "Вес", current: "5,9 кг", previous: "6,7 кг", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить JBL Boombox 4 в Казани",
  seoText: "JBL Boombox 4 — популярное аудиоустройство в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 42 000 ₽. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "default", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "default",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Помощник", value: "Алиса" },
    { label: "Звук", value: "6 Вт, динамик 44,5 мм" },
    { label: "Часы", value: "В версии с часами — на корпусе" },
    { label: "Умный дом", value: "Управление устройствами Яндекса, Matter" },
    { label: "Wi-Fi", value: "Wi-Fi 5" },
    { label: "Bluetooth", value: "5.0" },
    { label: "Микрофоны", value: "2, с физическим отключением" },
    { label: "Питание", value: "USB-C, адаптер в комплекте" },
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Яндекс Станция Лайт 2 в Казани",
  seoText: "Яндекс Станция Лайт 2 — популярное аудиоустройство в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 8 000 ₽. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "standard", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Передатчик", value: "16 г" },
    { label: "Дальность", value: "до 400 м" },
    { label: "Работа передатчика", value: "до 8 ч, с кейсом до 28 ч" },
    { label: "Запись в передатчике", value: "32 ГБ, 32-бит float" },
    { label: "Шумоподавление", value: "2 уровня" },
    { label: "Система", value: "до 4 передатчиков, тайм-код" },
    { label: "Работа приёмника", value: "до 10 ч" },
  ],
  compareTitle: "DJI Mic 2",
  compare: [
    { label: "Вес передатчика", current: "16 г", previous: "28 г", better: true },
    { label: "Дальность", current: "400 м", previous: "250 м", better: true },
    { label: "Работа передатчика", current: "8 ч", previous: "6 ч", better: true },
    { label: "С кейсом", current: "28 ч", previous: "18 ч", better: true },
    { label: "Память передатчика", current: "32 ГБ", previous: "8 ГБ", better: true },
    { label: "Тайм-код", current: "Да", previous: "Нет", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить DJI Mic 3 (2TX + 1RX) в Казани",
  seoText: "DJI Mic 3 (2TX + 1RX) — популярное аудиоустройство в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 31 000 ₽. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "standard", simId: "none", price: 24000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 24000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Передатчик", value: "28 г" },
    { label: "Дальность", value: "до 250 м" },
    { label: "Работа передатчика", value: "до 6 ч, с кейсом до 18 ч" },
    { label: "Запись в передатчике", value: "8 ГБ, 32-бит float" },
    { label: "Шумоподавление", value: "Интеллектуальное" },
    { label: "Подключение", value: "Приёмник с экраном, Bluetooth напрямую к телефону" },
    { label: "Работа приёмника", value: "до 6 ч" },
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить DJI Mic 2 (2TX + 1RX) в Казани",
  seoText: "DJI Mic 2 (2TX + 1RX) — популярное аудиоустройство в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 22 500 ₽. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "standard", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Передатчик", value: "10 г — самый лёгкий в линейке" },
    { label: "Дальность", value: "до 400 м" },
    { label: "Работа передатчика", value: "до 11,5 ч, с кейсом до 48 ч" },
    { label: "Шумоподавление", value: "2 уровня" },
    { label: "Запись в передатчике", value: "Нет" },
    { label: "Подключение", value: "Приёмник для камеры и телефона" },
  ],
  compareTitle: "DJI Mic 2",
  compare: [
    { label: "Вес передатчика", current: "10 г", previous: "28 г", better: true },
    { label: "Работа передатчика", current: "11,5 ч", previous: "6 ч", better: true },
    { label: "Дальность", current: "400 м", previous: "250 м", better: true },
    { label: "Запись в передатчике", current: "Нет", previous: "8 ГБ, 32-бит float", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить DJI Mic Mini (2TX + 1RX) в Казани",
  seoText: "DJI Mic Mini (2TX + 1RX) — популярное аудиоустройство в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 14 500 ₽. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
