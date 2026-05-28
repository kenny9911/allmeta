"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useApp } from "@/lib/i18n";
import { I } from "@/components/shared/IconSet";
import BrandText from "@/components/shared/BrandText";

export default function NavBar({ launchUrl }: { launchUrl?: string }) {
  const { lang, t, toggleLang, toggleTheme } = useApp();
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: Array<{ href: string; key: string }> = [
    { href: "/ontology", key: "nav_ontology" },
    { href: "/operator", key: "nav_operator" },
    { href: "/technology", key: "nav_technology" },
  ];

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-xl" : ""
      )}
      style={{
        background: scrolled ? "color-mix(in oklab, var(--c-bg) 78%, transparent)" : "transparent",
        borderBottom: scrolled
          ? "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)"
          : "1px solid transparent",
      }}
    >
      <div className="edito-container flex items-center justify-between" style={{ height: 64 }}>
        {/* Left — brand only, no clutter */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <BrandText size="sm" />
        </Link>

        {/* Center — nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className="no-underline transition-colors"
                style={{
                  fontSize: 13.5,
                  fontFamily: "var(--f-sans)",
                  fontWeight: active ? 500 : 400,
                  color: active ? "var(--c-ink-1)" : "var(--c-ink-3)",
                  letterSpacing: "-0.005em",
                }}
              >
                {t(l.key)}
              </Link>
            );
          })}
        </nav>

        {/* Right — controls + CTA */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("topbar_lang")}
            className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md transition-colors"
            style={{
              fontSize: 12,
              fontFamily: "var(--f-mono)",
              color: "var(--c-ink-3)",
              letterSpacing: "0.04em",
            }}
          >
            {lang === "zh" ? "中文" : "EN"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t("topbar_theme")}
            className="inline-flex items-center justify-center h-8 w-8 rounded-md transition-colors"
            style={{ color: "var(--c-ink-3)" }}
          >
            <span className="theme-icon-light"><I.moon /></span>
            <span className="theme-icon-dark"><I.sun /></span>
          </button>

          <a
            href={launchUrl || "/ontology"}
            className="btn-edito ml-2"
            style={{ padding: "8px 14px", fontSize: 12.5 }}
          >
            {t("nav_launch")}
            <svg className="arr" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
