"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/data/images";

const heading = "Kenya, Your Way";
const paragraphs = [
  "No two travelers want the same Kenya. Some come for the wildlife, others for mountain air, coastal calm or a deeper look at local culture.",
  "We shape each journey around your interests, your pace and the people you travel with, so every day feels considered rather than scheduled.",
  "From the savannah of the Maasai Mara to the highlands around Mount Kenya and the Indian Ocean coast, we help you choose the places that fit you best.",
  "Whether this is your first visit or your fifth, tell us what you imagine and we will help turn it into a journey you will remember.",
];
const cta = { label: "Let's Plan Your Trip", href: "/plan-your-trip" };
const caption = "We partner with local communities throughout Africa to take every measure necessary to ensure we affect positive change and enrich lives throughout every journey."; // set to "" to hide

export function IntroSection() {
  const [playing, setPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="explore" className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8 lg:gap-20">

        <Reveal>
          <h2 className="text-3xl uppercase leading-tight tracking-wide text-charcoal md:text-4xl">{heading}</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-charcoal/85 md:text-xl">
            {paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="mt-9">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-video overflow-hidden bg-sand/40">
            {playing && !videoFailed ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={images.intro.video}
                poster={images.intro.videoPoster}
                controls
                autoPlay
                playsInline
                onError={() => { setVideoFailed(true); setPlaying(false); }}
              />
            ) : (
              <>
                <SmartImage src={images.intro.videoPoster} alt="Watch our introduction to travel in Kenya" label="Video poster" sizes="(min-width:768px) 50vw, 100vw" />
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play introduction video"
                  className="group absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-black/30 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                    <Play className="ml-1 h-7 w-7 fill-current" aria-hidden />
                  </span>
                </button>
              </>
            )}
          </div>

          <div className="relative mt-5 aspect-[3/2] overflow-hidden bg-sand/40">
            <SmartImage src={images.intro.photo} alt="Traveling in Kenya" label="Kenya photograph" sizes="(min-width:768px) 50vw, 100vw" />
          </div>

          {caption && <p className="mt-4 text-lg italic leading-relaxed text-charcoal/80">{caption}</p>}
        </Reveal>
      </div>
    </section>
  );
}