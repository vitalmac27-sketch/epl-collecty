import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://xn----jtbjgbccazg9frdtb.xn--p1ai";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
