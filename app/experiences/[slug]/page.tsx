import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { PlanSection } from "@/components/forms/PlanSection";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { experiences, getExperience } from "@/data/experiences";
import { getDestination } from "@/data/destinations";
import { buildMeta } from "@/lib/seo";

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return experiences.map((e) => ({ slug: e.slug })); }
export async function generateMetadata({ params }: P) {
  const e = getExperience((await params).slug);
  if (!e) return {};
  return buildMeta({ title: `${e.name} in Kenya`, description: `${e.tagline}. ${e.description.split(". ")[0]}.`, path: `/experiences/${e.slug}`, image: e.image });
}
export default async function Page({ params }: P) {
  const e = getExperience((await params).slug);
  if (!e) notFound();
  const dests = e.destinations.map((s) => getDestination(s)).filter((d) => !!d);
  return (
    <>
      <PageHero full title={e.name} eyebrow="Experiences" image={e.image} label={e.name} description={e.tagline}><ButtonLink href="/plan-your-trip">Plan Your Trip</ButtonLink></PageHero>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <Reveal><h2 className="text-4xl text-forest md:text-5xl">{e.name} in Kenya</h2><p className="mt-6 text-xl leading-relaxed text-charcoal/80">{e.description}</p></Reveal>
        <Reveal delay={0.1}><h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-terracotta">Highlights</h3>
          <ul className="space-y-4">{e.highlights.map((h) => <li key={h} className="flex gap-3 text-xl"><Check className="mt-1 h-5 w-5 shrink-0 text-forest" aria-hidden />{h}</li>)}</ul></Reveal>
      </section>
      <section className="bg-sand/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Where" title={`Best Places for ${e.name}`} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{dests.map((d) => d && <DestinationCard key={d.slug} d={d} />)}</div>
          <p className="mt-10 text-center"><Link href="/itineraries" className="uppercase tracking-[0.2em] text-forest underline">View sample itineraries</Link></p>
        </div>
      </section>
      <PlanSection />
    </>
  );
}
