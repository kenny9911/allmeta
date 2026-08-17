"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useApp } from "@/lib/i18n";
import { I } from "@/components/shared/IconSet";
import BrandText from "@/components/shared/BrandText";
import { PRODUCTS, TONE_VAR, pk, type LaunchMap } from "@/lib/products";

export default function NavBar({
  launchUrl,
  launch,
}: {
  launchUrl?: string;
  /** Resolved product URLs. When present, the Products menu can launch
   *  each app directly instead of only linking to its marketing page. */
  launch?: LaunchMap;
}) {
  const { lang, t, toggleLang, toggleTheme } = useApp();
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on route change — otherwise it survives client-side nav.
  React.useEffect(() => setMenuOpen(false), [pathname]);

  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menuOpen]);

  const links: Array<{ href: string; key: string }> = [
    { href: "/technology", key: "nav_technology" },
  ];

  const productActive =
    pathname === "/suite" || PRODUCTS.some((p) => p.href && pathname.startsWith(p.href));

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
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="nav-products-panel"
              className="inline-flex items-center gap-1.5 transition-colors"
              style={{
                fontSize: 13.5,
                fontFamily: "var(--f-sans)",
                fontWeight: productActive || menuOpen ? 500 : 400,
                color: productActive || menuOpen ? "var(--c-ink-1)" : "var(--c-ink-3)",
                letterSpacing: "-0.005em",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              {t("nav_products")}
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: menuOpen ? "rotate(180deg)" : "none",
                  transition: "transform 200ms ease",
                }}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {menuOpen && <ProductsPanel launch={launch} onNavigate={() => setMenuOpen(false)} />}
          </div>

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
            href={launchUrl || "/suite"}
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

/** Drop-down listing the whole suite in pipeline order. Each row links to
 *  the product's page (or its anchor on /suite) and, when a launch URL is
 *  available, offers a direct jump into the running app. */
function ProductsPanel({
  launch,
  onNavigate,
}: {
  launch?: LaunchMap;
  onNavigate: () => void;
}) {
  const { t } = useApp();
  return (
    <div
      id="nav-products-panel"
      className="hairline absolute"
      style={{
        top: "calc(100% + 14px)",
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(640px, 88vw)",
        padding: 10,
        boxShadow: "var(--sh-3)",
        // Fully opaque: .hairline is translucent by design, but a dropdown
        // sits over the hero headline and must stay legible.
        background: "var(--c-surface)",
        borderColor: "var(--c-line)",
        zIndex: 60,
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {PRODUCTS.map((p) => {
          const tone = TONE_VAR[p.tone];
          const url = launch?.[p.id];
          return (
            <div
              key={p.id}
              className="flex items-center gap-3 rounded-lg transition-colors"
              style={{ padding: "10px 11px" }}
            >
              <Link
                href={p.href ?? `/suite#p-${p.id}`}
                onClick={onNavigate}
                className="flex items-center gap-3 no-underline flex-1 min-w-0"
              >
                <span
                  className="shrink-0"
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 999,
                    background: tone,
                    boxShadow: `0 0 8px ${tone}`,
                  }}
                />
                <span className="flex flex-col min-w-0">
                  <span
                    style={{
                      fontSize: 13.5,
                      fontWeight: 500,
                      color: "var(--c-ink-1)",
                      letterSpacing: "-0.01em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.name}
                  </span>
                  <span
                    className="f-mono truncate"
                    style={{
                      fontSize: 10,
                      color: "var(--c-ink-4)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {String(p.stage).padStart(2, "0")} · {t(pk(p.id, "role"))}
                  </span>
                </span>
              </Link>
              {url && (
                <a
                  href={url}
                  onClick={onNavigate}
                  aria-label={`${t("suite_launch")} ${p.name}`}
                  className="shrink-0 inline-flex items-center justify-center rounded-md no-underline"
                  style={{ width: 26, height: 26, color: tone }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              )}
            </div>
          );
        })}
      </div>

      <div
        className="flex items-center justify-between"
        style={{
          borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)",
          marginTop: 8,
          padding: "12px 11px 6px",
        }}
      >
        <Link href="/suite" onClick={onNavigate} className="link-edito" style={{ fontSize: 13 }}>
          {t("suite_view_all")} →
        </Link>
        <span
          className="f-mono"
          style={{
            fontSize: 10,
            color: "var(--c-ink-4)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {t("suite_pipeline")} · 06
        </span>
      </div>
    </div>
  );
}
