import React from "react";

/** Server-renderable JSON-LD blob. Server Component (no "use client"). */
export default function StructuredData({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function breadcrumbList(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function softwareApplication(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Enterprise AI Platform",
    operatingSystem: "Cloud / Kubernetes",
    brand: { "@type": "Brand", name: "allm²eta" },
    offers: { "@type": "Offer", priceCurrency: "USD", price: "0", availability: "https://schema.org/InStock" },
  };
}

export function faqPage(qa: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}
