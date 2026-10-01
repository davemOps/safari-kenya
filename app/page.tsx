import Link from "next/link";
import { ArrowRight, Compass, Handshake, MapPin, Route, Sparkles } from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { ItineraryCard } from "@/components/itineraries/ItineraryCard";
import { JournalCard } from "@/components/journal/JournalCard";
import { PlanSection } from "@/components/forms/PlanSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { FaqList } from "@/components/faq/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { destinations, getDestination, featuredDestinationSlugs } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { itineraries } from "@/data/itineraries";
import { articles } from "@/data/journal";
import { faqs } from "@/data/faqs";
import { images } from "@/data/images";

const why = [
  { icon: Compass, t: "Tailor-Made Journeys", d: "Every itinerary starts with your interests, pace and travel style." },
  { icon: MapPin, t: "Local Knowledge", d: "Kenya-based planning that understands distances, seasons and regions." },
  { icon: Sparkles, t: "Authentic Experiences", d: "Time with guides, communities and places beyond the obvious." },
  { icon: Route, t: "Seamless Travel", d: "Transfers, stays and activities arranged so you can simply enjoy the trip." },
];
const more = [
  ["Wildlife", "Big cats, elephants, rhino and birds across varied habitats."], ["Mountains", "Glaciated peaks, moorland and highland forest."],
  ["Beaches", "Warm Indian Ocean water and coral reefs."], ["Culture", "Living traditions of Maasai, Samburu and Swahili communities."],
  ["Food", "From nyama choma to Swahili coastal cooking."], ["History", "Ancient trade ports, forts and ruins."],
  ["Adventure", "Hiking, cycling, diving and kite-surfing."], ["Hospitality", "Warm welcomes that make Kenya memorable."],
];
const steps = [["01", "Tell Us Your Vision", "Share your dates, interests and ideas."], ["02", "We Design Your Journey", "We shape a route and pace that suits you."], ["03", "We Handle the Details", "Stays, transfers and activities are organised."], ["04", "You Experience Kenya", "Travel with confidence and enjoy every moment."]];

export default function Home() {
  const featured = featuredDestinationSlugs.map((s) => getDestination(s)!);
  return (
    <>
      <PageHero full title="Journeys Beyond the Ordinary" eyebrow="Discover Kenya · Kenya • East Africa" image={images.hero} label="Kenya"
        description="From the open plains of the Maasai Mara to the turquoise waters of the Indian Ocean, discover Kenya through journeys designed around you.">
        <ButtonLink href="/plan-your-trip">Plan Your Journey</ButtonLink>
        <ButtonLink href="/destinations" variant="light">Explore Destinations</ButtonLink>
      </PageHero>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <Reveal><div className="relative aspect-[4/5] overflow-hidden bg-sand/40"><SmartImage src={images.landscape} alt="Kenya landscape" label="Kenya landscape" sizes="(min-width:768px) 50vw, 100vw" /></div></Reveal>
        <Reveal delay={0.1}>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-terracotta">Welcome</p>
          <h2 className="text-4xl text-forest md:text-6xl">Kenya, Your Way</h2>
          <p className="mt-6 text-xl leading-relaxed text-charcoal/80">No two travelers want the same Kenya. Some come for the wildlife, others for mountain air, coastal calm or a deeper look at local culture.</p>
          <p className="mt-4 text-xl leading-relaxed text-charcoal/80">We design each journey around your interests, your pace and the people you travel with, so the trip feels like yours from the first conversation to the last sunset.</p>
          <div className="mt-8"><ButtonLink href="/about" variant="outline" arrow>Our Approach</ButtonLink></div>
        </Reveal>
      </section>

      <section className="bg-forest py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading light eyebrow="Why Travel With Us" title="Travel, Thoughtfully Designed" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.08}>
                <w.icon className="mb-5 h-7 w-7 text-sand" aria-hidden />
                <h3 className="text-sm uppercase tracking-[0.25em] text-cream">{w.t}</h3>
                <p className="mt-3 text-lg leading-relaxed text-cream/75">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Destinations" title="Explore Kenya" sub="From the highlands and Great Rift Valley to the savannah and Indian Ocean coast." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => <DestinationCard key={d.slug} d={d} delay={(i % 4) * 0.06} />)}
        </div>
      </section>

      <section className="space-y-20 bg-white py-20 md:space-y-28 md:py-28">
        {featured.map((d, i) => (
          <div key={d.slug} className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:grid-cols-12 md:gap-12 md:px-8">
            <Reveal className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
              <div className="relative aspect-[16/10] overflow-hidden bg-sand/40"><SmartImage src={d.image} alt={`${d.name}, Kenya`} label={d.name} sizes="(min-width:768px) 58vw, 100vw" /></div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-terracotta">Featured · {d.region}</p>
              <h3 className="text-4xl text-forest md:text-5xl">{d.name}</h3>
              <p className="mt-5 text-xl leading-relaxed text-charcoal/80">{d.description}</p>
              <Link href={`/destinations/${d.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-forest hover:text-terracotta">Discover {d.name} <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </Reveal>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Experiences" title="Travel Your Way" sub="Choose the kind of Kenya that speaks to you." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((e, i) => <ExperienceCard key={e.slug} e={e} delay={(i % 4) * 0.06} />)}
        </div>
      </section>

      <section className="bg-sand/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Featured Journeys" title="Journeys to Begin With" sub="Starting points that we adapt to your dates and interests." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {itineraries.map((i, n) => <ItineraryCard key={i.slug} i={i} delay={(n % 3) * 0.06} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Editorial" title="More Than a Safari" sub="Kenya is a country of many worlds. Come for the wildlife and stay for everything else." />
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {[images.safari, images.culture, images.beach, images.adventure].map((src, i) => (
              <Reveal key={src} delay={i * 0.06} className={i % 3 === 0 ? "mt-0" : "mt-8"}>
                <div className="relative aspect-[3/4] overflow-hidden bg-sand/40"><SmartImage src={src} alt="Kenya travel" label="Kenya" sizes="(min-width:1024px) 25vw, 50vw" /></div>
              </Reveal>
            ))}
          </div>
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {more.map(([t, d]) => (
              <Reveal key={t}><div className="border-t border-forest/20 pt-4"><dt className="text-2xl text-forest">{t}</dt><dd className="mt-1 text-lg text-charcoal/70">{d}</dd></div></Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading light eyebrow="How It Works" title="From First Idea to Final Sunset" />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.08}><li className="list-none"><span className="text-5xl text-sand/60">{n}</span><h3 className="mt-3 text-2xl text-cream">{t}</h3><p className="mt-2 text-lg text-cream/70">{d}</p></li></Reveal>
            ))}
          </ol>
          <div className="mt-12 flex items-center justify-center gap-2 text-sand"><Handshake className="h-5 w-5" aria-hidden /><span className="text-sm uppercase tracking-[0.25em]">One conversation at a time</span></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Journal" title="Stories & Guides" sub="Practical advice and inspiration for planning Kenya." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => <JournalCard key={a.slug} a={a} delay={(i % 3) * 0.06} />)}
        </div>
      </section>

      <PlanSection />
      <Testimonials />
      <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <SectionHeading eyebrow="FAQ" title="Questions, Answered" />
        <FaqList items={faqs} />
      </section>
      <CtaBand />
    </>
  );
}
