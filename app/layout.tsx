import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { site } from "@/data/site";
import { getNav } from "@/lib/nav";

const description = "Tailor-made Kenya tours and safaris: Maasai Mara, Mount Kenya, Nanyuki, Diani, Lamu and more, designed around you.";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `Kenya Tours & Safari Travel | ${site.name}`, template: `%s | ${site.name}` },
  description,
  alternates: { canonical: "/" },
  openGraph: { title: `Kenya Tours & Safari Travel | ${site.name}`, description, url: "/", siteName: site.name, type: "website", images: [{ url: "/images/hero-kenya.jpg" }] },
  twitter: { card: "summary_large_image", title: `Kenya Tours & Safari Travel | ${site.name}`, description, images: ["/images/hero-kenya.jpg"] },
};
export const viewport: Viewport = { themeColor: "#183A2A", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <Navbar items={getNav()} />        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
