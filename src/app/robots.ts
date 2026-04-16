import type { MetadataRoute } from "next";
import { DEFAULT_CITY } from "@/lib/cities";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  const base = DEFAULT_CITY.siteUrl;
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] }],
    sitemap: `${base}/sitemap.xml`,
  };
}
