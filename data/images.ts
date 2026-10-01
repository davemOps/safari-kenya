// Central image map. Drop your own photo at the path below (same filename) and it appears automatically.
const dest = (f: string) => `/images/destinations/${f}.jpg`;
const exp = (f: string) => `/images/experiences/${f}.jpg`;
const itin = (f: string) => `/images/itineraries/${f}.jpg`;
const jr = (f: string) => `/images/journal/${f}.jpg`;
const ab = (f: string) => `/images/about/${f}.jpg`;

export const images = {
  hero: "/images/hero-kenya.jpg",
  landscape: "/images/kenya-landscape.jpg",
  safari: "/images/safari.jpg",
  beach: "/images/beach.jpg",
  culture: "/images/culture.jpg",
  adventure: "/images/adventure.jpg",
  destinations: {
    nairobi: dest("nairobi"), nyeri: dest("nyeri"), nanyuki: dest("nanyuki"), naivasha: dest("naivasha"),
    nakuru: dest("nakuru"), maasaiMara: dest("maasai-mara"), amboseli: dest("amboseli"), tsavo: dest("tsavo"),
    samburu: dest("samburu"), mountKenya: dest("mount-kenya"), diani: dest("diani"), mombasa: dest("mombasa"),
    lamu: dest("lamu"), kilifi: dest("kilifi"), watamu: dest("watamu"), malindi: dest("malindi"),
  },
  experiences: {
    safari: exp("safari"), beachHoliday: exp("beach-holiday"), mountainAdventure: exp("mountain-adventure"),
    culturalExperience: exp("cultural-experience"), honeymoon: exp("honeymoon"), family: exp("family"),
    adventure: exp("adventure"), wildlife: exp("wildlife"),
  },
  itineraries: {
    maraSafari: itin("mara-safari"), mountKenya: itin("mount-kenya"), riftValley: itin("rift-valley"),
    coastEscape: itin("coast-escape"), kenyaSafari: itin("kenya-safari"), kenyaCoast: itin("kenya-coast"),
  },
  journal: {
    bestTimeKenya: jr("best-time-kenya"), kenyaSafariGuide: jr("kenya-safari-guide"), weekendGetaways: jr("weekend-getaways"),
    nanyukiGuide: jr("nanyuki-guide"), kenyaCoast: jr("kenya-coast"), thingsToDoKenya: jr("things-to-do-kenya"),
  },
  about: { ourStory: ab("our-story"), localExperience: ab("local-experience"), responsibleTravel: ab("responsible-travel") },
} as const;
