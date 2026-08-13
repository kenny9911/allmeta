"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, HairCard, Reveal, Em } from "@/components/editorial/parts";

export default function ThreeServers() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 90, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("tech_servers_label")}
          title={
            <>
              Three servers, one architecture,{" "}
              <Em color="var(--c-ink-2)">N customers.</Em>
            </>
          }
          desc={t("tech_servers_title_en")}
        />

        {/* generic layer banner */}
        <Reveal>
          <div
            className="hairline glow-ring mb-4 relative overflow-hidden"
            style={{ padding: "22px 28px", background: "linear-gradient(90deg, color-mix(in oklab, var(--c-lime) 9%, var(--c-surface)), var(--c-surface) 75%)" }}
          >
            <div className="f-mono mb-2" style={{ fontSize: 10.5, color: "var(--c-lime)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Platform Generic Layer
            </div>
            <div className="h-sans" style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--c-ink-1)", marginBottom: 5 }}>
              {t("tech_servers_platform")}
            </div>
            <div className="f-mono" style={{ fontSize: 12, color: "var(--c-ink-3)" }}>
              {t("tech_servers_platform_items")}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { abbr: "RAAS", tone: "amber" as const, sub: t("tech_servers_raas_sub"), cust: t("tech_servers_raas_cust") },
            { abbr: "ECAS", tone: "violet" as const, sub: t("tech_servers_ecas_sub"), cust: t("tech_servers_ecas_cust") },
            { abbr: "GEAS", tone: "cyan" as const, sub: t("tech_servers_geas_sub"), cust: t("tech_servers_geas_cust") },
          ].map((s, i) => {
            const c: Record<string, string> = { amber: "var(--c-amber)", violet: "var(--c-violet)", cyan: "var(--c-cyan)" };
            return (
              <Reveal key={s.abbr} delay={(i + 1) as 1 | 2 | 3}>
                <HairCard accent={s.tone} style={{ minHeight: 200 }}>
                  <div className="t-h3" style={{ color: c[s.tone], marginBottom: 6 }}>
                    {s.abbr}
                  </div>
                  <div className="t-small mb-6">
                    {s.sub}
                  </div>
                  <div className="pt-5" style={{ borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 16%, transparent)" }}>
                    <div className="f-mono mb-2" style={{ fontSize: 10, color: "var(--c-ink-4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                      Customer
                    </div>
                    <div style={{ fontSize: 13.5, color: "var(--c-ink-1)", lineHeight: 1.5 }}>{s.cust}</div>
                  </div>
                </HairCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={2}>
          <p className="t-body mt-8 text-center" style={{ color: "var(--c-ink-3)", maxWidth: 760, marginInline: "auto" }}>
            {t("tech_servers_footer")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
