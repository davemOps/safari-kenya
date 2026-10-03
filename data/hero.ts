// Edit the home page hero here: text, images and buttons for every slide.
// Add or remove objects to change the number of slides. Replace the files in /public/images/.
export interface HeroSlide {
  image: string;
  /** Focal point for cropping, e.g. "70% 50%" (x y). Keeps your subject in view on mobile. */
  imagePosition?: string;
  imageAlt: string;
  /** Optional small label. Not shown right now. */
  eyebrow?: string;
  title: string;
  description: string;
  secondaryDescription: string;
  cta: { label: string; href: string };
}

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero-1.jpg",
    imagePosition: "65% 50%",
    imageAlt: "Savannah wildlife in the Maasai Mara, Kenya",
    title: "WHERE AFRICA COMES ALIVES",
    description: "Experience unforgettable wildlife, breathtaking landscapes and deeply personal journeys across Kenya.",
    secondaryDescription: "Tailored journeys designed around the way you want to experience Africa.",
    cta: { label: "Explore Kenya", href: "/destinations" },
  },
  {
    image: "/images/hero-2.jpg",
    imagePosition: "65% 50%",
    imageAlt: "Savannah at golden hour, Kenya",
    title: "FOLLOW THE WORLD",
    description: "Discover vast landscapes, extraordinary wildlife and unforgettable moments across the Kenyan savannah.",
    secondaryDescription: "From the Maasai Mara to the Indian Ocean coast, every journey is designed around you.",
    cta: { label: "Plan Your Journey", href: "/plan-your-trip" },
  },
];