"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Ic } from "@/components/shared/Ic";
import BrandMark from "./BrandMark";

export default function TopBar() {
  const { lang, t, toggleLang, toggleTheme } = useApp();

  return (
    <header
      className="relative z-10 flex items-center justify-between border-b border-line/60 bg-surface/60 backdrop-blur-md"
      style={{ height: 48, padding: "0 24px" }}
    >
      <div className="flex items-center gap-3">
        <BrandMark size="sm" />
        <span
          className="hint"
          style={{ marginLeft: 6, paddingLeft: 12, borderLeft: "1px solid var(--c-line)" }}
        >
          ENTERPRISE INTELLIGENT OS
        </span>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={toggleLang}
          aria-label={t("topbar_lang")}
          className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md text-[11.5px] font-medium text-ink-2 hover:text-ink-1 hover:bg-panel transition-colors"
        >
          <Ic.globe />
          <span className="tabular-nums">{lang === "zh" ? "中文" : "EN"}</span>
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={t("topbar_theme")}
          className="inline-flex items-center justify-center h-7 w-7 rounded-md text-ink-2 hover:text-ink-1 hover:bg-panel transition-colors"
        >
          {/* Render BOTH icons unconditionally so SSR and client emit identical
              DOM (no hydration mismatch, no mounted flag, nothing for bfcache
              to mishandle). The visible icon is selected purely by CSS via
              [data-theme] on <html>, which the inline script in app/layout.tsx
              sets before paint. See `.theme-icon-*` rules in globals.css. */}
          <span className="theme-icon-light"><Ic.moon /></span>
          <span className="theme-icon-dark"><Ic.sun /></span>
        </button>
      </div>
    </header>
  );
}
