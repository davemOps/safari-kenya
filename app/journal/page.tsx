import { PageHero } from "@/components/hero/PageHero";
import { JournalCard } from "@/components/journal/JournalCard";
import { articles } from "@/data/journal";
import { images } from "@/data/images";
import { buildMeta } from "@/lib/seo";
export const metadata = buildMeta({ title: "Kenya Travel Journal", description: "Kenya travel guides: best time to visit, first-timer advice, weekend getaways from Nairobi, Nanyuki and the coast.", path: "/journal", image: images.journal.bestTimeKenya });
export default function Page() {
  return (
    <>
      <PageHero title="Journal" eyebrow="Stories & Guides" image={images.journal.bestTimeKenya} label="Journal" description="Practical advice and inspiration for planning Kenya." />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{articles.map((a, i) => <JournalCard key={a.slug} a={a} delay={(i % 3) * 0.06} />)}</div>
      </section>
    </>
  );
}
