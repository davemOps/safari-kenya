import { images } from "./images";
export interface Experience {
  slug: string; name: string; tagline: string; description: string; image: string;
  highlights: string[]; destinations: string[]; theme: string;
}
export const experiences: Experience[] = [
  { slug: "safari", name: "Safari", tagline: "Game drives across Kenya's great reserves", image: images.experiences.safari, theme: "Safari",
    description: "Kenya is the birthplace of the classic safari. Travel through savannah, river plains and arid north with expert local guides, from the Maasai Mara to Amboseli, Tsavo and Samburu.",
    highlights: ["Morning and afternoon game drives", "Bush breakfasts and sundowners", "Optional balloon safaris in the Mara", "Private or small-group vehicles"], destinations: ["maasai-mara", "amboseli", "tsavo", "samburu"] },
  { slug: "beach", name: "Beach Escapes", tagline: "Warm Indian Ocean days on the Kenya coast", image: images.experiences.beachHoliday, theme: "Beach",
    description: "From the white sands of Diani to the reefs of Watamu and the dhows of Lamu, Kenya's coast is a natural finish to any safari or a destination in its own right.",
    highlights: ["Snorkelling and diving", "Dhow sailing", "Kite-surfing and paddleboarding", "Swahili food and culture"], destinations: ["diani", "watamu", "kilifi", "malindi", "lamu"] },
  { slug: "mountain", name: "Mountain Adventures", tagline: "Highland trails and alpine peaks", image: images.experiences.mountainAdventure, theme: "Mountain",
    description: "Trek Africa's second-highest mountain, walk quiet moorland trails or simply enjoy the cool air of the highlands around Nyeri and Nanyuki.",
    highlights: ["Point Lenana treks", "Day hikes on lower slopes", "Forest and moorland birdwatching", "Highland lodges and conservancies"], destinations: ["mount-kenya", "nanyuki", "nyeri"] },
  { slug: "culture", name: "Culture", tagline: "Living traditions and Swahili heritage", image: images.experiences.culturalExperience, theme: "Culture",
    description: "Kenya is home to dozens of communities. Meet Maasai and Samburu hosts, explore Swahili towns and discover the food, craft and storytelling that shape daily life.",
    highlights: ["Community visits with local guides", "Old Town walking tours", "Coastal cooking and spice experiences", "Museums and historic sites"], destinations: ["maasai-mara", "samburu", "lamu", "mombasa"] },
  { slug: "honeymoon", name: "Honeymoons", tagline: "Intimate journeys for two", image: images.experiences.honeymoon, theme: "Honeymoon",
    description: "Combine private safari days with quiet time on the coast. We shape romantic itineraries around privacy, pace and the moments that matter to you.",
    highlights: ["Private game drives", "Sunrise balloon flights", "Secluded beach stays", "Sunset dhow cruises"], destinations: ["maasai-mara", "diani", "lamu", "kilifi"] },
  { slug: "family", name: "Family Holidays", tagline: "Adventures that work for every age", image: images.experiences.family, theme: "Family",
    description: "Kenya is a rewarding place to travel with children. Short drives, hands-on conservation and relaxed beach stays let every generation share the trip.",
    highlights: ["Child-friendly pacing", "Giraffe and elephant encounters", "Conservation experiences", "Family-suitable accommodation"], destinations: ["nairobi", "naivasha", "nanyuki", "diani"] },
  { slug: "wildlife", name: "Wildlife", tagline: "Rhino, elephant, big cats and birds", image: images.experiences.wildlife, theme: "Safari",
    description: "Kenya's parks and conservancies support remarkable biodiversity. Track rhino at Nakuru, elephants at Amboseli and rare northern species in Samburu.",
    highlights: ["Rhino and big-cat viewing", "Elephant herds", "Rare northern species", "Marine life on the coast"], destinations: ["nakuru", "amboseli", "samburu", "watamu"] },
  { slug: "adventure", name: "Adventure", tagline: "Active journeys across varied terrain", image: images.experiences.adventure, theme: "Adventure",
    description: "Cycle among giraffe, climb a volcano, kite-surf along the coast or ride across highland plains. Kenya offers adventure at every elevation.",
    highlights: ["Cycling in Hell's Gate", "Mount Longonot hike", "Horse riding", "Kite-surfing and diving"], destinations: ["naivasha", "mount-kenya", "diani", "watamu"] },
];
export const getExperience = (slug: string) => experiences.find((e) => e.slug === slug);
