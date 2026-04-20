/**
 * iphone-configs.ts — АВТОГЕНЕРИРОВАННЫЙ файл из прайса apple_collecty.xlsx
 * НЕ редактируйте вручную — изменения вносите в Excel и запускайте scripts/parse-prices.py
 */

export interface ColorOption { id: string; name: string; hex: string; image: string; }
export interface StorageOption { gb: number; label: string; available: boolean; }
export interface SimOption { id: string; label: string; description: string; }
export interface ConfigPrice { storageGb: number; colorId: string; simId: string; price: number; }
export interface SpecRow { label: string; value: string; }
export interface CompareRow { label: string; current: string; previous: string; better?: boolean; }
export interface UpsellItem { id: string; name: string; description: string; price: number; emoji: string; }

export interface IPhoneConfig {
  slug: string;
  colors: ColorOption[];
  storage: StorageOption[];
  sim: SimOption[];
  prices: ConfigPrice[];
  defaultStorage: number;
  defaultColor: string;
  defaultSim: string;
  priceFrom: number;
  specs: SpecRow[];
  compareTitle: string;
  compare: CompareRow[];
  upsell: UpsellItem[];
  seoH2: string; seoText: string;
  seoH2Why: string; seoTextWhy: string;
  seoH2Sim: string; seoTextSim: string;
}

const IPHONE_UPSELL: UpsellItem[] = [
  { id: "charger-20w", name: "Блок питания Apple 20W USB-C", description: "В коробке iPhone только кабель — рекомендуем оригинальный адаптер.", price: 2490, emoji: "🔌" },
  { id: "case-silicone", name: "Чехол Silicone Case с MagSafe", description: "Защита корпуса с первого дня. Плотная посадка, приятный материал.", price: 3490, emoji: "📱" },
  { id: "glass", name: "Защитное стекло + установка", description: "Наклеим за 5 минут прямо в магазине. Полное закрытие экрана.", price: 990, emoji: "🛡️" },
  { id: "cardholder", name: "Картхолдер MagSafe", description: "Держатель для карт на MagSafe. Кошелёк и телефон всегда вместе.", price: 1290, emoji: "💳" },
];

