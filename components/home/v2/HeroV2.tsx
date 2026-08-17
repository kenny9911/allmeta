"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import { Rich } from "@/components/editorial/parts";
import GridProcurementMock from "./mocks/GridProcurementMock";
import Reveal from "./Reveal";

/** The hero makes one claim and then shows it working.
 *
 *  Three tiers, sized apart rather than styled apart: the claim (t-display),
 *  the mechanism that backs it (t-h3), the explanation (t-lead). No eyebrow
 *  and no metric row — a launch badge and a stat line both hedge a claim that
 *  is stronger stated flat, and the running panel on the right is the proof
 *  those numbers were standing in for. */
export default function HeroV2() {
  const { t } = useApp();
  return (
    <section className="relative" style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="aurora" aria-hidden />

      <div className="edito-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT — typography */}
          <div className="lg:col-span-7">
            <Reveal>
              <h1 className="t-display-hero">
                {t("h_hero_t1")}<br />
                {t("h_hero_t2")}
              </h1>
            </Reveal>

            <Reveal delay={1}>
              <p className="t-h3" style={{ marginTop: 26, maxWidth: 620 }}>
                {/* -ink, not the fill lime: this is 26px type, and the fill
                    value measures 2.90:1 on the light canvas. */}
                <Rich text={t("h_hero_mech")} emColor="var(--c-lime-ink)" />
              </p>
            </Reveal>

            <Reveal delay={2}>
              <p className="t-lead" style={{ marginTop: 22, maxWidth: 580 }}>
                <Rich text={t("h_hero_sub")} />
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link href="/suite" className="btn-edito">
                  {t("h_hero_cta1")}
                  <svg className="arr" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link href="/technology" className="link-edito" style={{ fontSize: 14 }}>
                  {t("h_hero_cta2")}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — live procurement run */}
          {/* min-w-0 is load-bearing: a grid item defaults to min-width:auto,
              so the track refused to shrink below the mock's min-content
              width and dragged the whole page sideways on phones. With the
              track free to shrink, the mock scrolls inside its own box. */}
          <div className="lg:col-span-5 min-w-0">
            <Reveal delay={2}>
              {/* Caption sits in normal flow, not absolutely above the panel:
                  the scroll wrapper below sets overflow-x, which forces
                  overflow-y to auto and clips anything positioned outside it. */}
              <div
                className="hidden lg:flex justify-end f-mono"
                style={{ marginBottom: 10, fontSize: 10.5, letterSpacing: "0.16em", color: "var(--c-ink-4)", textTransform: "uppercase" }}
              >
                {t("h_hero_mock_label")}
              </div>
              <div className="relative overflow-x-auto">
                <GridProcurementMock />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
