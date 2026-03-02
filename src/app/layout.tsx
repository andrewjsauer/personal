import type { Metadata, Viewport } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "500"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
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
  themeColor: "#073763",
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
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