const IPHONE_17_PRO_MAX_CONFIG: IPhoneConfig = {
  slug: "iphone-17-pro-max",
  colors: [
    { id: "orange", name: "Оранжевый (Cosmic Orange)", hex: "#D55A2B", image: "iphone-17-pro-max" },
    { id: "blue", name: "Синий (Deep Blue)", hex: "#3B5D78", image: "iphone-17-pro-max" },
    { id: "silver", name: "Серебристый", hex: "#D8D8D8", image: "iphone-17-pro-max" },
  ],
  storage: [
    { gb: 256, label: "256 ГБ", available: true },
    { gb: 512, label: "512 ГБ", available: true },
    { gb: 1024, label: "1 ТБ", available: true },
    { gb: 2048, label: "2 ТБ", available: true },
  ],
  sim: [
    { id: "esim", label: "eSIM (США)", description: "Только eSIM, без физической SIM. Нужна поддержка eSIM у оператора." },
    { id: "sim-esim", label: "Nano-SIM + eSIM", description: "Европейская/РФ версия. Одна физическая SIM + одна eSIM." },
  ],
  prices: [
    { storageGb: 256, colorId: "blue", simId: "esim", price: 109700 },
    { storageGb: 256, colorId: "blue", simId: "sim-esim", price: 116700 },
    { storageGb: 256, colorId: "orange", simId: "esim", price: 108900 },
    { storageGb: 256, colorId: "orange", simId: "sim-esim", price: 116700 },
    { storageGb: 256, colorId: "silver", simId: "esim", price: 111500 },
    { storageGb: 256, colorId: "silver", simId: "sim-esim", price: 119000 },
    { storageGb: 512, colorId: "blue", simId: "esim", price: 127800 },
    { storageGb: 512, colorId: "blue", simId: "sim-esim", price: 135300 },
    { storageGb: 512, colorId: "orange", simId: "esim", price: 122000 },
    { storageGb: 512, colorId: "orange", simId: "sim-esim", price: 132000 },
    { storageGb: 512, colorId: "silver", simId: "esim", price: 134000 },
    { storageGb: 512, colorId: "silver", simId: "sim-esim", price: 137500 },
    { storageGb: 1024, colorId: "blue", simId: "esim", price: 134900 },
    { storageGb: 1024, colorId: "blue", simId: "sim-esim", price: 151000 },
    { storageGb: 1024, colorId: "orange", simId: "esim", price: 130500 },
    { storageGb: 1024, colorId: "orange", simId: "sim-esim", price: 148500 },
    { storageGb: 1024, colorId: "silver", simId: "esim", price: 142000 },
    { storageGb: 1024, colorId: "silver", simId: "sim-esim", price: 151500 },
    { storageGb: 2048, colorId: "blue", simId: "esim", price: 151500 },
    { storageGb: 2048, colorId: "blue", simId: "sim-esim", price: 185800 },
    { storageGb: 2048, colorId: "orange", simId: "esim", price: 149500 },
    { storageGb: 2048, colorId: "orange", simId: "sim-esim", price: 183000 },
    { storageGb: 2048, colorId: "silver", simId: "esim", price: 159500 },
    { storageGb: 2048, colorId: "silver", simId: "sim-esim", price: 183500 },
  ],
  defaultStorage: 256,
  defaultColor: "orange",
  defaultSim: "esim",
  priceFrom: 108900,
  specs: [
    { label: "Процессор", value: "Apple A19 Pro (3 нм)" },
    { label: "Дисплей", value: "6,9\" Super Retina XDR OLED, 120 Гц ProMotion" },
    { label: "Основная камера", value: "48 МП + 48 МП ультраширокая + 12 МП (5× зум)" },
    { label: "Фронтальная", value: "12 МП, автофокус" },
    { label: "Батарея", value: "до 33 часов видео" },
    { label: "Корпус", value: "Титан, Ceramic Shield" },
    { label: "Разъём", value: "USB-C (USB 3, до 20 Гбит/с)" },
    { label: "Защита", value: "IP68 (6 м, 30 мин)" },
    { label: "Camera Control", value: "Да" },
    { label: "MagSafe", value: "До 25 Вт" },
    { label: "5G", value: "Да" },
  ],
  compareTitle: "iPhone 16 Pro Max",
  compare: [
    { label: "Процессор", current: "A19 Pro (3 нм)", previous: "A18 Pro (3 нм)", better: true },
    { label: "Дисплей", current: "6,9\" 120 Гц OLED", previous: "6,9\" 120 Гц OLED", better: false },
    { label: "Зум", current: "5× оптический", previous: "5× оптический", better: false },
    { label: "MagSafe", current: "до 25 Вт", previous: "до 25 Вт", better: false },
    { label: "Батарея", current: "до 33 ч видео", previous: "до 33 ч видео", better: false },
    { label: "Camera Control", current: "Да", previous: "Да", better: false },
  ],
  upsell: IPHONE_UPSELL,
  seoH2: "Купить iPhone 17 Pro Max в Казани",
  seoText: "iPhone 17 Pro Max — один из самых востребованных смартфонов Apple. В магазине ЭПЛ-КОЛЛЕКЦИЯ вы можете купить iPhone 17 Pro Max в Казани по цене от 108 900 ₽ с гарантией 1 год и бесплатной доставкой в день заказа.\\nРассрочка 0% на 10 месяцев — оформление онлайн за 5 минут  одобрение в день обращения.",
  seoH2Why: "Почему стоит выбрать iPhone 17 Pro Max?",
  seoTextWhy: "iPhone 17 Pro Max сочетает топовые технологии Apple, надёжность и лучшее соотношение цены и качества в своём классе. В ЭПЛ-КОЛЛЕКЦИЯ каждый смартфон проходит полную диагностику на 30+ пунктов перед продажей.",
  seoH2Sim: "Какую версию iPhone 17 Pro Max выбрать?",
  seoTextSim: "В Казани чаще всего берут версию Nano-SIM + eSIM (Европа/РФ) — работает со всеми операторами. Версия eSIM (США) подходит только при поддержке eSIM у вашего оператора. Уточните наличие у менеджера в Telegram.",
};

