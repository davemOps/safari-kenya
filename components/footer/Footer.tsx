import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { site } from "@/data/site";
import { FooterBadge } from "./FooterBadge";


const exploreGroups = [
  [["Destinations", "/destinations"], ["Itineraries", "/itineraries"], ["Experiences", "/experiences"]],
  [["Our Story", "/about"], ["Journal", "/journal"], ["FAQs", "/contact#faq"], ["Contact", "/contact"]],
  [["Plan Your Trip", "/plan-your-trip"]],
];
const badgeHeading = "Travel With Purpose";
const badgeText = "Thoughtfully designed journeys across Kenya.";

const heading = "text-lg font-bold uppercase tracking-wide text-[#44453D]";
const muted = "text-lg text-[#6B6B6B]";
const social = [
  { label: "Facebook", href: site.social.Facebook, Icon: Facebook },
  { label: "Instagram", href: site.social.Instagram, Icon: Instagram },
  { label: "YouTube", href: site.social.YouTube, Icon: Youtube },
];

export function Footer() {
  return (
    <footer>
      <div className="bg-[#EFEFEF]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-3 md:px-8 md:py-16">
          {/* Left: brand, contact, social */}
          <div>
            <h2 className={heading}>{site.name}</h2>
            <p className={`mt-6 leading-relaxed ${muted}`}>{site.location}</p>
            <div className={`mt-6 space-y-1 ${muted}`}>
              <p><a href={`mailto:${site.email}`} className="transition-colors hover:text-charcoal">{site.email}</a></p>
              <p><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-charcoal">{site.phone}</a></p>
            </div>
            <h2 className={`${heading} mt-10`}>Follow Us</h2>
            <ul className="mt-5 flex gap-4">
              {social.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-[#7A7A7A] transition-colors hover:text-charcoal">
                    <Icon className="h-6 w-6" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle: explore links */}
          <nav aria-label="Footer">
            <h2 className={heading}>Explore</h2>
            <div className="mt-4 space-y-5">
              {exploreGroups.map((group, i) => (
                <ul key={i} className="space-y-1.5">
                  {group.map(([label, href]) => (
                    <li key={label}><Link href={href} className={`${muted} transition-colors hover:text-charcoal`}>{label}</Link></li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>

          {/* Right: badge */}
          <div className="text-center">
            <h2 className="mx-auto max-w-[14rem] text-2xl font-bold uppercase leading-snug tracking-wide text-[#2B2B2B]">{badgeHeading}</h2>
            <div className="mt-6"><FooterBadge /></div>
            <p className={`mx-auto mt-6 max-w-[14rem] ${muted}`}>{badgeText}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#333333] px-5 py-5 text-center text-sm text-[#9A9A9A]">
        © {new Date().getFullYear()} {site.name}. All rights reserved.Developed by Dave.
      </div>
    </footer>
  );
}