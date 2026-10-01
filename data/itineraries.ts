import { images } from "./images";
export interface Itinerary {
  slug: string; title: string; days: number; summary: string; image: string;
  destinations: string[]; experiences: string[]; plan: { title: string; text: string }[];
}
export const itineraries: Itinerary[] = [
  { slug: "nairobi-maasai-mara", title: "Nairobi & Maasai Mara", days: 4, image: images.itineraries.maraSafari,
    summary: "A first safari in Kenya's most famous reserve, with a taste of Nairobi.",
    destinations: ["nairobi", "maasai-mara"], experiences: ["safari", "wildlife", "culture"],
    plan: [
      { title: "Arrive in Nairobi", text: "Meet your guide and visit Nairobi National Park or the Giraffe Centre before settling in." },
      { title: "Journey to the Maasai Mara", text: "Travel by road or light aircraft to the Mara, with an afternoon game drive." },
      { title: "Full day in the Mara", text: "Game drives at dawn and dusk, with a bush breakfast and optional community visit." },
      { title: "Return to Nairobi", text: "A final morning drive, then transfer back for your onward journey." },
    ] },
  { slug: "mount-kenya-nanyuki", title: "Mount Kenya & Nanyuki", days: 5, image: images.itineraries.mountKenya,
    summary: "Highland scenery, conservancy wildlife and the slopes of Africa's second-highest peak.",
    destinations: ["nairobi", "nanyuki", "mount-kenya", "nyeri"], experiences: ["mountain", "wildlife", "adventure"],
    plan: [
      { title: "Nairobi to Nanyuki", text: "Drive north through tea and coffee country, with a stop at the equator." },
      { title: "Conservancy day", text: "Game drives and a chimpanzee sanctuary visit in Ol Pejeta." },
      { title: "Mount Kenya foothills", text: "Guided hiking on the lower slopes with moorland and forest views." },
      { title: "Highland leisure", text: "Horse riding, walking or a farm visit, tailored to your pace." },
      { title: "Return to Nairobi", text: "Scenic drive back via Nyeri." },
    ] },
  { slug: "naivasha-nakuru", title: "Naivasha & Nakuru", days: 3, image: images.itineraries.riftValley,
    summary: "A Rift Valley short break of lakes, cliffs, rhino and birdlife.",
    destinations: ["nairobi", "naivasha", "nakuru"], experiences: ["wildlife", "adventure", "family"],
    plan: [
      { title: "Lake Naivasha", text: "Boat ride among hippos and birds, then walking or cycling in Hell's Gate." },
      { title: "Lake Nakuru", text: "Game drives for rhino and birdlife, with viewpoints across the Rift Valley." },
      { title: "Return to Nairobi", text: "Optional stop at Menengai Crater before heading back." },
    ] },
  { slug: "mombasa-diani", title: "Mombasa & Diani", days: 5, image: images.itineraries.coastEscape,
    summary: "Swahili history in Old Town followed by beach days on the south coast.",
    destinations: ["mombasa", "diani"], experiences: ["beach", "culture", "family"],
    plan: [
      { title: "Arrive in Mombasa", text: "Walk Old Town and tour Fort Jesus." },
      { title: "Transfer to Diani", text: "Cross to the south coast and settle by the beach." },
      { title: "Marine day", text: "Dhow trip and snorkelling in Kisite-Mpunguti Marine Park." },
      { title: "Beach and forest", text: "Visit Colobus Conservation or kite-surf, then unwind." },
      { title: "Departure", text: "Final swim and transfer to the airport." },
    ] },
  { slug: "kilifi-watamu-malindi", title: "Kilifi, Watamu & Malindi", days: 4, image: images.itineraries.kenyaCoast,
    summary: "A quieter north-coast route of creeks, reefs, ruins and red canyons.",
    destinations: ["kilifi", "watamu", "malindi"], experiences: ["beach", "wildlife", "culture"],
    plan: [
      { title: "Kilifi", text: "Relax by the creek, visit Mnarani ruins and watch the sunset." },
      { title: "Watamu", text: "Marine park snorkelling and a turtle conservation visit." },
      { title: "Gede & Mida Creek", text: "Explore the Gede Ruins and paddle through mangroves." },
      { title: "Malindi", text: "Vasco da Gama Pillar and an excursion to the Marafa Depression." },
    ] },
  { slug: "kenya-safari-coast", title: "Kenya Safari & Coast", days: 7, image: images.itineraries.kenyaSafari,
    summary: "The classic combination: Maasai Mara wildlife followed by Indian Ocean beaches.",
    destinations: ["nairobi", "maasai-mara", "diani"], experiences: ["safari", "beach", "honeymoon"],
    plan: [
      { title: "Arrive in Nairobi", text: "Meet your guide and rest after travel." },
      { title: "Fly to the Maasai Mara", text: "Afternoon game drive on arrival." },
      { title: "Mara game drives", text: "A full day on the plains, with optional balloon safari." },
      { title: "Mara and community", text: "Morning drive and an optional cultural visit." },
      { title: "Fly to the coast", text: "Connect via Nairobi to Diani and head for the beach." },
      { title: "Coast leisure", text: "Dhow trip, snorkelling or simply rest." },
      { title: "Departure", text: "Transfer to the airport for your flight home." },
    ] },
];
export const getItinerary = (slug: string) => itineraries.find((i) => i.slug === slug);
