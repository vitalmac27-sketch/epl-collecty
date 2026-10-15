/**
 * variants.ts — отдельные посадочные страницы под конфигурации модели
 *   /iphone/iphone-18-pro-max/256gb/   — по объёму памяти
 *   /iphone/iphone-18-pro-max/burgundy/ — по цвету
 *
 * Страница варианта = та же модель с уже выбранной конфигурацией,
 * своим title/H1, ценой именно этой версии и коротким уникальным текстом.
 * Чтобы включить варианты для модели — добавь её в VARIANT_MODELS.
 */
import { getProductConfig } from "@/lib/generated";
import type { ProductConfig } from "@/lib/product-configs";

export const VARIANT_MODELS: Array<{ category: string; slug: string }> = [
  { category: "iphone", slug: "iphone-18-pro-max" },
  { category: "iphone", slug: "iphone-18-pro" },
];

export interface Variant {
  slug: string; // "256gb" | "burgundy"
  kind: "storage" | "color";
  id: string; // id памяти или цвета в конфиге
  label: string; // "256 ГБ" | "Бордовый (Burgundy)"
  price: number; // минимальная цена этой версии (0 — по запросу)
  /** Предвыбор в конфигураторе */
  pick: { storage: string; color: string; sim: string };
}

export function storageSlug(id: string): string {
  const n = Number(id);
  if (n >= 1024 && n % 1024 === 0) return `${n / 1024}tb`;
  return `${id}gb`;
}

/** Короткое имя цвета без английского дубля: «Бордовый (Burgundy)» → «Бордовый» */
export function colorShort(name: string): string {
  return name.replace(/\s*\(.*\)\s*$/, "").trim();
}

function cheapest(cfg: ProductConfig, f: (p: ProductConfig["prices"][number]) => boolean) {
  const list = cfg.prices.filter((p) => f(p) && p.price > 0);
  if (!list.length) return null;
  return list.reduce((a, b) => (b.price < a.price ? b : a));
}

export function getVariants(category: string, slug: string): Variant[] {
  if (!VARIANT_MODELS.some((m) => m.category === category && m.slug === slug)) return [];
  const cfg = getProductConfig(category, slug);
  if (!cfg) return [];

  const storage: Variant[] = cfg.storage.map((s) => {
    const c = cheapest(cfg, (p) => p.storageId === s.id);
    return {
      slug: storageSlug(s.id),
      kind: "storage",
      id: s.id,
      label: s.label,
      price: c?.price ?? 0,
      pick: { storage: s.id, color: c?.colorId ?? cfg.defaultColor, sim: c?.simId ?? cfg.defaultSim },
    };
  });

  const colors: Variant[] = cfg.colors.map((col) => {
    const c = cheapest(cfg, (p) => p.colorId === col.id);
    return {
      slug: col.id,
      kind: "color",
      id: col.id,
      label: col.name,
      price: c?.price ?? 0,
      pick: { storage: c?.storageId ?? cfg.defaultStorage, color: col.id, sim: c?.simId ?? cfg.defaultSim },
    };
  });

  return [...storage, ...colors];
}

export function getVariant(category: string, slug: string, variant: string): Variant | undefined {
  return getVariants(category, slug).find((v) => v.slug === variant);
}

export const ALL_VARIANT_PARAMS = VARIANT_MODELS.flatMap((m) =>
  getVariants(m.category, m.slug).map((v) => ({ category: m.category, model: m.slug, variant: v.slug })),
);

/** Минимальная цена по памяти с фильтром SIM */
export function minPrice(cfg: ProductConfig, f: (p: ProductConfig["prices"][number]) => boolean): number {
  return cheapest(cfg, f)?.price ?? 0;
}

/* ── Тексты ─────────────────────────────────────────────────────────────── */

export const STORAGE_TEXT: Record<string, { who: string; detail: string }> = {
  "256": {
    who: "Базовый объём, которого хватает большинству.",
    detail:
      "256 ГБ — это десятки тысяч фото и несколько часов видео в 4K. Если вы пользуетесь iCloud для фото, слушаете музыку по подписке и не снимаете длинные ролики в ProRes, этого объёма хватит на весь срок службы телефона.",
  },
  "512": {
    who: "Оптимальный запас для тех, кто много снимает.",
    detail:
      "512 ГБ выбирают, если вы снимаете видео в 4K с высокой частотой кадров, храните фото без облака, скачиваете фильмы в дорогу или планируете пользоваться телефоном 4–5 лет. Память iPhone не расширяется, поэтому запас лучше взять сразу.",
  },
  "1024": {
    who: "Для тех, кто снимает на iPhone всерьёз.",
    detail:
      "1 ТБ нужен, если iPhone — ваша основная камера: съёмка в ProRes и Log, длинные ролики для монтажа, большая фото- и видеотека без облака. Минута ProRes в 4K занимает несколько гигабайт, и на 256 ГБ такие проекты заканчивают место за вечер.",
  },
  "2048": {
    who: "Максимальный объём — телефон как рабочий инструмент.",
    detail:
      "2 ТБ берут видеографы и контент-мейкеры, которые снимают в ProRes целыми днями и не хотят выгружать материал на ноутбук в поездке. Для обычного использования такой объём избыточен — разница в цене с 1 ТБ обычно заметна, поэтому выбирайте его под конкретные задачи.",
  },
};

export const COLOR_TEXT: Record<string, string> = {
  glacier:
    "Glacier — светлый холодный голубой. На ярком свету он почти серебристый, в тени — заметно голубеет. Самый «свежий» оттенок линейки, особенно хорошо смотрится с прозрачным чехлом.",
  silver:
    "Серебристый — классический светлый цвет без оттенков. Универсальный вариант: подходит к любому чехлу и стилю, а следы от рук и мелкие потёртости на светлом корпусе заметны меньше всего.",
  black:
    "Чёрный — строгий тёмный цвет, самый сдержанный в линейке. Выглядит дорого и подходит к деловому стилю; отпечатки пальцев на тёмном корпусе заметнее, но с чехлом это не имеет значения.",
  burgundy:
    "Бордовый (Burgundy) — глубокий винный оттенок, который на солнце отливает красным. Самый яркий и необычный цвет линейки — для тех, кто хочет, чтобы телефон выделялся.",
};

/** «Бордовый (Burgundy)» → «бордовый», «Glacier» → «Glacier» */
export function colorWord(name: string): string {
  const s = colorShort(name);
  return /[А-Яа-яЁё]/.test(s) ? s.toLowerCase() : s;
}

/** Подпись варианта для заголовков: «256 ГБ» / «бордовый» */
export function variantWord(v: Variant): string {
  return v.kind === "color" ? colorWord(v.label) : v.label;
}
