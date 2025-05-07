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
  title: "andrew sauer",
  description:
    "Explore the portfolio of Andrew Sauer, an AI-driven full-stack developer specializing in React, Next.js, and advanced language models (RAG apps, AI agents). Discover my work, skills, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
