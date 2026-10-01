"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const navLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/itineraries", label: "Itineraries" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "bg-cream/95 text-charcoal shadow-sm backdrop-blur" : "bg-transparent text-white"}`}>
      <nav aria-label="Main" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="text-xl tracking-[0.3em] md:text-2xl" aria-label={`${site.name} home`}>{site.name}</Link>
        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} aria-current={pathname.startsWith(l.href) ? "page" : undefined}
                className={`text-sm uppercase tracking-[0.2em] transition-colors hover:text-terracotta ${pathname.startsWith(l.href) ? "text-terracotta" : ""}`}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link href="/plan-your-trip" className="hidden bg-terracotta px-5 py-3 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8f4e30] sm:inline-block">Plan Your Trip</Link>
          <button type="button" className="p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 h-[calc(100svh-5rem)] overflow-y-auto bg-cream px-6 py-8 text-charcoal lg:hidden">
            <ul>
              {[...navLinks, { href: "/plan-your-trip", label: "Plan Your Trip" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="block border-b border-charcoal/10 py-4 text-2xl">{l.label}</Link></li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
