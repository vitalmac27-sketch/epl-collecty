import type { MetadataRoute } from "next";
import { DEFAULT_CITY } from "@/lib/cities";
import { ALL_CATEGORY_SLUGS } from "@/lib/categories";
import { allModels } from "@/lib/models";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = DEFAULT_CITY.siteUrl;
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1 },
  ];
  for (const slug of ALL_CATEGORY_SLUGS) {
    entries.push({ url: `${base}/${slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.8 });
  }
  for (const m of allModels) {
    entries.push({ url: `${base}/${m.category}/${m.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.7 });
  }
  return entries;
}
