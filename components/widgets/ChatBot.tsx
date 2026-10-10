"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessagesSquare, Send, X } from "lucide-react";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { itineraries } from "@/data/itineraries";
import { faqs } from "@/data/faqs";
import { site, whatsappLink } from "@/data/site";

type Msg = { from: "bot" | "user"; text: string; links?: { label: string; href: string }[] };

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
const has = (t: string, words: string[]) => words.some((w) => t.includes(w));
const alias: Record<string, string> = { mara: "maasai-mara", masai: "maasai-mara", "mt kenya": "mount-kenya" };

const wa = { label: "Chat on WhatsApp", href: whatsappLink() };
const plan = { label: "Plan your trip", href: "/plan-your-trip" };

function reply(input: string): Msg {
  const t = norm(input);
  const bot = (text: string, links?: Msg["links"]): Msg => ({ from: "bot", text, links });

  if (!t) return bot("Please type a question, for example “best time to visit Diani”.");
  if (has(t, ["thank", "asante"])) return bot("You're welcome! Ask me anything else about Kenya, or send us an inquiry when you're ready.", [plan]);

  // Destination questions
  const d =
    destinations.find((x) => t.includes(norm(x.name)) || t.includes(x.slug.replace(/-/g, " "))) ??
    destinations.find((x) => Object.entries(alias).some(([k, v]) => v === x.slug && t.includes(k)));
  if (d) {
    const link = { label: `View ${d.name}`, href: `/destinations/${d.slug}` };
    if (has(t, ["best time", "when", "season", "weather", "month", "climate"])) return bot(`${d.name}: ${d.bestTime}`, [link, plan]);
    if (has(t, ["how long", "how many days", "duration", "days", "stay", "nights"])) return bot(`For ${d.name} we suggest ${d.suggestedDuration}, depending on how you'd like to combine it with other regions.`, [link, plan]);
    if (has(t, ["do", "activit", "see", "attraction", "visit", "things"])) return bot(`Things to do in ${d.name}:\n• ${d.thingsToDo.slice(0, 4).join("\n• ")}`, [link, plan]);
    return bot(`${d.description}\n\nBest time: ${d.bestTime}`, [link, plan]);
  }

  // Experiences
  const e = experiences.find((x) => t.includes(x.slug) || t.includes(norm(x.name).split(" ")[0]));
  if (e) {
    const places = e.destinations.map((s) => destinations.find((x) => x.slug === s)).filter(Boolean) as typeof destinations;
    return bot(`${e.name}: ${e.description}`, [{ label: `About ${e.name}`, href: `/experiences/${e.slug}` }, ...places.slice(0, 3).map((p) => ({ label: p.name, href: `/destinations/${p.slug}` }))]);
  }

  if (has(t, ["hello", "hi", "hey", "jambo", "habari", "good morning", "good afternoon", "good evening"]) && t.split(" ").length <= 4)
    return bot("Jambo! Ask me about a destination, for example “things to do in Lamu”, or pick one of the options below.");

  if (has(t, ["itinerar", "route", "package", "tour"])) {
    return bot("Here are some journeys to begin with. We adapt each one to your dates and interests:", itineraries.map((i) => ({ label: `${i.title} (${i.days} days)`, href: `/itineraries/${i.slug}` })));
  }
  if (has(t, ["destination", "where", "place", "region", "county", "go in kenya"]))
    return bot("We cover these regions across Kenya. Tap one to learn more, or ask me about it:", destinations.map((x) => ({ label: x.name, href: `/destinations/${x.slug}` })));
  if (has(t, ["best time", "when to", "season", "weather", "climate", "migration"]))
    return bot("It depends on where you're going. Tell me a destination (for example “best time for Maasai Mara”) and I'll share it, or read our guide:", [{ label: "Best Time to Visit Kenya", href: "/journal/best-time-to-visit-kenya" }]);
  if (has(t, ["private"])) return bot(faqs[2].a, [plan]);
  if (has(t, ["accommodation", "hotel", "lodge", "camp", "where to stay"])) return bot(faqs[3].a, [plan]);
  if (has(t, ["customi", "custom", "tailor", "change"])) return bot(faqs[1].a, [plan]);
  if (has(t, ["combine", "safari and beach", "safari and coast"])) return bot(faqs[4].a, [plan]);
  if (has(t, ["how many days", "how long"])) return bot(faqs[5].a, [plan]);
  if (has(t, ["advance", "book early", "when should i book"])) return bot(faqs[6].a, [plan]);
  if (has(t, ["price", "cost", "how much", "budget", "quote", "rate", "pay", "book"]))
    return bot("Pricing depends on your dates, group size, accommodation and activities, so we prepare a personal quote. Send us a few details or message us on WhatsApp.", [plan, wa]);
  if (has(t, ["contact", "phone", "call", "email", "whatsapp", "talk", "human", "agent", "speak"]))
    return bot(`You can reach us at ${site.email} or ${site.phone}. WhatsApp is usually the quickest way to get a reply.`, [wa, { label: "Contact page", href: "/contact" }]);

  return bot("I'm an automated assistant, so I may not have that answer. You can ask about destinations, the best time to visit, itineraries or travel styles, or talk to our team directly.", [wa, plan]);
}

