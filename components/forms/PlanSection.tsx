import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquiryForm } from "./InquiryForm";
export function PlanSection({ id = "plan" }: { id?: string }) {
  return (
    <section id={id} className="bg-sand/30 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading eyebrow="Plan Your Trip" title="Tell Us About Your Kenya Journey" sub="Share a few details and we'll help shape an itinerary around you." />
        <InquiryForm />
      </div>
    </section>
  );
}
