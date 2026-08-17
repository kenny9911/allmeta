"use client";
import React from "react";
import PageShell from "@/components/site/PageShell";
import { useApp } from "@/lib/i18n";
import { PRODUCTS, TONE_VAR, TONE_VAR_INK, pk, type LaunchMap } from "@/lib/products";
import { CTASection, Reveal } from "@/components/editorial/parts";
import SuiteFlowV2 from "@/components/home/v2/SuiteFlowV2";
import ProductSuiteV2 from "@/components/home/v2/ProductSuiteV2";

export default function SuiteContent({ launch }: { launch: LaunchMap }) {
  const { t } = useApp();

  return (
    <PageShell launchUrl={launch.studio} launch={launch}>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="aurora" aria-hidden />
        <div className="edito-container relative">
          <Reveal>
            <div className="eyebrow">{t("suite_page_eyebrow")}</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="t-display mt-7" style={{ maxWidth: 900 }}>
              {t("suite_page_t1")} {t("suite_page_t2")}
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="t-lead mt-7" style={{ maxWidth: 620 }}>
              {t("suite_page_sub")}
            </p>
          </Reveal>
        </div>
      </section>

      <SuiteFlowV2 />
      <ProductSuiteV2 launch={launch} />
      <Handoffs />

      <CTASection
        title={t("suite_cta_t")}
        sub={t("suite_cta_sub")}
        primary={{ href: launch.studio, label: t("suite_launch") + " · Ontology Studio", external: true }}
        secondary={{ href: "/technology", label: t("h_arch_link") }}
      />
    </PageShell>
  );
}

/** The data contract between every pair of adjacent products — the thing
 *  that makes six separate apps behave as one pipeline. */
function Handoffs() {
  const { t } = useApp();
  return (
    <section className="section-tight">
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">{t("suite_hand_eyebrow")}</div>
              <h2 className="t-h2">{t("suite_hand_t")}</h2>
            </div>
            <p className="t-body lg:col-span-5" style={{ maxWidth: 460 }}>
              {t("suite_hand_sub")}
            </p>
          </div>
        </Reveal>

        <div className="hairline overflow-hidden">
          {PRODUCTS.map((p, i) => {
            const tone = TONE_VAR[p.tone];
            return (
              <Reveal key={p.id} delay={(Math.min(i, 3) + 1) as 1 | 2 | 3 | 4}>
                <div
                  className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-3 items-center"
                  style={{
                    padding: "20px 24px",
                    borderTop: i === 0 ? "none" : "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)",
                  }}
                >
                  {/* product */}
                  <div className="md:col-span-4 flex items-center gap-3">
                    <span
                      className="f-mono shrink-0"
                      style={{ fontSize: 10.5, color: TONE_VAR_INK[p.tone], letterSpacing: "0.16em" }}
                    >
                      {String(p.stage).padStart(2, "0")}
                    </span>
                    <span className="t-title" style={{ fontSize: 16 }}>
                      {p.name}
                    </span>
                  </div>

                  {/* in */}
                  <div className="md:col-span-4">
                    <div
                      className="f-mono"
                      style={{ fontSize: 9.5, color: "var(--c-ink-4)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 3 }}
                    >
                      {t("suite_in")}
                    </div>
                    <div style={{ fontSize: 13.5, color: "var(--c-ink-3)" }}>
                      {t(pk(p.id, "in"))}
                    </div>
                  </div>

                  {/* out */}
                  <div className="md:col-span-4">
                    <div
                      className="f-mono"
                      style={{ fontSize: 9.5, color: "var(--c-ink-4)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 3 }}
                    >
                      {t("suite_out")}
                    </div>
                    <div style={{ fontSize: 13.5, color: "var(--c-ink-1)", fontWeight: 500 }}>
                      {t(pk(p.id, "out"))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
