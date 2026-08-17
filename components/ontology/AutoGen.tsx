"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, HairCard, Reveal } from "@/components/editorial/parts";
import { I } from "@/components/shared/IconSet";

const TONE: Record<string, string> = {
  info: "var(--c-info)", lime: "var(--c-lime)", amber: "var(--c-amber)",
  violet: "var(--c-violet)", cyan: "var(--c-cyan)", coral: "var(--c-coral)",
};

/** Same tones, for when the value drives a `color:` rather than a fill.
 *  Only lime differs — the fill lime is too pale to read as type on white. */
const TONE_TEXT: Record<string, string> = { ...TONE, lime: "var(--c-lime-ink)" };

/** Mono zone label with a glowing dot — used on the pipeline panels. */
function ZoneTag({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 f-mono"
      style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--c-ink-3)" }}
    >
      <span style={{ width: 6, height: 6, borderRadius: 999, background: color, boxShadow: `0 0 8px ${color}` }} />
      {children}
    </span>
  );
}

/** Directional flow connector — horizontal on desktop, vertical on mobile. */
function Flow() {
  const line = "linear-gradient(VAR, var(--c-line-graph-mid), color-mix(in oklab, var(--c-lime) 65%, transparent))";
  return (
    <div className="flex items-center justify-center shrink-0 self-center" aria-hidden>
      <div className="hidden lg:flex items-center" style={{ width: 36 }}>
        <span style={{ flex: 1, height: 1, background: line.replace("VAR", "90deg") }} />
        <span style={{ color: "var(--c-lime)", display: "inline-flex", marginLeft: -2 }}>
          <I.arrow width={13} height={13} />
        </span>
      </div>
      <div className="flex lg:hidden flex-col items-center" style={{ height: 24 }}>
        <span style={{ width: 1, flex: 1, background: line.replace("VAR", "180deg") }} />
        <span className="rotate-90" style={{ color: "var(--c-lime)", display: "inline-flex", marginTop: -2 }}>
          <I.arrow width={13} height={13} />
        </span>
      </div>
    </div>
  );
}

/** The produced ontology, drawn as a radial node cluster — six tone-coded
 *  satellites (the auto-built layers) feeding one central hub. */
function OntologyMotif() {
  const sat = [
    { x: 46, y: 36, c: TONE.info },
    { x: 160, y: 24, c: TONE.lime },
    { x: 274, y: 38, c: TONE.amber },
    { x: 42, y: 114, c: TONE.cyan },
    { x: 160, y: 126, c: TONE.violet },
    { x: 278, y: 112, c: TONE.coral },
  ];
  const cx = 160, cy = 75;
  return (
    <svg viewBox="0 0 320 150" role="img" aria-hidden style={{ display: "block", width: "100%", height: "auto", marginTop: 16 }}>
      {sat.map((s, i) => (
        <line key={`l${i}`} x1={cx} y1={cy} x2={s.x} y2={s.y}
          stroke="var(--c-line-graph-mid)" strokeWidth={1} />
      ))}
      {sat.map((s, i) => (
        <g key={`n${i}`}>
          <circle cx={s.x} cy={s.y} r={9} fill={`color-mix(in oklab, ${s.c} 16%, transparent)`} />
          <circle cx={s.x} cy={s.y} r={4.5} fill={s.c} />
        </g>
      ))}
      <circle cx={cx} cy={cy} r={16} fill="none" stroke="color-mix(in oklab, var(--c-lime) 55%, transparent)" strokeWidth={1.4} />
      <circle cx={cx} cy={cy} r={7} className="anim-pulse" fill="var(--c-lime)" />
    </svg>
  );
}