const IPHONE_17_PRO_CONFIG: IPhoneConfig = {
  slug: "iphone-17-pro",
  colors: [
    { id: "blue", name: "Синий (Deep Blue)", hex: "#3B5D78", image: "iphone-17-pro" },
    { id: "orange", name: "Оранжевый (Cosmic Orange)", hex: "#D55A2B", image: "iphone-17-pro" },
    { id: "silver", name: "Серебристый", hex: "#D8D8D8", image: "iphone-17-pro" },
  ],
  storage: [
    { gb: 256, label: "256 ГБ", available: true },
    { gb: 512, label: "512 ГБ", available: true },
    { gb: 1024, label: "1 ТБ", available: true },
  ],
  sim: [
    { id: "esim", label: "eSIM (США)", description: "Только eSIM, без физической SIM. Нужна поддержка eSIM у оператора." },
    { id: "sim-esim", label: "Nano-SIM + eSIM", description: "Европейская/РФ версия. Одна физическая SIM + одна eSIM." },
  ],
  prices: [
    { storageGb: 256, colorId: "blue", simId: "esim", price: 101300 },
    { storageGb: 256, colorId: "blue", simId: "sim-esim", price: 107500 },
    { storageGb: 256, colorId: "orange", simId: "esim", price: 101400 },
    { storageGb: 256, colorId: "orange", simId: "sim-esim", price: 105900 },
    { storageGb: 256, colorId: "silver", simId: "esim", price: 101800 },
    { storageGb: 256, colorId: "silver", simId: "sim-esim", price: 106900 },
    { storageGb: 512, colorId: "blue", simId: "esim", price: 114000 },
    { storageGb: 512, colorId: "blue", simId: "sim-esim", price: 127500 },
    { storageGb: 512, colorId: "orange", simId: "esim", price: 111500 },
    { storageGb: 512, colorId: "orange", simId: "sim-esim", price: 121400 },
    { storageGb: 512, colorId: "silver", simId: "esim", price: 116000 },
    { storageGb: 512, colorId: "silver", simId: "sim-esim", price: 126500 },
    { storageGb: 1024, colorId: "blue", simId: "esim", price: 128500 },
    { storageGb: 1024, colorId: "blue", simId: "sim-esim", price: 139700 },
    { storageGb: 1024, colorId: "orange", simId: "esim", price: 128000 },
    { storageGb: 1024, colorId: "orange", simId: "sim-esim", price: 137500 },
    { storageGb: 1024, colorId: "silver", simId: "esim", price: 128500 },
    { storageGb: 1024, colorId: "silver", simId: "sim-esim", price: 138900 },
  ],
  defaultStorage: 256,
  defaultColor: "blue",
  defaultSim: "esim",
  priceFrom: 101300,
  specs: [
    { label: "Процессор", value: "Apple A19 Pro (3 нм)" },
    { label: "Дисплей", value: "6,3\" Super Retina XDR OLED, 120 Гц ProMotion" },
    { label: "Основная камера", value: "48 МП + 48 МП ультраширокая + 12 МП (5× зум)" },
    { label: "Фронтальная", value: "12 МП, автофокус" },
    { label: "Батарея", value: "до 27 часов видео" },
    { label: "Корпус", value: "Титан, Ceramic Shield" },
    { label: "Разъём", value: "USB-C (USB 3, до 20 Гбит/с)" },
    { label: "Защита", value: "IP68 (6 м, 30 мин)" },
    { label: "Camera Control", value: "Да" },
    { label: "MagSafe", value: "До 25 Вт" },
    { label: "5G", value: "Да" },
  ],
  compareTitle: "iPhone 16 Pro",
  compare: [
    { label: "Процессор", current: "A19 Pro (3 нм)", previous: "A18 Pro (3 нм)", better: true },
    { label: "Дисплей", current: "6,3\" 120 Гц OLED", previous: "6,3\" 120 Гц OLED", better: false },
    { label: "Зум", current: "5× оптический", previous: "5× оптический", better: false },
    { label: "MagSafe", current: "до 25 Вт", previous: "до 25 Вт", better: false },
    { label: "Батарея", current: "до 27 ч видео", previous: "до 27 ч видео", better: false },
    { label: "Camera Control", current: "Да", previous: "Да", better: false },
  ],
  upsell: IPHONE_UPSELL,
  seoH2: "Купить iPhone 17 Pro в Казани",
  seoText: "iPhone 17 Pro — один из самых востребованных смартфонов Apple. В магазине ЭПЛ-КОЛЛЕКЦИЯ вы можете купить iPhone 17 Pro в Казани по цене от 101 300 ₽ с гарантией 1 год и бесплатной доставкой в день заказа.\\nРассрочка 0% на 10 месяцев — оформление онлайн за 5 минут  одобрение в день обращения.",
  seoH2Why: "Почему стоит выбрать iPhone 17 Pro?",
  seoTextWhy: "iPhone 17 Pro сочетает топовые технологии Apple, надёжность и лучшее соотношение цены и качества в своём классе. В ЭПЛ-КОЛЛЕКЦИЯ каждый смартфон проходит полную диагностику на 30+ пунктов перед продажей.",
  seoH2Sim: "Какую версию iPhone 17 Pro выбрать?",
  seoTextSim: "В Казани чаще всего берут версию Nano-SIM + eSIM (Европа/РФ) — работает со всеми операторами. Версия eSIM (США) подходит только при поддержке eSIM у вашего оператора. Уточните наличие у менеджера в Telegram.",
};

