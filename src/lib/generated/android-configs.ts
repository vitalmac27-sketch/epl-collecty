/** android-configs.ts — АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [
  { id: "charger-25w", name: "Блок питания 25W USB-C", description: "Быстрая зарядка для Galaxy.", price: 2490, emoji: "🔌" },
  { id: "case-android", name: "Чехол для смартфона", description: "Защита корпуса.", price: 1990, emoji: "📱" },
  { id: "glass-android", name: "Защитное стекло + установка", description: "Полное закрытие экрана.", price: 990, emoji: "🛡️" },
  { id: "headphones", name: "Беспроводные наушники", description: "Galaxy Buds 3 / Marshall.", price: 9990, emoji: "🎧" },
];

const SAMSUNG_GALAXY_S26_ULTRA_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-s26-ultra",
  category: "android",
  colors: [
    { id: "violet", name: "Фиолетовый", hex: "#8B7AAF", image: "samsung-galaxy-s26-ultra" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "samsung-galaxy-s26-ultra" },
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "samsung-galaxy-s26-ultra" },
    { id: "skyblue", name: "Небесно-голубой", hex: "#BDD3E0", image: "samsung-galaxy-s26-ultra" },
  ],
  storage: [
    { id: "12-512", label: "12 ГБ / 512 ГБ", available: true },
    { id: "12-256", label: "12 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "12-256", colorId: "black", simId: "none", price: 88000 },
    { storageId: "12-256", colorId: "skyblue", simId: "none", price: 88000 },
    { storageId: "12-256", colorId: "violet", simId: "none", price: 89000 },
    { storageId: "12-256", colorId: "white", simId: "none", price: 89000 },
    { storageId: "12-512", colorId: "black", simId: "none", price: 96000 },
    { storageId: "12-512", colorId: "skyblue", simId: "none", price: 96500 },
    { storageId: "12-512", colorId: "violet", simId: "none", price: 96500 },
    { storageId: "12-512", colorId: "white", simId: "none", price: 96000 },
  ],
  defaultStorage: "12-512",
  defaultColor: "violet",
  defaultSim: "none",
  priceFrom: 88000,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Snapdragon 8 Elite Gen 5 for Galaxy" },
    { label: "Оперативная память", value: "12 ГБ" },
    { label: "Дисплей", value: "6,9\" QHD+ Dynamic AMOLED 2X, 120 Гц" },
    { label: "Основная камера", value: "200 МП + 50 МП перископ + 50 МП телефото + 50 МП Ultra Wide" },
    { label: "S Pen", value: "Да (с Bluetooth)" },
    { label: "Батарея", value: "5000 мАч" },
    { label: "Зарядка", value: "45 Вт проводная, 15 Вт беспроводная" },
    { label: "Корпус", value: "Титан (Grade 5)" },
    { label: "Galaxy AI", value: "Да (расширенный)" },
    { label: "ОС", value: "Android 16 / One UI 8" },
  ],
  compareTitle: "Samsung Galaxy S25 Ultra",
  compare: [
    { label: "Процессор", current: "SD 8 Elite Gen 5", previous: "SD 8 Elite", better: true },
    { label: "Оперативная память", current: "12 ГБ", previous: "12 ГБ", better: false },
    { label: "Ultra Wide", current: "50 МП", previous: "50 МП", better: false },
    { label: "Основная камера", current: "200 МП", previous: "200 МП", better: false },
    { label: "Galaxy AI", current: "Расширенный", previous: "Базовый", better: true },
    { label: "Зарядка", current: "45 Вт", previous: "45 Вт", better: false },
    { label: "S Pen", current: "Да", previous: "Да", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy S26 Ultra в Казани",
  seoText: "Samsung Galaxy S26 Ultra — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 88 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy S26 Ultra стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy S26 Ultra проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_S26_PLUS_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-s26-plus",
  category: "android",
  colors: [
    { id: "skyblue", name: "Небесно-голубой", hex: "#BDD3E0", image: "samsung-galaxy-s26-plus" },
  ],
  storage: [
    { id: "12-256", label: "12 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "12-256", colorId: "skyblue", simId: "none", price: 73000 },
  ],
  defaultStorage: "12-256",
  defaultColor: "skyblue",
  defaultSim: "none",
  priceFrom: 73000,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Snapdragon 8 Elite Gen 5" },
    { label: "Оперативная память", value: "12 ГБ" },
    { label: "Дисплей", value: "6,7\" QHD+ Dynamic AMOLED, 120 Гц" },
    { label: "Камеры", value: "50 МП + 50 МП Ultra Wide + 12 МП" },
    { label: "Батарея", value: "4900 мАч" },
    { label: "Galaxy AI", value: "Да" },
  ],
  compareTitle: "Samsung Galaxy S25+",
  compare: [
    { label: "Процессор", current: "SD 8 Elite Gen 5", previous: "SD 8 Elite", better: true },
    { label: "Оперативная память", current: "12 ГБ", previous: "12 ГБ", better: false },
    { label: "Дисплей", current: "6,7\" QHD+", previous: "6,7\" QHD+", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy S26+ в Казани",
  seoText: "Samsung Galaxy S26+ — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 73 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy S26+ стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy S26+ проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_S26_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-s26",
  category: "android",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "samsung-galaxy-s26" },
    { id: "violet", name: "Фиолетовый", hex: "#8B7AAF", image: "samsung-galaxy-s26" },
    { id: "skyblue", name: "Небесно-голубой", hex: "#BDD3E0", image: "samsung-galaxy-s26" },
  ],
  storage: [
    { id: "12-256", label: "12 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "12-256", colorId: "black", simId: "none", price: 59500 },
    { storageId: "12-256", colorId: "skyblue", simId: "none", price: 59500 },
    { storageId: "12-256", colorId: "violet", simId: "none", price: 59500 },
  ],
  defaultStorage: "12-256",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 59500,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Snapdragon 8 Elite Gen 5" },
    { label: "Оперативная память", value: "12 ГБ" },
    { label: "Дисплей", value: "6,2\" FHD+ Dynamic AMOLED, 120 Гц" },
    { label: "Камеры", value: "50 МП + 50 МП Ultra Wide + 12 МП" },
    { label: "Galaxy AI", value: "Да" },
  ],
  compareTitle: "Samsung Galaxy S25",
  compare: [
    { label: "Процессор", current: "SD 8 Elite Gen 5", previous: "SD 8 Elite", better: true },
    { label: "Galaxy AI", current: "Расширенный", previous: "Базовый", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy S26 в Казани",
  seoText: "Samsung Galaxy S26 — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 59 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy S26 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy S26 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_S25_ULTRA_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-s25-ultra",
  category: "android",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "samsung-galaxy-s25-ultra" },
    { id: "silverblue", name: "Серебристо-голубой", hex: "#B5C5D8", image: "samsung-galaxy-s25-ultra" },
    { id: "gray", name: "Серый", hex: "#4E4E4F", image: "samsung-galaxy-s25-ultra" },
    { id: "jetblack", name: "Чёрный (Jet Black)", hex: "#0E0E10", image: "samsung-galaxy-s25-ultra" },
    { id: "whitesilver", name: "Бело-серебристый", hex: "#E8E8EA", image: "samsung-galaxy-s25-ultra" },
  ],
  storage: [
    { id: "12-512", label: "12 ГБ / 512 ГБ", available: true },
    { id: "12-256", label: "12 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "12-256", colorId: "black", simId: "none", price: 74500 },
    { storageId: "12-256", colorId: "gray", simId: "none", price: 74500 },
    { storageId: "12-256", colorId: "jetblack", simId: "none", price: 75500 },
    { storageId: "12-256", colorId: "silverblue", simId: "none", price: 75000 },
    { storageId: "12-256", colorId: "whitesilver", simId: "none", price: 75000 },
    { storageId: "12-512", colorId: "black", simId: "none", price: 82000 },
    { storageId: "12-512", colorId: "gray", simId: "none", price: 82000 },
    { storageId: "12-512", colorId: "jetblack", simId: "none", price: 84000 },
    { storageId: "12-512", colorId: "silverblue", simId: "none", price: 82500 },
  ],
  defaultStorage: "12-512",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 74500,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Snapdragon 8 Elite for Galaxy" },
    { label: "Оперативная память", value: "12 ГБ" },
    { label: "Дисплей", value: "6,9\" QHD+ Dynamic AMOLED, 120 Гц" },
    { label: "Камеры", value: "200 МП + 50 МП + 50 МП + 10 МП" },
    { label: "S Pen", value: "Да (без Bluetooth)" },
    { label: "Батарея", value: "5000 мАч" },
    { label: "Корпус", value: "Титан" },
    { label: "Galaxy AI", value: "Да" },
  ],
  compareTitle: "Samsung Galaxy S24 Ultra",
  compare: [
    { label: "Процессор", current: "SD 8 Elite", previous: "SD 8 Gen 3", better: true },
    { label: "S Pen Bluetooth", current: "Нет", previous: "Да", better: false },
    { label: "Ultra Wide", current: "50 МП", previous: "12 МП", better: true },
    { label: "Корпус", current: "Титан", previous: "Титан", better: false },
    { label: "Galaxy AI", current: "Расширенный", previous: "Базовый", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy S25 Ultra в Казани",
  seoText: "Samsung Galaxy S25 Ultra — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 74 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy S25 Ultra стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy S25 Ultra проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_S25_FE_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-s25-fe",
  category: "android",
  colors: [
    { id: "jetblack", name: "Чёрный (Jet Black)", hex: "#0E0E10", image: "samsung-galaxy-s25-fe" },
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "samsung-galaxy-s25-fe" },
    { id: "iceblue", name: "Ледяной голубой", hex: "#C8DFE5", image: "samsung-galaxy-s25-fe" },
    { id: "navy", name: "Тёмно-синий (Navy)", hex: "#23314D", image: "samsung-galaxy-s25-fe" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-256", colorId: "iceblue", simId: "none", price: 46000 },
    { storageId: "8-256", colorId: "jetblack", simId: "none", price: 46000 },
    { storageId: "8-256", colorId: "navy", simId: "none", price: 46000 },
    { storageId: "8-256", colorId: "white", simId: "none", price: 46000 },
  ],
  defaultStorage: "8-256",
  defaultColor: "jetblack",
  defaultSim: "none",
  priceFrom: 46000,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Exynos 2400e" },
    { label: "Оперативная память", value: "8 ГБ" },
    { label: "Дисплей", value: "6,7\" FHD+ Dynamic AMOLED, 120 Гц" },
    { label: "Камеры", value: "50 МП + 12 МП Ultra Wide + 8 МП" },
    { label: "Батарея", value: "4900 мАч" },
    { label: "Galaxy AI", value: "Да" },
  ],
  compareTitle: "Samsung Galaxy S24 FE",
  compare: [
    { label: "Процессор", current: "Exynos 2400e", previous: "Exynos 2400e", better: false },
    { label: "Galaxy AI", current: "Да", previous: "Да", better: false },
    { label: "Память старт", current: "8 ГБ", previous: "8 ГБ", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy S25 FE в Казани",
  seoText: "Samsung Galaxy S25 FE — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 46 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy S25 FE стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy S25 FE проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_S25_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-s25",
  category: "android",
  colors: [
    { id: "mint", name: "Мятный", hex: "#B5E0CC", image: "samsung-galaxy-s25" },
    { id: "silver", name: "Серебристый", hex: "#D8D8D8", image: "samsung-galaxy-s25" },
    { id: "navy", name: "Тёмно-синий (Navy)", hex: "#23314D", image: "samsung-galaxy-s25" },
    { id: "iceblue", name: "Ледяной голубой", hex: "#C8DFE5", image: "samsung-galaxy-s25" },
    { id: "coralred", name: "Коралловый красный", hex: "#E26B5A", image: "samsung-galaxy-s25" },
  ],
  storage: [
    { id: "12-256", label: "12 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "12-256", colorId: "coralred", simId: "none", price: 55000 },
    { storageId: "12-256", colorId: "iceblue", simId: "none", price: 52000 },
    { storageId: "12-256", colorId: "mint", simId: "none", price: 52000 },
    { storageId: "12-256", colorId: "navy", simId: "none", price: 54000 },
    { storageId: "12-256", colorId: "silver", simId: "none", price: 53000 },
  ],
  defaultStorage: "12-256",
  defaultColor: "mint",
  defaultSim: "none",
  priceFrom: 52000,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Snapdragon 8 Elite for Galaxy" },
    { label: "Оперативная память", value: "12 ГБ" },
    { label: "Дисплей", value: "6,2\" FHD+ Dynamic AMOLED, 120 Гц" },
    { label: "Камеры", value: "50 МП + 12 МП Ultra Wide + 10 МП" },
    { label: "Galaxy AI", value: "Да" },
  ],
  compareTitle: "Samsung Galaxy S24",
  compare: [
    { label: "Процессор", current: "SD 8 Elite", previous: "SD 8 Gen 3", better: true },
    { label: "Оперативная память", current: "12 ГБ", previous: "8 ГБ", better: true },
    { label: "Galaxy AI", current: "Да", previous: "Да", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy S25 в Казани",
  seoText: "Samsung Galaxy S25 — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 52 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy S25 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy S25 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_A56_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-a56",
  category: "android",
  colors: [
    { id: "graphite", name: "Графитовый", hex: "#3C3C3E", image: "samsung-galaxy-a56" },
    { id: "lightgray", name: "Светло-серый", hex: "#B0B2B4", image: "samsung-galaxy-a56" },
    { id: "olive", name: "Оливковый", hex: "#7E8265", image: "samsung-galaxy-a56" },
    { id: "pink", name: "Розовый", hex: "#F6D6D4", image: "samsung-galaxy-a56" },
  ],
  storage: [
    { id: "12-256", label: "12 ГБ / 256 ГБ", available: true },
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "12-256", colorId: "graphite", simId: "none", price: 34000 },
    { storageId: "12-256", colorId: "lightgray", simId: "none", price: 34000 },
    { storageId: "12-256", colorId: "olive", simId: "none", price: 34000 },
    { storageId: "12-256", colorId: "pink", simId: "none", price: 34000 },
    { storageId: "8-256", colorId: "graphite", simId: "none", price: 32500 },
    { storageId: "8-256", colorId: "lightgray", simId: "none", price: 32500 },
    { storageId: "8-256", colorId: "olive", simId: "none", price: 32500 },
    { storageId: "8-256", colorId: "pink", simId: "none", price: 32500 },
  ],
  defaultStorage: "12-256",
  defaultColor: "graphite",
  defaultSim: "none",
  priceFrom: 32500,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Exynos 1580" },
    { label: "Оперативная память", value: "8 / 12 ГБ" },
    { label: "Дисплей", value: "6,7\" FHD+ Super AMOLED, 120 Гц" },
    { label: "Камеры", value: "50 МП + 12 МП Ultra Wide + 5 МП" },
    { label: "Батарея", value: "5000 мАч" },
    { label: "Зарядка", value: "45 Вт" },
    { label: "Защита", value: "IP67" },
  ],
  compareTitle: "Samsung Galaxy A55",
  compare: [
    { label: "Процессор", current: "Exynos 1580", previous: "Exynos 1480", better: true },
    { label: "Зарядка", current: "45 Вт", previous: "25 Вт", better: true },
    { label: "Обновления ОС", current: "6 лет", previous: "5 лет", better: true },
    { label: "Защита", current: "IP67", previous: "IP67", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy A56 в Казани",
  seoText: "Samsung Galaxy A56 — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 32 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy A56 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy A56 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_A36_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-a36",
  category: "android",
  colors: [
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "samsung-galaxy-a36" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "samsung-galaxy-a36" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
    { id: "8-128", label: "8 ГБ / 128 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-128", colorId: "black", simId: "none", price: 25000 },
    { storageId: "8-256", colorId: "black", simId: "none", price: 26500 },
    { storageId: "8-256", colorId: "white", simId: "none", price: 28000 },
  ],
  defaultStorage: "8-256",
  defaultColor: "white",
  defaultSim: "none",
  priceFrom: 25000,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Snapdragon 6 Gen 3" },
    { label: "Дисплей", value: "6,7\" FHD+ Super AMOLED, 120 Гц" },
    { label: "Камеры", value: "50 МП + 8 МП + 5 МП" },
    { label: "Батарея", value: "5000 мАч" },
    { label: "Зарядка", value: "45 Вт" },
    { label: "Защита", value: "IP67" },
  ],
  compareTitle: "Samsung Galaxy A35",
  compare: [
    { label: "Процессор", current: "SD 6 Gen 3", previous: "Exynos 1380", better: true },
    { label: "Зарядка", current: "45 Вт", previous: "25 Вт", better: true },
    { label: "Обновления", current: "6 лет", previous: "5 лет", better: true },
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy A36 в Казани",
  seoText: "Samsung Galaxy A36 — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 25 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy A36 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy A36 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_A26_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-a26",
  category: "android",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "samsung-galaxy-a26" },
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "samsung-galaxy-a26" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "8-256", colorId: "black", simId: "none", price: 23000 },
    { storageId: "8-256", colorId: "white", simId: "none", price: 22500 },
  ],
  defaultStorage: "8-256",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 22500,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Exynos 1380" },
    { label: "Дисплей", value: "6,5\" FHD+ Super AMOLED, 120 Гц" },
    { label: "Камеры", value: "50 МП + 8 МП + 2 МП" },
    { label: "Защита", value: "IP67" },
  ],
  compareTitle: "Samsung Galaxy A25",
  compare: [
    { label: "Защита", current: "IP67", previous: "Нет", better: true },
    { label: "Дисплей", current: "6,5\" AMOLED 120 Гц", previous: "6,5\" AMOLED 120 Гц", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy A26 в Казани",
  seoText: "Samsung Galaxy A26 — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 22 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy A26 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy A26 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_A17_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-a17",
  category: "android",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "samsung-galaxy-a17" },
    { id: "gray", name: "Серый", hex: "#4E4E4F", image: "samsung-galaxy-a17" },
    { id: "blue", name: "Синий", hex: "#3B5D78", image: "samsung-galaxy-a17" },
  ],
  storage: [
    { id: "8-256", label: "8 ГБ / 256 ГБ", available: true },
    { id: "6-128", label: "6 ГБ / 128 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "6-128", colorId: "black", simId: "none", price: 18000 },
    { storageId: "8-256", colorId: "black", simId: "none", price: 20000 },
    { storageId: "8-256", colorId: "blue", simId: "none", price: 20000 },
    { storageId: "8-256", colorId: "gray", simId: "none", price: 20000 },
  ],
  defaultStorage: "8-256",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 18000,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Процессор", value: "Exynos 1330" },
    { label: "Дисплей", value: "6,7\" FHD+ Super AMOLED" },
    { label: "Камеры", value: "50 МП + 5 МП + 2 МП" },
    { label: "Батарея", value: "5000 мАч" },
  ],
  compareTitle: "Samsung Galaxy A16",
  compare: [
    { label: "Обновления ОС", current: "6 лет", previous: "6 лет", better: false },
    { label: "Дисплей", current: "6,7\" AMOLED", previous: "6,7\" AMOLED", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy A17 в Казани",
  seoText: "Samsung Galaxy A17 — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 18 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy A17 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy A17 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const SAMSUNG_GALAXY_A07_CONFIG: ProductConfig = {
  slug: "samsung-galaxy-a07",
  category: "android",
  colors: [
    { id: "violet", name: "Фиолетовый", hex: "#8B7AAF", image: "samsung-galaxy-a07" },
  ],
  storage: [
    { id: "4-128", label: "4 ГБ / 128 ГБ", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "4-128", colorId: "violet", simId: "none", price: 14000 },
  ],
  defaultStorage: "4-128",
  defaultColor: "violet",
  defaultSim: "none",
  priceFrom: 14000,
  storageLabel: "Память (RAM/Накопитель)",
  showSim: false,
  specs: [
    { label: "Дисплей", value: "6,7\" PLS LCD" },
    { label: "Оперативная память", value: "4 / 6 ГБ" },
    { label: "Батарея", value: "5000 мАч" },
    { label: "Камера", value: "50 МП" },
  ],
  compareTitle: "Samsung Galaxy A06",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить Samsung Galaxy A07 в Казани",
  seoText: "Samsung Galaxy A07 — популярный смартфон в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 14 000 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему Samsung Galaxy A07 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый Samsung Galaxy A07 проходит проверку перед продажей: тестируем все функции, проверяем серийный номер, активируем и настраиваем устройство прямо в магазине.",
};

const XIAOMI_MI_15T_CONFIG: ProductConfig = {
  slug: "xiaomi-mi-15t",
  category: "android",
  colors: [
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
    { storageId: "12-256", colorId: "gray", simId: "none", price: 42500 },
    { storageId: "12-512", colorId: "black", simId: "none", price: 48000 },
    { storageId: "12-512", colorId: "gray", simId: "none", price: 48000 },
  ],
  defaultStorage: "12-512",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 42500,
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
    { storageId: "12-512", colorId: "black", simId: "none", price: 29500 },
    { storageId: "12-512", colorId: "blue", simId: "none", price: 29500 },
    { storageId: "8-256", colorId: "black", simId: "none", price: 24500 },
    { storageId: "8-256", colorId: "blue", simId: "none", price: 24500 },
  ],
  defaultStorage: "12-512",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 24500,
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
    { storageId: "6-128", colorId: "black", simId: "none", price: 18000 },
    { storageId: "6-128", colorId: "blue", simId: "none", price: 18000 },
    { storageId: "6-128", colorId: "purple", simId: "none", price: 18000 },
    { storageId: "8-256", colorId: "black", simId: "none", price: 20500 },
    { storageId: "8-256", colorId: "blue", simId: "none", price: 20500 },
    { storageId: "8-256", colorId: "purple", simId: "none", price: 20500 },
  ],
  defaultStorage: "8-256",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 18000,
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
    { storageId: "8-256", colorId: "black", simId: "none", price: 19500 },
    { storageId: "8-256", colorId: "blue", simId: "none", price: 19500 },
    { storageId: "8-256", colorId: "purple", simId: "none", price: 19500 },
  ],
  defaultStorage: "8-256",
  defaultColor: "blue",
  defaultSim: "none",
  priceFrom: 19500,
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
    { storageId: "8-128", colorId: "blue", simId: "none", price: 16500 },
  ],
  defaultStorage: "8-128",
  defaultColor: "blue",
  defaultSim: "none",
  priceFrom: 16500,
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
    { storageId: "8-256", colorId: "standard", simId: "none", price: 12500 },
  ],
  defaultStorage: "8-256",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 12500,
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

const configs: Record<string, ProductConfig> = {
  "samsung-galaxy-s26-ultra": SAMSUNG_GALAXY_S26_ULTRA_CONFIG,
  "samsung-galaxy-s26-plus": SAMSUNG_GALAXY_S26_PLUS_CONFIG,
  "samsung-galaxy-s26": SAMSUNG_GALAXY_S26_CONFIG,
  "samsung-galaxy-s25-ultra": SAMSUNG_GALAXY_S25_ULTRA_CONFIG,
  "samsung-galaxy-s25-fe": SAMSUNG_GALAXY_S25_FE_CONFIG,
  "samsung-galaxy-s25": SAMSUNG_GALAXY_S25_CONFIG,
  "samsung-galaxy-a56": SAMSUNG_GALAXY_A56_CONFIG,
  "samsung-galaxy-a36": SAMSUNG_GALAXY_A36_CONFIG,
  "samsung-galaxy-a26": SAMSUNG_GALAXY_A26_CONFIG,
  "samsung-galaxy-a17": SAMSUNG_GALAXY_A17_CONFIG,
  "samsung-galaxy-a07": SAMSUNG_GALAXY_A07_CONFIG,
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
