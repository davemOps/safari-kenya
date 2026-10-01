import Link from "next/link";
import { notFound } from "next/navigation";
import { BedDouble, Car, Check, X } from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { FaqList } from "@/components/faq/FaqList";
import { PlanSection } from "@/components/forms/PlanSection";
import { itineraries, getItinerary } from "@/data/itineraries";
import { getDestination } from "@/data/destinations";
import { getExperience } from "@/data/experiences";
import { faqs } from "@/data/faqs";
import { buildMeta } from "@/lib/seo";

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return itineraries.map((i) => ({ slug: i.slug })); }
export async function generateMetadata({ params }: P) {
  const i = getItinerary((await params).slug);
  if (!i) return {};
  return buildMeta({ title: `${i.days}-Day ${i.title} Itinerary`, description: i.summary, path: `/itineraries/${i.slug}`, image: i.image });
}
const included = ["Accommodation suited to your style", "Ground transport and transfers as agreed", "Guiding and park or activity access as agreed", "Planning support before and during your trip"];
const excluded = ["International flights", "Visa and entry fees", "Travel insurance", "Personal expenses and optional extras"];

export default async function Page({ params }: P) {
  const i = getItinerary((await params).slug);
  if (!i) notFound();
  return (
    <>
      <PageHero full title={i.title} eyebrow={`${i.days} Days`} image={i.image} label={i.title} description={i.summary}><ButtonLink href="/plan-your-trip">Request Itinerary</ButtonLink></PageHero>
      <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <Reveal><h2 className="text-4xl text-forest md:text-5xl">Overview</h2><p className="mt-6 text-xl leading-relaxed text-charcoal/80">{i.summary} This {i.days}-day route is a starting point. We adapt the pace, stays and activities to you.</p></Reveal>
        <ol className="mt-12 space-y-8">
          {i.plan.map((d, n) => (
            <Reveal key={d.title}><li className="grid gap-2 border-t border-forest/20 pt-6 sm:grid-cols-[8rem_1fr] sm:gap-8">
              <span className="text-sm uppercase tracking-[0.25em] text-terracotta">Day {n + 1}</span>
              <div><h3 className="text-2xl text-forest">{d.title}</h3><p className="mt-2 text-lg text-charcoal/75">{d.text}</p></div>
            </li></Reveal>
          ))}
        </ol>
      </section>
      <section className="bg-sand/30 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:px-8">
          <div><h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">Destinations</h3>
            <div className="flex flex-wrap gap-3">{i.destinations.map((s) => { const d = getDestination(s); return d && <Link key={s} href={`/destinations/${s}`} className="border border-forest px-5 py-2 text-forest hover:bg-forest hover:text-cream">{d.name}</Link>; })}</div></div>
          <div><h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">Experiences</h3>
            <div className="flex flex-wrap gap-3">{i.experiences.map((s) => { const e = getExperience(s); return e && <Link key={s} href={`/experiences/${s}`} className="border border-forest px-5 py-2 text-forest hover:bg-forest hover:text-cream">{e.name}</Link>; })}</div></div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:grid-cols-2 md:px-8">
        <div className="border border-dashed border-sand p-8"><BedDouble className="mb-3 h-6 w-6 text-forest" aria-hidden /><h3 className="text-2xl text-forest">Accommodation</h3><p className="mt-2 text-lg text-charcoal/70">Accommodation details to be added. Stays are selected to match your style and budget.</p></div>
        <div className="border border-dashed border-sand p-8"><Car className="mb-3 h-6 w-6 text-forest" aria-hidden /><h3 className="text-2xl text-forest">Transport</h3><p className="mt-2 text-lg text-charcoal/70">Transport details to be added. Road and domestic flight options are confirmed in your proposal.</p></div>
        <div><h3 className="mb-4 text-2xl text-forest">What&apos;s included</h3><ul className="space-y-3">{included.map((x) => <li key={x} className="flex gap-3 text-lg"><Check className="mt-1 h-5 w-5 shrink-0 text-forest" aria-hidden />{x}</li>)}</ul></div>
        <div><h3 className="mb-4 text-2xl text-forest">What&apos;s excluded</h3><ul className="space-y-3">{excluded.map((x) => <li key={x} className="flex gap-3 text-lg"><X className="mt-1 h-5 w-5 shrink-0 text-terracotta" aria-hidden />{x}</li>)}</ul></div>
        <p className="text-charcoal/60 md:col-span-2">Final inclusions are confirmed in your personalised proposal.</p>
      </section>
      <section className="mx-auto max-w-4xl px-5 pb-20"><SectionHeading eyebrow="FAQ" title="Itinerary Questions" /><FaqList items={faqs.slice(0, 4)} idPrefix="ifaq" /></section>
      <PlanSection />
    </>
  );
}
