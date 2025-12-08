import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Andrew Sauer | AI-Driven Full-Stack Developer",
  description:
    "Explore the portfolio of Andrew Sauer, an AI-driven full-stack developer specializing in React, Next.js, and advanced language models (RAG apps, AI agents). Discover my work, skills, and projects.",
  keywords: [
    "Andrew Sauer",
    "Full-Stack Developer",
    "AI Engineer",
    "React Developer",
    "Next.js",
    "RAG Applications",
    "AI Agents",
    "Portfolio",
  ],
  authors: [{ name: "Andrew Sauer" }],
  creator: "Andrew Sauer",
  openGraph: {
    title: "Andrew Sauer | AI-Driven Full-Stack Developer",
    description:
      "Explore the portfolio of Andrew Sauer, an AI-driven full-stack developer specializing in React, Next.js, and advanced language models (RAG apps, AI agents).",
    url: "https://andrewjsauer.com",
    siteName: "Andrew Sauer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://drive.google.com/uc?id=15W3B0rwHIBtu_WlX60ck0C4dDqjHpDvX",
        width: 500,
        height: 667,
        alt: "Photo of Andrew Sauer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Sauer | AI-Driven Full-Stack Developer",
    description:
      "AI-driven full-stack developer specializing in React, Next.js, and advanced language models.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrew Sauer",
    jobTitle: "AI Engineer",
    url: "https://andrewjsauer.com",
    sameAs: [
      "https://github.com/andrewjsauer",
      "https://gitlab.com/andrewjsauer",
      "https://www.linkedin.com/in/andrewjsauer/",
    ],
    email: "andrewJohnSauer@gmail.com",
    description:
      "AI-driven full-stack developer specializing in React, Next.js, and advanced language models (RAG apps, AI agents).",
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
