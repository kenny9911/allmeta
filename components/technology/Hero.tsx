"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import { EditoHero, Arrow } from "@/components/editorial/parts";
import ArchStackMock from "@/components/home/v2/mocks/ArchStackMock";

export default function TechHero() {
  const { t } = useApp();
  return (
    <EditoHero
      eyebrow="Architecture · v0.5"
      mockLabel="6-Layer Stack"
      mock={<ArchStackMock />}
      title={
        <>
          Ontology-driven
          <br />
          <span style={{ color: "var(--c-ink-3)" }}>
            agentic architecture.
          </span>
        </>
      }
      sub={t("tech_hero_sub")}
      actions={
        <>
          <Link href="/ontology" className="btn-edito">
            Start with the Brain
            <Arrow />
          </Link>
          <Link href="/operator" className="link-edito" style={{ fontSize: 14 }}>
            See the Runtime →
          </Link>
        </>
      }
    />
  );
}
