import { PageHero } from "@/components/hero/PageHero";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { experiences } from "@/data/experiences";
import { images } from "@/data/images";
import { buildMeta } from "@/lib/seo";
export const metadata = buildMeta({ title: "Kenya Experiences", description: "Kenya safari, beach holidays, mountain adventures, culture, honeymoons and family travel designed around you.", path: "/experiences", image: images.safari });
export default function Page() {
  return (
    <>
      <PageHero title="Experiences" eyebrow="Travel Your Way" image={images.safari} label="Experiences" description="Choose the kind of Kenya that speaks to you." />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{experiences.map((e, i) => <ExperienceCard key={e.slug} e={e} delay={(i % 4) * 0.06} />)}</div>
      </section>
      <CtaBand />
    </>
  );
}
