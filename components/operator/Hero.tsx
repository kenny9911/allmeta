"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import { EditoHero, Arrow } from "@/components/editorial/parts";
import OperatorCanvasMock from "@/components/home/v2/mocks/OperatorCanvasMock";

export default function OperatorHero({ launchUrl }: { launchUrl: string }) {
  const { t } = useApp();
  return (
    <EditoHero
      eyebrow="Core 02 · the Runtime · Q3 · 2026"
      mockLabel="Operator · Orchestrator"
      mock={<OperatorCanvasMock />}
      title={
        <>
          Agentic Operator
          <br />
          <span style={{ color: "var(--c-ink-3)" }}>
            ontology-driven agents.
          </span>
        </>
      }
      sub={t("op_hero_sub")}
      kicker={
        <span style={{ fontWeight: 500, fontSize: 15, color: "var(--c-violet)" }}>
          From Copilot, to Operator.
        </span>
      }
      actions={
        <>
          <a href={launchUrl} className="btn-edito" style={{ background: "var(--c-violet)", borderColor: "var(--c-violet)", color: "oklch(0.98 0 0)" }}>
            {t("op_hero_cta_launch")}
            <Arrow />
          </a>
          <Link href="/ontology" className="link-edito" style={{ fontSize: 14 }}>
            {t("op_hero_cta_onto")} →
          </Link>
        </>
      }
    />
  );
}
