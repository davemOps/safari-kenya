import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { itineraries } from "@/data/itineraries";
import { articles } from "@/data/journal";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/destinations", "/experiences", "/itineraries", "/journal", "/about", "/contact", "/plan-your-trip",
    ...destinations.map((d) => `/destinations/${d.slug}`), ...experiences.map((e) => `/experiences/${e.slug}`),
    ...itineraries.map((i) => `/itineraries/${i.slug}`), ...articles.map((a) => `/journal/${a.slug}`)];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
