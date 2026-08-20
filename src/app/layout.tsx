import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { site } from "@/data/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Architecture & Interior Design, Kolhapur`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Architecture & Interior Design, Kolhapur`,
    description: site.description,
    images: ["/images/hero/hero-court.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": site.url,
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phones[0].replace(/\s/g, ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: "1847/KH, E Ward, Rajarampuri 5th Lane",
    addressLocality: "Kolhapur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [site.instagram],
  knowsAbout: ["Architecture", "Interior Design", "Planning", "Project Management", "Turnkey Execution"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-deep-green text-light-cream">
        <ScrollProgress />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
