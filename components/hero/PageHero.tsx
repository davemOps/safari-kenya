import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({ title, eyebrow, description, image, label, full = false, children }: { title: string; eyebrow?: string; description?: string; image: string; label?: string; full?: boolean; children?: ReactNode }) {
  return (
    <section className={`relative flex items-end overflow-hidden bg-forest ${full ? "min-h-[100svh]" : "min-h-[70svh]"}`}>
      <SmartImage src={image} alt={`${title} – Kenya`} label={label ?? title} priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/40" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 md:px-8 md:pb-28">
        <Reveal>
          {eyebrow && <p className="mb-5 text-xs uppercase tracking-[0.4em] text-sand">{eyebrow}</p>}
          <h1 className="max-w-4xl text-5xl leading-[1.05] text-white md:text-7xl lg:text-8xl">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">{description}</p>}
          {children && <div className="mt-8 flex flex-col gap-4 sm:flex-row">{children}</div>}
        </Reveal>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80 animate-cue" aria-hidden><ChevronDown className="h-6 w-6" /></div>
    </section>
  );
}
