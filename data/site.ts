// Replace these placeholders with your real company details.
export const site = {
  name: "SAFARI KENYA",
  tagline: "Journeys Beyond the Ordinary",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  email: "hello@example.com",
  phone: "+254 XXX XXX XXX",
  whatsappNumber: "254000000000", // digits only, international format
  location: "Nairobi, Kenya",
  social: {
    Instagram: "https://www.instagram.com/",
    Facebook: "https://www.facebook.com/",
    TikTok: "https://www.tiktok.com/",
    YouTube: "https://www.youtube.com/",
  },
} as const;
export const whatsappLink = (text = "Hello, I'd like to plan a trip to Kenya.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
