// API клиент для каталога б/у iPhone
// Данные с VPS. Прямой путь работает без VPN (РФ), но рвётся под VPN (DPI).
// Cloudflare Worker работает под VPN, но без VPN в РФ бывает недоступен.
// Поэтому пробуем прямой путь, при сбое — через Worker (и наоборот для фото).

import { PROXY_URL } from "./proxy";

// Прямой адрес VPS
export const BU_API_URL = "https://api.xn----jtbjgbccazg9frdtb.xn--p1ai";

// Какой путь сработал последним — на него же вешаем фото (чтобы карточки и текст шли одним маршрутом)
let activeBase = BU_API_URL;

export type BuStatus = "active" | "reserved" | "sold";

export type BuListing = {
  id: number;
  slug: string;
  title: string;
  model: string;
  storage: string | null;
  color: string | null;
  sim_type: string | null;
  battery: number | null;
  cycles: number | null;
  condition: string | null;
  price: number;
  description: string | null;
  photos: string[];
  status: BuStatus;
  created_at: string;
};

export type BuListingsResponse = {
  count: number;
  items: BuListing[];
};

/**
 * Запрос с авто-выбором пути:
 * 1) прямой VPS (быстрый для РФ без VPN), 2) при сбое — Cloudflare Worker (для VPN).
 */
async function fetchWithFallback(path: string): Promise<Response | null> {
  // 1) прямой путь к VPS
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 4000);
    const res = await fetch(`${BU_API_URL}${path}`, { cache: "no-store", signal: ctrl.signal });
    clearTimeout(t);
    if (res.ok) {
      activeBase = BU_API_URL;
      return res;
    }
  } catch {
    // прямой путь не прошёл (вероятно DPI под VPN) — идём через воркер
  }
  // 2) запасной путь — Cloudflare Worker
  try {
    const res = await fetch(`${PROXY_URL}${path}`, { cache: "no-store" });
    if (res.ok) activeBase = PROXY_URL;
    return res;
  } catch {
    return null;
  }
}

/** Полный URL до фото — по тому же пути, что сработал для данных */
export function buPhotoUrl(relativePath: string): string {
  if (!relativePath) return "";
  if (relativePath.startsWith("http")) return relativePath;
  return `${activeBase}${relativePath}`;
}

/** Получить все активные/резерв объявления */
export async function fetchBuListings(): Promise<BuListing[]> {
  try {
    const res = await fetchWithFallback(`/api/bu-iphone`);
    if (!res || !res.ok) return [];
    const data: BuListingsResponse = await res.json();
    return data.items || [];
  } catch (e) {
    console.error("[bu-api] fetch error:", e);
    return [];
  }
}

/** Получить одно объявление по slug */
export async function fetchBuListing(slug: string): Promise<BuListing | null> {
  try {
    const res = await fetchWithFallback(`/api/bu-iphone/${slug}`);
    if (!res || !res.ok) return null;
    return await res.json();
  } catch (e) {
    console.error("[bu-api] fetch error:", e);
    return null;
  }
}

/** Базовая модель iPhone — для фильтрации */
export function baseModel(model: string): string {
  return model.replace(/^iphone\s*/i, "");
}

/** Группировка по модели для фильтров */
export function groupByModel(items: BuListing[]): Record<string, BuListing[]> {
  const groups: Record<string, BuListing[]> = {};
  items.forEach((item) => {
    const key = item.model || "Other";
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });
  return groups;
}
