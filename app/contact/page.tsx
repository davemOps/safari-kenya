import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { FaqList } from "@/components/faq/FaqList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { images } from "@/data/images";
import { site, whatsappLink } from "@/data/site";
import { buildMeta } from "@/lib/seo";
export const metadata = buildMeta({ title: "Contact", description: "Contact us to start planning your Kenya tour, safari or beach holiday.", path: "/contact", image: images.landscape });
export default function Page() {
  const items = [
    { icon: Mail, label: "Email", text: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", text: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: MessageCircle, label: "WhatsApp", text: "Chat with us", href: whatsappLink() },
    { icon: MapPin, label: "Location", text: site.location },
  ];
  return (
    <>
      <PageHero title="Contact" eyebrow="Get in Touch" image={images.landscape} label="Contact" description="Tell us about your plans and we'll help shape the journey." />
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-8 lg:grid-cols-5">
        <ul className="space-y-8 lg:col-span-2">
          {items.map((it) => (
            <li key={it.label} className="flex gap-4"><it.icon className="mt-1 h-5 w-5 text-terracotta" aria-hidden />
              <div><p className="text-xs uppercase tracking-[0.25em] text-terracotta">{it.label}</p>
                {it.href ? <a href={it.href} className="text-xl hover:underline" {...(it.label === "WhatsApp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{it.text}</a> : <p className="text-xl">{it.text}</p>}</div></li>
          ))}
        </ul>
        <div className="lg:col-span-3"><InquiryForm /></div>
      </section>
      <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-5 pb-20 md:pb-28"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" /><FaqList items={faqs} /></section>
    </>
  );
}
