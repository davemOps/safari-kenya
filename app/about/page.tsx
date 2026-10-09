import { PageHero } from "@/components/hero/PageHero";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { images } from "@/data/images";
import { buildMeta } from "@/lib/seo";
export const metadata = buildMeta({ title: "About Us", description: "About our approach to Kenya travel: personal planning, local expertise and responsible tourism.", path: "/about", image: images.about.ourStory });
const blocks = [
  { t: "Our Story", img: images.about.ourStory, p: ["We focus on combining breathtaking wildlife experiences with luxury accommodations, exclusive tours and authentic interactions that will complement your interests, creating unforgettable and treasured memories.", "We design adventures from the ground up around your goals and needs so you can experience Africa just as you’ve always dreamed."] },
  { t: "Our Approach", img: images.about.localExperience, p: ["We design journeys around the traveler. We start with a conversation about interests, pace and the people travelling together.", "From there we shape an itinerary and refine it together until it feels right."] },
  // {// t: "Kenyan Expertise", img: images.about.localExperience, p: ["With deep roots in Africa, we offer exclusive, unique opportunities to get involved with conservation efforts and immerse yourself within unfamiliar cultures.", "Kenya's regions differ greatly in distance, climate and character, and good planning respects that."] },
  { t: "Responsible Travel", img: images.about.responsibleTravel, p: ["Travel can support conservation and communities when it is done thoughtfully. We aim to favour operators and experiences that benefit local people and wildlife.", "We partner with local communities throughout Africa to take every measure necessary to ensure we affect positive change and enrich lives throughout every journey."] },
];
export default function Page() {
  return (
    <>
      <PageHero title="About" eyebrow="Our Story" image={images.about.ourStory} label="About" description="Personal, thoughtful travel across Kenya." />
      <section className="mx-auto max-w-7xl space-y-24 px-5 py-20 md:px-8 md:py-28">
        {blocks.map((b, i) => (
          <div key={b.t} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal className={i % 2 ? "md:order-2" : ""}><div className="relative aspect-[4/3] overflow-hidden bg-sand/40"><SmartImage src={b.img} alt={b.t} label={b.t} sizes="(min-width:768px) 50vw, 100vw" /></div></Reveal>
            <Reveal delay={0.1}><h2 className="text-4xl text-forest md:text-5xl">{b.t}</h2><div className="mt-5 space-y-4 text-xl leading-relaxed text-charcoal/80">{b.p.map((x) => <p key={x}>{x}</p>)}</div></Reveal>
          </div>
        ))}
        <Reveal className="mx-auto max-w-3xl text-center"><h2 className="text-4xl text-forest md:text-5xl">Why Kenya</h2>
          <p className="mt-5 text-xl leading-relaxed text-charcoal/80">Savannah, highlands, snow-capped peaks, coral reefs and Swahili towns, all within a single country. Kenya rewards both first-time visitors and returning travelers.</p></Reveal>
      </section>
      <CtaBand />
    </>
  );
}
