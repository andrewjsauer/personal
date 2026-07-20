import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Andrew Sauer | AI Product Strategy & Engineering",
  description:
    "Andrew Sauer helps teams identify where AI creates real leverage — then designs and builds the systems that deliver it. Focus areas: construction, media, and enterprise document intelligence.",
  keywords: [
    "Andrew Sauer",
    "AI Product Strategy",
    "AI Engineering",
    "AI Consulting",
    "Production AI Systems",
    "RAG Applications",
    "AI Agents",
    "Construction AI",
  ],
  authors: [{ name: "Andrew Sauer" }],
  creator: "Andrew Sauer",
  openGraph: {
    title: "Andrew Sauer | AI Product Strategy & Engineering",
    description:
      "Andrew Sauer helps teams identify where AI creates real leverage — then designs and builds the systems that deliver it. Focus areas: construction, media, and enterprise document intelligence.",
    url: "https://andrewjsauer.com",
    siteName: "Andrew Sauer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://andrewjsauer.com/profile.jpg",
        width: 1000,
        height: 750,
        alt: "Photo of Andrew Sauer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Sauer | AI Product Strategy & Engineering",
    description:
      "Andrew Sauer helps teams identify where AI creates real leverage — then designs and builds the systems that deliver it.",
  },
  alternates: {
    canonical: "https://andrewjsauer.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://andrewjsauer.com"),
};

export const viewport: Viewport = {
  themeColor: "#0a3a62",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrew Sauer",
    jobTitle: "AI Product Strategist & Engineer",
    url: "https://andrewjsauer.com",
    image: "https://andrewjsauer.com/profile.jpg",
    sameAs: [
      "https://github.com/andrewjsauer",
      "https://gitlab.com/andrewjsauer",
      "https://www.linkedin.com/in/andrewjsauer/",
    ],
    email: "andrewJohnSauer@gmail.com",
    description:
      "Helps teams identify where AI creates real leverage — then designs and builds the systems that deliver it.",
    worksFor: [
      {
        "@type": "Organization",
        name: "Human Agency",
        url: "https://humanagency.com/",
      },
      {
        "@type": "Organization",
        name: "sauerApple",
        url: "https://sauerApple.com/",
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Claude Certified Architect — Foundations",
      credentialCategory: "Professional Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Anthropic",
      },
      validFrom: "2026-07",
      validUntil: "2027-07",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Stanford Graduate School of Business",
      },
      {
        "@type": "EducationalOrganization",
        name: "Saint Mary's College of California",
      },
    ],
    knowsAbout: [
      "AI Product Strategy",
      "Production AI Systems",
      "RAG Applications",
      "AI Agents",
      "Construction AI",
      "Document Intelligence",
      "System Design",
      "Full-Stack Development",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${instrumentSans.variable} ${plexMono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
