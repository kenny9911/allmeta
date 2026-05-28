"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

export default function ThreeServers() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 60, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="lime">{t("tech_servers_label")}</SectionLabel>
        <div className="mt-8 mb-4">
          <h2 className="h-chunky h-display-md">{t("tech_servers_title")}</h2>
        </div>
        <p className="italic-en mb-10" style={{ fontSize: 15, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 700, fontStyle: "italic" }}>
          {t("tech_servers_title_en")}
        </p>

        {/* Generic Platform Layer banner */}
        <div
          className="panel mb-4 relative overflow-hidden"
          style={{
            padding: "20px 28px",
            boxShadow: "inset 0 3px 0 0 var(--c-lime), 0 0 0 1px var(--c-lime-line)",
            background: "linear-gradient(90deg, color-mix(in oklab, var(--c-lime) 10%, var(--c-surface)), var(--c-surface) 80%)",
          }}
        >
          <div className="f-mono mb-2" style={{ fontSize: 11, color: "var(--c-lime)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            PLATFORM GENERIC LAYER
          </div>
          <div className="f-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.015em", marginBottom: 6 }}>
            {t("tech_servers_platform")}
          </div>
          <div className="f-mono" style={{ fontSize: 12, color: "var(--c-ink-3)", letterSpacing: "0.04em" }}>
            {t("tech_servers_platform_items")}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServerCard tone="amber" abbr="RAAS" sub={t("tech_servers_raas_sub")} cust={t("tech_servers_raas_cust")} />
          <ServerCard tone="violet" abbr="ECAS" sub={t("tech_servers_ecas_sub")} cust={t("tech_servers_ecas_cust")} />
          <ServerCard tone="cyan" abbr="GEAS" sub={t("tech_servers_geas_sub")} cust={t("tech_servers_geas_cust")} />
        </div>

        <p className="mt-8 text-center f-mono italic" style={{ fontSize: 12.5, color: "var(--c-ink-3)", letterSpacing: "0.04em" }}>
          {t("tech_servers_footer")}
        </p>
      </Container>
    </section>
  );
}

function ServerCard({ tone, abbr, sub, cust }: { tone: "amber" | "violet" | "cyan"; abbr: string; sub: string; cust: string }) {
  const c: Record<string, string> = { amber: "var(--c-amber)", violet: "var(--c-violet)", cyan: "var(--c-cyan)" };
  return (
    <div className="panel" style={{ padding: 28, boxShadow: `inset 0 3px 0 0 ${c[tone]}` }}>
      <div className="f-display" style={{ fontSize: 38, fontWeight: 700, color: c[tone], letterSpacing: "-0.025em", lineHeight: 1, marginBottom: 6, textShadow: `0 0 24px color-mix(in oklab, ${c[tone]} 35%, transparent)` }}>
        {abbr}
      </div>
      <div className="italic-en mb-5" style={{ fontSize: 14, color: "var(--c-ink-3)", fontStyle: "italic" }}>
        {sub}
      </div>
      <div className="pt-4 mt-4" style={{ borderTop: "1px solid var(--c-line)" }}>
        <div className="f-mono mb-2" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Customer
        </div>
        <div style={{ fontSize: 13, color: "var(--c-ink-1)", lineHeight: 1.5 }}>
          {cust}
        </div>
      </div>
    </div>
  );
}
