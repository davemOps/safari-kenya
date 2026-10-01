import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Destination } from "@/data/destinations";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

export function DestinationCard({ d, delay = 0 }: { d: Destination; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/destinations/${d.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand/40">
          <SmartImage src={d.image} alt={`${d.name}, Kenya`} label={d.name} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <h3 className="text-2xl">{d.name}</h3>
            <p className="mt-1 text-base text-white/85">{d.shortDescription}</p>
            <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-sand">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