const IPHONE_17_CONFIG: IPhoneConfig = {
  slug: "iphone-17",
  colors: [
    { id: "blue", name: "Синий (Deep Blue)", hex: "#3B5D78", image: "iphone-17" },
    { id: "sage", name: "Шалфей (Sage)", hex: "#A8B19E", image: "iphone-17" },
    { id: "lavender", name: "Лавандовый", hex: "#C9B8D4", image: "iphone-17" },
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "iphone-17" },
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "iphone-17" },
    { id: "lavander", name: "Лавандовый", hex: "#C9B8D4", image: "iphone-17" },
  ],
  storage: [
    { gb: 256, label: "256 ГБ", available: true },
    { gb: 512, label: "512 ГБ", available: true },
  ],
  sim: [
    { id: "esim", label: "eSIM (США)", description: "Только eSIM, без физической SIM. Нужна поддержка eSIM у оператора." },
    { id: "sim-esim", label: "Nano-SIM + eSIM", description: "Европейская/РФ версия. Одна физическая SIM + одна eSIM." },
  ],
  prices: [
    { storageGb: 256, colorId: "black", simId: "esim", price: 67500 },
    { storageGb: 256, colorId: "black", simId: "sim-esim", price: 69000 },
    { storageGb: 256, colorId: "blue", simId: "esim", price: 66000 },
    { storageGb: 256, colorId: "blue", simId: "sim-esim", price: 68200 },
    { storageGb: 256, colorId: "lavender", simId: "esim", price: 67000 },
    { storageGb: 256, colorId: "lavender", simId: "sim-esim", price: 69200 },
    { storageGb: 256, colorId: "sage", simId: "esim", price: 67000 },
    { storageGb: 256, colorId: "sage", simId: "sim-esim", price: 69200 },
    { storageGb: 256, colorId: "white", simId: "esim", price: 67900 },
    { storageGb: 256, colorId: "white", simId: "sim-esim", price: 68900 },
    { storageGb: 512, colorId: "black", simId: "esim", price: 80700 },
    { storageGb: 512, colorId: "black", simId: "sim-esim", price: 89500 },
    { storageGb: 512, colorId: "blue", simId: "esim", price: 83500 },
    { storageGb: 512, colorId: "blue", simId: "sim-esim", price: 89000 },
    { storageGb: 512, colorId: "lavander", simId: "esim", price: 90000 },
    { storageGb: 512, colorId: "lavender", simId: "sim-esim", price: 93000 },
    { storageGb: 512, colorId: "sage", simId: "esim", price: 84800 },
    { storageGb: 512, colorId: "sage", simId: "sim-esim", price: 90000 },
    { storageGb: 512, colorId: "white", simId: "esim", price: 83000 },
    { storageGb: 512, colorId: "white", simId: "sim-esim", price: 91500 },
  ],
  defaultStorage: 256,
  defaultColor: "blue",
  defaultSim: "esim",
  priceFrom: 66000,
  specs: [
    { label: "Процессор", value: "Apple A19" },
    { label: "Дисплей", value: "6,1\" Super Retina XDR OLED, 120 Гц ProMotion" },
    { label: "Основная камера", value: "48 МП + 12 МП ультраширокая" },
    { label: "Фронтальная", value: "12 МП" },
    { label: "Батарея", value: "до 24 часов видео" },
    { label: "Корпус", value: "Алюминий, Ceramic Shield" },
    { label: "Разъём", value: "USB-C" },
    { label: "Защита", value: "IP68" },
    { label: "Camera Control", value: "Да" },
    { label: "MagSafe", value: "До 25 Вт" },
    { label: "5G", value: "Да" },
  ],
  compareTitle: "iPhone 16",
  compare: [
    { label: "Процессор", current: "A19", previous: "A18", better: true },
    { label: "Дисплей", current: "6,1\" 120 Гц OLED", previous: "6,1\" 60 Гц OLED", better: true },
    { label: "Камера", current: "48 МП + 12 МП", previous: "48 МП + 12 МП", better: false },
    { label: "Camera Control", current: "Да", previous: "Да", better: false },
  ],
  upsell: IPHONE_UPSELL,
  seoH2: "Купить iPhone 17 в Казани",
  seoText: "iPhone 17 — один из самых востребованных смартфонов Apple. В магазине ЭПЛ-КОЛЛЕКЦИЯ вы можете купить iPhone 17 в Казани по цене от 66 000 ₽ с гарантией 1 год и бесплатной доставкой в день заказа.\\nРассрочка 0% на 10 месяцев — оформление онлайн за 5 минут  одобрение в день обращения.",
  seoH2Why: "Почему стоит выбрать iPhone 17?",
  seoTextWhy: "iPhone 17 сочетает топовые технологии Apple, надёжность и лучшее соотношение цены и качества в своём классе. В ЭПЛ-КОЛЛЕКЦИЯ каждый смартфон проходит полную диагностику на 30+ пунктов перед продажей.",
  seoH2Sim: "Какую версию iPhone 17 выбрать?",
  seoTextSim: "В Казани чаще всего берут версию Nano-SIM + eSIM (Европа/РФ) — работает со всеми операторами. Версия eSIM (США) подходит только при поддержке eSIM у вашего оператора. Уточните наличие у менеджера в Telegram.",
};

