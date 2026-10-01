import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
export interface Testimonial { quote: string; name: string; trip?: string }
const placeholders = ["Your guest experience will appear here.", "Real traveler testimonials will be added here."];
/** Pass real testimonials via the `items` prop when you have them. */
export function Testimonials({ items = [] }: { items?: Testimonial[] }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Guest Stories" title="In Our Travelers' Words" />
        <div className="grid gap-6 md:grid-cols-2">
          {items.length > 0
            ? items.map((t) => (
                <figure key={t.name} className="border border-sand p-8">
                  <Quote className="mb-4 h-6 w-6 text-terracotta" aria-hidden />
                  <blockquote className="text-xl leading-relaxed">{t.quote}</blockquote>
                  <figcaption className="mt-5 text-sm uppercase tracking-[0.2em] text-forest">{t.name}{t.trip ? ` — ${t.trip}` : ""}</figcaption>
                </figure>
              ))
            : placeholders.map((p) => (
                <div key={p} className="flex min-h-[10rem] flex-col items-center justify-center border border-dashed border-sand p-8 text-center">
                  <Quote className="mb-4 h-6 w-6 text-sand" aria-hidden />
                  <p className="text-xl italic text-charcoal/60">{p}</p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
