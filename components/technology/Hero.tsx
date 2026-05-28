"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import { I } from "@/components/shared/IconSet";

export default function TechHero() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 48 }}>
      <Container>
        <div className="chip-violet" style={{ marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--c-violet)", boxShadow: "0 0 8px var(--c-violet)" }} />
          {t("tech_hero_eyebrow")}
        </div>

        <h1
          className="h-chunky"
          style={{
            fontSize: "clamp(54px, 8vw, 108px)",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            maxWidth: 1000,
          }}
        >
          <span style={{ color: "var(--c-ink-1)" }}>{t("tech_hero_h1")}</span>
          <br />
          <span className="text-gradient italic-en" style={{ fontStyle: "italic", fontWeight: 700 }}>
            {t("tech_hero_h2")}
          </span>
        </h1>

        <p className="f-display" style={{ marginTop: 24, fontSize: "clamp(16px, 1.7vw, 20px)", color: "var(--c-ink-2)", lineHeight: 1.55, maxWidth: 720, fontWeight: 500 }}>
          {t("tech_hero_sub")}
        </p>
        <p className="italic-en mt-3" style={{ fontSize: 14, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 720, fontStyle: "italic" }}>
          {t("tech_hero_sub_en")}
        </p>
      </Container>
    </section>
  );
}
