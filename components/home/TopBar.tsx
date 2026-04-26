"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Ic } from "@/components/shared/Ic";
import BrandMark from "./BrandMark";

export default function TopBar() {
  const { lang, theme, t, toggleLang, toggleTheme, mounted } = useApp();

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
          {/* Render an empty 14×14 placeholder until mounted so the SSR HTML
              matches the first client paint regardless of stored theme.
              Without this, the icon flickers from moon→sun (or vice versa)
              on first hydration when the user's stored theme differs from
              the SSR default. */}
          {mounted ? (
            theme === "light" ? <Ic.moon /> : <Ic.sun />
          ) : (
            <span style={{ width: 14, height: 14, display: "inline-block" }} />
          )}
        </button>
      </div>
    </header>
  );
}
