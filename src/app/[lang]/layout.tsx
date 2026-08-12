import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proximity | Digital Agency",
  description: "Premium Digital Experiences & UI/UX Design",
  openGraph: {
    title: "Proximity | Digital Agency",
    description: "Premium Digital Experiences & UI/UX Design",
    url: "https://proximity-agency.com",
    siteName: "Proximity",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proximity | Digital Agency",
    description: "Premium Digital Experiences & UI/UX Design",
    images: ["/logo.jpg"],
  },
};

import GlobalTransition from "@/components/GlobalTransition";
import ScrollProgress from "@/components/ScrollProgress";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Proximity",
  "description": "Premium Digital Experiences & UI/UX Design",
  "url": "https://proximity-agency.com",
  "image": "https://proximity-agency.com/logo.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Your City",
    "addressRegion": "Your Region",
    "addressCountry": "Your Country"
  }
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang;
  
  return (
    <html lang={lang} className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ScrollProgress />
        <GlobalTransition />
        <Navbar lang={lang} />
        <main>{props.children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
