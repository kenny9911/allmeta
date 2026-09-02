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
      eyebrow={t("tech_hero_eyebrow")}
      mockLabel={t("tech_arch_label")}
      mock={<ArchStackMock />}
      title={
        <>
          <span style={{ color: "var(--c-ink-3)" }}>{t("tech_hero_lead")}</span>
          <span style={{ color: "var(--c-ink-1)" }}>{t("tech_hero_main")}</span>
        </>
      }
      sub={t("tech_hero_sub")}
      actions={
        <>
          <Link href="/ontology" className="btn-edito">
            {t("tech_hero_cta1")}
            <Arrow />
          </Link>
          <Link href="/operator" className="link-edito" style={{ fontSize: 14 }}>
            {t("tech_hero_cta2")} →
          </Link>
        </>
      }
    />
  );
}
