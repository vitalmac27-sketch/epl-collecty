/** dyson-configs.ts — АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [
  { id: "case-dyson", name: "Кейс для хранения", description: "Защита от пыли и царапин.", price: 4990, emoji: "💼" },
  { id: "filter-dyson", name: "Сменный фильтр", description: "Оригинальный фильтр HEPA.", price: 2990, emoji: "🌀" },
  { id: "attachment", name: "Дополнительная насадка", description: "Расширьте функционал.", price: 3490, emoji: "🔧" },
];

const DYSON_HD18_PRO_CONFIG: ProductConfig = {
  slug: "dyson-hd18-pro",
  category: "dyson",
  colors: [
    { id: "vinca-blue", name: "Тёмно-синий", hex: "#3D5A82", image: "dyson-hd18-pro" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "vinca-blue", simId: "none", price: 39000 },
  ],
  defaultStorage: "std",
  defaultColor: "vinca-blue",
  defaultSim: "none",
  priceFrom: 39000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Фен Dyson HD18 Pro в Казани",
  seoText: "Фен Dyson HD18 Pro — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 39 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Фен Dyson HD18 Pro стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Фен Dyson HD18 Pro проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_HD17_CONFIG: ProductConfig = {
  slug: "dyson-hd17",
  category: "dyson",
  colors: [
    { id: "jusper-plum", name: "Jusper plum", hex: "#888888", image: "dyson-hd17" },
    { id: "ceramic-pink", name: "Керамический розовый", hex: "#E8B5A8", image: "dyson-hd17" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "ceramic-pink", simId: "none", price: 35000 },
    { storageId: "std", colorId: "jusper-plum", simId: "none", price: 34000 },
  ],
  defaultStorage: "std",
  defaultColor: "jusper-plum",
  defaultSim: "none",
  priceFrom: 34000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Фен Dyson HD17 в Казани",
  seoText: "Фен Dyson HD17 — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 34 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Фен Dyson HD17 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Фен Dyson HD17 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_HD16_CONFIG: ProductConfig = {
  slug: "dyson-hd16",
  category: "dyson",
  colors: [
    { id: "prussian-blue", name: "Прусский синий", hex: "#1F3354", image: "dyson-hd16-blue" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "prussian-blue", simId: "none", price: 34000 },
  ],
  defaultStorage: "std",
  defaultColor: "prussian-blue",
  defaultSim: "none",
  priceFrom: 34000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Фен Dyson HD16 в Казани",
  seoText: "Фен Dyson HD16 — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 34 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Фен Dyson HD16 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Фен Dyson HD16 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_AIRWRAP_HS09_CONFIG: ProductConfig = {
  slug: "dyson-airwrap-hs09",
  category: "dyson",
  colors: [
    { id: "apricot-topaz", name: "Абрикосовый топаз", hex: "#D4A88A", image: "dyson-airwrap-hs09" },
    { id: "red-velvet", name: "Красный бархат", hex: "#86323A", image: "dyson-airwrap-hs09" },
    { id: "amber-silk", name: "Янтарный шёлк", hex: "#C49862", image: "dyson-airwrap-hs09" },
    { id: "ceramic-pink", name: "Керамический розовый", hex: "#E8B5A8", image: "dyson-airwrap-hs09" },
    { id: "jasper-plum", name: "Сливовый", hex: "#5A3A4A", image: "dyson-airwrap-hs09" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "amber-silk", simId: "none", price: 50000 },
    { storageId: "std", colorId: "apricot-topaz", simId: "none", price: 55000 },
    { storageId: "std", colorId: "ceramic-pink", simId: "none", price: 50000 },
    { storageId: "std", colorId: "jasper-plum", simId: "none", price: 50000 },
    { storageId: "std", colorId: "red-velvet", simId: "none", price: 54000 },
  ],
  defaultStorage: "std",
  defaultColor: "apricot-topaz",
  defaultSim: "none",
  priceFrom: 50000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Стайлер Dyson Airwrap HS09 Coanda 2x в Казани",
  seoText: "Стайлер Dyson Airwrap HS09 Coanda 2x — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 50 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Стайлер Dyson Airwrap HS09 Coanda 2x стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Стайлер Dyson Airwrap HS09 Coanda 2x проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_AIRWRAP_HS08_CONFIG: ProductConfig = {
  slug: "dyson-airwrap-hs08",
  category: "dyson",
  colors: [
    { id: "ceramic-pink", name: "Керамический розовый", hex: "#E8B5A8", image: "dyson-airwrap-hs08" },
    { id: "vinca-blue", name: "Тёмно-синий", hex: "#3D5A82", image: "dyson-airwrap-hs08" },
    { id: "amber-silk", name: "Янтарный шёлк", hex: "#C49862", image: "dyson-airwrap-hs08" },
    { id: "prussian-blue", name: "Прусский синий", hex: "#1F3354", image: "dyson-airwrap-hs08" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "amber-silk", simId: "none", price: 38000 },
    { storageId: "std", colorId: "ceramic-pink", simId: "none", price: 38000 },
    { storageId: "std", colorId: "prussian-blue", simId: "none", price: 39500 },
    { storageId: "std", colorId: "vinca-blue", simId: "none", price: 35000 },
  ],
  defaultStorage: "std",
  defaultColor: "ceramic-pink",
  defaultSim: "none",
  priceFrom: 35000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Стайлер Dyson Airwrap HS08 в Казани",
  seoText: "Стайлер Dyson Airwrap HS08 — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 35 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Стайлер Dyson Airwrap HS08 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Стайлер Dyson Airwrap HS08 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_AIRWRAP_HS05_CONFIG: ProductConfig = {
  slug: "dyson-airwrap-hs05",
  category: "dyson",
  colors: [
    { id: "nickel-cooper", name: "Никель/медь", hex: "#A07B5C", image: "dyson-airwrap-hs05" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "nickel-cooper", simId: "none", price: 31000 },
  ],
  defaultStorage: "std",
  defaultColor: "nickel-cooper",
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
  seoH2: "Купить Стайлер Dyson Airwrap HS05 в Казани",
  seoText: "Стайлер Dyson Airwrap HS05 — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 31 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Стайлер Dyson Airwrap HS05 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Стайлер Dyson Airwrap HS05 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_AIRSTRAIT_HT01_CONFIG: ProductConfig = {
  slug: "dyson-airstrait-ht01",
  category: "dyson",
  colors: [
    { id: "nickel-cooper", name: "Никель/медь", hex: "#A07B5C", image: "dyson-airstrait-ht01" },
    { id: "strawberry-bronze", name: "Клубника/бронза", hex: "#B0716E", image: "dyson-airstrait-ht01" },
    { id: "ceramic-pink", name: "Керамический розовый", hex: "#E8B5A8", image: "dyson-airstrait-ht01" },
    { id: "prussian-blue", name: "Прусский синий", hex: "#1F3354", image: "dyson-airstrait-ht01" },
    { id: "amber-silk", name: "Янтарный шёлк", hex: "#C49862", image: "dyson-airstrait-ht01" },
    { id: "apricot-topaz", name: "Абрикосовый топаз", hex: "#D4A88A", image: "dyson-airstrait-ht01" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "amber-silk", simId: "none", price: 36000 },
    { storageId: "std", colorId: "apricot-topaz", simId: "none", price: 35000 },
    { storageId: "std", colorId: "ceramic-pink", simId: "none", price: 35000 },
    { storageId: "std", colorId: "nickel-cooper", simId: "none", price: 35000 },
    { storageId: "std", colorId: "prussian-blue", simId: "none", price: 33500 },
    { storageId: "std", colorId: "strawberry-bronze", simId: "none", price: 38000 },
  ],
  defaultStorage: "std",
  defaultColor: "nickel-cooper",
  defaultSim: "none",
  priceFrom: 33500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Выпрямитель Dyson Airstrait HT01 в Казани",
  seoText: "Выпрямитель Dyson Airstrait HT01 — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 33 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Выпрямитель Dyson Airstrait HT01 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Выпрямитель Dyson Airstrait HT01 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_WASH_G1_CONFIG: ProductConfig = {
  slug: "dyson-wash-g1",
  category: "dyson",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "dyson-wash-g1" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 44000 },
  ],
  defaultStorage: "std",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 44000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson WashG1 в Казани",
  seoText: "Пылесос Dyson WashG1 — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 44 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Пылесос Dyson WashG1 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Пылесос Dyson WashG1 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_GEN5_DETECT_CONFIG: ProductConfig = {
  slug: "dyson-gen5-detect",
  category: "dyson",
  colors: [
    { id: "blue-cooper", name: "Синий/медь", hex: "#5A6F8A", image: "dyson-gen5-detect" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "blue-cooper", simId: "none", price: 56000 },
  ],
  defaultStorage: "std",
  defaultColor: "blue-cooper",
  defaultSim: "none",
  priceFrom: 56000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson Gen5 Detect в Казани",
  seoText: "Пылесос Dyson Gen5 Detect — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 56 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Пылесос Dyson Gen5 Detect стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Пылесос Dyson Gen5 Detect проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_V16S_CONFIG: ProductConfig = {
  slug: "dyson-v16s",
  category: "dyson",
  colors: [
    { id: "mat-black-cooper", name: "Матовый чёрный/медь", hex: "#2A2A2C", image: "dyson-v16s" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "mat-black-cooper", simId: "none", price: 74500 },
  ],
  defaultStorage: "std",
  defaultColor: "mat-black-cooper",
  defaultSim: "none",
  priceFrom: 74500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V16s Submarine в Казани",
  seoText: "Пылесос Dyson V16s Submarine — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 74 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Пылесос Dyson V16s Submarine стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Пылесос Dyson V16s Submarine проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_V15S_CONFIG: ProductConfig = {
  slug: "dyson-v15s",
  category: "dyson",
  colors: [
    { id: "yellow-nickel", name: "Жёлтый/никель", hex: "#D4C56E", image: "dyson-v15s" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "yellow-nickel", simId: "none", price: 56000 },
  ],
  defaultStorage: "std",
  defaultColor: "yellow-nickel",
  defaultSim: "none",
  priceFrom: 56000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V15s Submarine в Казани",
  seoText: "Пылесос Dyson V15s Submarine — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 56 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Пылесос Dyson V15s Submarine стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Пылесос Dyson V15s Submarine проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_V15_CONFIG: ProductConfig = {
  slug: "dyson-v15",
  category: "dyson",
  colors: [
    { id: "yellow-nickel", name: "Жёлтый/никель", hex: "#D4C56E", image: "dyson-v15" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "yellow-nickel", simId: "none", price: 51000 },
  ],
  defaultStorage: "std",
  defaultColor: "yellow-nickel",
  defaultSim: "none",
  priceFrom: 51000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V15 Detect в Казани",
  seoText: "Пылесос Dyson V15 Detect — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 51 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Пылесос Dyson V15 Detect стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Пылесос Dyson V15 Detect проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_V12S_CONFIG: ProductConfig = {
  slug: "dyson-v12s",
  category: "dyson",
  colors: [
    { id: "yellow-nickel", name: "Жёлтый/никель", hex: "#D4C56E", image: "dyson-v12s" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "yellow-nickel", simId: "none", price: 47000 },
  ],
  defaultStorage: "std",
  defaultColor: "yellow-nickel",
  defaultSim: "none",
  priceFrom: 47000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V12s Submarine в Казани",
  seoText: "Пылесос Dyson V12s Submarine — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 47 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Пылесос Dyson V12s Submarine стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Пылесос Dyson V12s Submarine проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_V12_CONFIG: ProductConfig = {
  slug: "dyson-v12",
  category: "dyson",
  colors: [
    { id: "yellow-nickel", name: "Жёлтый/никель", hex: "#D4C56E", image: "dyson-v12" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "yellow-nickel", simId: "none", price: 40000 },
  ],
  defaultStorage: "std",
  defaultColor: "yellow-nickel",
  defaultSim: "none",
  priceFrom: 40000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V12 Detect Slim в Казани",
  seoText: "Пылесос Dyson V12 Detect Slim — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 40 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Пылесос Dyson V12 Detect Slim стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Пылесос Dyson V12 Detect Slim проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_V8_CONFIG: ProductConfig = {
  slug: "dyson-v8",
  category: "dyson",
  colors: [
    { id: "silver-nickel", name: "Серебро/никель", hex: "#C7C7C9", image: "dyson-v8" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "silver-nickel", simId: "none", price: 26500 },
  ],
  defaultStorage: "std",
  defaultColor: "silver-nickel",
  defaultSim: "none",
  priceFrom: 26500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V8 в Казани",
  seoText: "Пылесос Dyson V8 — популярный устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 26 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Пылесос Dyson V8 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Пылесос Dyson V8 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const configs: Record<string, ProductConfig> = {
  "dyson-hd18-pro": DYSON_HD18_PRO_CONFIG,
  "dyson-hd17": DYSON_HD17_CONFIG,
  "dyson-hd16": DYSON_HD16_CONFIG,
  "dyson-airwrap-hs09": DYSON_AIRWRAP_HS09_CONFIG,
  "dyson-airwrap-hs08": DYSON_AIRWRAP_HS08_CONFIG,
  "dyson-airwrap-hs05": DYSON_AIRWRAP_HS05_CONFIG,
  "dyson-airstrait-ht01": DYSON_AIRSTRAIT_HT01_CONFIG,
  "dyson-wash-g1": DYSON_WASH_G1_CONFIG,
  "dyson-gen5-detect": DYSON_GEN5_DETECT_CONFIG,
  "dyson-v16s": DYSON_V16S_CONFIG,
  "dyson-v15s": DYSON_V15S_CONFIG,
  "dyson-v15": DYSON_V15_CONFIG,
  "dyson-v12s": DYSON_V12S_CONFIG,
  "dyson-v12": DYSON_V12_CONFIG,
  "dyson-v8": DYSON_V8_CONFIG,
};

export function getDysonConfig(slug: string): ProductConfig | undefined {
  return configs[slug];
}

export const DYSON_CONFIG_SLUGS = Object.keys(configs);
