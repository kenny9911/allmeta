"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import { EditoHero, Arrow } from "@/components/editorial/parts";
import OntologyStudioMock from "@/components/home/v2/mocks/OntologyStudioMock";

export default function OntologyHero({ launchUrl }: { launchUrl: string }) {
  const { t } = useApp();
  return (
    <EditoHero
      eyebrow="Core 01 · the Brain · v0.5"
      mockLabel="Ontology Studio"
      mock={<OntologyStudioMock />}
      title={
        <>
          allmeta Ontology
          <br />
          <span style={{ color: "var(--c-ink-3)" }}>
            the actionable ontology.
          </span>
        </>
      }
      sub={t("onto_hero_sub")}
      kicker={
        <span style={{ fontWeight: 500, fontSize: 15, color: "var(--c-lime-ink)" }}>
          From Copilot, to Operator.
        </span>
      }
      actions={
        <>
          <a href={launchUrl} className="btn-edito">
            {t("onto_hero_cta_launch")}
            <Arrow />
          </a>
          <Link href="/technology" className="link-edito" style={{ fontSize: 14 }}>
            {t("onto_hero_cta_arch")} →
          </Link>
        </>
      }
    />
  );
}
