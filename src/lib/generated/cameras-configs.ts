/** АВТОГЕНЕРАЦИЯ */
import type { ProductConfig, UpsellItem } from "../product-configs";

const UPSELL: UpsellItem[] = [];

const GOPRO_HERO_13_CONFIG: ProductConfig = {
  slug: "gopro-hero-13",
  category: "cameras",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "action-cam" },
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
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Матрица", value: "1/1,9\", фото 27 МП" },
    { label: "Видео", value: "5,3K 60 fps, 4K 120 fps, 10 бит" },
    { label: "Замедление", value: "720p 400 fps, 900p 360 fps" },
    { label: "Стабилизация", value: "HyperSmooth 6.0" },
    { label: "Аккумулятор", value: "Enduro 1900 мАч" },
    { label: "GPS", value: "Да" },
    { label: "Объективы", value: "Сменные HB-линзы (Ultra Wide, Macro, ND)" },
    { label: "Крепление", value: "Магнитное + складные лапки" },
    { label: "Защита", value: "Водонепроницаемая до 10 м" },
    { label: "Вес", value: "159 г" },
  ],
  compareTitle: "GoPro Hero 12",
  compare: [
    { label: "Аккумулятор", current: "1900 мАч", previous: "1720 мАч", better: true },
    { label: "GPS", current: "Да", previous: "Нет", better: true },
    { label: "Сменные HB-линзы", current: "Да", previous: "Нет", better: true },
    { label: "Магнитное крепление", current: "Да", previous: "Нет", better: true },
    { label: "Замедление", current: "до 400 fps", previous: "до 240 fps", better: true },
    { label: "Видео", current: "5,3K 60 / 4K 120", previous: "5,3K 60 / 4K 120", better: false },
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
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "action-cam" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 30000 },
  ],
  defaultStorage: "std",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 30000,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Матрица", value: "1/1,9\", фото 27 МП" },
    { label: "Видео", value: "5,3K 60 fps, 4K 120 fps, HDR, 10 бит" },
    { label: "Стабилизация", value: "HyperSmooth 6.0" },
    { label: "Аккумулятор", value: "Enduro 1720 мАч" },
    { label: "Беспроводной звук", value: "Подключение AirPods и Bluetooth-микрофонов" },
    { label: "Крепление", value: "Складные лапки + резьба 1/4\"" },
    { label: "Экраны", value: "Фронтальный и задний" },
    { label: "Защита", value: "Водонепроницаемая до 10 м" },
    { label: "Вес", value: "154 г" },
  ],
  compareTitle: "GoPro Hero 11",
  compare: [
    { label: "HDR-видео", current: "Да", previous: "Нет", better: true },
    { label: "Время записи", current: "до 2× дольше", previous: "—", better: true },
    { label: "Bluetooth-звук", current: "Да", previous: "Нет", better: true },
    { label: "Резьба 1/4\"", current: "Да", previous: "Нет", better: true },
    { label: "GPS", current: "Нет", previous: "Да", better: false },
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
    { id: "standard", name: "Стандарт", hex: "#888888", image: "cam-360" },
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
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "Камера 360°" },
    { label: "Матрицы", value: "2 × 1/1,28\"" },
    { label: "Видео", value: "8K 30 fps 360°, 4K 60 fps в режиме одного объектива" },
    { label: "Фото", value: "72 МП" },
    { label: "Объективы", value: "Сменные — можно заменить самому" },
    { label: "Ночная съёмка", value: "Режим PureVideo" },
    { label: "Аккумулятор", value: "2400 мАч" },
    { label: "Защита", value: "Водонепроницаемая до 15 м" },
    { label: "Невидимая палка", value: "Палка автоматически стирается из кадра" },
    { label: "Вес", value: "200 г" },
  ],
  compareTitle: "Insta360 X4",
  compare: [
    { label: "Матрицы", current: "1/1,28\"", previous: "1/2\"", better: true },
    { label: "Сменные объективы", current: "Да", previous: "Нет", better: true },
    { label: "Аккумулятор", current: "2400 мАч", previous: "2290 мАч", better: true },
    { label: "Водонепроницаемость", current: "15 м", previous: "10 м", better: true },
    { label: "Видео 360°", current: "8K 30 fps", previous: "8K 30 fps", better: false },
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
    { id: "standard", name: "С лидаром", hex: "#888888", image: "gimbal-phone" },
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
    { label: "Тип", value: "Стабилизатор для смартфона, 3 оси" },
    { label: "Вращение", value: "Бесконечное 360°" },
    { label: "Слежение", value: "ActiveTrack 8.0, Apple DockKit" },
    { label: "Телефоны", value: "170–300 г, толщина 6,9–10 мм" },
    { label: "Удлинитель", value: "Встроенный, 215 мм + штатив" },
    { label: "Аккумулятор", value: "3350 мАч, до 10 ч, зарядка USB-C" },
    { label: "Модуль", value: "Поддержка многофункционального модуля с подсветкой" },
    { label: "Вес", value: "≈ 370 г" },
  ],
  compareTitle: "",
  compare: [
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
    { id: "standard", name: "Стандарт", hex: "#888888", image: "gimbal-phone" },
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
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "Стабилизатор для смартфона, 3 оси" },
    { label: "Пульт FrameTap", value: "Съёмный сенсорный пульт до 10 м с изображением с телефона" },
    { label: "Слежение", value: "ActiveTrack 8.0 + модуль 2: люди, питомцы, машины, в т.ч. в сторонних приложениях" },
    { label: "Вращение", value: "Бесконечное 360°" },
    { label: "Телефоны", value: "170–300 г, толщина 6,9–11 мм" },
    { label: "Удлинитель", value: "Встроенный, 215 мм + штатив" },
    { label: "Аккумулятор", value: "3350 мАч, до 10 ч, заряжается во время работы" },
    { label: "Вес", value: "≈ 386 г" },
  ],
  compareTitle: "Osmo Mobile 8",
  compare: [
    { label: "Пульт FrameTap", current: "Да", previous: "Нет", better: true },
    { label: "Модуль слежения 2", current: "В комплекте", previous: "Старый модуль, отдельно", better: true },
    { label: "Толщина телефона", current: "до 11 мм", previous: "до 10 мм", better: true },
    { label: "Скорость поворота", current: "90°/с", previous: "120°/с", better: false },
    { label: "Время работы", current: "до 10 ч", previous: "до 10 ч", better: false },
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
    { id: "creator-combo", name: "Creator Combo", hex: "#888888", image: "gimbal-pocket" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "creator-combo", simId: "none", price: 44500 },
  ],
  defaultStorage: "std",
  defaultColor: "creator-combo",
  defaultSim: "none",
  priceFrom: 44500,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Матрица", value: "1\" CMOS" },
    { label: "Видео", value: "4K 120 fps, 10 бит D-Log M / HLG" },
    { label: "Экран", value: "2\" поворотный сенсорный" },
    { label: "Стабилизация", value: "3-осевой механический подвес" },
    { label: "Слежение", value: "ActiveTrack, фазовый автофокус" },
    { label: "Звук", value: "Стереомикрофоны, совместим с DJI Mic" },
    { label: "Вес", value: "179 г" },
  ],
  compareTitle: "",
  compare: [
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
    { id: "bundle-essential-combo", name: "Bundle-essential-combo", hex: "#888888", image: "gimbal-pocket" },
    { id: "bundle-standard-combo", name: "Bundle-standard-combo", hex: "#888888", image: "gimbal-pocket" },
    { id: "standard", name: "Стандарт", hex: "#888888", image: "gimbal-pocket" },
    { id: "creator-combo", name: "Creator Combo", hex: "#888888", image: "gimbal-pocket" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "bundle-essential-combo", simId: "none", price: 41000 },
    { storageId: "std", colorId: "bundle-standard-combo", simId: "none", price: 41000 },
    { storageId: "std", colorId: "standard", simId: "none", price: 0 },
    { storageId: "std", colorId: "creator-combo", simId: "none", price: 51000 },
  ],
  defaultStorage: "std",
  defaultColor: "bundle-essential-combo",
  defaultSim: "none",
  priceFrom: 41000,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Матрица", value: "1\" CMOS, 14 ступеней динамического диапазона" },
    { label: "Видео", value: "4K до 240 fps, 10 бит D-Log" },
    { label: "Экран", value: "2\" сенсорный, 1000 нит" },
    { label: "Стабилизация", value: "3-осевой механический подвес" },
    { label: "Слежение", value: "ActiveTrack 7.0, приоритет выбранного человека, жесты" },
    { label: "Звук", value: "OsmoAudio, 4 канала, пространственный звук" },
    { label: "Память", value: "107 ГБ встроенной" },
    { label: "Зарядка", value: "80% за 18 минут" },
    { label: "Вес", value: "190,5 г" },
  ],
  compareTitle: "Osmo Pocket 3",
  compare: [
    { label: "Макс. частота кадров 4K", current: "240 fps", previous: "120 fps", better: true },
    { label: "Встроенная память", current: "107 ГБ", previous: "Нет", better: true },
    { label: "Звук", current: "4 канала", previous: "2 канала", better: true },
    { label: "Передача файлов", current: "Wi-Fi 6, USB 3.1", previous: "Wi-Fi 5, USB 2.0", better: true },
    { label: "Тайм-код", current: "Да", previous: "Нет", better: true },
    { label: "Вес", current: "190,5 г", previous: "179 г", better: false },
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
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "compact-camera" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "black", simId: "none", price: 106500 },
  ],
  defaultStorage: "std",
  defaultColor: "black",
  defaultSim: "none",
  priceFrom: 106500,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Матрица", value: "1\" stacked CMOS, 20,1 МП" },
    { label: "Объектив", value: "24–100 мм, ƒ/1.8–2.8, зум 4,2×" },
    { label: "Видео", value: "4K 30 fps без кропа, вертикальное видео" },
    { label: "Экран", value: "3\" сенсорный, откидывается на 180° для селфи" },
    { label: "Стриминг", value: "Прямой эфир на YouTube по Wi-Fi" },
    { label: "Звук", value: "Вход для микрофона 3,5 мм" },
    { label: "Вес", value: "≈ 304 г" },
  ],
  compareTitle: "",
  compare: [
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
    { id: "standard", name: "Стандарт", hex: "#888888", image: "compact-camera" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "standard", simId: "none", price: 6500 },
  ],
  defaultStorage: "std",
  defaultColor: "standard",
  defaultSim: "none",
  priceFrom: 6500,
  storageLabel: "Комплектация",
  showSim: false,
  specs: [
    { label: "Тип", value: "Мини-камера-брелок" },
    { label: "Матрица", value: "1/4\" CMOS, фото 1440 × 1080" },
    { label: "Объектив", value: "35 мм, ƒ/2.4" },
    { label: "Видео", value: "30 fps" },
    { label: "Экран", value: "ЖК-экран + оптический видоискатель" },
    { label: "Карта памяти", value: "microSD до 128 ГБ (не в комплекте)" },
    { label: "Эффекты", value: "7 фильтров, 4 рамки" },
    { label: "Упаковка", value: "Blind box — один из 7 дизайнов" },
    { label: "Вес", value: "30 г" },
  ],
  compareTitle: "",
  compare: [
  ],
  upsell: UPSELL,
  seoH2: "Купить мини-камера Kodak Charmera в Казани",
  seoText: "мини-камера Kodak Charmera в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Цена от 5 500 ₽. Оригинал с гарантией 1 год, рассрочка 0% на 10 месяцев, бесплатная доставка в день заказа.",
  seoH2Why: "Почему мини-камера Kodak Charmera стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем, проверяем комплектацию и оригинальность.",
  seoH2Sim: "Как выбрать?",
  seoTextSim: "Поможем подобрать вариант под ваши задачи — напишите нам в Telegram.",
};

