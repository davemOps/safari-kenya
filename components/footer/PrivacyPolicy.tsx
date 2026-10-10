"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { site } from "@/data/site";

const updated = "October 2026";

const sections: { title: string; rows: [string, string][] }[] = [
  {
    title: "Overview",
    rows: [
      ["Who we are", `${site.name} plans tailor-made journeys across Kenya. This page explains what personal information we collect through this website and how we use it.`],
      ["Contact", `Questions about your data? Email us at ${site.email}.`],
    ],
  },
  {
    title: "Information we collect",
    rows: [
      ["Inquiry forms", "When you send us a message or trip inquiry, we receive what you enter: your name, email, phone number, travel dates, group size, budget, travel style, destinations of interest and your message."],
      ["WhatsApp", "If you tap the WhatsApp button, you leave this website and continue in WhatsApp. Your conversation is then also subject to WhatsApp's own terms and privacy policy."],
      ["Travel assistant", "The chat assistant runs in your browser and gives automated answers. We do not receive or store what you type into it."],
    ],
  },
  {
    title: "How we use it",
    rows: [
      ["Our purpose", "We use your details only to reply to your inquiry, plan and arrange your trip, and keep in touch about it."],
      ["Email delivery", "Form submissions are delivered to our inbox through EmailJS, a third-party email service."],
      ["Sharing", "Where it is needed to arrange your trip, we may share relevant details (such as names and travel dates) with the providers involved. We do not sell your personal information."],
    ],
  },
  {
    title: "Cookies",
    rows: [
      ["Our use", "We do not use advertising or tracking cookies on this website. Our hosting and security providers may use essential technical cookies to keep the site secure and working."],
    ],
  },
  {
    title: "Your rights",
    rows: [
      ["Keeping data", "We keep inquiry details only as long as we need them to reply, plan your trip, and meet any legal obligations."],
      ["Your choices", `Under Kenya's Data Protection Act, 2019, you may ask to see, correct or delete the personal information we hold about you. Email ${site.email} and we will respond.`],
      ["Children", "This website is not directed at children, and we do not knowingly collect information from them."],
      ["Changes", "We may update this policy from time to time. The date at the top shows when it last changed."],
    ],
  },
];

export function PrivacyPolicyLink({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`underline-offset-4 transition-colors hover:text-white hover:underline ${className}`}>
        Privacy Policy
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/65 p-4" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="privacy-title" className="relative flex max-h-[88vh] w-full max-w-xl flex-col overflow-hidden bg-white text-left text-charcoal shadow-2xl">
            <div className="flex items-center justify-between gap-4 bg-forest py-4 pl-6 pr-14 text-cream">
              <h2 id="privacy-title" className="text-xl font-bold">{site.name}</h2>
              <p className="text-sm font-bold underline underline-offset-4">Updated {updated}</p>
            </div>
            <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Close privacy policy" className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-white text-charcoal shadow transition-colors hover:bg-cream">
              <X className="h-4 w-4" aria-hidden />
            </button>

            <div className="overflow-y-auto p-4">
              <div className="border border-charcoal/10 p-5">
                <h3 className="text-2xl font-bold">Privacy Policy</h3>
                <p className="mt-2 text-lg leading-relaxed text-charcoal/80">Your privacy matters to us. Here is a plain summary of how this website handles your information.</p>
                {sections.map((s) => (
                  <div key={s.title} className="mt-6">
                    <h4 className="text-sm font-bold uppercase tracking-wide">{s.title}</h4>
                    <dl className="mt-3 border-t border-charcoal/15">
                      {s.rows.map(([k, v]) => (
                        <div key={k} className="grid gap-1 border-b border-charcoal/15 py-3 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
                          <dt className="text-base font-bold">{k}</dt>
                          <dd className="text-base leading-relaxed text-charcoal/85">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}