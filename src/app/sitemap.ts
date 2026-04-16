import type { MetadataRoute } from "next";
import { DEFAULT_CITY } from "@/lib/cities";
import { ALL_CATEGORY_SLUGS } from "@/lib/categories";
import { allModels } from "@/lib/models";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = DEFAULT_CITY.siteUrl;
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1 },
    ...ALL_CATEGORY_SLUGS.map(slug => ({ url: `${base}/${slug}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...allModels.map(m => ({ url: `${base}/${m.category}/${m.slug}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 })),
  ];
}
