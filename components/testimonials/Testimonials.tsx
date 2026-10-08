import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/data/testimonials";

export type { Testimonial };

export function Testimonials({ items = testimonials }: { items?: Testimonial[] }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Guest Stories" title="In Our Travelers' Words" />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => {
            const filled = t.quote.trim().length > 0;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <figure className={`flex h-full flex-col p-8 md:p-9 ${filled ? "border border-sand/70 bg-cream/60" : "border border-dashed border-sand"}`}>
                  <Quote className={`h-7 w-7 ${filled ? "text-terracotta" : "text-sand"}`} aria-hidden />
                  <blockquote className={`mt-5 flex-1 text-xl leading-relaxed ${filled ? "text-charcoal/90" : "italic text-charcoal/45"}`}>
                    {filled ? t.quote : ""}
                  </blockquote>
                  <figcaption className="mt-7 border-t border-sand/70 pt-4 text-sm uppercase tracking-[0.25em] text-forest">
                    {t.name.trim() || (filled ? "" : "Guest name")}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}