const IPHONE_16_PRO_MAX_CONFIG: IPhoneConfig = {
  slug: "iphone-16-pro-max",
  colors: [
    { id: "desert", name: "Пустынный Титан", hex: "#C8A97E", image: "iphone-16-pro-max" },
  ],
  storage: [
    { gb: 256, label: "256 ГБ", available: true },
  ],
  sim: [
    { id: "sim-esim", label: "Nano-SIM + eSIM", description: "Европейская/РФ версия. Одна физическая SIM + одна eSIM." },
  ],
  prices: [
    { storageGb: 256, colorId: "desert", simId: "sim-esim", price: 94000 },
  ],
  defaultStorage: 256,
  defaultColor: "desert",
  defaultSim: "sim-esim",
  priceFrom: 94000,
  specs: [
    { label: "Процессор", value: "Apple A18 Pro (3 нм)" },
    { label: "Дисплей", value: "6,9\" Super Retina XDR OLED, 120 Гц ProMotion" },
    { label: "Основная камера", value: "48 МП + 48 МП ультраширокая + 12 МП (5× зум)" },
    { label: "Фронтальная", value: "12 МП" },
    { label: "Батарея", value: "до 33 часов видео" },
    { label: "Корпус", value: "Титан" },
    { label: "Разъём", value: "USB-C (USB 3)" },
    { label: "Защита", value: "IP68" },
    { label: "Camera Control", value: "Да" },
    { label: "MagSafe", value: "До 25 Вт" },
  ],
  compareTitle: "iPhone 15 Pro Max",
  compare: [
    { label: "Процессор", current: "A18 Pro", previous: "A17 Pro", better: true },
    { label: "Дисплей", current: "6,9\" 120 Гц", previous: "6,7\" 120 Гц", better: true },
    { label: "Camera Control", current: "Да", previous: "Нет", better: true },
    { label: "Apple Intelligence", current: "Да", previous: "Ограниченно", better: true },
  ],
  upsell: IPHONE_UPSELL,
  seoH2: "Купить iPhone 16 Pro Max в Казани",
  seoText: "iPhone 16 Pro Max — один из самых востребованных смартфонов Apple. В магазине ЭПЛ-КОЛЛЕКЦИЯ вы можете купить iPhone 16 Pro Max в Казани по цене от 94 000 ₽ с гарантией 1 год и бесплатной доставкой в день заказа.\\nРассрочка 0% на 10 месяцев — оформление онлайн за 5 минут  одобрение в день обращения.",
  seoH2Why: "Почему стоит выбрать iPhone 16 Pro Max?",
  seoTextWhy: "iPhone 16 Pro Max сочетает топовые технологии Apple, надёжность и лучшее соотношение цены и качества в своём классе. В ЭПЛ-КОЛЛЕКЦИЯ каждый смартфон проходит полную диагностику на 30+ пунктов перед продажей.",
  seoH2Sim: "Какую версию iPhone 16 Pro Max выбрать?",
  seoTextSim: "В Казани чаще всего берут версию Nano-SIM + eSIM (Европа/РФ) — работает со всеми операторами. Версия eSIM (США) подходит только при поддержке eSIM у вашего оператора. Уточните наличие у менеджера в Telegram.",
};

