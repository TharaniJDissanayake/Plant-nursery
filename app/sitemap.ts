import type { MetadataRoute } from "next";
import { BUSINESS } from "@/config/business";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/shop", priority: 0.9 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${BUSINESS.siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
