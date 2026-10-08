import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { itineraries } from "@/data/itineraries";
import { articles } from "@/data/journal";

export interface NavLink { label: string; href: string }
export interface NavItem extends NavLink { menu?: NavLink[] }

/** Main navigation. Dropdowns are generated from the data files, so new destinations/articles appear automatically. */
export function getNav(): NavItem[] {
  return [
    { label: "Destinations", href: "/destinations", menu: destinations.map((d) => ({ label: d.name, href: `/destinations/${d.slug}` })) },
    { label: "Experiences", href: "/experiences", menu: experiences.map((e) => ({ label: e.name, href: `/experiences/${e.slug}` })) },
    { label: "Itineraries", href: "/itineraries", menu: itineraries.map((i) => ({ label: i.title, href: `/itineraries/${i.slug}` })) },
    { label: "Journal", href: "/journal", menu: articles.map((a) => ({ label: a.title, href: `/journal/${a.slug}` })) },
    { label: "About", href: "/about" },
  ];
}