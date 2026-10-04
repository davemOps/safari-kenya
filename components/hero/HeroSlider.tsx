"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import type { HeroSlide } from "@/data/hero";

const DURATION = 20000; // ms each slide stays before auto-advancing
const EASE = [0.22, 1, 0.36, 1] as const;

interface Props { slides: HeroSlide[]; nextSectionId?: string }

export function HeroSlider({ slides }: Props) {
  const count = slides.length;
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => { pausedRef.current = paused; }, [paused]);

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Autoplay. Re-runs on every index change, so any manual change restarts the 4s timer.
  useEffect(() => {
    if (reduce || count < 2) return;
    let raf = 0;
    let last = performance.now();
    let elapsed = 0;
    const step = (now: number) => {
      if (!pausedRef.current && !document.hidden) elapsed += now - last;
      last = now;
      if (elapsed >= DURATION) { setIndex((i) => (i + 1) % count); return; }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [index, count, reduce]);

  // ArrowLeft / ArrowRight while the hero is on screen.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName))) return;
      if (window.scrollY > window.innerHeight * 0.6) return;
      e.preventDefault();
      if (e.key === "ArrowLeft") prev(); else next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const item = (delay: number): Variants => ({
    hidden: { opacity: 0, y: reduce ? 0 : 22, filter: reduce ? "blur(0px)" : "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, delay, ease: EASE } },
  });
  const slide = slides[index];
  const arrow = "group pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-black/20 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black md:h-14 md:w-14";

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured journeys"
      className="relative h-[100svh] min-h-[620px] overflow-hidden bg-black text-cream"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Backgrounds: stacked and preloaded; the active one crossfades in with a gentle settle. */}
      <div className="absolute inset-0 bg-black" aria-hidden>
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <motion.div
              key={s.image}
              className="absolute inset-0 will-change-transform"
              initial={false}
              animate={active
                ? { opacity: 1, scale: 1, transition: { opacity: { duration: 1.5, delay: 0.2, ease: "easeInOut" }, scale: { duration: 6, ease: "easeOut" } } }
                : { opacity: 0, scale: reduce ? 1 : 1.06, transition: { opacity: { duration: 1.5, ease: "easeInOut" }, scale: { duration: 0, delay: 1.6 } } }}
              style={{ zIndex: active ? 1 : 0 }}
            >
              <SmartImage src={s.image} alt="" label={s.imageAlt} priority={i === 0} sizes="100vw" objectPosition={s.imagePosition} quiet />
            </motion.div>
          );
        })}
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-black/40" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-black/55 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-black/70 to-transparent" aria-hidden />

      {/* Content (centered) */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-5 pb-28 pt-28 text-center md:px-8 md:pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: reduce ? 0 : -10, filter: reduce ? "blur(0px)" : "blur(4px)", transition: { duration: 0.3, ease: "easeIn" } }}
            className="mx-auto max-w-3xl"
            aria-live="off"
          >
            <motion.h1 variants={item(0.3)} className="text-xl leading-[7.04] tracking-tight sm:text-7xl lg:text-5xl xl:text-[5rem]">{slide.title}</motion.h1>
            <motion.p variants={item(0.6)} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/95 md:text-xl">{slide.description}</motion.p>
            <motion.p variants={item(1.0)} className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/75 md:text-lg">{slide.secondaryDescription}</motion.p>
            <motion.div variants={item(1.35)} className="mt-9">
              <Link href={slide.cta.href} className="group inline-flex w-full items-center justify-center gap-3 border border-terracotta bg-terracotta px-7 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black sm:w-auto">
                {slide.cta.label}<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <>
          {/* Arrows: far left and far right edges. Centered vertically on desktop, bottom corners on mobile. */}
          <div className="pointer-events-none absolute inset-x-4 bottom-5 z-20 flex items-center justify-between md:inset-x-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
            <button type="button" onClick={prev} aria-label="Previous slide" className={arrow}>
              <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden />
            </button>
            <button type="button" onClick={next} aria-label="Next slide" className={arrow}>
              <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
            </button>
          </div>

          {/* Dots: bottom center. Active = ring, inactive = small grey dot. */}
          <div className="absolute inset-x-0 bottom-9 z-20 flex justify-center gap-3 md:bottom-8" role="group" aria-label="Choose slide">
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}: ${s.title}`}
                aria-current={i === index}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span className={`block rounded-full transition-all duration-300 ${i === index ? "h-3.5 w-3.5 border-2 border-white" : "h-2.5 w-2.5 bg-white/45 hover:bg-white/80"}`} />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}