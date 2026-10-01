import { images } from "./images";

export type Theme = "city" | "safari" | "mountain" | "beach" | "culture";
export interface Destination {
  slug: string;
  name: string;
  region: string;
  shortDescription: string;
  description: string;
  image: string;
  experiences: string[];
  thingsToDo: string[];
  suggestedDuration: string;
  nearbyDestinations: string[]; // slugs
  bestTime: string;
  whyVisit: string;
  theme: Theme;
}

export const destinations: Destination[] = [
  {
    slug: "nairobi", name: "Nairobi", region: "Nairobi County", image: images.destinations.nairobi, theme: "city",
    shortDescription: "A vibrant capital with a national park on its doorstep.",
    description: "Kenya's capital is where most journeys begin. Nairobi pairs a lively food, art and design scene with Nairobi National Park, where lions and rhinos graze against a backdrop of city skyscrapers.",
    whyVisit: "Few capitals let you watch wildlife in the morning and dine at a leading restaurant by evening. It is also the natural starting point for safaris, highland escapes and coastal flights.",
    experiences: ["Wildlife", "Culture", "Family"],
    thingsToDo: ["Game drive in Nairobi National Park", "Visit the Giraffe Centre", "See orphaned elephants at the David Sheldrick Wildlife Trust", "Explore the Nairobi National Museum", "Walk through Karen Blixen's former farmhouse"],
    suggestedDuration: "1–2 nights", nearbyDestinations: ["naivasha", "nyeri", "maasai-mara"], bestTime: "Year-round; January–February and July–October are driest.",
  },
  {
    slug: "nyeri", name: "Nyeri", region: "Central Highlands", image: images.destinations.nyeri, theme: "mountain",
    shortDescription: "Cool highlands, tea country and the Aberdare forests.",
    description: "Set between Mount Kenya and the Aberdare Range, Nyeri is a region of misty moorlands, coffee and tea farms and historic highland lodges with a long hospitality tradition.",
    whyVisit: "It offers a slower, greener side of Kenya, with forest wildlife, crisp mountain air and easy access to Nanyuki and Mount Kenya.",
    experiences: ["Mountain", "Wildlife", "Culture"],
    thingsToDo: ["Explore Aberdare National Park", "Visit working coffee and tea farms", "Walk the highland trails", "See the Paxtu cottage associated with Lord Baden-Powell", "Drive the scenic road toward Mount Kenya"],
    suggestedDuration: "2 nights", nearbyDestinations: ["nanyuki", "mount-kenya", "naivasha"], bestTime: "January–February and June–September.",
  },
  {
    slug: "nanyuki", name: "Nanyuki", region: "Laikipia", image: images.destinations.nanyuki, theme: "mountain",
    shortDescription: "Gateway to Mount Kenya, conservancies and open highland plains.",
    description: "At the foothills of Mount Kenya, Nanyuki is a gateway to highland landscapes, wildlife conservancies and unforgettable outdoor experiences.",
    whyVisit: "Straddling the equator, Nanyuki gives easy access to conservancies such as Ol Pejeta and Lewa, with rhino, big cats and mountain views in a relaxed, uncrowded setting.",
    experiences: ["Wildlife", "Mountain", "Adventure", "Family"],
    thingsToDo: ["Game drives in Ol Pejeta Conservancy", "Visit the Sweetwaters chimpanzee sanctuary", "Stand on the equator line", "Horse riding and guided walks", "Hike toward Mount Kenya's lower slopes"],
    suggestedDuration: "2–3 nights", nearbyDestinations: ["mount-kenya", "nyeri", "samburu"], bestTime: "January–March and June–October.",
  },
  {
    slug: "naivasha", name: "Naivasha", region: "Great Rift Valley", image: images.destinations.naivasha, theme: "safari",
    shortDescription: "A freshwater lake in the heart of the Rift Valley.",
    description: "Lake Naivasha sits at the heart of the Great Rift Valley, ringed by acacia woodland, flower farms and dramatic escarpments. Hippos, birds and walking safaris make it one of Kenya's easiest escapes from Nairobi.",
    whyVisit: "You can cycle among giraffe in Hell's Gate, float among hippos and birdlife on the lake, and be back in Nairobi within a couple of hours.",
    experiences: ["Adventure", "Wildlife", "Family"],
    thingsToDo: ["Cycle or hike in Hell's Gate National Park", "Take a boat trip on Lake Naivasha", "Walk on Crescent Island", "Hike Mount Longonot", "Visit Elsamere, the former home of Joy Adamson"],
    suggestedDuration: "1–2 nights", nearbyDestinations: ["nakuru", "nairobi", "maasai-mara"], bestTime: "Year-round; June–October and January–February are drier.",
  },
  {
    slug: "nakuru", name: "Nakuru", region: "Great Rift Valley", image: images.destinations.nakuru, theme: "safari",
    shortDescription: "Rhino, birdlife and sweeping Rift Valley lookouts.",
    description: "Lake Nakuru National Park is a compact, rewarding park known for black and white rhino, Rothschild's giraffe and exceptional birdlife, with panoramic viewpoints over the lake and the Rift Valley.",
    whyVisit: "It is one of the best places in Kenya to see rhino in the wild, and short distances make for relaxed game drives.",
    experiences: ["Wildlife", "Family", "Culture"],
    thingsToDo: ["Game drives in Lake Nakuru National Park", "Birdwatching along the lake shore", "Visit Baboon Cliff and Out of Africa lookouts", "Explore Menengai Crater", "Pair with Hell's Gate in Naivasha"],
    suggestedDuration: "1 night", nearbyDestinations: ["naivasha", "nyeri", "maasai-mara"], bestTime: "Year-round; birdlife varies with lake levels.",
  },
  {
    slug: "maasai-mara", name: "Maasai Mara", region: "Narok County", image: images.destinations.maasaiMara, theme: "safari",
    shortDescription: "Kenya's most celebrated savannah and home of the Great Migration.",
    description: "The Maasai Mara is Kenya's most celebrated wildlife reserve, an expanse of rolling grassland shared with Maasai communities. Lion, leopard, cheetah and vast herds of wildebeest and zebra make it a cornerstone of any Kenya safari.",
    whyVisit: "Dense wildlife year-round, dramatic river crossings during the migration season, and a chance to learn about Maasai culture from local guides.",
    experiences: ["Safari", "Wildlife", "Culture", "Honeymoon"],
    thingsToDo: ["Morning and afternoon game drives", "Watch Mara River crossings in season", "Take a sunrise hot-air balloon safari", "Visit a Maasai community with a local guide", "Enjoy a bush breakfast on the plains"],
    suggestedDuration: "3–4 nights", nearbyDestinations: ["nairobi", "naivasha", "nakuru"], bestTime: "July–October for the migration; January–March also rewarding.",
  },
  {
    slug: "amboseli", name: "Amboseli", region: "Kajiado County", image: images.destinations.amboseli, theme: "safari",
    shortDescription: "Elephants beneath the snows of Kilimanjaro.",
    description: "Amboseli is famous for its large elephant herds and unobstructed views of Mount Kilimanjaro across the border in Tanzania. Swamps, open plains and acacia woodland shelter buffalo, hippo, giraffe and abundant birds.",
    whyVisit: "It delivers one of Africa's most photographed scenes: elephants walking in front of Africa's highest mountain, often best at sunrise.",
    experiences: ["Safari", "Wildlife", "Family"],
    thingsToDo: ["Elephant-focused game drives", "Climb Observation Hill for wide views", "Photograph Kilimanjaro at sunrise", "Birdwatching around the swamps", "Cultural visit with local Maasai"],
    suggestedDuration: "2 nights", nearbyDestinations: ["tsavo", "nairobi", "mombasa"], bestTime: "June–October and January–February.",
  },
  {
    slug: "tsavo", name: "Tsavo", region: "Tsavo East & West", image: images.destinations.tsavo, theme: "safari",
    shortDescription: "Vast wilderness, red elephants and ancient lava flows.",
    description: "Tsavo East and Tsavo West together form one of the largest protected areas in Africa. Expect big skies, red-dust elephants, volcanic landscapes and the crystal-clear pools of Mzima Springs.",
    whyVisit: "Tsavo feels remote and untamed, and it sits conveniently between Nairobi and the coast, making it ideal for combining safari and beach.",
    experiences: ["Safari", "Wildlife", "Adventure"],
    thingsToDo: ["Game drives to spot red elephants", "See Lugard Falls on the Galana River", "Visit Mzima Springs", "Explore the Shetani lava flow", "Climb Ngulia or Rhino Valley viewpoints"],
    suggestedDuration: "2–3 nights", nearbyDestinations: ["amboseli", "mombasa", "diani"], bestTime: "June–October and January–February.",
  },
  {
    slug: "samburu", name: "Samburu", region: "Northern Kenya", image: images.destinations.samburu, theme: "safari",
    shortDescription: "Arid northern plains and species found nowhere else in the south.",
    description: "Samburu National Reserve and neighbouring Buffalo Springs and Shaba lie along the Ewaso Ng'iro River. The dry landscape is home to Grevy's zebra, reticulated giraffe, Somali ostrich, beisa oryx and gerenuk, often called the Samburu Special Five.",
    whyVisit: "A different Kenya of red earth, doum palms and rare wildlife, with strong opportunities to meet Samburu communities.",
    experiences: ["Safari", "Wildlife", "Culture"],
    thingsToDo: ["Search for the Samburu Special Five", "Watch elephants along the river", "Look for leopard and cheetah", "Visit a Samburu village", "Take guided bush walks where permitted"],
    suggestedDuration: "2–3 nights", nearbyDestinations: ["nanyuki", "mount-kenya", "nyeri"], bestTime: "June–October and January–March.",
  },
  {
    slug: "mount-kenya", name: "Mount Kenya", region: "Central Kenya", image: images.destinations.mountKenya, theme: "mountain",
    shortDescription: "Africa's second-highest peak, a UNESCO-listed alpine world.",
    description: "Mount Kenya, an extinct volcano with glaciated peaks, rises to 5,199 metres at Batian. The surrounding national park is a UNESCO World Heritage Site of moorland, bamboo forest, glacial tarns and unusual giant lobelias.",
    whyVisit: "Whether you trek to Point Lenana or simply walk the lower slopes, it offers some of the most spectacular scenery in East Africa.",
    experiences: ["Mountain", "Adventure", "Wildlife"],
    thingsToDo: ["Trek to Point Lenana via Sirimon, Naro Moru or Chogoria", "Day hikes on the lower slopes", "Birdwatching in forest and moorland", "Fly-fishing in highland streams", "Stay in a mountain lodge or conservancy"],
    suggestedDuration: "3–5 days", nearbyDestinations: ["nanyuki", "nyeri", "samburu"], bestTime: "January–February and August–September.",
  },
  {
    slug: "diani", name: "Diani", region: "South Coast", image: images.destinations.diani, theme: "beach",
    shortDescription: "White sand and turquoise water on the south coast.",
    description: "Diani Beach is a long stretch of white sand backed by palms and coastal forest. Calm waters and a steady breeze make it a favourite for relaxing, snorkelling, kite-surfing and dhow trips.",
    whyVisit: "It is the classic beach finish after a safari, with warm Indian Ocean water and plenty of ways to be active or entirely idle.",
    experiences: ["Beach", "Honeymoon", "Family", "Adventure"],
    thingsToDo: ["Relax on the beach", "Kite-surf or paddleboard", "Snorkel at Kisite-Mpunguti Marine Park", "Visit Colobus Conservation", "Take a day trip into Shimba Hills"],
    suggestedDuration: "3–5 nights", nearbyDestinations: ["mombasa", "tsavo", "amboseli"], bestTime: "December–March and July–October.",
  },
  {
    slug: "mombasa", name: "Mombasa", region: "Coast", image: images.destinations.mombasa, theme: "culture",
    shortDescription: "Swahili history, spice markets and a working island port.",
    description: "Kenya's second city is a centuries-old trading port. Fort Jesus, a UNESCO World Heritage Site, and the narrow lanes of Old Town reflect a layered Swahili, Arab, Portuguese and Indian past.",
    whyVisit: "It adds history and flavour to a beach holiday, with coastal food that is among the best in the country.",
    experiences: ["Culture", "Beach", "Family"],
    thingsToDo: ["Tour Fort Jesus", "Walk Old Town's lanes and markets", "Taste Swahili street food", "Visit Haller Park", "Stroll the Mama Ngina waterfront"],
    suggestedDuration: "1–2 nights", nearbyDestinations: ["diani", "kilifi", "tsavo"], bestTime: "December–March and July–October.",
  },
  {
    slug: "lamu", name: "Lamu", region: "North Coast", image: images.destinations.lamu, theme: "culture",
    shortDescription: "A car-free Swahili island town of dhows and slow days.",
    description: "Lamu Old Town is Kenya's oldest continuously inhabited Swahili settlement and a UNESCO World Heritage Site. Cars are rare; donkeys and dhows are how life moves along the narrow streets and quiet waterfront.",
    whyVisit: "Lamu rewards slow travel, with carved doors, rooftop sunsets, dhow sailing and the long empty beach at Shela.",
    experiences: ["Culture", "Beach", "Honeymoon"],
    thingsToDo: ["Wander Lamu Old Town", "Sail on a traditional dhow", "Visit Lamu Fort and the museum", "Walk the beach at Shela", "Explore nearby Manda Island"],
    suggestedDuration: "3–4 nights", nearbyDestinations: ["malindi", "watamu", "kilifi"], bestTime: "December–March and July–October.",
  },
  {
    slug: "kilifi", name: "Kilifi", region: "North Coast", image: images.destinations.kilifi, theme: "beach",
    shortDescription: "A creek town with quiet beaches and an artistic spirit.",
    description: "Kilifi sits on a deep tidal creek north of Mombasa, with relaxed beaches, boutique stays and a growing community of artists and makers. Nearby ruins and mangrove creeks add depth to the beach time.",
    whyVisit: "It offers a quieter, more local alternative to busier beach resorts.",
    experiences: ["Beach", "Culture", "Honeymoon"],
    thingsToDo: ["Relax at Bofa Beach", "Visit the Mnarani ruins", "Paddle or sail Kilifi Creek", "Watch sunset over the creek", "Browse local art and craft studios"],
    suggestedDuration: "2–3 nights", nearbyDestinations: ["watamu", "malindi", "mombasa"], bestTime: "December–March and July–October.",
  },
  {
    slug: "watamu", name: "Watamu", region: "North Coast", image: images.destinations.watamu, theme: "beach",
    shortDescription: "Coral reefs, turtles and mangrove-fringed lagoons.",
    description: "Watamu is known for its crescent bays, coral gardens and the protected waters of Watamu Marine National Park. Sea turtles, tropical fish and the mangroves of Mida Creek make it a draw for nature lovers.",
    whyVisit: "Snorkelling and diving are excellent, and the coastal forest and Gede Ruins sit close by.",
    experiences: ["Beach", "Wildlife", "Family", "Adventure"],
    thingsToDo: ["Snorkel in Watamu Marine National Park", "Visit a turtle conservation centre", "Explore the Gede Ruins", "Take a boat trip in Mida Creek", "Walk in Arabuko Sokoke Forest"],
    suggestedDuration: "3–4 nights", nearbyDestinations: ["malindi", "kilifi", "lamu"], bestTime: "December–March and July–October.",
  },
  {
    slug: "malindi", name: "Malindi", region: "North Coast", image: images.destinations.malindi, theme: "beach",
    shortDescription: "Historic coastline, marine park and red-rock canyons.",
    description: "Malindi is one of the oldest towns on the Kenyan coast, with a relaxed beachfront, a marine park and a long history of Indian Ocean trade. Inland, the Marafa Depression's sculpted red and white sandstone offers dramatic scenery.",
    whyVisit: "It combines beaches, history and an unusual landscape within easy reach of Watamu and Lamu.",
    experiences: ["Beach", "Culture", "Adventure"],
    thingsToDo: ["See the Vasco da Gama Pillar", "Snorkel in Malindi Marine National Park", "Visit the Marafa Depression at sunset", "Explore Gede Ruins", "Enjoy Italian-influenced coastal dining"],
    suggestedDuration: "2–3 nights", nearbyDestinations: ["watamu", "kilifi", "lamu"], bestTime: "December–March and July–October.",
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
export const themeImage: Record<Theme, string> = {
  city: images.culture, safari: images.safari, mountain: images.adventure, beach: images.beach, culture: images.culture,
};
export const featuredDestinationSlugs = ["maasai-mara", "mount-kenya", "diani", "lamu"];
