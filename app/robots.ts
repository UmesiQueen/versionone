import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";

/**
 * robots.txt — disallows all crawling on staging, opens the site on prod.
 * Mirrors the `noindex` logic in `lib/seo.ts`.
 */

const isNoIndex = process.env.NEXT_PUBLIC_APP_ENV === "staging";

export default function robots(): MetadataRoute.Robots {
  if (isNoIndex) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
      host: siteConfig.url,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
