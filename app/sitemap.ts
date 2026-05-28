import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://allmeta.ai";
  const now = new Date();
  const routes: Array<{ url: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { url: "/", priority: 1.0, freq: "weekly" },
    { url: "/ontology", priority: 0.9, freq: "weekly" },
    { url: "/operator", priority: 0.9, freq: "weekly" },
    { url: "/technology", priority: 0.8, freq: "weekly" },
  ];
  return routes.map((r) => ({
    url: `${base}${r.url}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
    alternates: {
      languages: {
        "zh-CN": `${base}${r.url}`,
        "en-US": `${base}${r.url}`,
      },
    },
  }));
}
