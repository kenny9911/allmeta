"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import BrandText from "@/components/shared/BrandText";
import Orb from "@/components/shared/Orb";
import { PRODUCTS } from "@/lib/products";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="relative border-t border-line/60" style={{ marginTop: 120 }}>
      <div className="mx-auto" style={{ maxWidth: 1360, padding: "56px 32px 28px" }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Orb size="sm" />
              <BrandText size="md" />
            </div>
            <p className="mt-4" style={{ fontSize: 13, lineHeight: 1.6, color: "var(--c-ink-3)", maxWidth: 380 }}>
              {t("brand_tag_en")}
            </p>
            <p className="mt-2 f-mono" style={{ fontSize: 11, color: "var(--c-ink-4)", letterSpacing: "0.08em" }}>
              {t("brand_motto")} · {t("brand_motto_en")}
            </p>
          </div>

          <FooterCol
            title={t("footer_links_product")}
            links={[
              // The whole suite, in pipeline order. Products without their
              // own page deep-link to their card on /suite.
              ...PRODUCTS.map((p) => ({
                label: p.name,
                href: p.href ?? `/suite#p-${p.id}`,
              })),
              { label: t("nav_technology"), href: "/technology" },
            ]}
          />
          <FooterCol
            title={t("footer_links_company")}
            links={[
              { label: t("footer_about"), href: "#" },
              { label: t("footer_partners"), href: "#" },
              { label: t("footer_blog"), href: "#" },
            ]}
          />
          <FooterCol
            title={t("footer_links_legal")}
            links={[
              { label: t("footer_security"), href: "#" },
              { label: t("footer_privacy"), href: "#" },
              { label: t("footer_terms"), href: "#" },
            ]}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-line/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.08em" }}>
            {t("footer_copyright")} · {t("footer_addr")}
          </div>
          <div className="flex items-center gap-3">
            <span className="chip-lime">{t("footer_version")}</span>
            <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.08em" }}>
              {t("footer_made_with")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="md:col-span-2">
      <div className="f-mono" style={{ fontSize: 10.5, letterSpacing: "0.16em", color: "var(--c-ink-4)", textTransform: "uppercase", marginBottom: 12 }}>
        {title}
      </div>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="no-underline transition-colors"
              style={{ fontSize: 13, color: "var(--c-ink-2)" }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
