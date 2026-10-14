/** АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [];

const RAY_BAN_HEADLINER_CONFIG: ProductConfig = {
  slug: "ray-ban-headliner",
  category: "glasses",
  colors: [
    { id: "shiny-black-g15-green-l", name: "Shiny Black / G15 Green (L)", hex: "#888888", image: "glasses-generic" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "shiny-black-g15-green-l", simId: "none", price: 39000 },
  ],
  defaultStorage: "std",
  defaultColor: "shiny-black-g15-green-l",
  defaultSim: "none",
  priceFrom: 39000,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Модель", value: "Ray-Ban Meta Headliner (Gen 2), RW4013F" },
    { label: "Камера", value: "12 МП, видео 3K до 60 fps" },
    { label: "Аккумулятор", value: "до 8 ч, 50% за 20 мин" },
    { label: "Кейс", value: "+48 ч автономности" },
    { label: "Звук", value: "2 открытых динамика, 5 микрофонов" },
    { label: "Память", value: "32 ГБ (500+ фото или 100+ видео по 30 с)" },
    { label: "Meta AI", value: "Голосовой ассистент, распознавание того, что видите" },
    { label: "Связь", value: "Bluetooth 5.3, Wi-Fi 6E" },
    { label: "Совместимость", value: "iPhone и Android" },
  ],
  compareTitle: "Ray-Ban Meta (1-е поколение)",
  compare: [
    { label: "Аккумулятор", current: "до 8 ч", previous: "до 4 ч", better: true },
    { label: "Видео", current: "3K", previous: "1080p", better: true },
    { label: "Камера", current: "12 МП", previous: "12 МП", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить очки Ray-Ban Headliner в Казани",
  seoText: "очки Ray-Ban Headliner в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему очки Ray-Ban Headliner стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const RAY_BAN_WAYFARER_CONFIG: ProductConfig = {
  slug: "ray-ban-wayfarer",
  category: "glasses",
  colors: [
    { id: "matte-black-transitions-grey-m", name: "Matte-black-transitions-grey-m", hex: "#888888", image: "glasses-generic" },
    { id: "shiny-cosmic-blue-transitions-sapphire-l", name: "Shiny-cosmic-blue-transitions-sapphire-l", hex: "#888888", image: "glasses-generic" },
    { id: "transparent-grey|clear-sapphire-transitions-m", name: "Transparent-grey|clear-sapphire-transitions-m", hex: "#888888", image: "glasses-generic" },
    { id: "matte-black-polar-gradient-graphite-m", name: "Matte-black-polar-gradient-graphite-m", hex: "#888888", image: "glasses-generic" },
    { id: "matte-black-polar-gradient-graphite-l", name: "Matte-black-polar-gradient-graphite-l", hex: "#888888", image: "glasses-generic" },
    { id: "matte-black-clear-m", name: "Matte-black-clear-m", hex: "#888888", image: "glasses-generic" },
    { id: "shiny-black-transitions-graph-green-l", name: "Shiny-black-transitions-graph-green-l", hex: "#888888", image: "glasses-generic" },
    { id: "matte-black-clear-l", name: "Matte-black-clear-l", hex: "#888888", image: "glasses-generic" },
    { id: "shiny-black-15-green-m", name: "Shiny Black / G15 Green (M)", hex: "#888888", image: "glasses-generic" },
    { id: "shiny-black-transitions-graph-green-m", name: "Shiny Black / Transitions Graph Green (M)", hex: "#888888", image: "glasses-generic" },
    { id: "shiny-cosmic-blue-transitions-sapphire-m", name: "Cosmic Blue / Transitions Sapphire (M)", hex: "#888888", image: "glasses-generic" },
    { id: "matte-black-transitions-grey-l", name: "Matte Black / Transitions Grey (L)", hex: "#888888", image: "glasses-generic" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "matte-black-transitions-grey-m", simId: "none", price: 40000 },
    { storageId: "std", colorId: "shiny-cosmic-blue-transitions-sapphire-l", simId: "none", price: 43000 },
    { storageId: "std", colorId: "transparent-grey|clear-sapphire-transitions-l", simId: "none", price: 0 },
    { storageId: "std", colorId: "transparent-grey|clear-sapphire-transitions-m", simId: "none", price: 43500 },
    { storageId: "std", colorId: "matte-black-polar-gradient-graphite-m", simId: "none", price: 0 },
    { storageId: "std", colorId: "matte-black-polar-gradient-graphite-l", simId: "none", price: 42000 },
    { storageId: "std", colorId: "matte-black-clear-m", simId: "none", price: 39000 },
    { storageId: "std", colorId: "shiny-black-transitions-graph-green-l", simId: "none", price: 0 },
    { storageId: "std", colorId: "matte-black-clear-l", simId: "none", price: 39000 },
    { storageId: "std", colorId: "shiny-black-15-green-m", simId: "none", price: 0 },
    { storageId: "std", colorId: "shiny-black-transitions-graph-green-m", simId: "none", price: 43000 },
    { storageId: "std", colorId: "shiny-cosmic-blue-transitions-sapphire-m", simId: "none", price: 43500 },
    { storageId: "std", colorId: "matte-black-transitions-grey-l", simId: "none", price: 40000 },
  ],
  defaultStorage: "std",
  defaultColor: "matte-black-clear-m",
  defaultSim: "none",
  priceFrom: 39000,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Модель", value: "Ray-Ban Meta Wayfarer (Gen 2)" },
    { label: "Камера", value: "12 МП, видео 3K до 60 fps" },
    { label: "Аккумулятор", value: "до 8 ч, 50% за 20 мин" },
    { label: "Кейс", value: "+48 ч автономности" },
    { label: "Звук", value: "2 открытых динамика, 5 микрофонов" },
    { label: "Память", value: "32 ГБ (500+ фото или 100+ видео по 30 с)" },
    { label: "Meta AI", value: "Голосовой ассистент, распознавание того, что видите" },
    { label: "Связь", value: "Bluetooth 5.3, Wi-Fi 6E" },
    { label: "Совместимость", value: "iPhone и Android" },
  ],
  compareTitle: "Ray-Ban Meta (1-е поколение)",
  compare: [
    { label: "Аккумулятор", current: "до 8 ч", previous: "до 4 ч", better: true },
    { label: "Видео", current: "3K", previous: "1080p", better: true },
    { label: "Камера", current: "12 МП", previous: "12 МП", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить очки Ray-Ban Wayfarer в Казани",
  seoText: "очки Ray-Ban Wayfarer в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему очки Ray-Ban Wayfarer стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const META_GLASSES_STARFIRE_CONFIG: ProductConfig = {
  slug: "meta-glasses-starfire",
  category: "glasses",
  colors: [
    { id: "classic-black-black", name: "Classic Black / Black", hex: "#888888", image: "glasses-generic" },
    { id: "black-clear-to-grey-transition", name: "Black / Clear-to-Grey Transition", hex: "#888888", image: "glasses-generic" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "classic-black-black", simId: "none", price: 0 },
    { storageId: "std", colorId: "black-clear-to-grey-transition", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "classic-black-black",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Модель", value: "Meta Starfire — дизайн совместно с Кайли Дженнер" },
    { label: "Начинка", value: "Как у Ray-Ban Meta Gen 2" },
    { label: "Камера", value: "12 МП, видео 3K" },
    { label: "Аккумулятор", value: "до 8 ч" },
    { label: "Дизайн", value: "Самая компактная оправа, камень на линзе, металлические носоупоры" },
    { label: "Meta AI", value: "Голосовой ассистент" },
    { label: "Зарядка", value: "Складной кейс, совместим с подставкой Charging Stand" },
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить умные очки Meta Glasses Starfire в Казани",
  seoText: "умные очки Meta Glasses Starfire в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему умные очки Meta Glasses Starfire стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const configs: Record<string, ProductConfig> = {
  "ray-ban-headliner": RAY_BAN_HEADLINER_CONFIG,
  "ray-ban-wayfarer": RAY_BAN_WAYFARER_CONFIG,
  "meta-glasses-starfire": META_GLASSES_STARFIRE_CONFIG,
};

export function getGlassesConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const GLASSES_CONFIG_SLUGS = Object.keys(configs);