const IPHONE_16_PLUS_CONFIG: IPhoneConfig = {
  slug: "iphone-16-plus",
  colors: [
    { id: "pink", name: "Розовый", hex: "#F6D6D4", image: "iphone-16-plus" },
    { id: "teal", name: "Бирюзовый", hex: "#A5C8C6", image: "iphone-16-plus" },
  ],
  storage: [
    { gb: 128, label: "128 ГБ", available: true },
  ],
  sim: [
    { id: "sim-esim", label: "Nano-SIM + eSIM", description: "Европейская/РФ версия. Одна физическая SIM + одна eSIM." },
  ],
  prices: [
    { storageGb: 128, colorId: "pink", simId: "sim-esim", price: 70000 },
    { storageGb: 128, colorId: "teal", simId: "sim-esim", price: 70000 },
  ],
  defaultStorage: 128,
  defaultColor: "pink",
  defaultSim: "sim-esim",
  priceFrom: 70000,
  specs: [
    { label: "Процессор", value: "Apple A18" },
    { label: "Дисплей", value: "6,7\" Super Retina XDR OLED" },
    { label: "Основная камера", value: "48 МП + 12 МП ультраширокая" },
    { label: "Фронтальная", value: "12 МП" },
    { label: "Батарея", value: "до 27 часов видео" },
    { label: "Корпус", value: "Алюминий" },
    { label: "Разъём", value: "USB-C" },
    { label: "Camera Control", value: "Да" },
    { label: "MagSafe", value: "До 25 Вт" },
  ],
  compareTitle: "iPhone 15 Plus",
  compare: [
    { label: "Процессор", current: "A18", previous: "A16 Bionic", better: true },
    { label: "Camera Control", current: "Да", previous: "Нет", better: true },
    { label: "Apple Intelligence", current: "Да", previous: "Нет", better: true },
    { label: "MagSafe", current: "до 25 Вт", previous: "до 15 Вт", better: true },
  ],
  upsell: IPHONE_UPSELL,
  seoH2: "Купить iPhone 16 Plus в Казани",
  seoText: "iPhone 16 Plus — один из самых востребованных смартфонов Apple. В магазине ЭПЛ-КОЛЛЕКЦИЯ вы можете купить iPhone 16 Plus в Казани по цене от 70 000 ₽ с гарантией 1 год и бесплатной доставкой в день заказа.\\nРассрочка 0% на 10 месяцев — оформление онлайн за 5 минут  одобрение в день обращения.",
  seoH2Why: "Почему стоит выбрать iPhone 16 Plus?",
  seoTextWhy: "iPhone 16 Plus сочетает топовые технологии Apple, надёжность и лучшее соотношение цены и качества в своём классе. В ЭПЛ-КОЛЛЕКЦИЯ каждый смартфон проходит полную диагностику на 30+ пунктов перед продажей.",
  seoH2Sim: "Какую версию iPhone 16 Plus выбрать?",
  seoTextSim: "В Казани чаще всего берут версию Nano-SIM + eSIM (Европа/РФ) — работает со всеми операторами. Версия eSIM (США) подходит только при поддержке eSIM у вашего оператора. Уточните наличие у менеджера в Telegram.",
};

const IPHONE_16_CONFIG: IPhoneConfig = {
  slug: "iphone-16",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "iphone-16" },
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "iphone-16" },
    { id: "ultramarine", name: "Ультрамариновый", hex: "#5B6FB3", image: "iphone-16" },
    { id: "pink", name: "Розовый", hex: "#F6D6D4", image: "iphone-16" },
    { id: "teal", name: "Бирюзовый", hex: "#A5C8C6", image: "iphone-16" },
  ],
  storage: [
    { gb: 128, label: "128 ГБ", available: true },
    { gb: 256, label: "256 ГБ", available: true },
  ],
  sim: [
    { id: "sim-esim", label: "Nano-SIM + eSIM", description: "Европейская/РФ версия. Одна физическая SIM + одна eSIM." },
  ],
  prices: [
    { storageGb: 128, colorId: "black", simId: "sim-esim", price: 58500 },
    { storageGb: 128, colorId: "pink", simId: "sim-esim", price: 59500 },
    { storageGb: 128, colorId: "teal", simId: "sim-esim", price: 57500 },
    { storageGb: 128, colorId: "ultramarine", simId: "sim-esim", price: 58500 },
    { storageGb: 128, colorId: "white", simId: "sim-esim", price: 58500 },
    { storageGb: 256, colorId: "black", simId: "sim-esim", price: 67000 },
    { storageGb: 256, colorId: "white", simId: "sim-esim", price: 66500 },
  ],
  defaultStorage: 128,
  defaultColor: "black",
  defaultSim: "sim-esim",
  priceFrom: 57500,
  specs: [
    { label: "Процессор", value: "Apple A18" },
    { label: "Дисплей", value: "6,1\" Super Retina XDR OLED" },
    { label: "Основная камера", value: "48 МП + 12 МП ультраширокая" },
    { label: "Фронтальная", value: "12 МП" },
    { label: "Батарея", value: "до 22 часов видео" },
    { label: "Корпус", value: "Алюминий" },
    { label: "Разъём", value: "USB-C" },
    { label: "Camera Control", value: "Да" },
    { label: "MagSafe", value: "До 25 Вт" },
  ],
  compareTitle: "iPhone 15",
  compare: [
    { label: "Процессор", current: "A18", previous: "A16 Bionic", better: true },
    { label: "Camera Control", current: "Да", previous: "Нет", better: true },
    { label: "Apple Intelligence", current: "Да", previous: "Нет", better: true },
    { label: "MagSafe", current: "до 25 Вт", previous: "до 15 Вт", better: true },
  ],
  upsell: IPHONE_UPSELL,
  seoH2: "Купить iPhone 16 в Казани",
  seoText: "iPhone 16 — один из самых востребованных смартфонов Apple. В магазине ЭПЛ-КОЛЛЕКЦИЯ вы можете купить iPhone 16 в Казани по цене от 57 500 ₽ с гарантией 1 год и бесплатной доставкой в день заказа.\\nРассрочка 0% на 10 месяцев — оформление онлайн за 5 минут  одобрение в день обращения.",
  seoH2Why: "Почему стоит выбрать iPhone 16?",
  seoTextWhy: "iPhone 16 сочетает топовые технологии Apple, надёжность и лучшее соотношение цены и качества в своём классе. В ЭПЛ-КОЛЛЕКЦИЯ каждый смартфон проходит полную диагностику на 30+ пунктов перед продажей.",
  seoH2Sim: "Какую версию iPhone 16 выбрать?",
  seoTextSim: "В Казани чаще всего берут версию Nano-SIM + eSIM (Европа/РФ) — работает со всеми операторами. Версия eSIM (США) подходит только при поддержке eSIM у вашего оператора. Уточните наличие у менеджера в Telegram.",
};

