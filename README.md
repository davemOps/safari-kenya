# Safari Kenya

A website for a Kenya tours and safari travel company. I wanted something calmer and more editorial, with big photography, plenty of space, and a clear way to start planning a trip.


## What's on the site

- **Home page** with a full-screen slideshow, an intro with video, a "why us" section, destinations, experiences, sample journeys, a journal and an FAQ
- **Destinations** (16 places, from Nairobi and the Maasai Mara to Lamu and Diani), each with its own page
- **Experiences** like safari, beach, mountain and culture
- **Itineraries** with day-by-day plans
- **Journal** for travel guides and articles
- **About, Contact and Plan Your Trip** pages
- **Inquiry form** that sends straight to my inbox
- **Travel assistant**, a small chat helper that answers questions about destinations
- **WhatsApp button** that opens a chat with me
- **Privacy policy** as a popup from the footer
- A dropdown navbar built from the same data as the pages, so adding a destination updates the menu on its own

## Built with

- [Next.js 15](https://nextjs.org/) (App Router) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/), used sparingly
- [Lucide](https://lucide.dev/) for icons
- [EmailJS](https://www.emailjs.com/) for the contact form, so there's no backend to run

## Running it locally

You need Node.js 18.18 or newer.

```bash
git clone https://github.com/davemOps/safari-kenya.git
cd safari-kenya/
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).


## Setting up the contact form

The form sends email through EmailJS.


## Changing the content

Most of what you see lives in the `data/` folder, so you rarely need to touch the components:

| File | What it controls |
| --- | --- |
| `data/site.ts` | Company name, email, phone, WhatsApp number, location, social links |
| `data/destinations.ts` | Destination pages and the navbar menu |
| `data/experiences.ts` | Experience pages |
| `data/itineraries.ts` | Itineraries and day-by-day plans |
| `data/journal.ts` | Journal articles |
| `data/faqs.ts` | FAQ questions and answers |
| `data/hero.ts` | Homepage slideshow |
| `data/testimonials.ts` | Guest quotes |
| `data/images.ts` | Every image path on the site, in one place |

The travel assistant reads from the same files, so it learns new destinations automatically.

## Images

All images are local and live in `public/images`. Their paths are listed in `data/images.ts`.

## Project layout

```
app/          pages and routes
components/   navbar, footer, hero, cards, forms, chat assistant
data/         all the site content
lib/          small helpers (SEO, navigation, form sending)
public/       images and video
```




## Licence

All rights reserved. The code, text and design are mine, and the photos belong to their owners. Please don't copy the site as it is. If you're learning and something here helps you, feel free to read it and learn from it.

Built by Dave Macharia