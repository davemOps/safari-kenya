import Link from "next/link";
import type { Article } from "@/data/journal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

export function JournalCard({ a, delay = 0 }: { a: Article; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/journal/${a.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden bg-sand/40">
          <SmartImage src={a.image} alt={a.title} label={a.title} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.25em] text-terracotta">{a.category} · {a.readTime}</p>
        <h3 className="mt-2 text-2xl text-forest group-hover:underline">{a.title}</h3>
        <p className="mt-2 text-charcoal/70">{a.excerpt}</p>
      </Link>
    </Reveal>
  );
}
