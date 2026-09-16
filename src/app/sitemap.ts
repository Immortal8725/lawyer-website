import type { MetadataRoute } from "next";
import { practiceAreas } from "@/lib/practice-areas";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/practice-areas", "/about", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    }),
  );

  const practiceRoutes = practiceAreas.map((area) => ({
    url: `${site.url}/practice-areas/${area.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...practiceRoutes];
}
