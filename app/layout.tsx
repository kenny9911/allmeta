import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "@/lib/i18n";

const siteName = "allm²eta";
const siteTagline_en = "Beyond ERP. Make Enterprise AI-Native.";
const siteTagline_zh = "模思 · 故我在 — 企业智能体可行动操作系统";

export const metadata: Metadata = {
  metadataBase: new URL("https://allmeta.ai"),
  title: {
    default: `${siteName} · ${siteTagline_en}`,
    template: `%s · ${siteName}`,
  },
  description:
    "allm²eta is the Actionable Ontology platform and Agentic Operating System for the AI-native enterprise. Ontology × ECore — turning enterprise systems from Records into Actionable Intelligence.",
  keywords: [
    "Enterprise AI",
    "AI Agent Platform",
    "Actionable Ontology",
    "Agentic Operating System",
    "Enterprise Ontology",
    "AI Agents",
    "LLM Hallucination Control",
    "Agentic Operator",
    "AI Native Enterprise",
    "ChinaSoft International",
    "企业 AI",
    "智能体平台",
    "可行动本体",
    "企业本体",
  ],
  authors: [{ name: "ChinaSoft International AI Center of Excellence" }],
  creator: "ChinaSoft International",
  publisher: "ChinaSoft International",
  category: "Enterprise Software",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    siteName,
    title: `${siteName} · ${siteTagline_en}`,
    description:
      "The Actionable Ontology platform for enterprise AI agents. Ontology + ECore = the dual core of the Agentic Operating System.",
    url: "https://allmeta.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} · ${siteTagline_en}`,
    description:
      "The Actionable Ontology platform for enterprise AI agents.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#15171f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

// JSON-LD structured data for search engines + generative engines (GEO).
// Indexed by name + sameAs so AI Overviews, Perplexity, etc. can cite us.
const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "allm²eta",
  alternateName: ["allmeta", "AllMeta"],
  url: "https://allmeta.ai",
  logo: "https://allmeta.ai/allmeta-white.png",
  description:
    "allm²eta builds the Actionable Ontology platform and Agentic Operating System for enterprise AI agents. A ChinaSoft International product.",
  parentOrganization: {
    "@type": "Organization",
    name: "ChinaSoft International",
    alternateName: "中软国际",
  },
  knowsAbout: [
    "Enterprise AI",
    "AI Agents",
    "Actionable Ontology",
    "Agentic Operating System",
    "Enterprise Ontology",
    "LLM Hallucination Control",
    "Agentic Runtime",
    "Code Generation",
  ],
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "allm²eta Ontology",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Enterprise AI Platform",
  operatingSystem: "Cloud / Kubernetes",
  description:
    "The Actionable Ontology Platform for Enterprise Agents. Turns business objects, rules, permissions, processes, events and actions into an AI-callable Enterprise Operation Surface.",
  brand: { "@type": "Brand", name: "allm²eta" },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "0",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* Sync data-theme from localStorage before paint to prevent FOUC.
            Dark is the canonical canvas — fallback is "dark" not "light". */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('allmeta:theme');document.documentElement.setAttribute('data-theme',(t==='dark'||t==='light')?t:'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Editorial type stack:
            · Instrument Serif — display italic (the magazine voice)
            · Geist Sans       — body / UI (modern grotesque, not Inter)
            · JetBrains Mono   — code, traces, technical labels
            · Noto Sans SC     — Chinese body
            Intentionally NOT loading Inter or Space Grotesk — they're the
            "AI-default" tells. Geist gives us Vercel-grade UI typography
            without being saturated, and Instrument Serif's italics carry
            the editorial weight that the Hero needs. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
