import { PageHero } from "@/components/hero/PageHero";
import { PlanSection } from "@/components/forms/PlanSection";
import { images } from "@/data/images";
import { buildMeta } from "@/lib/seo";
export const metadata = buildMeta({ title: "Plan Your Kenya Trip", description: "Plan a tailor-made Kenya safari, beach holiday or adventure. Tell us your dates, interests and group size.", path: "/plan-your-trip", image: images.hero });
export default function Page() {
  return (
    <>
      <PageHero title="Plan Your Trip" eyebrow="Start Here" image={images.hero} label="Kenya" description="Share a few details and we'll help shape a journey around you." />
      <PlanSection id="form" />
    </>
  );
}
