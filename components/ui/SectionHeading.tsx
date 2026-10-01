import { Reveal } from "./Reveal";
export function SectionHeading({ eyebrow, title, sub, align = "center", light }: { eyebrow?: string; title: string; sub?: string; align?: "left" | "center"; light?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`mb-4 text-xs uppercase tracking-[0.35em] ${light ? "text-sand" : "text-terracotta"}`}>{eyebrow}</p>}
      <h2 className={`text-4xl leading-tight md:text-5xl ${light ? "text-cream" : "text-forest"}`}>{title}</h2>
      {sub && <p className={`mt-5 text-lg leading-relaxed md:text-xl ${light ? "text-cream/80" : "text-charcoal/70"}`}>{sub}</p>}
    </Reveal>
  );
}
