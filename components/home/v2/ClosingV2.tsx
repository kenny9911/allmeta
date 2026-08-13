"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import { Rich } from "@/components/editorial/parts";
import Reveal from "./Reveal";

export default function ClosingV2() {
  const { t } = useApp();
  return (
    <section className="relative" style={{ paddingTop: 140, paddingBottom: 120 }}>
      <div className="aurora" aria-hidden />
      <div className="edito-container relative">
        <Reveal>
          <div className="eyebrow mb-9" style={{ justifyContent: "center" }}>
            <span>{t("h_close_eyebrow")}</span>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="t-display text-center">
            <span style={{ color: "var(--c-ink-3)" }}>{t("h_close_t1")}</span>
            <br />
            <span style={{ color: "var(--c-ink-1)" }}>{t("h_close_t2")}</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="t-lead mx-auto mt-9 text-center" style={{ maxWidth: 620 }}>
            <Rich text={t("h_close_sub")} />
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <Link href="/ontology" className="btn-edito">
              {t("h_close_cta1")}
              <svg className="arr" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/operator" className="link-edito" style={{ fontSize: 14 }}>
              {t("h_close_cta2")} →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <p
            className="text-center mt-20 f-mono"
            style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            {t("h_close_sig")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
