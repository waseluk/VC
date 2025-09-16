import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vasselcreative.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
    },
  ];
}
