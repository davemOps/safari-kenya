import { PageHero } from "@/components/hero/PageHero";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { destinations } from "@/data/destinations";
import { images } from "@/data/images";
import { buildMeta } from "@/lib/seo";
export const metadata = buildMeta({ title: "Kenya Destinations", description: "Explore Kenya destinations from Nairobi and Maasai Mara to Mount Kenya, Nanyuki, Diani, Lamu and the coast.", path: "/destinations", image: images.landscape });
export default function Page() {
  return (
    <>
      <PageHero title="Destinations" eyebrow="Explore Kenya" image={images.landscape} label="Kenya" description="From the highlands and Great Rift Valley to the savannah and Indian Ocean coast." />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{destinations.map((d, i) => <DestinationCard key={d.slug} d={d} delay={(i % 4) * 0.06} />)}</div>
      </section>
      <CtaBand />
    </>
  );
}