const IPHONE_16E_CONFIG: IPhoneConfig = {
  slug: "iphone-16e",
  colors: [
    { id: "white", name: "Белый", hex: "#F2F1ED", image: "iphone-16e" },
  ],
  storage: [
    { gb: 128, label: "128 ГБ", available: true },
    { gb: 256, label: "256 ГБ", available: true },
  ],
  sim: [
    { id: "sim-esim", label: "Nano-SIM + eSIM", description: "Европейская/РФ версия. Одна физическая SIM + одна eSIM." },
  ],
  prices: [
    { storageGb: 128, colorId: "white", simId: "sim-esim", price: 47000 },
    { storageGb: 256, colorId: "white", simId: "sim-esim", price: 53000 },
  ],
  defaultStorage: 128,
  defaultColor: "white",
  defaultSim: "sim-esim",
  priceFrom: 47000,
  specs: [
    { label: "Процессор", value: "Apple A18" },
    { label: "Дисплей", value: "6,1\" Super Retina XDR OLED" },
    { label: "Основная камера", value: "48 МП" },
    { label: "Фронтальная", value: "12 МП" },
    { label: "Батарея", value: "до 26 часов видео" },
    { label: "Корпус", value: "Алюминий" },
    { label: "Разъём", value: "USB-C" },
    { label: "Face ID", value: "Да" },
  ],
  compareTitle: "iPhone SE 3",
  compare: [
    { label: "Процессор", current: "A18", previous: "A15 Bionic", better: true },
    { label: "Дисплей", current: "6,1\" OLED", previous: "4,7\" LCD", better: true },
    { label: "Разъём", current: "USB-C", previous: "Lightning", better: true },
    { label: "Face ID", current: "Да", previous: "Нет (Touch ID)", better: true },
  ],
  upsell: IPHONE_UPSELL,
  seoH2: "Купить iPhone 16e в Казани",
  seoText: "iPhone 16e — один из самых востребованных смартфонов Apple. В магазине ЭПЛ-КОЛЛЕКЦИЯ вы можете купить iPhone 16e в Казани по цене от 47 000 ₽ с гарантией 1 год и бесплатной доставкой в день заказа.\\nРассрочка 0% на 10 месяцев — оформление онлайн за 5 минут  одобрение в день обращения.",
  seoH2Why: "Почему стоит выбрать iPhone 16e?",
  seoTextWhy: "iPhone 16e сочетает топовые технологии Apple, надёжность и лучшее соотношение цены и качества в своём классе. В ЭПЛ-КОЛЛЕКЦИЯ каждый смартфон проходит полную диагностику на 30+ пунктов перед продажей.",
  seoH2Sim: "Какую версию iPhone 16e выбрать?",
  seoTextSim: "В Казани чаще всего берут версию Nano-SIM + eSIM (Европа/РФ) — работает со всеми операторами. Версия eSIM (США) подходит только при поддержке eSIM у вашего оператора. Уточните наличие у менеджера в Telegram.",
};

