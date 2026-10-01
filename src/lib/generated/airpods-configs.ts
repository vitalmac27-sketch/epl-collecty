/** airpods-configs.ts — АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [
  { id: "charger-20w", name: "Блок питания Apple 20W USB-C", description: "Для быстрой зарядки кейса.", price: 2490, emoji: "🔌" },
  { id: "case-airpods", name: "Чехол для кейса AirPods", description: "Силиконовый защитный чехол.", price: 990, emoji: "📦" },
  { id: "eartips", name: "Сменные амбушюры", description: "Для AirPods Pro: 4 размера.", price: 1490, emoji: "👂" },
  { id: "cable-usb-c", name: "Кабель USB-C / Lightning", description: "Оригинальный 1 м.", price: 1290, emoji: "🔗" },
];

const AIRPODS_MAX_CONFIG: ProductConfig = {
  slug: "airpods-max",
  category: "airpods",
  colors: [
    { id: "purple", name: "Фиолетовый", hex: "#B8A8CF", image: "airpods-max" },
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "airpods-max" },
    { id: "orange", name: "Оранжевый (Cosmic Orange)", hex: "#D55A2B", image: "airpods-max" },
    { id: "starlight", name: "Сияющая Звезда", hex: "#F5EFE3", image: "airpods-max" },
    { id: "midnight", name: "Тёмная Ночь", hex: "#2C2D30", image: "airpods-max" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "blue", simId: "none", price: 45500 },
    { storageId: "std", colorId: "midnight", simId: "none", price: 47000 },
    { storageId: "std", colorId: "orange", simId: "none", price: 46000 },
    { storageId: "std", colorId: "purple", simId: "none", price: 46000 },
    { storageId: "std", colorId: "starlight", simId: "none", price: 45500 },
  ],
  defaultStorage: "std",
  defaultColor: "purple",
  defaultSim: "none",
  priceFrom: 45500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Тип", value: "Полноразмерные накладные (over-ear)" },
    { label: "Чип", value: "H1 (в каждой чашке)" },
    { label: "Активное шумоподавление", value: "Да" },
    { label: "Adaptive EQ", value: "Да" },
    { label: "Transparency Mode", value: "Да" },
    { label: "Personalized Spatial Audio", value: "Да" },
    { label: "Разъём кейса", value: "USB-C" },
    { label: "Батарея", value: "до 20 часов с ANC" },
    { label: "Вес", value: "384 г" },
  ],
  compareTitle: "AirPods Max (2020)",
  compare: [
    { label: "Разъём", current: "USB-C", previous: "Lightning", better: true },
    { label: "Новые цвета", current: "Purple, Orange, Starlight, Midnight, Blue", previous: "5 цветов (старые)", better: false },
    { label: "Чип", current: "H1", previous: "H1", better: false },
    { label: "Батарея", current: "до 20 ч", previous: "до 20 ч", better: false },
    { label: "Активное шумоподавление", current: "Да", previous: "Да", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить AirPods Max в Казани",
  seoText: "AirPods Max — популярный наушники в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 44 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему AirPods Max стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый AirPods Max проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const AIRPODS_PRO_3_CONFIG: ProductConfig = {
  slug: "airpods-pro-3",
  category: "airpods",
  colors: [
    { id: "standard", name: "Standard", hex: "#888888", image: "airpods-pro-3" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 21000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 21000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Чип", value: "H3" },
    { label: "Активное шумоподавление", value: "Да (2-кратное улучшение vs Pro 2)" },
    { label: "Adaptive Audio", value: "Да" },
    { label: "Conversation Awareness", value: "Да" },
    { label: "Heart Rate Sensor", value: "Да (встроенный пульсометр)" },
    { label: "Live Translation", value: "Да" },
    { label: "Защита", value: "IP57 (наушники и кейс)" },
    { label: "Кейс", value: "USB-C + MagSafe" },
    { label: "Батарея", value: "до 8 ч воспроизведения, до 10 ч без ANC" },
  ],
  compareTitle: "AirPods Pro 2",
  compare: [
    { label: "Чип", current: "H3", previous: "H2", better: true },
    { label: "ANC", current: "2× лучше", previous: "Стандарт", better: true },
    { label: "Пульсометр", current: "Да", previous: "Нет", better: true },
    { label: "Live Translation", current: "Да", previous: "Нет", better: true },
    { label: "Защита", current: "IP57", previous: "IP54", better: true },
    { label: "Батарея", current: "до 8 ч", previous: "до 6 ч", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить AirPods Pro 3 в Казани",
  seoText: "AirPods Pro 3 — популярный наушники в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 21 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему AirPods Pro 3 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый AirPods Pro 3 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const AIRPODS_PRO_2_CONFIG: ProductConfig = {
  slug: "airpods-pro-2",
  category: "airpods",
  colors: [
    { id: "standard", name: "Standard", hex: "#888888", image: "airpods-pro-2" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 19000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 19000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Чип", value: "H2" },
    { label: "Активное шумоподавление", value: "Да (2× vs 1-го поколения)" },
    { label: "Adaptive Audio", value: "Да" },
    { label: "Personalized Spatial Audio", value: "Да" },
    { label: "Conversation Awareness", value: "Да" },
    { label: "Hearing Aid", value: "Да" },
    { label: "Защита", value: "IP54" },
    { label: "Кейс", value: "USB-C + MagSafe" },
  ],
  compareTitle: "AirPods Pro (1-е поколение)",
  compare: [
    { label: "Чип", current: "H2", previous: "H1", better: true },
    { label: "ANC", current: "2× лучше", previous: "Стандарт", better: true },
    { label: "Adaptive Audio", current: "Да", previous: "Нет", better: true },
    { label: "Разъём кейса", current: "USB-C", previous: "Lightning", better: true },
    { label: "Функция слухового аппарата", current: "Да", previous: "Нет", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить AirPods Pro 2 (USB-C) в Казани",
  seoText: "AirPods Pro 2 (USB-C) — популярный наушники в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 18 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему AirPods Pro 2 (USB-C) стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый AirPods Pro 2 (USB-C) проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const AIRPODS_4_CONFIG: ProductConfig = {
  slug: "airpods-4",
  category: "airpods",
  colors: [
    { id: "standard", name: "Standard", hex: "#888888", image: "airpods-4" },
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
    { label: "Тип", value: "Открытые (без амбушюр)" },
    { label: "Чип", value: "H2" },
    { label: "Активное шумоподавление", value: "Только в версии с ANC" },
    { label: "Personalized Spatial Audio", value: "Да" },
    { label: "Кейс", value: "USB-C" },
    { label: "Батарея", value: "до 5 ч воспроизведения (до 30 ч с кейсом)" },
  ],
  compareTitle: "AirPods 3",
  compare: [
    { label: "Чип", current: "H2", previous: "H1", better: true },
    { label: "ANC версия", current: "Да (опц.)", previous: "Нет", better: true },
    { label: "Кейс с колонкой", current: "Да (версия с ANC)", previous: "Нет", better: true },
    { label: "Разъём", current: "USB-C", previous: "Lightning", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить AirPods 4 в Казани",
  seoText: "AirPods 4 — популярный наушники в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 13 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему AirPods 4 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый AirPods 4 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const MARSHALL_HEADPHONES_CONFIG: ProductConfig = {
  slug: "marshall-headphones",
  category: "airpods",
  colors: [
    { id: "cream", name: "Кремовый", hex: "#EFE5D2", image: "headphones-generic" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "headphones-generic" },
    { id: "brown", name: "Коричневый", hex: "#5C3B29", image: "headphones-generic" },
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "headphones-generic" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 10000 },
    { storageId: "std", colorId: "blue", simId: "none", price: 10000 },
    { storageId: "std", colorId: "brown", simId: "none", price: 9000 },
    { storageId: "std", colorId: "cream", simId: "none", price: 10000 },
  ],
  defaultStorage: "std",
  defaultColor: "cream",
  defaultSim: "none",
  priceFrom: 9000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модели", value: "Major IV, Major V" },
    { label: "Тип", value: "Накладные, проводные/беспроводные" },
    { label: "Подключение", value: "Bluetooth 5.3" },
    { label: "Батарея", value: "до 80 часов (Major V)" },
    { label: "Управление", value: "Multi-directional control knob" },
    { label: "Дизайн", value: "Легендарный Marshall стиль" },
  ],
  compareTitle: "Marshall Monitor II",
  compare: [
    { label: "Время работы", current: "до 80 ч (Major V)", previous: "до 30 ч", better: true },
    { label: "Bluetooth", current: "5.3", previous: "5.2", better: true },
    { label: "Быстрая зарядка", current: "15 мин = 15 ч", previous: "Нет", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Наушники Marshall в Казани",
  seoText: "Наушники Marshall — популярный наушники в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 9 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Наушники Marshall стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Наушники Marshall проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const AIRPODS_5_CONFIG: ProductConfig = {
  slug: "airpods-5",
  category: "airpods",
  colors: [
    { id: "standard", name: "Стандарт", hex: "#D0D0D0", image: "airpods-4" },
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
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Варианты", value: "Стандарт" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить AirPods 5 в Казани",
  seoText: "AirPods 5 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему AirPods 5 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const GALAXY_BUDS_4_PRO_CONFIG: ProductConfig = {
  slug: "galaxy-buds-4-pro",
  category: "airpods",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "earbuds-generic" },
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "earbuds-generic" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 18500 },
    { storageId: "std", colorId: "white", simId: "none", price: 18500 },
  ],
  defaultStorage: "std",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 18500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Варианты", value: "Чёрный, Белый" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy Buds 4 Pro в Казани",
  seoText: "Samsung Galaxy Buds 4 Pro в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy Buds 4 Pro стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const GALAXY_BUDS_4_CONFIG: ProductConfig = {
  slug: "galaxy-buds-4",
  category: "airpods",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "earbuds-generic" },
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "earbuds-generic" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 15000 },
    { storageId: "std", colorId: "white", simId: "none", price: 14500 },
  ],
  defaultStorage: "std",
  defaultColor: "white",
  defaultSim: "none",
  priceFrom: 14500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Варианты", value: "Чёрный, Белый" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy Buds 4 в Казани",
  seoText: "Samsung Galaxy Buds 4 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy Buds 4 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const GALAXY_BUDS_3_PRO_CONFIG: ProductConfig = {
  slug: "galaxy-buds-3-pro",
  category: "airpods",
  colors: [
    { id: "silver", name: "Серебристый", hex: "#C9CCD1", image: "earbuds-generic" },
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "earbuds-generic" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "silver", simId: "none", price: 15000 },
    { storageId: "std", colorId: "white", simId: "none", price: 15000 },
  ],
  defaultStorage: "std",
  defaultColor: "silver",
  defaultSim: "none",
  priceFrom: 15000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Варианты", value: "Серебристый, Белый" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy Buds 3 Pro в Казани",
  seoText: "Samsung Galaxy Buds 3 Pro в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy Buds 3 Pro стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const GALAXY_BUDS_3_CONFIG: ProductConfig = {
  slug: "galaxy-buds-3",
  category: "airpods",
  colors: [
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "earbuds-generic" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "white", simId: "none", price: 12500 },
  ],
  defaultStorage: "std",
  defaultColor: "white",
  defaultSim: "none",
  priceFrom: 12500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Варианты", value: "Белый" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy Buds 3 в Казани",
  seoText: "Samsung Galaxy Buds 3 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy Buds 3 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const GALAXY_BUDS_3_FE_CONFIG: ProductConfig = {
  slug: "galaxy-buds-3-fe",
  category: "airpods",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "earbuds-generic" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 10500 },
  ],
  defaultStorage: "std",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 10500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Варианты", value: "Чёрный" },
    { label: "Гарантия", value: "1 год" },
  ],
  compareTitle: "",
  compare: [],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy Buds 3 FE в Казани",
  seoText: "Samsung Galaxy Buds 3 FE в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy Buds 3 FE стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const configs: Record<string, ProductConfig> = {
  "galaxy-buds-3-fe": GALAXY_BUDS_3_FE_CONFIG,
  "galaxy-buds-3": GALAXY_BUDS_3_CONFIG,
  "galaxy-buds-3-pro": GALAXY_BUDS_3_PRO_CONFIG,
  "galaxy-buds-4": GALAXY_BUDS_4_CONFIG,
  "galaxy-buds-4-pro": GALAXY_BUDS_4_PRO_CONFIG,
  "airpods-5": AIRPODS_5_CONFIG,
  "airpods-max": AIRPODS_MAX_CONFIG,
  "airpods-pro-3": AIRPODS_PRO_3_CONFIG,
  "airpods-pro-2": AIRPODS_PRO_2_CONFIG,
  "airpods-4": AIRPODS_4_CONFIG,
  "marshall-headphones": MARSHALL_HEADPHONES_CONFIG,
};

export function getAirpodsConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const AIRPODS_CONFIG_SLUGS = Object.keys(configs);
