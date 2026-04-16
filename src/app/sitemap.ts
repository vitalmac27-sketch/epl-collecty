import type { MetadataRoute } from "next";
import { DEFAULT_CITY, ALL_CITY_SLUGS, getCityConfig } from "@/lib/cities";
import { ALL_CATEGORY_SLUGS } from "@/lib/categories";
import { allModels } from "@/lib/models";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = DEFAULT_CITY.siteUrl;
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // ── Основные страницы ──────────────────────────────────────────────────
  entries.push({ url: base, lastModified: now, changeFrequency: "daily", priority: 1 });
  entries.push({ url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  entries.push({ url: `${base}/contacts`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });

  // ── Категории ──────────────────────────────────────────────────────────
  for (const slug of ALL_CATEGORY_SLUGS) {
    entries.push({ url: `${base}/${slug}/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 });
  }

  // ── Страницы моделей ───────────────────────────────────────────────────
  for (const m of allModels) {
    entries.push({ url: `${base}/${m.category}/${m.slug}/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 });
  }

  // ── Городские страницы ─────────────────────────────────────────────────
  for (const citySlug of ALL_CITY_SLUGS) {
    const city = getCityConfig(citySlug);
    if (!city) continue;

    // Главная города
    entries.push({ url: `${base}/${citySlug}/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 });

    // Категории города
    for (const slug of ALL_CATEGORY_SLUGS) {
      entries.push({ url: `${base}/${citySlug}/${slug}/`, lastModified: now, changeFrequency: "weekly", priority: 0.75 });
    }

    // Модели города
    for (const m of allModels) {
      entries.push({ url: `${base}/${citySlug}/${m.category}/${m.slug}/`, lastModified: now, changeFrequency: "weekly", priority: 0.65 });
    }
  }

  return entries;
}
