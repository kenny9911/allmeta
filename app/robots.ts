import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Generic crawlers
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // Explicitly opt in to AI / generative-engine crawlers (GEO).
      // These bots tend to fetch in batches; we want our content cited
      // in answers, not blocked at the door.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
    ],
    sitemap: "https://allmeta.ai/sitemap.xml",
    host: "https://allmeta.ai",
  };
}
