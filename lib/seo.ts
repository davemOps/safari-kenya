import type { Metadata } from "next";
import { site } from "@/data/site";
import { images } from "@/data/images";
export function buildMeta(o: { title: string; description: string; path: string; image?: string }): Metadata {
  const img = o.image ?? images.hero;
  return {
    title: o.title, description: o.description, alternates: { canonical: o.path },
    openGraph: { title: o.title, description: o.description, url: o.path, siteName: site.name, type: "website", images: [{ url: img }] },
    twitter: { card: "summary_large_image", title: o.title, description: o.description, images: [img] },
  };
}