const IPHONE_15_CONFIG: IPhoneConfig = {
  slug: "iphone-15",
  colors: [
    { id: "black", name: "Чёрный", hex: "#1C1C1E", image: "iphone-15" },
    { id: "blue", name: "Синий (Deep Blue)", hex: "#3B5D78", image: "iphone-15" },
    { id: "pink", name: "Розовый", hex: "#F6D6D4", image: "iphone-15" },
    { id: "green", name: "Зелёный", hex: "#C5D0BC", image: "iphone-15" },
  ],
  storage: [
    { gb: 128, label: "128 ГБ", available: true },
    { gb: 256, label: "256 ГБ", available: true },
  ],
  sim: [
    { id: "sim-esim", label: "Nano-SIM + eSIM", description: "Европейская/РФ версия. Одна физическая SIM + одна eSIM." },
  ],
  prices: [
    { storageGb: 128, colorId: "black", simId: "sim-esim", price: 52500 },
    { storageGb: 128, colorId: "blue", simId: "sim-esim", price: 52000 },
    { storageGb: 128, colorId: "green", simId: "sim-esim", price: 52500 },
    { storageGb: 128, colorId: "pink", simId: "sim-esim", price: 55000 },
    { storageGb: 256, colorId: "black", simId: "sim-esim", price: 59500 },
    { storageGb: 256, colorId: "blue", simId: "sim-esim", price: 59500 },
  ],
  defaultStorage: 128,
  defaultColor: "black",
  defaultSim: "sim-esim",
  priceFrom: 52000,
  specs: [
    { label: "Процессор", value: "Apple A16 Bionic" },
    { label: "Дисплей", value: "6,1\" Super Retina XDR OLED" },
    { label: "Основная камера", value: "48 МП + 12 МП ультраширокая" },
    { label: "Фронтальная", value: "12 МП" },
    { label: "Батарея", value: "до 20 часов видео" },
    { label: "Корпус", value: "Алюминий" },
    { label: "Разъём", value: "USB-C" },
    { label: "Dynamic Island", value: "Да" },
  ],
  compareTitle: "iPhone 14",
  compare: [
    { label: "Процессор", current: "A16 Bionic", previous: "A15 Bionic", better: true },
    { label: "Dynamic Island", current: "Да", previous: "Нет", better: true },
    { label: "Разъём", current: "USB-C", previous: "Lightning", better: true },
    { label: "Камера", current: "48 МП", previous: "12 МП", better: true },
  ],
  upsell: IPHONE_UPSELL,
  seoH2: "Купить iPhone 15 в Казани",
  seoText: "iPhone 15 — один из самых востребованных смартфонов Apple. В магазине ЭПЛ-КОЛЛЕКЦИЯ вы можете купить iPhone 15 в Казани по цене от 52 000 ₽ с гарантией 1 год и бесплатной доставкой в день заказа.\\nРассрочка 0% на 10 месяцев — оформление онлайн за 5 минут  одобрение в день обращения.",
  seoH2Why: "Почему стоит выбрать iPhone 15?",
  seoTextWhy: "iPhone 15 сочетает топовые технологии Apple, надёжность и лучшее соотношение цены и качества в своём классе. В ЭПЛ-КОЛЛЕКЦИЯ каждый смартфон проходит полную диагностику на 30+ пунктов перед продажей.",
  seoH2Sim: "Какую версию iPhone 15 выбрать?",
  seoTextSim: "В Казани чаще всего берут версию Nano-SIM + eSIM (Европа/РФ) — работает со всеми операторами. Версия eSIM (США) подходит только при поддержке eSIM у вашего оператора. Уточните наличие у менеджера в Telegram.",
};

const configs: Record<string, IPhoneConfig> = {
  "iphone-17-pro-max": IPHONE_17_PRO_MAX_CONFIG,
  "iphone-17-pro": IPHONE_17_PRO_CONFIG,
  "iphone-17": IPHONE_17_CONFIG,
  "iphone-16-pro-max": IPHONE_16_PRO_MAX_CONFIG,
  "iphone-16-plus": IPHONE_16_PLUS_CONFIG,
  "iphone-16": IPHONE_16_CONFIG,
  "iphone-16e": IPHONE_16E_CONFIG,
  "iphone-15": IPHONE_15_CONFIG,
};

export function getIPhoneConfig(slug: string): IPhoneConfig | undefined {
  return configs[slug];
}

export function getConfigPrice(
  config: IPhoneConfig,
  storageGb: number,
  simId: string,
  colorId?: string,
): number | undefined {
  if (colorId) {
    const exact = config.prices.find(p => p.storageGb === storageGb && p.simId === simId && p.colorId === colorId);
    if (exact) return exact.price;
  }
  const matching = config.prices.filter(p => p.storageGb === storageGb && p.simId === simId);
  if (matching.length === 0) return undefined;
  return Math.min(...matching.map(p => p.price));
}
