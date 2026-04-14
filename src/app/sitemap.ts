import type { MetadataRoute } from "next";
import { DEFAULT_CITY } from "@/lib/cities";
import { ALL_CATEGORY_SLUGS } from "@/lib/categories";
import { allModels } from "@/lib/models";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = DEFAULT_CITY.siteUrl;
  const today = new Date().toISOString().split("T")[0];

  // ── Статические страницы ─────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,        lastModified: today, changeFrequency: "daily",   priority: 1.0 },
    { url: `${base}/about`,   lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contacts`,lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/offer`,   lastModified: today, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: today, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/legal`,   lastModified: today, changeFrequency: "monthly", priority: 0.3 },
  ];

  // ── Страницы каталогов категорий /[category] ─────────────────────────────
  const categoryPages: MetadataRoute.Sitemap = ALL_CATEGORY_SLUGS.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // ── Страницы моделей /[category]/[model] ─────────────────────────────────
  const seriesPriority: Record<string, number> = {
    "17": 0.9, "16": 0.85, "15": 0.8, "14": 0.75, "13": 0.7,
    // iPad / MacBook / Watch / Android / PS — по серии не делим, фиксировано
    Pro: 0.85, Air: 0.82, mini: 0.78, base: 0.75,
    Ultra: 0.85, Series: 0.82, SE: 0.78,
    Samsung: 0.82, Google: 0.8, Xiaomi: 0.78,
    PS5: 0.82, PS4: 0.75,
  };

  const modelPages: MetadataRoute.Sitemap = allModels.map((model) => ({
    url: `${base}/${model.category}/${model.slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: seriesPriority[model.series] ?? 0.75,
  }));

  return [...staticPages, ...categoryPages, ...modelPages];
}
