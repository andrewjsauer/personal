import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/blog",
      },
      {
        userAgent: "*",
        allow: "/blog/[slug]",
      },
    ],
    sitemap: "https://andrewjsauer.com/sitemap.xml",
  };
}
