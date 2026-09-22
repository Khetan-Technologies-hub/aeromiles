import { MetadataRoute } from "next";

const BASE_URL = "https://aeromiles.in";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "about/",
    "contact/",
    "defence/",
    "education/",
    "products/",
  ];

  const productSlugs = ["aerowing-x1", "sentinel-vtol", "vector-quad"];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const productUrls = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...productUrls];
}