export default function OntologyGenerator() {
  const { t } = useApp();

  const inputs = [
    { icon: <I.audit />, t: t("onto_gen_in1_t"), d: t("onto_gen_in1_d") },
    { icon: <I.database />, t: t("onto_gen_in2_t"), d: t("onto_gen_in2_d") },
    { icon: <I.stack />, t: t("onto_gen_in3_t"), d: t("onto_gen_in3_d") },
  ];

  const caps: Array<{ tone: string; icon: React.ReactNode; tag: string; name: string; desc: string }> = [
    { tone: "info", icon: <I.cube />, tag: t("onto_gen_c1_tag"), name: t("onto_gen_c1_name"), desc: t("onto_gen_c1_desc") },
    { tone: "lime", icon: <I.shield />, tag: t("onto_gen_c2_tag"), name: t("onto_gen_c2_name"), desc: t("onto_gen_c2_desc") },
    { tone: "amber", icon: <I.flow />, tag: t("onto_gen_c3_tag"), name: t("onto_gen_c3_name"), desc: t("onto_gen_c3_desc") },
    { tone: "cyan", icon: <I.graph />, tag: t("onto_gen_c4_tag"), name: t("onto_gen_c4_name"), desc: t("onto_gen_c4_desc") },
    { tone: "violet", icon: <I.bolt />, tag: t("onto_gen_c5_tag"), name: t("onto_gen_c5_name"), desc: t("onto_gen_c5_desc") },
    { tone: "coral", icon: <I.eye />, tag: t("onto_gen_c6_tag"), name: t("onto_gen_c6_name"), desc: t("onto_gen_c6_desc") },
  ];

  return (
    <section className="section">
      <div className="edito-container">
        <SectionHead
          eyebrow={t("onto_autogen_label")}
          title={<>{t("onto_autogen_title_1")} {t("onto_autogen_title_2")}</>}
          desc={t("onto_autogen_lead")}
        />

        {/* ---------- pipeline band: input → generator → ontology ---------- */}
        <Reveal>
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            {/* INPUT */}
            <div className="hairline" style={{ padding: 22, flex: "1 1 0", minWidth: 0 }}>
              <ZoneTag color="var(--c-cyan)">{t("onto_gen_tag_in")}</ZoneTag>
              <div className="t-small" style={{ marginTop: 6, marginBottom: 16 }}>{t("onto_gen_input_kicker")}</div>
              <div className="flex flex-col gap-2.5">
                {inputs.map((s) => (
                  <div
                    key={s.t}
                    className="flex items-start gap-3"
                    style={{
                      padding: "11px 13px",
                      borderRadius: 11,
                      background: "color-mix(in oklab, var(--c-surface) 60%, transparent)",
                      border: "1px solid color-mix(in oklab, var(--c-ink-4) 16%, transparent)",
                    }}
                  >
                    <span style={{ color: "var(--c-cyan)", marginTop: 1, flexShrink: 0 }}>{s.icon}</span>
                    <div style={{ minWidth: 0 }}>
                      <div className="t-title" style={{ fontSize: 14.5 }}>{s.t}</div>
                      <div className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.03em", marginTop: 3, lineHeight: 1.5 }}>
                        {s.d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Flow />

            {/* GENERATOR core */}
            <div className="shrink-0 self-center flex flex-col items-center" style={{ width: 156 }}>
              <div
                className="f-mono"
                style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--c-ink-4)", marginBottom: 12 }}
              >
                {t("onto_gen_tag_engine")}
              </div>
              <div className="relative" style={{ width: 116, height: 116 }}>
                <div
                  className="anim-pulse"
                  aria-hidden
                  style={{
                    position: "absolute", inset: -12, borderRadius: 28,
                    background: "radial-gradient(circle, color-mix(in oklab, var(--c-lime) 32%, transparent), transparent 70%)",
                    filter: "blur(10px)",
                  }}
                />
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: 116, height: 116, borderRadius: 26,
                    background: "linear-gradient(155deg, color-mix(in oklab, var(--c-surface) 94%, transparent), color-mix(in oklab, var(--c-violet) 14%, transparent))",
                    border: "1px solid color-mix(in oklab, var(--c-lime) 42%, transparent)",
                    boxShadow: "inset 0 1px 0 color-mix(in oklab, #fff 8%, transparent), 0 24px 54px -22px color-mix(in oklab, var(--c-lime) 45%, transparent)",
                  }}
                >
                  <span style={{ color: "var(--c-lime)" }}><I.cpu width={36} height={36} /></span>
                </div>
              </div>
              <div className="t-title" style={{ fontSize: 14.5, textAlign: "center", marginTop: 14 }}>
                {t("onto_gen_engine_name")}
              </div>
              <div className="f-mono" style={{ fontSize: 9.5, color: "var(--c-ink-4)", textAlign: "center", marginTop: 5, letterSpacing: "0.02em", lineHeight: 1.5 }}>
                {t("onto_gen_engine_sub")}
              </div>
            </div>

            <Flow />

            {/* OUTPUT */}
            <div className="hairline" style={{ padding: 22, flex: "1.12 1 0", minWidth: 0, borderTop: "2px solid var(--c-lime)" }}>
              <ZoneTag color="var(--c-lime)">{t("onto_gen_tag_out")}</ZoneTag>
              <h3 className="t-h3" style={{ marginTop: 10 }}>{t("onto_gen_output_t")}</h3>
              <p className="t-small" style={{ marginTop: 6 }}>{t("onto_gen_output_d")}</p>
              <OntologyMotif />
            </div>
          </div>
        </Reveal>

        {/* ---------- divider label ---------- */}
        <div className="flex items-center gap-4 mt-14 mb-7">
          <span className="eyebrow">{t("onto_gen_caps_label")}</span>
          <span className="rule-thin hidden sm:block" style={{ flex: 1, marginTop: 1 }} />
        </div>

        {/* ---------- auto-capability grid ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {caps.map((cp, i) => (
            <Reveal key={cp.name} delay={(Math.min(3, (i % 3) + 1)) as 1 | 2 | 3}>
              <HairCard style={{ minHeight: 168 }}>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      width: 38, height: 38, borderRadius: 10,
                      background: `color-mix(in oklab, ${TONE[cp.tone]} 14%, transparent)`,
                      color: TONE[cp.tone],
                      border: `1px solid color-mix(in oklab, ${TONE[cp.tone]} 32%, transparent)`,
                    }}
                  >
                    {cp.icon}
                  </span>
                  <span className="f-mono" style={{ fontSize: 10, color: TONE_TEXT[cp.tone], letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {cp.tag}
                  </span>
                </div>
                <h3 className="t-title" style={{ marginBottom: 8 }}>{cp.name}</h3>
                <p className="t-small">{cp.desc}</p>
              </HairCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
