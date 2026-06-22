import type { MetadataRoute } from "next";

import { getAllDestinations } from "@/lib/destinations";
import { siteConfig } from "@/lib/seo";

/**
 * Static + dynamic routes for crawlers.
 *
 * Add new top-level routes to `STATIC_ROUTES` as the site grows. Country
 * detail pages are sourced from `data/destinations.json` automatically.
 */

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const STATIC_ROUTES: readonly StaticRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/immigration", changeFrequency: "monthly", priority: 0.9 },
  { path: "/investment", changeFrequency: "monthly", priority: 0.9 },
  { path: "/migrate", changeFrequency: "monthly", priority: 0.8 },
  { path: "/study-abroad", changeFrequency: "monthly", priority: 0.8 },
  { path: "/work-abroad", changeFrequency: "monthly", priority: 0.8 },
  { path: "/visit", changeFrequency: "monthly", priority: 0.8 },
  { path: "/tour-packages", changeFrequency: "monthly", priority: 0.8 },
  { path: "/book-consultation", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const destinationEntries: MetadataRoute.Sitemap = getAllDestinations().map(
    (destination) => ({
      url: new URL(
        `/destinations/${destination.id}`,
        siteConfig.url,
      ).toString(),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticEntries, ...destinationEntries];
}
