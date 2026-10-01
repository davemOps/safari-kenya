import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { Itinerary } from "@/data/itineraries";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

export function ItineraryCard({ i, delay = 0 }: { i: Itinerary; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/itineraries/${i.slug}`} className="group block bg-white">
        <div className="relative aspect-[3/2] overflow-hidden bg-sand/40">
          <SmartImage src={i.image} alt={`${i.title} itinerary`} label={i.title} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="p-6">
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-terracotta"><CalendarDays className="h-4 w-4" aria-hidden />{i.days} Days</p>
          <h3 className="mt-3 text-2xl text-forest">{i.title}</h3>
          <p className="mt-2 text-charcoal/70">{i.summary}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-forest">Request itinerary <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
        </div>
      </Link>
    </Reveal>
  );
}