const quick = ["Destinations", "Best time to visit", "Safari", "Beach", "Itineraries", "Contact"];

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: `Jambo! I'm the ${site.name} assistant. Ask me about destinations, the best time to visit or travel styles. I'm an automated helper, and our team is on WhatsApp for anything personal.` },
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }); }, [msgs, open]);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = (value: string) => {
    const v = value.trim();
    if (!v) return;
    setMsgs((m) => [...m, { from: "user", text: v }, reply(v)]);
    setText("");
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open travel assistant"
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-white shadow-lg ring-4 ring-white/70 transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
      >
        <MessagesSquare className="h-6 w-6" aria-hidden />
      </button>
    );
  }

  return (
    <section
      role="dialog"
      aria-label="Travel assistant"
      className="fixed bottom-24 right-5 z-40 flex h-[min(32rem,calc(100svh-8rem))] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10"
    >
      <header className="flex items-center justify-between bg-terracotta px-4 py-3 text-white">
        <div>
          <p className="text-lg font-bold leading-tight">Travel Assistant</p>
          <p className="text-xs text-white/80">Automated answers about Kenya</p>
        </div>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant" className="rounded-full p-1.5 hover:bg-white/10">
          <X className="h-5 w-5" aria-hidden />
        </button>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto bg-white px-4 py-4" aria-live="polite">
        {msgs.map((m, i) => (
          <div key={i} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
            <div className={`max-w-[88%] whitespace-pre-line rounded-lg px-3.5 py-2.5 text-[1.05rem] leading-snug ${m.from === "user" ? "bg-terracotta text-white" : "bg-cream text-charcoal"}`}>
              {m.text}
              {m.links && (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {m.links.map((l) => {
                    const cls = "rounded-full border border-terracotta/50 bg-white px-3 py-1 text-sm text-terracotta transition-colors hover:bg-terracotta hover:text-white";
                    return l.href.startsWith("http")
                      ? <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>{l.label}</a>
                      : <Link key={l.label} href={l.href} className={cls}>{l.label}</Link>;
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
        {msgs.length === 1 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {quick.map((q) => (
              <button key={q} type="button" onClick={() => send(q)} className="rounded-full border border-charcoal/30 px-3 py-1 text-sm text-charcoal transition-colors hover:bg-charcoal hover:text-cream">{q}</button>
            ))}
          </div>
        )}
        <div ref={endRef} />
      </div>

      <form onSubmit={(e) => { e.preventDefault(); send(text); }} className="flex items-center gap-2 border-t border-charcoal/10 bg-white p-3">
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask about a destination…"
          aria-label="Your message"
          maxLength={200}
          className="min-w-0 flex-1 rounded-full border border-charcoal/20 px-4 py-2 text-base outline-none focus:border-terracotta"
        />
        <button type="submit" aria-label="Send message" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal text-white transition-colors hover:bg-terracotta">
          <Send className="h-4 w-4" aria-hidden />
        </button>
      </form>
    </section>
  );
}