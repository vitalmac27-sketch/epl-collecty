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
    { storageId: "std", colorId: "vinca-blue", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "vinca-blue",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "Supersonic r Professional (HD18)" },
    { label: "Назначение", value: "Профессиональная версия для салонов" },
    { label: "Мощность", value: "1700 Вт" },
    { label: "Мотор", value: "Цифровой мотор Dyson" },
    { label: "Режимы", value: "3 скорости, 4 режима температуры" },
    { label: "Ионизация", value: "Да" },
    { label: "Насадки", value: "Насадка для мощного потока, насадка для непослушных волос, широкозубая расчёска" },
    { label: "Кабель", value: "2,8 м — профессиональная длина" },
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Фен Dyson HD18 Pro в Казани",
  seoText: "Фен Dyson HD18 Pro — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Фен Dyson HD18 Pro стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Фен Dyson HD18 Pro проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_HD17_CONFIG: ProductConfig = {
  slug: "dyson-hd17",
  category: "dyson",
  colors: [
    { id: "jusper-plum", name: "Jasper Plum", hex: "#6E3B4E", image: "dyson-hd17" },
    { id: "ceramic-pink", name: "Керамический розовый", hex: "#E8B5A8", image: "dyson-hd17" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "ceramic-pink", simId: "none", price: 37000 },
    { storageId: "std", colorId: "jusper-plum", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "ceramic-pink",
  defaultSim: "none",
  priceFrom: 37000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "Supersonic r (HD17)" },
    { label: "Мощность", value: "1700 Вт" },
    { label: "Мотор", value: "Dyson Hyperdymium, до 110 000 об/мин" },
    { label: "Нагрев", value: "10 нагревательных элементов по изгибу корпуса" },
    { label: "Скорости", value: "3" },
    { label: "Насадки", value: "Концентратор, насадка для мощного потока, разглаживающая, для непослушных волос, деликатная — 5 шт." },
    { label: "Память насадок", value: "RFID: каждая насадка запоминает последние настройки" },
    { label: "Размер", value: "285 × 108 × 55 мм" },
    { label: "Вес корпуса", value: "325 г" },
  ],
  compareTitle: "Dyson Supersonic Nural (HD16)",
  compare: [
    { label: "Мощность", current: "1700 Вт", previous: "1600 Вт", better: true },
    { label: "Компактность", current: "на 30% меньше, на 20% легче", previous: "классический корпус", better: true },
    { label: "Память настроек насадок", current: "RFID в каждой насадке", previous: "Запоминает насадки", better: false },
    { label: "Защита кожи головы (датчик расстояния)", current: "Нет", previous: "Да", better: false },
    { label: "Насадок в комплекте", current: "5", previous: "5", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Фен Dyson HD17 в Казани",
  seoText: "Фен Dyson HD17 — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Фен Dyson HD17 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Фен Dyson HD17 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_HD16_CONFIG: ProductConfig = {
  slug: "dyson-hd16",
  category: "dyson",
  colors: [
    { id: "ceramic-pink", name: "Ceramic Pink", hex: "#E9C8C3", image: "dyson-hd16" },
    { id: "prussian-blue", name: "Прусский синий", hex: "#1F3354", image: "dyson-hd16" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "ceramic-pink", simId: "none", price: 33500 },
    { storageId: "std", colorId: "prussian-blue", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "ceramic-pink",
  defaultSim: "none",
  priceFrom: 33500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "Supersonic Nural (HD16)" },
    { label: "Мощность", value: "1600 Вт" },
    { label: "Мотор", value: "Dyson Hyperdymium" },
    { label: "Режимы", value: "4 температуры, 3 скорости, холодный обдув" },
    { label: "Scalp Protect", value: "Датчик расстояния снижает температуру у кожи головы" },
    { label: "Pause Detect", value: "Отключает нагрев, когда фен положили" },
    { label: "Насадки", value: "Для непослушных волос, диффузор Wave+Curl, концентратор, широкозубая расчёска, деликатная — 5 шт." },
    { label: "Вес", value: "660 г" },
  ],
  compareTitle: "Dyson Supersonic (HD08)",
  compare: [
    { label: "Защита кожи головы (датчик расстояния)", current: "Да", previous: "Нет", better: true },
    { label: "Pause Detect", current: "Да", previous: "Нет", better: true },
    { label: "Запоминание насадок", current: "Да", previous: "Нет", better: true },
    { label: "Мощность", current: "1600 Вт", previous: "1600 Вт", better: false },
    { label: "Режимы", current: "4 температуры, 3 скорости", previous: "4 температуры, 3 скорости", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Фен Dyson HD16 в Казани",
  seoText: "Фен Dyson HD16 — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Фен Dyson HD16 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Фен Dyson HD16 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_AIRWRAP_HS09_CONFIG: ProductConfig = {
  slug: "dyson-airwrap-hs09",
  category: "dyson",
  colors: [
    { id: "jusper-plum-re", name: "Jasper Plum", hex: "#6E3B4E", image: "dyson-airwrap-hs09" },
    { id: "ceramic-pink-re", name: "Ceramic Pink", hex: "#E9C8C3", image: "dyson-airwrap-hs09" },
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
    { storageId: "std", colorId: "jusper-plum-re", simId: "none", price: 0 },
    { storageId: "std", colorId: "ceramic-pink-re", simId: "none", price: 0 },
    { storageId: "std", colorId: "amber-silk", simId: "none", price: 0 },
    { storageId: "std", colorId: "apricot-topaz", simId: "none", price: 48000 },
    { storageId: "std", colorId: "ceramic-pink", simId: "none", price: 48000 },
    { storageId: "std", colorId: "jasper-plum", simId: "none", price: 48000 },
    { storageId: "std", colorId: "red-velvet", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "apricot-topaz",
  defaultSim: "none",
  priceFrom: 48000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "Airwrap Co-anda2x (HS09)" },
    { label: "Мотор", value: "Dyson Hyperdymium 2, до 150 000 об/мин" },
    { label: "Давление воздуха", value: "7 кПа — в 2 раза выше прошлого поколения" },
    { label: "Поток воздуха", value: "13,3 л/с" },
    { label: "Режимы", value: "4 температуры, 3 скорости" },
    { label: "Насадки", value: "Выпрямитель 2x, цилиндр 40 мм, конический цилиндр, брашинг против спутывания, большой круглый брашинг, быстрый фен — 6 шт." },
    { label: "Умные функции", value: "RFID-распознавание насадок, приложение MyDyson" },
    { label: "Кабель", value: "2 м" },
    { label: "Кейс", value: "В комплекте" },
  ],
  compareTitle: "Dyson Airwrap i.d. (HS08)",
  compare: [
    { label: "Мотор", current: "150 000 об/мин", previous: "110 000 об/мин", better: true },
    { label: "Давление воздуха", current: "×2", previous: "×1", better: true },
    { label: "Насадка-выпрямитель", current: "Да", previous: "Нет", better: true },
    { label: "Насадок", current: "6", previous: "6", better: false },
    { label: "Приложение MyDyson", current: "Да", previous: "Да", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Стайлер Dyson Airwrap HS09 Coanda 2x в Казани",
  seoText: "Стайлер Dyson Airwrap HS09 Coanda 2x — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Стайлер Dyson Airwrap HS09 Coanda 2x стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Стайлер Dyson Airwrap HS09 Coanda 2x проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const DYSON_AIRWRAP_HS08_CONFIG: ProductConfig = {
  slug: "dyson-airwrap-hs08",
  category: "dyson",
  colors: [
    { id: "apricot-topaz", name: "Apricot / Topaz", hex: "#E7A96B", image: "dyson-airwrap-hs08" },
    { id: "ceramic-patina", name: "Ceramic Patina", hex: "#9DB8A8", image: "dyson-airwrap-hs08" },
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
    { storageId: "std", colorId: "apricot-topaz", simId: "none", price: 42000 },
    { storageId: "std", colorId: "ceramic-patina", simId: "none", price: 0 },
    { storageId: "std", colorId: "amber-silk", simId: "none", price: 0 },
    { storageId: "std", colorId: "ceramic-pink", simId: "none", price: 40500 },
    { storageId: "std", colorId: "prussian-blue", simId: "none", price: 0 },
    { storageId: "std", colorId: "vinca-blue", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "ceramic-pink",
  defaultSim: "none",
  priceFrom: 40500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "Airwrap i.d. (HS08)" },
    { label: "Мощность", value: "1300 Вт" },
    { label: "Мотор", value: "110 000 об/мин" },
    { label: "Поток воздуха", value: "13,5 л/с" },
    { label: "Режимы", value: "3 температуры, 3 скорости" },
    { label: "i.d. curl", value: "Bluetooth + MyDyson: автоматическая последовательность завивки под ваш тип волос" },
    { label: "Насадки", value: "Цилиндр 40 мм, конический цилиндр, мягкий брашинг, большой круглый брашинг, быстрый фен, фен с насадкой для непослушных волос — 6 шт." },
    { label: "Кабель", value: "2,7 м" },
    { label: "Вес", value: "595 г" },
    { label: "Кейс", value: "В комплекте" },
  ],
  compareTitle: "Dyson Airwrap Complete Long (HS05)",
  compare: [
    { label: "Bluetooth и i.d. curl", current: "Да", previous: "Нет", better: true },
    { label: "Конический цилиндр", current: "Да", previous: "Нет", better: true },
    { label: "Мощность", current: "1300 Вт", previous: "1300 Вт", better: false },
    { label: "Мотор", current: "110 000 об/мин", previous: "110 000 об/мин", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Стайлер Dyson Airwrap HS08 в Казани",
  seoText: "Стайлер Dyson Airwrap HS08 — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "nickel-cooper", simId: "none", price: 37000 },
  ],
  defaultStorage: "std",
  defaultColor: "nickel-cooper",
  defaultSim: "none",
  priceFrom: 37000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "Airwrap Complete Long (HS05)" },
    { label: "Мощность", value: "1300 Вт" },
    { label: "Мотор", value: "Dyson V9, 110 000 об/мин" },
    { label: "Режимы", value: "3 температуры, 3 скорости, холодный обдув" },
    { label: "Эффект Коанда", value: "Волосы сами накручиваются на цилиндр потоком воздуха" },
    { label: "Насадки", value: "2 удлинённых цилиндра 40 мм, фен-выпрямитель Coanda, жёсткий и мягкий брашинги, круглый брашинг для объёма — 6 шт." },
    { label: "Для длинных волос", value: "Да — удлинённые цилиндры" },
    { label: "Кейс", value: "В комплекте" },
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Стайлер Dyson Airwrap HS05 в Казани",
  seoText: "Стайлер Dyson Airwrap HS05 — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "amber-silk", simId: "none", price: 0 },
    { storageId: "std", colorId: "apricot-topaz", simId: "none", price: 38500 },
    { storageId: "std", colorId: "ceramic-pink", simId: "none", price: 34500 },
    { storageId: "std", colorId: "nickel-cooper", simId: "none", price: 34500 },
    { storageId: "std", colorId: "prussian-blue", simId: "none", price: 34000 },
    { storageId: "std", colorId: "strawberry-bronze", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "prussian-blue",
  defaultSim: "none",
  priceFrom: 34000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "Airstrait (HT01)" },
    { label: "Принцип", value: "Выпрямляет потоком воздуха — без горячих пластин" },
    { label: "Мощность", value: "1600 Вт" },
    { label: "Режимы", value: "Влажный и сухой; 3 температуры, 3 скорости" },
    { label: "Поток воздуха", value: "11,9 л/с" },
    { label: "Экран", value: "Цветной LCD с настройками" },
    { label: "Ионизация", value: "Да" },
    { label: "Экономия времени", value: "Сушит и выпрямляет одновременно — до 8 минут быстрее" },
    { label: "Вес", value: "≈ 1 кг" },
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Выпрямитель Dyson Airstrait HT01 в Казани",
  seoText: "Выпрямитель Dyson Airstrait HT01 — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "black", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Тип", value: "Беспроводной моющий пылесос для твёрдых полов" },
    { label: "Валики", value: "2 моторизованных микрофибровых валика, вращаются навстречу" },
    { label: "Бак чистой воды", value: "1 л" },
    { label: "Бак грязной воды", value: "0,8 л" },
    { label: "Время работы", value: "до 35 минут, до 290 м²" },
    { label: "Режимы увлажнения", value: "3 уровня + MAX" },
    { label: "Самоочистка", value: "Цикл 140 секунд на зарядке" },
    { label: "Фильтр", value: "Не нужен — отделяет волосы и мусор в лоток" },
    { label: "Вес", value: "4,9 кг" },
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson WashG1 в Казани",
  seoText: "Пылесос Dyson WashG1 — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "blue-cooper", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "blue-cooper",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Мощность всасывания", value: "262 АВт" },
    { label: "Мотор", value: "Dyson Hyperdymium, 135 000 об/мин" },
    { label: "Время работы", value: "до 70 минут" },
    { label: "Контейнер", value: "0,77 л" },
    { label: "Фильтрация", value: "HEPA, герметичная система" },
    { label: "Датчик пыли", value: "Пьезодатчик + LCD-экран со статистикой" },
    { label: "Подсветка пыли", value: "Лазер на насадке Fluffy Optic" },
    { label: "Управление", value: "Кнопка вместо курка" },
    { label: "Вес", value: "3,5 кг" },
  ],
  compareTitle: "Dyson V15 Detect",
  compare: [
    { label: "Мощность всасывания", current: "262 АВт", previous: "230 АВт", better: true },
    { label: "Время работы", current: "до 70 мин", previous: "до 60 мин", better: true },
    { label: "Мотор", current: "135 000 об/мин", previous: "125 000 об/мин", better: true },
    { label: "Управление", current: "Кнопка", previous: "Курок", better: true },
    { label: "Контейнер", current: "0,77 л", previous: "0,76 л", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson Gen5 Detect в Казани",
  seoText: "Пылесос Dyson Gen5 Detect — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "mat-black-cooper", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "mat-black-cooper",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "V16 Piston Animal Submarine" },
    { label: "Мощность всасывания", value: "315 АВт (мотор Hyperdymium 900 Вт)" },
    { label: "Время работы", value: "до 70 минут, сменные батареи" },
    { label: "Контейнер", value: "1,3 л с прессованием мусора CleanCompaktor" },
    { label: "Влажная уборка", value: "Насадка Submarine 2.0" },
    { label: "Насадки", value: "All Floors Cones Sense, Submarine 2.0, Hair Screw 2.0, комби, щелевая" },
    { label: "Датчик пыли", value: "Да, LCD-экран" },
    { label: "Фильтрация", value: "99,99% частиц до 0,1 мкм" },
    { label: "Зарядка", value: "3,5 ч" },
    { label: "Вес", value: "3,4 кг" },
  ],
  compareTitle: "Dyson V15s Detect Submarine",
  compare: [
    { label: "Мощность всасывания", current: "315 АВт", previous: "240 АВт", better: true },
    { label: "Время работы", current: "до 70 мин", previous: "до 60 мин", better: true },
    { label: "Контейнер", current: "1,3 л", previous: "0,76 л", better: true },
    { label: "Прессование мусора", current: "Да", previous: "Нет", better: true },
    { label: "Влажная насадка", current: "Submarine 2.0", previous: "Submarine", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V16s Submarine в Казани",
  seoText: "Пылесос Dyson V16s Submarine — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "yellow-nickel", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "yellow-nickel",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "V15s Detect Submarine" },
    { label: "Мощность всасывания", value: "240 АВт" },
    { label: "Время работы", value: "до 60 минут" },
    { label: "Контейнер", value: "0,76 л" },
    { label: "Влажная уборка", value: "Насадка Submarine с баком для воды" },
    { label: "Подсветка пыли", value: "Лазер на насадке Fluffy Optic" },
    { label: "Датчик пыли", value: "Пьезодатчик + LCD-экран" },
    { label: "Фильтрация", value: "HEPA" },
    { label: "Вес", value: "≈ 3,1 кг" },
  ],
  compareTitle: "Dyson V15 Detect",
  compare: [
    { label: "Влажная уборка", current: "Насадка Submarine", previous: "Нет", better: true },
    { label: "Мощность всасывания", current: "240 АВт", previous: "230 АВт", better: true },
    { label: "Время работы", current: "до 60 мин", previous: "до 60 мин", better: false },
    { label: "Контейнер", current: "0,76 л", previous: "0,76 л", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V15s Submarine в Казани",
  seoText: "Пылесос Dyson V15s Submarine — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "yellow-nickel", simId: "none", price: 59500 },
  ],
  defaultStorage: "std",
  defaultColor: "yellow-nickel",
  defaultSim: "none",
  priceFrom: 59500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "V15 Detect" },
    { label: "Мощность всасывания", value: "230 АВт" },
    { label: "Мотор", value: "125 000 об/мин" },
    { label: "Время работы", value: "до 60 минут" },
    { label: "Контейнер", value: "0,76 л" },
    { label: "Подсветка пыли", value: "Лазер на насадке Fluffy Optic" },
    { label: "Датчик пыли", value: "Пьезодатчик + LCD-экран" },
    { label: "Фильтрация", value: "HEPA" },
    { label: "Вес", value: "3,1 кг" },
  ],
  compareTitle: "Dyson V12 Detect Slim",
  compare: [
    { label: "Мощность всасывания", current: "230 АВт", previous: "150 АВт", better: true },
    { label: "Контейнер", current: "0,76 л", previous: "0,35 л", better: true },
    { label: "Время работы", current: "до 60 мин", previous: "до 60 мин", better: false },
    { label: "Вес", current: "3,1 кг", previous: "2,2 кг", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V15 Detect в Казани",
  seoText: "Пылесос Dyson V15 Detect — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "yellow-nickel", simId: "none", price: 47500 },
  ],
  defaultStorage: "std",
  defaultColor: "yellow-nickel",
  defaultSim: "none",
  priceFrom: 47500,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "V12s Detect Slim Submarine" },
    { label: "Мощность всасывания", value: "150 АВт" },
    { label: "Время работы", value: "до 60 минут" },
    { label: "Контейнер", value: "0,35 л" },
    { label: "Влажная уборка", value: "Насадка Submarine с баком для воды" },
    { label: "Подсветка пыли", value: "Лазер на насадке Fluffy Optic" },
    { label: "Датчик пыли", value: "Пьезодатчик + LCD-экран" },
    { label: "Фильтрация", value: "HEPA" },
    { label: "Вес", value: "≈ 2,2 кг (без влажной насадки)" },
  ],
  compareTitle: "Dyson V12 Detect Slim",
  compare: [
    { label: "Влажная уборка", current: "Насадка Submarine", previous: "Нет", better: true },
    { label: "Мощность всасывания", current: "150 АВт", previous: "150 АВт", better: false },
    { label: "Время работы", current: "до 60 мин", previous: "до 60 мин", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V12s Submarine в Казани",
  seoText: "Пылесос Dyson V12s Submarine — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "yellow-nickel", simId: "none", price: 47000 },
  ],
  defaultStorage: "std",
  defaultColor: "yellow-nickel",
  defaultSim: "none",
  priceFrom: 47000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "V12 Detect Slim" },
    { label: "Мощность всасывания", value: "150 АВт" },
    { label: "Время работы", value: "до 60 минут" },
    { label: "Контейнер", value: "0,35 л" },
    { label: "Подсветка пыли", value: "Лазер на насадке Fluffy Optic" },
    { label: "Датчик пыли", value: "Пьезодатчик + LCD-экран" },
    { label: "Фильтрация", value: "HEPA" },
    { label: "Вес", value: "2,2 кг" },
  ],
  compareTitle: "Dyson V8",
  compare: [
    { label: "Мощность всасывания", current: "150 АВт", previous: "115 АВт", better: true },
    { label: "Время работы", current: "до 60 мин", previous: "до 40 мин", better: true },
    { label: "Лазер и датчик пыли", current: "Да", previous: "Нет", better: true },
    { label: "Вес", current: "2,2 кг", previous: "2,6 кг", better: true },
    { label: "Контейнер", current: "0,35 л", previous: "0,54 л", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V12 Detect Slim в Казани",
  seoText: "Пылесос Dyson V12 Detect Slim — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
    { storageId: "std", colorId: "silver-nickel", simId: "none", price: 0 },
  ],
  defaultStorage: "std",
  defaultColor: "silver-nickel",
  defaultSim: "none",
  priceFrom: 0,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Модель", value: "V8" },
    { label: "Мощность всасывания", value: "115 АВт" },
    { label: "Время работы", value: "до 40 минут" },
    { label: "Контейнер", value: "0,54 л" },
    { label: "Фильтрация", value: "Вся система, HEPA" },
    { label: "Режим", value: "Можно использовать как ручной пылесос" },
    { label: "Вес", value: "2,6 кг" },
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Пылесос Dyson V8 в Казани",
  seoText: "Пылесос Dyson V8 — популярное устройство Dyson в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, рассрочка до 36 месяцев, бесплатная доставка в день заказа.",
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
