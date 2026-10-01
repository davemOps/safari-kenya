import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, Compass, MapPin } from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ItineraryCard } from "@/components/itineraries/ItineraryCard";
import { FaqList } from "@/components/faq/FaqList";
import { PlanSection } from "@/components/forms/PlanSection";
import { destinations, getDestination, themeImage } from "@/data/destinations";
import { itineraries } from "@/data/itineraries";
import { experiences } from "@/data/experiences";
import { destinationFaqs } from "@/data/faqs";
import { images } from "@/data/images";
import { buildMeta } from "@/lib/seo";

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return destinations.map((d) => ({ slug: d.slug })); }
export async function generateMetadata({ params }: P) {
  const d = getDestination((await params).slug);
  if (!d) return {};
  return buildMeta({ title: `${d.name} Tours & Travel Guide`, description: `${d.shortDescription} Plan your ${d.name} trip with a tailor-made Kenya itinerary.`, path: `/destinations/${d.slug}`, image: d.image });
}

export default async function Page({ params }: P) {
  const d = getDestination((await params).slug);
  if (!d) notFound();
  const nearby = d.nearbyDestinations.map((s) => getDestination(s)).filter((x) => !!x);
  const matched = itineraries.filter((i) => i.destinations.includes(d.slug));
  const suggested = matched.length ? matched : itineraries.filter((i) => ["kenya-safari-coast", "nairobi-maasai-mara"].includes(i.slug));
  const exps = experiences.filter((e) => d.experiences.some((x) => e.theme === x || e.name.startsWith(x)) || e.destinations.includes(d.slug));
  const gallery = [d.image, themeImage[d.theme], images.landscape];
  return (
    <>
      <PageHero full title={d.name} eyebrow={`${d.region} · Kenya`} image={d.image} label={d.name} description={d.shortDescription}>
        <ButtonLink href="/plan-your-trip">Plan Your Trip</ButtonLink>
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <Reveal className="md:col-span-7">
          <h2 className="text-4xl text-forest md:text-5xl">Discover {d.name}</h2>
          <p className="mt-6 text-xl leading-relaxed text-charcoal/80">{d.description}</p>
          <h3 className="mt-10 text-2xl text-forest">Why visit</h3>
          <p className="mt-3 text-xl leading-relaxed text-charcoal/80">{d.whyVisit}</p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5">
          <dl className="space-y-6 border border-sand bg-white p-8">
            <div><dt className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-terracotta"><Clock className="h-4 w-4" aria-hidden />Suggested duration</dt><dd className="mt-1 text-xl">{d.suggestedDuration}</dd></div>
            <div><dt className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-terracotta"><CalendarDays className="h-4 w-4" aria-hidden />Best time to visit</dt><dd className="mt-1 text-xl">{d.bestTime}</dd></div>
            <div><dt className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-terracotta"><MapPin className="h-4 w-4" aria-hidden />Region</dt><dd className="mt-1 text-xl">{d.region}</dd></div>
          </dl>
        </Reveal>
      </section>

      <section className="bg-forest py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading light eyebrow="Things to Do" title={`Experiences in ${d.name}`} />
          <ul className="grid gap-x-12 gap-y-5 md:grid-cols-2">
            {d.thingsToDo.map((t) => <li key={t} className="flex gap-3 border-b border-white/15 pb-5 text-xl text-cream"><Compass className="mt-1 h-5 w-5 shrink-0 text-sand" aria-hidden />{t}</li>)}
          </ul>
        </div>
      </section>

      {exps.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading eyebrow="Travel Styles" title={`Ways to Experience ${d.name}`} />
          <div className="flex flex-wrap justify-center gap-3">
            {exps.map((e) => <Link key={e.slug} href={`/experiences/${e.slug}`} className="border border-forest px-5 py-2 text-forest transition-colors hover:bg-forest hover:text-cream">{e.name}</Link>)}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <SectionHeading eyebrow="Gallery" title={`${d.name} in Pictures`} />
        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.06}><div className="relative aspect-[4/3] overflow-hidden bg-sand/40"><SmartImage src={src} alt={`${d.name} gallery ${i + 1}`} label={d.name} sizes="(min-width:768px) 33vw, 100vw" /></div></Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Itineraries" title={matched.length ? `Journeys Including ${d.name}` : `Journeys That Can Include ${d.name}`} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{suggested.map((i) => <ItineraryCard key={i.slug} i={i} />)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading eyebrow="Nearby" title="Nearby Destinations" />
        <div className="flex flex-wrap justify-center gap-3">
          {nearby.map((n) => n && <Link key={n.slug} href={`/destinations/${n.slug}`} className="border border-forest px-5 py-2 text-forest transition-colors hover:bg-forest hover:text-cream">{n.name}</Link>)}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-20 md:pb-28">
        <SectionHeading eyebrow="FAQ" title={`${d.name} FAQs`} />
        <FaqList items={destinationFaqs(d.name, d.bestTime, d.suggestedDuration)} idPrefix="dfaq" />
      </section>
      <PlanSection />
    </>
  );
}
