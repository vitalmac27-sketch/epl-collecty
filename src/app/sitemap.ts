import type { MetadataRoute } from "next";
import { ALL_CATEGORY_SLUGS } from "@/lib/categories";
import { allModels } from "@/lib/models";

export const dynamic = "force-static";

const BASE = "https://xn----jtbjgbccazg9frdtb.xn--p1ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`,        lastModified: now, changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE}/about`,   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contacts`,lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/offer`,   lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/legal`,   lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/buyout`,  lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/blog`,    lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/blog/kak-proverit-bu-iphone-pered-pokupkoy`, lastModified: new Date("2026-04-25"), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/blog/kak-nastroit-kameru-iphone`, lastModified: new Date("2026-05-01"), changeFrequency: "monthly" as const, priority: 0.8 },
    ...ALL_CATEGORY_SLUGS.map((slug) => ({
      url: `${BASE}/${slug}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...allModels.map((m) => ({
      url: `${BASE}/${m.category}/${m.slug}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
