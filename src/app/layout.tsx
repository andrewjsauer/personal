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
  title: "Andrew Sauer | AI Engineer & Full-Stack Developer",
  description:
    "Andrew Sauer builds production AI systems — retrieval pipelines, autonomous agents, and full-stack apps — across construction, media, education, and consumer products.",
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
    title: "Andrew Sauer | AI Engineer & Full-Stack Developer",
    description:
      "Andrew Sauer builds production AI systems — retrieval pipelines, autonomous agents, and full-stack apps — across construction, media, education, and consumer products.",
    url: "https://andrewjsauer.com",
    siteName: "Andrew Sauer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://andrewjsauer.com/profile.jpg",
        width: 500,
        height: 667,
        alt: "Photo of Andrew Sauer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Sauer | AI Engineer & Full-Stack Developer",
    description:
      "Andrew Sauer builds production AI systems — retrieval pipelines, autonomous agents, and full-stack apps.",
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
    jobTitle: "AI Engineer",
    url: "https://andrewjsauer.com",
    sameAs: [
      "https://github.com/andrewjsauer",
      "https://gitlab.com/andrewjsauer",
      "https://www.linkedin.com/in/andrewjsauer/",
    ],
    email: "andrewJohnSauer@gmail.com",
    description:
      "AI engineer and full-stack developer building production retrieval systems, autonomous agents, and full-stack apps.",
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
