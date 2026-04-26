"use client";
import React from "react";
import { useApp } from "@/lib/i18n";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer
      className="relative flex items-center justify-between border-t border-line/60"
      style={{ height: 40, padding: "0 24px", marginTop: 48 }}
    >
      <div className="text-ink-3" style={{ fontSize: 11 }}>
        {t("footer_copyright")}
      </div>
      <div className="hint mono" style={{ fontSize: 10 }}>
        {t("footer_version")}
      </div>
    </footer>
  );
}
