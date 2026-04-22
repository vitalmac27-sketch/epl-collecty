/**
 * product-configs.ts — универсальные типы для конфигуратора товаров всех категорий.
 *
 * Используется iPhone, iPad, MacBook, Watch, AirPods, Android.
 * Данные генерируются автоматически из прайса скриптом scripts/parse-prices.py
 */

export interface ColorOption {
  id: string;
  name: string;   // русское имя цвета/варианта
  hex: string;    // CSS-цвет для кружка (или градиент)
  image: string;  // имя файла в /public/assets/ без расширения
}

export interface StorageOption {
  /** Идентификатор конфигурации: для iPhone число (память в ГБ), для MacBook — строка "16/512" */
  id: string;
  /** Русская подпись: "128 ГБ" / "16 ГБ / 512 ГБ" */
  label: string;
  available: boolean;
}

export interface SimOption {
  id: string;
  label: string;
  description: string;
}

export interface ConfigPrice {
  storageId: string;
  colorId: string;
  simId: string;
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
  better?: boolean;
}

export interface UpsellItem {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
}

export interface ProductConfig {
  slug: string;
  category: "iphone" | "ipad" | "macbook" | "watch" | "airpods" | "android";

  colors: ColorOption[];
  storage: StorageOption[];
  sim: SimOption[];
  prices: ConfigPrice[];

  defaultStorage: string;
  defaultColor: string;
  defaultSim: string;
  priceFrom: number;

  /** Подпись над выбором памяти: "Объём памяти" / "Конфигурация (RAM/SSD)" / "Версия" */
  storageLabel: string;

  /** Показывать блок SIM? Для MacBook/iPad без LTE — false */
  showSim: boolean;

  specs: SpecRow[];
  compareTitle: string;
  compare: CompareRow[];
  upsell: UpsellItem[];

  seoH2: string;    seoText: string;
  seoH2Why: string; seoTextWhy: string;
  seoH2Sim?: string; seoTextSim?: string;
}

/** Найти цену для комбинации (цвет + память + SIM) */
export function getConfigPrice(
  config: ProductConfig,
  storageId: string,
  simId: string,
  colorId?: string,
): number | undefined {
  if (colorId) {
    const exact = config.prices.find(
      (p) => p.storageId === storageId && p.simId === simId && p.colorId === colorId,
    );
    if (exact) return exact.price;
  }
  const matching = config.prices.filter(
    (p) => p.storageId === storageId && p.simId === simId,
  );
  if (matching.length === 0) return undefined;
  return Math.min(...matching.map((p) => p.price));
}
