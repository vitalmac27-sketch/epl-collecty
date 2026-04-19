/**
 * iphone-configs.ts — детальные данные для страниц моделей iPhone:
 * конфигурации (цвет / память / SIM), цены, характеристики, сравнение, upsell
 */

// ─── Типы ────────────────────────────────────────────────────────────────────

export interface ColorOption {
  id: string;
  name: string;       // «Чёрный Титан»
  hex: string;        // CSS-цвет для кружка
  image: string;      // имя файла в /public/assets/ без расширения
}

export interface StorageOption {
  gb: number;
  label: string;      // «256 ГБ»
  available: boolean;
}

export interface SimOption {
  id: string;
  label: string;      // «Nano-SIM + eSIM»
  description: string;
}

export interface ConfigPrice {
  storageGb: number;
  simId: string;
  condition: "new" | "used";
  price: number;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface CompareRow {
  label: string;
  current: string;
  previous: string;
  better?: boolean;   // true — подсветить как улучшение
}

export interface UpsellItem {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
}

export interface IPhoneConfig {
  slug: string;
  colors: ColorOption[];
  storage: StorageOption[];
  sim: SimOption[];
  prices: ConfigPrice[];
  /** Дефолтная конфигурация при открытии страницы */
  defaultStorage: number;
  defaultColor: string;
  defaultSim: string;
  specs: SpecRow[];
  compareTitle: string;       // название предыдущей модели для сравнения
  compare: CompareRow[];
  upsell: UpsellItem[];
  /** SEO-тексты для блоков на странице */
  seoH2: string;
  seoText: string;
  seoH2Why: string;
  seoTextWhy: string;
  seoH2Sim: string;
  seoTextSim: string;
}

// ─── SIM варианты (общие для всех iPhone) ────────────────────────────────────

export const SIM_OPTIONS: SimOption[] = [
  {
    id: "nano-esim",
    label: "Nano-SIM + eSIM",
    description: "Европейская/РФ версия. Одна физическая SIM + одна встроенная eSIM.",
  },
  {
    id: "dual-nano",
    label: "2 Nano-SIM (Гонконг)",
    description: "Две физические SIM-карты. Популярен в Казани — удобно для двух номеров.",
  },
  {
    id: "dual-esim",
    label: "Dual eSIM (США)",
    description: "Только eSIM, без физической SIM. Нужна поддержка eSIM у оператора.",
  },
];

// ─── Upsell товары (общие для iPhone) ────────────────────────────────────────

const IPHONE_UPSELL: UpsellItem[] = [
  {
    id: "charger-20w",
    name: "Блок питания Apple 20W USB-C",
    description: "В коробке iPhone только кабель — рекомендуем взять оригинальный адаптер.",
    price: 2490,
    emoji: "🔌",
  },
  {
    id: "case-silicone",
    name: "Чехол Silicone Case с MagSafe",
    description: "Защита корпуса с первого дня. Плотная посадка, приятный материал.",
    price: 3490,
    emoji: "📱",
  },
  {
    id: "glass",
    name: "Защитное стекло + установка",
    description: "Наклеим за 5 минут прямо в магазине. Полное закрытие экрана.",
    price: 990,
    emoji: "🛡️",
  },
  {
    id: "cardholder",
    name: "Картхолдер MagSafe",
    description: "Держатель для карт на MagSafe. Кошелёк и телефон всегда вместе.",
    price: 1290,
    emoji: "💳",
  },
];

// ─── iPhone 17 Pro Max ────────────────────────────────────────────────────────

export const IPHONE_17_PRO_MAX_CONFIG: IPhoneConfig = {
  slug: "iphone-17-pro-max",

  colors: [
    { id: "black-titanium",   name: "Чёрный Титан",      hex: "#3D3731", image: "iphone-17-pro-max" },
    { id: "white-titanium",   name: "Белый Титан",       hex: "#E8E4DE", image: "iphone-17-pro-max" },
    { id: "natural-titanium", name: "Натуральный Титан", hex: "#B5A99A", image: "iphone-17-pro-max" },
    { id: "desert-titanium",  name: "Пустынный Титан",   hex: "#C8A97E", image: "iphone-17-pro-max" },
  ],

  storage: [
    { gb: 256,  label: "256 ГБ",  available: true },
    { gb: 512,  label: "512 ГБ",  available: true },
    { gb: 1024, label: "1 ТБ",    available: true },
  ],

  sim: SIM_OPTIONS,

  prices: [
    // 256 ГБ
    { storageGb: 256,  simId: "nano-esim",  condition: "new",  price: 101000 },
    { storageGb: 256,  simId: "dual-nano",  condition: "new",  price: 103000 },
    { storageGb: 256,  simId: "dual-esim",  condition: "new",  price: 104000 },
    { storageGb: 256,  simId: "nano-esim",  condition: "used", price: 87000  },
    { storageGb: 256,  simId: "dual-nano",  condition: "used", price: 89000  },
    // 512 ГБ
    { storageGb: 512,  simId: "nano-esim",  condition: "new",  price: 115000 },
    { storageGb: 512,  simId: "dual-nano",  condition: "new",  price: 117000 },
    { storageGb: 512,  simId: "dual-esim",  condition: "new",  price: 118000 },
    { storageGb: 512,  simId: "nano-esim",  condition: "used", price: 99000  },
    { storageGb: 512,  simId: "dual-nano",  condition: "used", price: 101000 },
    // 1 ТБ
    { storageGb: 1024, simId: "nano-esim",  condition: "new",  price: 131000 },
    { storageGb: 1024, simId: "dual-nano",  condition: "new",  price: 133000 },
    { storageGb: 1024, simId: "dual-esim",  condition: "new",  price: 134000 },
    { storageGb: 1024, simId: "nano-esim",  condition: "used", price: 113000 },
    { storageGb: 1024, simId: "dual-nano",  condition: "used", price: 115000 },
  ],

  defaultStorage: 256,
  defaultColor: "black-titanium",
  defaultSim: "nano-esim",

  specs: [
    { label: "Процессор",        value: "Apple A19 Pro (3 нм)" },
    { label: "Дисплей",          value: "6,9\" Super Retina XDR OLED, 120 Гц ProMotion" },
    { label: "Основная камера",  value: "48 МП (главная) + 48 МП (ультраширокая) + 12 МП (5× зум)" },
    { label: "Фронтальная",      value: "12 МП, автофокус" },
    { label: "Батарея",          value: "до 33 часов видео" },
    { label: "Корпус",           value: "Титановая рамка, стекло Ceramic Shield" },
    { label: "Разъём",           value: "USB-C (USB 3, до 20 Гбит/с)" },
    { label: "Защита",           value: "IP68 (6 м, 30 мин)" },
    { label: "Action Button",    value: "Да" },
    { label: "Camera Control",   value: "Да" },
    { label: "MagSafe",          value: "До 25 Вт" },
    { label: "5G",               value: "Да" },
  ],

  compareTitle: "iPhone 16 Pro Max",
  compare: [
    { label: "Процессор",      current: "A19 Pro (3 нм)",     previous: "A18 Pro (3 нм)",       better: true  },
    { label: "Дисплей",        current: "6,9\" 120 Гц OLED",  previous: "6,9\" 120 Гц OLED",    better: false },
    { label: "Зум",            current: "5× оптический",      previous: "5× оптический",         better: false },
    { label: "MagSafe",        current: "до 25 Вт",           previous: "до 25 Вт",              better: false },
    { label: "Батарея",        current: "до 33 ч видео",      previous: "до 33 ч видео",         better: false },
    { label: "Camera Control", current: "Да",                  previous: "Да",                    better: false },
    { label: "USB-C скорость", current: "USB 3 (20 Гбит/с)", previous: "USB 3 (20 Гбит/с)",    better: false },
    { label: "Защита",         current: "IP68",                previous: "IP68",                  better: false },
    { label: "Цена от",        current: "от 101 000 ₽",       previous: "от 96 800 ₽",           better: false },
  ],

  upsell: IPHONE_UPSELL,

  seoH2: "Купить iPhone 17 Pro Max в Казани",
  seoText: `iPhone 17 Pro Max — флагман Apple 2025 года с чипом A19 Pro на 3-нанометровом техпроцессе.
Титановый корпус, ProMotion-дисплей 120 Гц с диагональю 6,9 дюйма и тройная камера с 5-кратным оптическим зумом делают его лучшим смартфоном на рынке.
В магазине ЭПЛ-КОЛЛЕКЦИЯ вы можете купить iPhone 17 Pro Max в Казани по цене от 101 000 ₽ с гарантией 1 год и бесплатной доставкой в день заказа.
Рассрочка 0% на 10 месяцев — оформление онлайн за 5 минут, одобрение в день обращения.`,

  seoH2Why: "Почему стоит купить iPhone 17 Pro Max?",
  seoTextWhy: `A19 Pro — самый мощный чип в истории iPhone. Камера 48 МП с записью видео 4K 120fps в формате Apple ProRes.
Новый материал корпуса — титан 5-й серии, ещё прочнее и легче предыдущих версий.
Camera Control — физическая кнопка для управления камерой: съёмка одним касанием без разблокировки экрана.
MagSafe до 25 Вт — быстрая беспроводная зарядка без кабеля.`,

  seoH2Sim: "Какую версию SIM выбрать для iPhone 17 Pro Max?",
  seoTextSim: `В Казани чаще всего берут версию на 2 Nano-SIM (Гонконг) — удобно иметь два номера на одном телефоне.
Европейская версия (Nano-SIM + eSIM) подходит, если у вашего оператора есть eSIM.
Dual eSIM (США) — только виртуальные SIM, физического слота нет: подходит тем, чей оператор поддерживает eSIM.`,
};

// ─── iPhone 17 Pro ────────────────────────────────────────────────────────────

export const IPHONE_17_PRO_CONFIG: IPhoneConfig = {
  slug: "iphone-17-pro",

  colors: [
    { id: "black-titanium",   name: "Чёрный Титан",      hex: "#3D3731", image: "iphone-17-pro" },
    { id: "white-titanium",   name: "Белый Титан",       hex: "#E8E4DE", image: "iphone-17-pro" },
    { id: "natural-titanium", name: "Натуральный Титан", hex: "#B5A99A", image: "iphone-17-pro" },
    { id: "desert-titanium",  name: "Пустынный Титан",   hex: "#C8A97E", image: "iphone-17-pro" },
  ],

  storage: [
    { gb: 128,  label: "128 ГБ", available: true },
    { gb: 256,  label: "256 ГБ", available: true },
    { gb: 512,  label: "512 ГБ", available: true },
    { gb: 1024, label: "1 ТБ",   available: true },
  ],

  sim: SIM_OPTIONS,

  prices: [
    // 128 ГБ
    { storageGb: 128,  simId: "nano-esim",  condition: "new",  price: 88700  },
    { storageGb: 128,  simId: "dual-nano",  condition: "new",  price: 90700  },
    { storageGb: 128,  simId: "dual-esim",  condition: "new",  price: 91700  },
    { storageGb: 128,  simId: "nano-esim",  condition: "used", price: 76000  },
    { storageGb: 128,  simId: "dual-nano",  condition: "used", price: 78000  },
    // 256 ГБ
    { storageGb: 256,  simId: "nano-esim",  condition: "new",  price: 99000  },
    { storageGb: 256,  simId: "dual-nano",  condition: "new",  price: 101000 },
    { storageGb: 256,  simId: "dual-esim",  condition: "new",  price: 102000 },
    { storageGb: 256,  simId: "nano-esim",  condition: "used", price: 85000  },
    { storageGb: 256,  simId: "dual-nano",  condition: "used", price: 87000  },
    // 512 ГБ
    { storageGb: 512,  simId: "nano-esim",  condition: "new",  price: 113000 },
    { storageGb: 512,  simId: "dual-nano",  condition: "new",  price: 115000 },
    { storageGb: 512,  simId: "dual-esim",  condition: "new",  price: 116000 },
    { storageGb: 512,  simId: "nano-esim",  condition: "used", price: 97000  },
    { storageGb: 512,  simId: "dual-nano",  condition: "used", price: 99000  },
    // 1 ТБ
    { storageGb: 1024, simId: "nano-esim",  condition: "new",  price: 129000 },
    { storageGb: 1024, simId: "dual-nano",  condition: "new",  price: 131000 },
    { storageGb: 1024, simId: "dual-esim",  condition: "new",  price: 132000 },
    { storageGb: 1024, simId: "nano-esim",  condition: "used", price: 111000 },
    { storageGb: 1024, simId: "dual-nano",  condition: "used", price: 113000 },
  ],

  defaultStorage: 128,
  defaultColor: "black-titanium",
  defaultSim: "nano-esim",

  specs: [
    { label: "Процессор",        value: "Apple A19 Pro (3 нм)" },
    { label: "Дисплей",          value: "6,3\" Super Retina XDR OLED, 120 Гц ProMotion" },
    { label: "Основная камера",  value: "48 МП (главная) + 48 МП (ультраширокая) + 12 МП (5× зум)" },
    { label: "Фронтальная",      value: "12 МП, автофокус" },
    { label: "Батарея",          value: "до 27 часов видео" },
    { label: "Корпус",           value: "Титановая рамка, стекло Ceramic Shield" },
    { label: "Разъём",           value: "USB-C (USB 3, до 20 Гбит/с)" },
    { label: "Защита",           value: "IP68 (6 м, 30 мин)" },
    { label: "Action Button",    value: "Да" },
    { label: "Camera Control",   value: "Да" },
    { label: "MagSafe",          value: "До 25 Вт" },
    { label: "5G",               value: "Да" },
  ],

  compareTitle: "iPhone 16 Pro",
  compare: [
    { label: "Процессор",      current: "A19 Pro (3 нм)",     previous: "A18 Pro (3 нм)",       better: true  },
    { label: "Дисплей",        current: "6,3\" 120 Гц OLED",  previous: "6,3\" 120 Гц OLED",    better: false },
    { label: "Зум",            current: "5× оптический",      previous: "5× оптический",         better: false },
    { label: "MagSafe",        current: "до 25 Вт",           previous: "до 25 Вт",              better: false },
    { label: "Батарея",        current: "до 27 ч видео",      previous: "до 27 ч видео",         better: false },
    { label: "Camera Control", current: "Да",                  previous: "Да",                    better: false },
    { label: "USB-C скорость", current: "USB 3 (20 Гбит/с)", previous: "USB 3 (20 Гбит/с)",    better: false },
    { label: "Защита",         current: "IP68",                previous: "IP68",                  better: false },
    { label: "Цена от",        current: "от 88 700 ₽",        previous: "от 80 700 ₽",           better: false },
  ],

  upsell: IPHONE_UPSELL,

  seoH2: "Купить iPhone 17 Pro в Казани",
  seoText: `iPhone 17 Pro — компактный Pro-флагман Apple 2025 года. Тот же чип A19 Pro, та же тройная камера с 5× зумом, что и в Pro Max — но в удобном компактном корпусе 6,3 дюйма.
Купить iPhone 17 Pro в Казани можно в ЭПЛ-КОЛЛЕКЦИЯ от 88 700 ₽. Гарантия 1 год, рассрочка 0%, доставка в день заказа по всей Казани.`,

  seoH2Why: "Чем iPhone 17 Pro отличается от Pro Max?",
  seoTextWhy: `iPhone 17 Pro и Pro Max получили одинаковый чип A19 Pro и идентичные камеры — разница только в размере и ёмкости батареи.
Pro — 6,3 дюйма, до 27 часов видео. Pro Max — 6,9 дюйма, до 33 часов.
Если вам важна компактность — Pro лучший выбор. Если нужна максимальная автономность — берите Pro Max.`,

  seoH2Sim: "Какую версию SIM выбрать для iPhone 17 Pro?",
  seoTextSim: `Для большинства покупателей в Казани лучший выбор — версия на 2 Nano-SIM (Гонконг): два физических слота для разных номеров.
Nano-SIM + eSIM (Европа/РФ) подходит, если вы используете eSIM от вашего оператора (Билайн, МТС, Мегафон, Теле2 поддерживают eSIM).
Dual eSIM (США) — только для тех, кто планирует использовать исключительно eSIM без физической карты.`,
};

// ─── Реестр конфигов ─────────────────────────────────────────────────────────

const configs: Record<string, IPhoneConfig> = {
  "iphone-17-pro-max": IPHONE_17_PRO_MAX_CONFIG,
  "iphone-17-pro":     IPHONE_17_PRO_CONFIG,
};

/** Получить конфиг по slug модели */
export function getIPhoneConfig(slug: string): IPhoneConfig | undefined {
  return configs[slug];
}

/** Найти цену для конкретной конфигурации */
export function getConfigPrice(
  config: IPhoneConfig,
  storageGb: number,
  simId: string,
  condition: "new" | "used" = "new"
): number | undefined {
  const entry = config.prices.find(
    (p) => p.storageGb === storageGb && p.simId === simId && p.condition === condition
  );
  return entry?.price;
}
