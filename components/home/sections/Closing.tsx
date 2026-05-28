"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import { I } from "@/components/shared/IconSet";
import Orb from "@/components/shared/Orb";

export default function Closing() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 100, paddingBottom: 80 }}>
      <Container size="narrow">
        <div className="text-center">
          <div className="f-mono mb-6" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--c-ink-3)", textTransform: "uppercase" }}>
            {t("home_closing_label")}
          </div>

          <div className="flex justify-center mb-8">
            <Orb size="xl" />
          </div>

          <p className="h-italic" style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "var(--c-ink-3)" }}>
            {t("home_closing_zh_top")}
          </p>

          <h2
            className="h-chunky mt-3"
            style={{
              fontSize: "clamp(48px, 8vw, 110px)",
              letterSpacing: "-0.035em",
              lineHeight: 0.95,
            }}
          >
            <span style={{ color: "var(--c-ink-3)" }} className="italic-en"><i>{t("home_closing_h1_top")}</i></span>
            <br />
            <span className="text-gradient italic-en" style={{ fontStyle: "italic", fontWeight: 700 }}>{t("home_closing_h1")}</span>
          </h2>

          <p className="mt-6 italic-en" style={{ fontSize: "clamp(15px, 1.4vw, 17px)", color: "var(--c-ink-2)", lineHeight: 1.6, fontStyle: "italic" }}>
            {t("home_closing_zh")}
          </p>
          <p className="mt-8 f-display" style={{ fontSize: "clamp(16px, 1.5vw, 19px)", fontWeight: 600, color: "var(--c-lime)", letterSpacing: "-0.01em" }}>
            {t("home_closing_kicker")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
            <Link href="/ontology" className="btn-lime">
              {t("home_closing_cta")}
              <I.arrow />
            </Link>
            <Link href="/operator" className="btn-violet">
              {t("home_closing_cta2")}
              <I.arrow />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
