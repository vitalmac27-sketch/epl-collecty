// API клиент для каталога б/у iPhone
// Данные подгружаются с нашего VPS через https://api.эпл-коллекция.рф

import { PROXY_URL } from "./proxy";

// Прямой адрес VPS (резерв/отладка). Из-под VPN прямой путь к РФ-IP рвёт DPI.
export const BU_API_URL = "https://api.xn----jtbjgbccazg9frdtb.xn--p1ai";
// Рабочий адрес — через Cloudflare Worker: доступен и из-под VPN.
const API_BASE = PROXY_URL;

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
  photos: string[]; // относительные пути вида /photos/8/1.jpg
  status: BuStatus;
  created_at: string;
};

export type BuListingsResponse = {
  count: number;
  items: BuListing[];
};

/** Полный URL до фото на VPS */
export function buPhotoUrl(relativePath: string): string {
  if (!relativePath) return "";
  if (relativePath.startsWith("http")) return relativePath;
  return `${API_BASE}${relativePath}`;
}

/** Получить все активные/резерв объявления */
export async function fetchBuListings(): Promise<BuListing[]> {
  try {
    const res = await fetch(`${API_BASE}/api/bu-iphone`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
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
    const res = await fetch(`${API_BASE}/api/bu-iphone/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    console.error("[bu-api] fetch error:", e);
    return null;
  }
}

/** Базовая модель iPhone — для фильтрации (например "iPhone 16 Pro" → "16 Pro") */
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
