import Link from "next/link";
import { Facebook, Instagram, MapPin, Youtube } from "lucide-react";
import { site } from "@/data/site";

const cols = [
  { title: "Explore", links: [["Destinations", "/destinations"], ["Experiences", "/experiences"], ["Itineraries", "/itineraries"], ["Journal", "/journal"]] },
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["FAQs", "/contact#faq"]] },
  { title: "Plan", links: [["Plan Your Trip", "/plan-your-trip"], ["Private Tours", "/plan-your-trip"], ["Family Travel", "/experiences/family"], ["Honeymoons", "/experiences/honeymoon"]] },
];
export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 md:px-8 lg:grid-cols-6">
        <div className="sm:col-span-2">
          <p className="text-2xl tracking-[0.3em] text-cream">{site.name}</p>
          <p className="mt-4 max-w-sm text-lg leading-relaxed">Thoughtfully designed journeys across Kenya, from savannah and highlands to the Indian Ocean coast.</p>
          <p className="mt-6 flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden />{site.location}</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-sand">{c.title}</h2>
            <ul className="space-y-3">{c.links.map(([l, h]) => <li key={l}><Link href={h} className="transition-colors hover:text-white">{l}</Link></li>)}</ul>
          </div>
        ))}
        <div>
          <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-sand">Follow</h2>
          <ul className="space-y-3">
            <li><a href={site.social.Instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Instagram className="h-4 w-4" aria-hidden />Instagram</a></li>
            <li><a href={site.social.Facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Facebook className="h-4 w-4" aria-hidden />Facebook</a></li>
            <li><a href={site.social.TikTok} target="_blank" rel="noopener noreferrer" className="hover:text-white">TikTok</a></li>
            <li><a href={site.social.YouTube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Youtube className="h-4 w-4" aria-hidden />YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-sm text-cream/60">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  );
}
