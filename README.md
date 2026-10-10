# Safari Kenya

A tours and safari website for a Kenya travel company, designed around big photography, a lot of white space, and one clear goal: making it easy for someone to start planning a trip.

 I wanted something to feel calm and personal, closer to a travel magazine than a booking engine.

## What you'll find on the site

- A full-screen homepage slideshow, an intro with video, and sections for destinations, experiences, sample journeys, the journal and FAQs
- 16 destination pages, from Nairobi and the Maasai Mara to Lamu and Diani, each with things to do, the best time to go and suggested trip length
- Experience pages for safari, beach, mountain, culture, honeymoons, family and adventure
- Itineraries with a day-by-day plan
- A journal with travel guides
- About, Contact and Plan Your Trip pages
- An inquiry form that lands straight in my inbox
- A travel assistant that answers common questions about destinations, seasons and trip planning
- A floating WhatsApp button for quick questions
- A privacy policy that opens as a popup from the footer
- A navbar with dropdown menus that builds itself from the content, so a new destination appears in the menu automatically

## Built with

- [Next.js 15](https://nextjs.org/) (App Router) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for the slideshow and a few gentle animations
- [Lucide](https://lucide.dev/) for icons
- [EmailJS](https://www.emailjs.com/) for the contact form, so there is no server to look after

## A few things I cared about

- **Nothing breaks if a photo is missing.** Every image goes through one component that shows a neat "Image coming soon" box instead of a broken picture.
- **The form is honest.** If email isn't configured, it says so and points people to email or WhatsApp. It never pretends a message was sent. A hidden field also catches most spam bots.
- **Content lives in one place.** Destinations, journeys, FAQs and contact details are plain data files, so changing the site rarely means touching the design code.
- **Accessible by default.** Keyboard navigation, a skip link, labelled form fields, and reduced-motion support.
- **Search-friendly.** Page titles and descriptions, a sitemap and share previews are set up for every page.

## Running it on your computer

You need Node.js 18.18 or newer.

```bash
git clone https://github.com/davemOps/safari-kenya.git
cd safari-kenya/
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're in.



## Setting up the contact form

put you EmailJs credentials on .env file.
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

 copy these credentials from your EmailJS dashboard. 



## How the project is organised

```
app/          pages and routes
components/   navbar, footer, hero, cards, forms, chat assistant
data/         all the site's content
lib/          small helpers for SEO, navigation and the form
public/       images and video
```


# Licence

All rights reserved. The code, text and design are mine, and the photos belong to their owners. Please don't copy the site as it is. If you're learning and something here helps you, feel free to read through it.

Built by Dave Macharia.