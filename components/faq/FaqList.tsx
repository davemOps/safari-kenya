"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/faqs";

export function FaqList({ items, idPrefix = "faq" }: { items: Faq[]; idPrefix?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-forest/15 border-y border-forest/15">
      {items.map((f, i) => (
        <div key={f.q}>
          <h3>
            <button type="button" aria-expanded={open === i} aria-controls={`${idPrefix}-${i}`} onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left text-xl text-forest md:text-2xl">
              {f.q}
              <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} aria-hidden />
            </button>
          </h3>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div id={`${idPrefix}-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                <p className="pb-6 pr-10 text-lg leading-relaxed text-charcoal/75">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
