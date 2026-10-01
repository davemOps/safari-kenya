import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Experience } from "@/data/experiences";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceCard({ e, delay = 0 }: { e: Experience; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/experiences/${e.slug}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden bg-sand/40">
          <SmartImage src={e.image} alt={`${e.name} in Kenya`} label={e.name} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <h3 className="text-2xl">{e.name}</h3>
            <p className="mt-1 text-white/85">{e.tagline}</p>
            <ArrowRight className="mt-3 h-4 w-4 text-sand transition-transform group-hover:translate-x-1" aria-hidden />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
