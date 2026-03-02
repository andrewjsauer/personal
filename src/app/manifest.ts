import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Andrew J Sauer Personal Website",
    short_name: "AJS Personal Website",
    description:
      "Andrew Sauer — AI Product Strategist & Engineer. Helping teams identify where AI creates real leverage, then building the systems that deliver it.",
    start_url: "/",
    display: "standalone",
    background_color: "#eaeaee",
    theme_color: "#073763",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
