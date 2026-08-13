"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Reveal from "@/components/home/v2/Reveal";

export { Reveal };

/** Small mono eyebrow — replaces the loud "ACT 0X" deck labels. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("eyebrow", className)}>{children}</div>;
}

/** Asymmetric section head: eyebrow + big sans/serif title on the left,
 *  optional supporting paragraph + link on the right. The shared rhythm
 *  used across every editorial section. */
export function SectionHead({
  eyebrow,
  title,
  desc,
  link,
  align = "split",
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  link?: { href: string; label: string };
  align?: "split" | "stack";
}) {
  return (
    <Reveal>
      <div className={clsx("grid grid-cols-1 gap-8 mb-12 lg:mb-16", align === "split" ? "lg:grid-cols-12 items-end" : "")}>
        <div className={align === "split" ? "lg:col-span-7" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="t-h2 mt-5">{title}</h2>
        </div>
        {(desc || link) && (
          <div className={align === "split" ? "lg:col-span-5" : ""}>
            {desc && (
              <p className="t-body" style={{ maxWidth: 480 }}>
                {desc}
              </p>
            )}
            {link && (
              <Link href={link.href} className="link-edito inline-block mt-4" style={{ fontSize: 14 }}>
                {link.label} →
              </Link>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}

/** Inline emphasis — same typeface, medium weight + brighter ink.
 *  (Replaces the old italic-serif gesture for a single-family system.) */
export function Em({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="t-em" style={color ? { color } : undefined}>
      {children}
    </span>
  );
}

/** Renders a translatable string, turning *…* spans into inline emphasis.
 *  Lets a single i18n key carry emphasis — translators wrap the key phrase
 *  in asterisks (works for both zh and en). Emphasis is same-family, medium
 *  weight, brighter ink: no second typeface, no italics. */
export function Rich({ text, emColor }: { text: string; emColor?: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.length > 1 && p.startsWith("*") && p.endsWith("*") ? (
          <span key={i} className="t-em" style={emColor ? { color: emColor } : undefined}>
            {p.slice(1, -1)}
          </span>
        ) : (
          <React.Fragment key={i}>{p}</React.Fragment>
        )
      )}
    </>
  );
}

/** A subtle hairline card. */
export function HairCard({
  children,
  className,
  style,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  accent?: "lime" | "violet" | "amber" | "cyan" | "coral" | "info";
}) {
  const c: Record<string, string> = {
    lime: "var(--c-lime)", violet: "var(--c-violet)", amber: "var(--c-amber)",
    cyan: "var(--c-cyan)", coral: "var(--c-coral)", info: "var(--c-info)",
  };
  return (
    <div
      className={clsx("hairline", className)}
      style={{
        padding: 26,
        ...(accent ? { borderLeft: `2px solid ${c[accent]}` } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Big closing CTA section with aurora — shared across product pages. */
export function CTASection({
  title,
  sub,
  primary,
  secondary,
  tone = "lime",
}: {
  title: React.ReactNode;
  sub?: React.ReactNode;
  primary: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string };
  tone?: "lime" | "violet";
}) {
  return (
    <section className="relative" style={{ paddingTop: 140, paddingBottom: 120 }}>
      <div className="aurora" aria-hidden />
      <div className="edito-container relative">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="t-display">{title}</h2>
            {sub && (
              <p className="t-lead mt-6" style={{ maxWidth: 620 }}>
                {sub}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              {primary.external ? (
                <a href={primary.href} className="btn-edito">
                  {primary.label}
                  <Arrow />
                </a>
              ) : (
                <Link href={primary.href} className="btn-edito">
                  {primary.label}
                  <Arrow />
                </Link>
              )}
              {secondary && (
                <Link href={secondary.href} className="link-edito" style={{ fontSize: 14 }}>
                  {secondary.label} →
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Arrow() {
  return (
    <svg className="arr" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Editorial hero scaffold — asymmetric text column + mock column. */
export function EditoHero({
  eyebrow,
  title,
  sub,
  kicker,
  actions,
  mock,
  mockLabel,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub: React.ReactNode;
  kicker?: React.ReactNode;
  actions: React.ReactNode;
  mock: React.ReactNode;
  mockLabel?: string;
}) {
  return (
    <section className="relative" style={{ paddingTop: 56, paddingBottom: 72 }}>
      <div className="aurora" aria-hidden />
      <div className="edito-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
            <Reveal delay={1}>
              <h1 className="t-display mt-7">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="t-lead mt-7" style={{ maxWidth: 540 }}>
                {sub}
              </p>
            </Reveal>
            {kicker && (
              <Reveal delay={3}>
                <div className="mt-6">{kicker}</div>
              </Reveal>
            )}
            <Reveal delay={3}>
              <div className="flex flex-wrap items-center gap-4 mt-9">{actions}</div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={2} className="relative">
              {mock}
              {mockLabel && (
                <div
                  className="absolute hidden lg:block f-mono"
                  style={{ top: -14, right: 14, fontSize: 10.5, letterSpacing: "0.16em", color: "var(--c-ink-4)", textTransform: "uppercase" }}
                >
                  {mockLabel}
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
