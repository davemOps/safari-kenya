import { images } from "./images";
export interface Article { slug: string; title: string; excerpt: string; image: string; category: string; readTime: string; body: string[]; }
export const articles: Article[] = [
  { slug: "best-time-to-visit-kenya", title: "Best Time to Visit Kenya", category: "Planning", readTime: "4 min read", image: images.journal.bestTimeKenya,
    excerpt: "Dry seasons, migration months and coastal weather, explained simply.",
    body: [
      "Kenya can be visited year-round, but the best time depends on what you want to see. The drier months, roughly June to October and January to February, generally offer the easiest wildlife viewing because animals gather near water and vegetation is thinner.",
      "The Great Migration in the Maasai Mara typically peaks between July and October, when herds cross the Mara River. Timing varies from year to year, so a flexible itinerary helps.",
      "The long rains arrive in roughly March to May and short rains around November. Lodges are quieter and landscapes are green, and many travellers find this a rewarding time to visit.",
      "On the coast, December to March and July to October are generally the most comfortable. Mount Kenya trekking is best in the drier months of January–February and August–September.",
    ] },
  { slug: "first-timers-guide-to-kenya", title: "A First-Timer's Guide to Kenya", category: "Planning", readTime: "5 min read", image: images.journal.kenyaSafariGuide,
    excerpt: "What to know before your first journey to Kenya.",
    body: [
      "Kenya is more varied than most first-time visitors expect. Within one trip you can see savannah wildlife, climb through alpine moorland and swim in the Indian Ocean.",
      "Most journeys start in Nairobi. From there, many travellers fly or drive to the Maasai Mara, then add the coast, Amboseli or the highlands around Mount Kenya.",
      "Check current visa and entry requirements with official Kenyan government sources before travelling, and speak to your doctor about health precautions.",
      "Pace matters. Rather than trying to see everything, choose two or three regions and give each enough time.",
    ] },
  { slug: "weekend-getaways-from-nairobi", title: "Weekend Getaways From Nairobi", category: "Destinations", readTime: "4 min read", image: images.journal.weekendGetaways,
    excerpt: "Short escapes that fit into a long weekend.",
    body: [
      "Nairobi sits within reach of several rewarding short trips. Naivasha is about two hours away and offers boating, cycling in Hell's Gate and walking trails.",
      "Nakuru adds rhino and birdlife and pairs naturally with Naivasha for a two-night loop.",
      "For mountains, head toward Nanyuki and Nyeri to enjoy cooler air, conservancy game drives and views of Mount Kenya.",
      "Travel times vary with traffic and road conditions, so build in a little flexibility.",
    ] },
  { slug: "things-to-do-in-nanyuki", title: "Things to Do in Nanyuki", category: "Destinations", readTime: "4 min read", image: images.journal.nanyukiGuide,
    excerpt: "Equator crossings, conservancies and mountain views.",
    body: [
      "Nanyuki sits on the equator at the foothills of Mount Kenya. It is a base for exploring Laikipia's conservancies, where rhino, elephants and big cats share wide open plains.",
      "Ol Pejeta Conservancy is known for its rhino conservation work and includes a sanctuary for rescued chimpanzees.",
      "Beyond wildlife, you can ride horses, hike on Mount Kenya's lower slopes or simply enjoy the highland climate.",
    ] },
  { slug: "exploring-the-kenya-coast", title: "Exploring the Kenya Coast", category: "Destinations", readTime: "5 min read", image: images.journal.kenyaCoast,
    excerpt: "From Diani to Lamu, a guide to the Swahili coast.",
    body: [
      "Kenya's coast stretches from the Tanzanian border to near Somalia, with a different character in each area. Diani has long white beaches and an active water-sports scene.",
      "Mombasa brings history, with Fort Jesus and Old Town. Further north, Kilifi, Watamu and Malindi combine reefs, creeks and ruins.",
      "Lamu feels like a world apart: car-free, built of coral stone and best explored slowly on foot or by dhow.",
    ] },
  { slug: "kenya-safari-guide", title: "Kenya Safari Guide", category: "Safari", readTime: "6 min read", image: images.journal.thingsToDoKenya,
    excerpt: "Choosing parks, seasons and travel styles for your safari.",
    body: [
      "Kenya offers several distinct safari regions. The Maasai Mara is known for predators and the migration, Amboseli for elephants and Kilimanjaro views, and Tsavo for vast wilderness.",
      "Samburu in the north offers species rarely seen elsewhere, while Lake Nakuru is a compact option for rhino and birdlife.",
      "Most safaris include two game drives a day, in early morning and late afternoon when animals are most active.",
      "Combining a safari with a few days on the coast is popular and easy to arrange.",
    ] },
];
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
