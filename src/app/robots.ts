import type { MetadataRoute } from "next";
import { DEFAULT_CITY } from "@/lib/cities";

export default function robots(): MetadataRoute.Robots {
  const base = DEFAULT_CITY.siteUrl;
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/", "/404"] },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
