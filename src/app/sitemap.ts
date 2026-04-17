import type { MetadataRoute } from "next";
import { getAllSiteRoutes } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-04-17T00:00:00.000Z");

  return getAllSiteRoutes().map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("where-to-play") ? 0.9 : 0.75,
  }));
}
