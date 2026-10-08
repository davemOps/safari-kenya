"use client";
import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { submitInquiry, type InquiryPayload } from "@/lib/inquiry";
import { whatsappLink, site } from "@/data/site";

const styles = ["Safari", "Beach", "Honeymoon", "Family", "Adventure", "Culture", "Private Tour", "Group Tour"];
const field = "w-full border border-forest/25 bg-white px-4 py-3 text-lg focus:border-forest focus:outline-none";
const label = "mb-1.5 block text-xs uppercase tracking-[0.2em] text-forest";

type Status = "idle" | "sending" | "sent" | "error" | "notConfigured";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const g = (k: string) => String(f.get(k) ?? "").trim();

    // Honeypot: real visitors never see or fill this field; bots often do.
    if (g("website")) { setStatus("sent"); form.reset(); return; }

    const payload: InquiryPayload = {
      firstName: g("firstName"), lastName: g("lastName"), email: g("email"), phone: g("phone"), travelers: g("travelers"),
      month: g("month"), duration: g("duration"), styles: f.getAll("styles").map(String), destinations: g("destinations"),
      budget: g("budget"), message: g("message"),
    };
    setStatus("sending");
    const res = await submitInquiry(payload);
    if (res === "sent") { setStatus("sent"); form.reset(); }
    else setStatus(res === "not-configured" ? "notConfigured" : "error");
  }

  const fallback = (
    <>Please email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> or <a className="underline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.</>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-6" aria-label="Plan your trip inquiry form">
      <div className="grid gap-6 sm:grid-cols-2">
        <div><label className={label} htmlFor="firstName">First Name</label><input id="firstName" name="firstName" required autoComplete="given-name" className={field} /></div>
        <div><label className={label} htmlFor="lastName">Last Name</label><input id="lastName" name="lastName" required autoComplete="family-name" className={field} /></div>
        <div><label className={label} htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" className={field} /></div>
        <div><label className={label} htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" className={field} /></div>
        <div><label className={label} htmlFor="travelers">Number of Travelers</label><input id="travelers" name="travelers" type="number" min={1} className={field} /></div>
        <div><label className={label} htmlFor="month">Travel Month</label><input id="month" name="month" type="month" className={field} /></div>
        <div><label className={label} htmlFor="duration">Duration</label>
          <select id="duration" name="duration" className={field} defaultValue=""><option value="">Select</option><option>1–3 days</option><option>4–5 days</option><option>6–7 days</option><option>8–10 days</option><option>10+ days</option></select></div>
        <div><label className={label} htmlFor="budget">Budget</label>
          <select id="budget" name="budget" className={field} defaultValue=""><option value="">Select</option><option>Flexible</option><option>Mid-range</option><option>Premium</option><option>Luxury</option></select></div>
      </div>
      <fieldset>
        <legend className={label}>Travel Style</legend>
        <div className="flex flex-wrap gap-3">
          {styles.map((s) => (
            <label key={s} className="cursor-pointer">
              <input type="checkbox" name="styles" value={s} className="peer sr-only" />
              <span className="block border border-forest/25 bg-white px-4 py-2 transition-colors peer-checked:border-forest peer-checked:bg-forest peer-checked:text-cream peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-terracotta">{s}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div><label className={label} htmlFor="destinations">Destinations</label><input id="destinations" name="destinations" placeholder="e.g. Maasai Mara, Diani" className={field} /></div>
      <div><label className={label} htmlFor="message">Message</label><textarea id="message" name="message" rows={5} className={field} /></div>

      {/* Honeypot (hidden from people) */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 bg-terracotta px-7 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8f4e30] disabled:cursor-not-allowed disabled:opacity-60">
          <Send className="h-4 w-4" aria-hidden />{status === "sending" ? "Sending…" : "Start Planning"}
        </button>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-forest px-7 py-4 text-sm uppercase tracking-[0.2em] text-forest transition-colors hover:bg-forest hover:text-cream">
          <MessageCircle className="h-4 w-4" aria-hidden />WhatsApp Us
        </a>
      </div>

      <div role="status" aria-live="polite">
        {status === "sent" && <p className="border-l-2 border-forest bg-white p-4 text-lg">Thank you, your inquiry has been sent. We&apos;ll be in touch soon.</p>}
        {status === "error" && <p className="border-l-2 border-terracotta bg-white p-4 text-lg text-charcoal/80">Sorry, something went wrong and your message was not sent. {fallback}</p>}
        {status === "notConfigured" && <p className="border-l-2 border-terracotta bg-white p-4 text-lg text-charcoal/80">The form isn&apos;t set up to send email yet. {fallback}</p>}
      </div>
    </form>
  );
}