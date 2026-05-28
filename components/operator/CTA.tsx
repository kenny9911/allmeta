"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import { I } from "@/components/shared/IconSet";

export default function CTA({ launchUrl }: { launchUrl: string }) {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 100, paddingBottom: 60 }}>
      <Container size="narrow">
        <div
          className="panel text-center"
          style={{
            padding: "60px 32px",
            boxShadow: "inset 0 3px 0 0 var(--c-violet), 0 0 0 1px var(--c-violet-line), 0 0 100px -12px color-mix(in oklab, var(--c-violet) 50%, transparent)",
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in oklab, var(--c-violet) 14%, transparent), var(--c-surface) 70%)",
          }}
        >
          <h2 className="h-chunky h-display-md">{t("op_cta_title")}</h2>
          <p className="italic-en mt-3" style={{ fontSize: 15, color: "var(--c-ink-3)", fontStyle: "italic" }}>
            {t("op_cta_title_en")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <a href={launchUrl} className="btn-violet">
              {t("op_cta_primary")}
              <I.arrow />
            </a>
            <Link href="/ontology" className="btn-ghost">
              {t("op_cta_secondary")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