const DJI_OSMO_POCKET_4P_CONFIG: ProductConfig = {
  slug: "dji-osmo-pocket-4p",
  category: "cameras",
  colors: [
    { id: "vlog-combo", name: "Vlog Combo", hex: "#2B2D31", image: "gimbal-pocket" },
    { id: "standard-combo", name: "Standard Combo", hex: "#6B6E73", image: "gimbal-pocket" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "vlog-combo", simId: "none", price: 61000 },
    { storageId: "std", colorId: "standard-combo", simId: "none", price: 53000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard-combo",
  defaultSim: "none",
  priceFrom: 53000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Камеры", value: "Две: широкая 1\" stacked CMOS + теле 60 мм ƒ/1.8 (1/1,28\")" },
    { label: "Зум", value: "Фото до 9×, видео до 12×" },
    { label: "Цвет", value: "D-Log 2, до 17 ступеней динамического диапазона" },
    { label: "Затвор", value: "до 1/16000 с" },
    { label: "Экран", value: "2\" сенсорный, 1000 нит" },
    { label: "Аккумулятор", value: "1545 мАч" },
    { label: "Стабилизация", value: "3-осевой механический подвес" },
  ],
  compareTitle: "Osmo Pocket 4",
  compare: [
    { label: "Теле-камера 60 мм", current: "Да", previous: "Нет", better: true },
    { label: "Зум видео", current: "до 12×", previous: "до 4×", better: true },
    { label: "Зум фото", current: "до 9×", previous: "до 2×", better: true },
    { label: "D-Log 2 (17 ступеней)", current: "Да", previous: "Нет", better: true },
    { label: "Экран", current: "2\", 1000 нит", previous: "2\", 1000 нит", better: false },
    { label: "Аккумулятор", current: "1545 мАч", previous: "1545 мАч", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить DJI Osmo Pocket 4P в Казани",
  seoText: "DJI Osmo Pocket 4P в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему DJI Osmo Pocket 4P стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const DJI_OSMO_ACTION_6_CONFIG: ProductConfig = {
  slug: "dji-osmo-action-6",
  category: "cameras",
  colors: [
    { id: "adventure-combo-black", name: "Adventure-combo-black", hex: "#888888", image: "action-cam" },
    { id: "standard-combo-black", name: "Standard Combo", hex: "#1C1C1E", image: "action-cam" },
  ],
  storage: [
    { id: "std", label: "Стандарт", available: true },
  ],
  sim: [
    { id: "none", label: "Стандарт", description: "Стандартная комплектация." },
  ],
  prices: [
    { storageId: "std", colorId: "adventure-combo-black", simId: "none", price: 43000 },
    { storageId: "std", colorId: "standard-combo-black", simId: "none", price: 36000 },
  ],
  defaultStorage: "std",
  defaultColor: "standard-combo-black",
  defaultSim: "none",
  priceFrom: 36000,
  storageLabel: "Вариант",
  showSim: false,
  specs: [
    { label: "Матрица", value: "1/1,1\" CMOS" },
    { label: "Диафрагма", value: "Переменная ƒ/2.0–4.0, угол 155°" },
    { label: "Видео", value: "до 8K 30 fps, 4K 120 fps" },
    { label: "Замедление", value: "1080p 240 fps" },
    { label: "Фото", value: "≈ 38 МП" },
    { label: "Стабилизация", value: "RockSteady 3.0+, HorizonSteady" },
    { label: "Аккумулятор", value: "1950 мАч, до 240 минут" },
    { label: "Защита", value: "До 20 м без бокса, до 60 м в боксе" },
    { label: "Экраны", value: "Фронтальный 1,46\" и задний 2,5\"" },
    { label: "Холод", value: "Работает до −20 °C" },
    { label: "Вес", value: "149 г" },
  ],
  compareTitle: "Osmo Action 5 Pro",
  compare: [
    { label: "Матрица", current: "1/1,1\"", previous: "1/1,3\"", better: true },
    { label: "Диафрагма", current: "Переменная ƒ/2.0–4.0", previous: "ƒ/2.8", better: true },
    { label: "Макс. разрешение", current: "8K", previous: "4K", better: true },
    { label: "Аккумулятор", current: "1950 мАч", previous: "1950 мАч", better: false },
    { label: "Водонепроницаемость", current: "20 м", previous: "20 м", better: false },
  ],
  upsell: UPSELL,
  seoH2: "Купить DJI Osmo Action 6 в Казани",
  seoText: "DJI Osmo Action 6 в магазине ЭПЛ-КОЛЛЕКЦИЯ в Казани. Оригинал с гарантией 1 год, доставка в день заказа.",
  seoH2Why: "Почему DJI Osmo Action 6 стоит купить у нас?",
  seoTextWhy: "В ЭПЛ-КОЛЛЕКЦИЯ каждый товар проходит проверку перед продажей: тестируем все функции, проверяем комплектацию и оригинальность.",
};

const configs: Record<string, ProductConfig> = {
  "dji-osmo-action-6": DJI_OSMO_ACTION_6_CONFIG,
  "dji-osmo-pocket-4p": DJI_OSMO_POCKET_4P_CONFIG,
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
