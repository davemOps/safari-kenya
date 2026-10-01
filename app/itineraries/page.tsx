import { PageHero } from "@/components/hero/PageHero";
import { ItineraryCard } from "@/components/itineraries/ItineraryCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { itineraries } from "@/data/itineraries";
import { images } from "@/data/images";
import { buildMeta } from "@/lib/seo";
export const metadata = buildMeta({ title: "Kenya Itineraries", description: "Sample Kenya itineraries: Maasai Mara safari, Mount Kenya and Nanyuki, Rift Valley, Diani and Kenya's north coast.", path: "/itineraries", image: images.itineraries.kenyaSafari });
export default function Page() {
  return (
    <>
      <PageHero title="Itineraries" eyebrow="Journeys" image={images.itineraries.kenyaSafari} label="Itineraries" description="Starting points for your Kenya journey, adapted to your dates and interests." />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{itineraries.map((i, n) => <ItineraryCard key={i.slug} i={i} delay={(n % 3) * 0.06} />)}</div>
      </section>
      <CtaBand />
    </>
  );
}
