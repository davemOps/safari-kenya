"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import type { NavItem } from "@/lib/nav";
import Image from "next/image";

export function Navbar({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [openMenu, setOpenMenu] = useState<string | null>(null); // desktop dropdown
  const [mobileSub, setMobileSub] = useState<string | null>(null); // mobile accordion
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); setOpenMenu(null); setMobileSub(null); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenMenu(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;
  const active = (href: string) => pathname.startsWith(href);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "bg-cream/95 text-charcoal shadow-sm backdrop-blur" : "bg-transparent text-white"}`}>
      <nav aria-label="Main" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="text-xl tracking-[0.3em] md:text-2xl" aria-label={`${site.name} home`}>{site.name}</Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-9 lg:flex">
          {items.map((l) => {
            const hasMenu = !!l.menu?.length;
            const isOpen = openMenu === l.label;
            return (
              <li
                key={l.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(hasMenu ? l.label : null)}
                onMouseLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(hasMenu ? l.label : null)}
                onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenMenu(null); }}
              >
                <Link
                  href={l.href}
                  aria-current={active(l.href) ? "page" : undefined}
                  aria-haspopup={hasMenu ? "true" : undefined}
                  aria-expanded={hasMenu ? isOpen : undefined}
                  className={`flex items-center gap-1 py-7 text-sm uppercase tracking-[0.2em] transition-colors hover:text-terracotta ${active(l.href) || isOpen ? "text-terracotta" : ""}`}
                >
                  {l.label}
                  {hasMenu && <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden />}
                </Link>

                <AnimatePresence>
                  {hasMenu && isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full -translate-x-1/2"
                    >
                      <ul className={`max-h-[75vh] overflow-y-auto bg-charcoal/95 px-6 py-5 text-cream shadow-xl backdrop-blur ${l.menu!.length > 8 && l.label === "Destinations" ? "grid min-w-[22rem] grid-cols-2 gap-x-8 gap-y-1" : "min-w-[16rem] space-y-1"}`}>
                        {l.menu!.map((m) => (
                          <li key={m.href}>
                            <Link
                              href={m.href}
                              aria-current={pathname === m.href ? "page" : undefined}
                              className={`block whitespace-nowrap py-1.5 text-[0.8rem] font-bold uppercase tracking-wide transition-colors hover:text-sand ${pathname === m.href ? "text-sand" : ""}`}
                            >
                              {m.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/plan-your-trip" className="hidden bg-terracotta px-5 py-3 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8f4e30] sm:inline-block">Plan Your Trip</Link>
          <button type="button" className="p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 h-[calc(100svh-5rem)] overflow-y-auto bg-cream px-6 py-6 text-charcoal lg:hidden">
            <ul>
              {items.map((l) => {
                const hasMenu = !!l.menu?.length;
                const expanded = mobileSub === l.label;
                return (
                  <li key={l.href} className="border-b border-charcoal/10">
                    <div className="flex items-center justify-between">
                      <Link href={l.href} className="flex-1 py-4 text-2xl">{l.label}</Link>
                      {hasMenu && (
                        <button type="button" onClick={() => setMobileSub(expanded ? null : l.label)} aria-expanded={expanded} aria-label={`${expanded ? "Collapse" : "Expand"} ${l.label} menu`} className="p-3">
                          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    <AnimatePresence initial={false}>
                      {hasMenu && expanded && (
                        <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden pl-3">
                          {l.menu!.map((m) => (
                            <li key={m.href}><Link href={m.href} className="block py-2.5 text-lg text-charcoal/75">{m.label}</Link></li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
              <li className="border-b border-charcoal/10"><Link href="/plan-your-trip" className="block py-4 text-2xl text-terracotta">Plan Your Trip</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}