export interface Faq { q: string; a: string }
export const faqs: Faq[] = [
  { q: "How do I plan a trip?", a: "Send us an inquiry with your dates, interests and group size. We'll respond with ideas and shape a journey together with you." },
  { q: "Can I customize my itinerary?", a: "Yes. The itineraries on this site are starting points and every journey can be adjusted to your pace and interests." },
  { q: "Do you offer private tours?", a: "Yes. Private journeys with your own guide and vehicle are available, as well as small group options." },
  { q: "Can you arrange accommodation?", a: "Yes. We can recommend and arrange stays to suit your style and budget, from tented camps to beach houses." },
  { q: "Can I combine safari and beach?", a: "Absolutely. Combining the Maasai Mara or Amboseli with Diani or the north coast is one of Kenya's most popular journeys." },
  { q: "How many days should I spend in Kenya?", a: "We suggest at least five to seven days for a safari and beach combination. Ten days or more allows a slower pace and more regions." },
  { q: "How far in advance should I book?", a: "For peak months such as July to October and December to January, we recommend planning several months ahead. Shorter notice may still be possible." },
];
export const destinationFaqs = (name: string, best: string, dur: string): Faq[] => [
  { q: `When is the best time to visit ${name}?`, a: best },
  { q: `How long should I spend in ${name}?`, a: `We suggest ${dur}, depending on how you'd like to combine it with other regions.` },
  { q: `Can ${name} be combined with other destinations?`, a: "Yes. We can build a route that links it with nearby regions, safari parks or the coast." },
  { q: "Can the trip be customized?", a: "Every journey can be tailored to your dates, pace and interests. Send us an inquiry to start." },
];
