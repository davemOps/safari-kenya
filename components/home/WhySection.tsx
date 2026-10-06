"use client";
import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";

// ---- Edit the heading, titles, text and image paths here ----
const heading = "Travel, Thoughtfully Designed";
const features = [
  { image: images.features.tailorMade, title: "Tailor-Made Journeys", text: "Every itinerary starts with your interests, your pace and the people you travel with, then we build the trip around you." },
  { image: images.features.localKnowledge, title: "Local Knowledge", text: "Kenya-based planning that understands distances, seasons and regions, so your route makes sense on the ground." },
  { image: images.features.authentic, title: "Authentic Experiences", text: "Time with local guides, communities and places beyond the obvious, for a deeper feel of Kenya." },
  { image: images.features.seamless, title: "Seamless Travel", text: "Transfers, stays and activities arranged in advance so you can simply enjoy the journey." },
];

function FeatureImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative mx-auto h-28 w-44">
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-1 border border-dashed border-charcoal/25 text-charcoal/40">
          <ImageIcon className="h-5 w-5" aria-hidden />
          <span className="text-[0.65rem] uppercase tracking-[0.2em]">Image coming soon</span>
        </div>
      ) : (
        <Image src={src} alt={alt} fill sizes="176px" className="object-contain" onError={() => setFailed(true)} />
      )}
    </div>
  );
}

export function WhySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="text-center text-3xl uppercase leading-tight tracking-wide text-charcoal md:text-4xl">{heading}</h2>
        </Reveal>
        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="text-center">
              <FeatureImage src={f.image} alt={f.title} />
              <h3 className="mt-8 text-xl uppercase tracking-wide text-terracotta md:text-2xl">{f.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-lg leading-relaxed text-charcoal/85">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}