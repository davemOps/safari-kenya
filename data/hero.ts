
export interface HeroSlide {
  image: string;

  imagePosition?: string;
  imageAlt: string;

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