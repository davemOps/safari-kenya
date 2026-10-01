import { SmartImage } from "./SmartImage";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { images } from "@/data/images";
export function CtaBand({ title = "Your Kenya Journey Starts Here", image = images.landscape }: { title?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-forest py-28 md:py-40">
      <SmartImage src={image} alt="Kenya landscape" label="Kenya landscape" />
      <div className="absolute inset-0 bg-charcoal/60" aria-hidden />
      <Reveal className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-4xl text-white md:text-6xl">{title}</h2>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/plan-your-trip">Plan Your Trip</ButtonLink>
          <ButtonLink href="/destinations" variant="light">Explore Kenya</ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
