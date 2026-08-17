"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Rich } from "@/components/editorial/parts";
import Reveal from "./Reveal";
import { useReducedMotion } from "./useReducedMotion";

/** "Humans and agents, on one decision surface."
 *
 *  People dock to the harness band from above, agents from below, through
 *  identical hairlines — that symmetry is the whole peer argument, so the two
 *  docks are drawn the same and neither carries an arrowhead. The four checks
 *  are properties of the band, not stations on a route.
 *
 *  One decision travels inside the band and HALTS under the person who must
 *  rule on it, then resumes. The still frame under prefers-reduced-motion is
 *  that paused state, which is the section's point.
 *
 *  R-GOV-301 is deliberately the same rule id and gloss as the hero's
 *  procurement panel. Never reuse R-PROC-016 or R-SUPP-114 here — the hero
 *  owns those with specific meanings, and a repeated id with a changed
 *  meaning is exactly what a procurement reader is trained to catch. */
export default function HarnessV2() {
  const { t } = useApp();
  return (
    <section className="section relative">
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-12 items-end">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-5">{t("h_harn_eyebrow")}</div>
              <p className="t-h2">
                <span style={{ color: "var(--c-ink-3)" }}>{t("h_harn_q_lead")}</span>
                <span style={{ color: "var(--c-ink-1)" }}>{t("h_harn_q_main")}</span>
              </p>
            </div>
            <p className="t-body lg:col-span-6" style={{ maxWidth: 520 }}>
              <Rich text={t("h_harn_sub")} />
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="min-w-0">
            <div className="overflow-x-auto hidden lg:block">
              <HarnessBand t={t} />
            </div>
            <div className="lg:hidden">
              <HarnessStacked t={t} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <p className="t-small mt-6">{t("h_harn_proof")}</p>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: "var(--c-line)" }}>
            <Right a={t("h_harn_r1a")} b={t("h_harn_r1b")} />
            <Right a={t("h_harn_r2a")} b={t("h_harn_r2b")} />
            <Right a={t("h_harn_r3a")} b={t("h_harn_r3b")} />
          </div>
        </Reveal>

        <Reveal delay={3}>
          <p className="t-h3 mt-12 mx-auto text-center" style={{ color: "var(--c-ink-2)", maxWidth: 760 }}>
            <Rich text={t("h_harn_punch")} />
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** One rung of the decision-rights ladder: what happens, and who may say so. */
function Right({ a, b }: { a: string; b: string }) {
  return (
    <div style={{ background: "var(--c-bg)", padding: "18px 20px" }}>
      <div className="t-title" style={{ fontSize: 15 }}>{a}</div>
      <div className="t-small mt-1" style={{ color: "var(--c-ink-3)" }}>{b}</div>
    </div>
  );
}

const DUR = "6s";
const TOKEN_PATH = "M 70 178 H 850 C 866 178 866 158 876 158 H 898";

const CHECKS = [
  { x: 82, i: "01", k: "h_harn_d_c1" },
  { x: 288, i: "02", k: "h_harn_d_c2" },
  { x: 494, i: "03", k: "h_harn_d_c3" },
  { x: 700, i: "04", k: "h_harn_d_c4" },
];

const HUMANS = [
  { x: 96, dock: 196, k: "h_harn_d_h1" },
  { x: 366, dock: 466, k: "h_harn_d_h2" },
  { x: 636, dock: 736, k: "h_harn_d_h3" },
];

const AGENTS = [
  { x: 56, dock: 148, k: "h_harn_d_a1" },
  { x: 268, dock: 360, k: "h_harn_d_a2" },
  { x: 480, dock: 572, k: "h_harn_d_a3" },
  { x: 692, dock: 784, k: "h_harn_d_a4" },
];

function HarnessBand({ t }: { t: (k: string) => string }) {
  const still = useReducedMotion();
  return (
    <svg
      viewBox="0 0 1040 316"
      style={{ width: "100%", minWidth: 900 }}
      role="img"
      aria-label={`${t("h_harn_q_lead")}${t("h_harn_q_main")}`}
    >
      <text x="56" y="14" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.14em" fill="var(--c-violet)">
        {t("h_harn_d_people")}
      </text>
      <text x="56" y="308" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.14em" fill="var(--c-lime-ink)">
        {t("h_harn_d_agents")}
      </text>

      {/* docks — identical treatment above and below, no arrowheads. These are
          docks, not flows; the symmetry is the peer argument. */}
      {HUMANS.map((h) => (
        <g key={`hd${h.dock}`}>
          <path d={`M ${h.dock} 70 V 128`} stroke="var(--c-violet)" strokeWidth="1" fill="none" />
          <circle cx={h.dock} cy="128" r="4" fill="var(--c-violet)" />
        </g>
      ))}
      {AGENTS.map((a) => (
        <g key={`ad${a.dock}`}>
          <path d={`M ${a.dock} 242 V 188`} stroke="var(--c-line-graph-mid)" strokeWidth="1" fill="none" />
          <circle cx={a.dock} cy="188" r="4" fill="var(--c-lime)" />
        </g>
      ))}

      {/* the one labelled edge — offset right of its dock so the hand-off dot
          that travels that exact line never sits under the text */}
      <text x="478" y="104" fontFamily="var(--f-mono)" fontSize="11" fill="var(--c-violet)">
        {t("h_harn_d_gov")}
      </text>

      {/* people */}
      {HUMANS.map((h) => (
        <g key={h.k}>
          <rect x={h.x} y="24" width="200" height="46" rx="3" fill="var(--c-plate)" stroke="var(--c-violet)" strokeWidth="1.6" />
          <text x={h.x + 14} y="44" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.16em" fill="var(--c-violet)">
            {t("h_harn_d_human_k")}
          </text>
          <text x={h.x + 14} y="62" fontFamily="var(--f-sans)" fontWeight="500" fontSize="13" fill="var(--c-ink-1)">
            {t(h.k)}
          </text>
        </g>
      ))}

      {/* the band. Its label sits ABOVE it — the interior belongs to the checks. */}
      <text x="56" y="92" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.16em" fill="var(--c-lime-ink)">
        {t("h_harn_d_band_k")}
      </text>
      <text x="56" y="114" fontFamily="var(--f-sans)" fontWeight="600" fontSize="15" fill="var(--c-ink-1)">
        {t("h_harn_d_band")}
      </text>
      <rect x="56" y="128" width="820" height="60" rx="24" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.3" />

      {/* checks are fill="none" — that is what keeps the travelling token visible */}
      {CHECKS.map((c) => (
        <g key={c.i}>
          <rect x={c.x} y="136" width="150" height="30" rx="15" fill="none" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
          <text x={c.x + 12} y="155" fontFamily="var(--f-mono)" fontSize="11" fill="var(--c-ink-4)">{c.i}</text>
          <text x={c.x + 40} y="155" fontFamily="var(--f-sans)" fontSize="12" fill="var(--c-ink-1)">{t(c.k)}</text>
        </g>
      ))}

      {/* agents */}
      {AGENTS.map((a) => (
        <g key={a.k}>
          <rect x={a.x} y="242" width="184" height="46" rx="23" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.1" />
          <text x={a.x + 14} y="262" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.16em" fill="var(--c-lime-ink)">
            {t("h_harn_d_agent_k")}
          </text>
          <text x={a.x + 14} y="280" fontFamily="var(--f-sans)" fontSize="13" fill="var(--c-ink-1)">{t(a.k)}</text>
        </g>
      ))}

      {/* outcome */}
      <path d="M 876 158 H 898" stroke="var(--c-line-graph-strong)" strokeWidth="1.4" fill="none" />
      <polygon points="896,154 902,158 896,162" fill="var(--c-line-graph-strong)" />
      <rect x="902" y="126" width="132" height="64" rx="14" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.2" />
      <text x="968" y="148" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.14em" fill="var(--c-lime-ink)">
        {t("h_harn_d_dec_k")}
      </text>
      <text x="968" y="166" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="500" fontSize="13" fill="var(--c-ink-1)">
        {t("h_harn_d_dec1")}
      </text>
      <text x="968" y="182" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="500" fontSize="13" fill="var(--c-ink-1)">
        {t("h_harn_d_dec2")}
      </text>

      {/* The run: it reaches the collective-decision dock, hands off to a
          person, waits, and only then continues. Two stacked dots cross-fade
          because SMIL cannot resolve var() inside an animated paint list. */}
      {still ? (
        <>
          <circle cx="466" cy="178" r="4.5" fill="var(--c-violet)" />
          <circle cx="466" cy="120" r="3.5" fill="var(--c-violet)" />
          <circle cx="420" cy="151" r="3.5" fill="var(--c-lime)" />
          <circle cx="832" cy="151" r="3.5" fill="var(--c-lime)" />
        </>
      ) : (
        <>
          <circle r="4.5" fill="var(--c-lime)">
            <animateMotion dur={DUR} repeatCount="indefinite" path={TOKEN_PATH} keyPoints="0;0.476;0.476;1" keyTimes="0;0.35;0.59;1" calcMode="linear" />
            <animate attributeName="opacity" values="1;1;0;0;1;1" keyTimes="0;0.35;0.38;0.56;0.59;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
          <circle r="4.5" fill="var(--c-violet)">
            <animateMotion dur={DUR} repeatCount="indefinite" path={TOKEN_PATH} keyPoints="0;0.476;0.476;1" keyTimes="0;0.35;0.59;1" calcMode="linear" />
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.35;0.38;0.56;0.59;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
          <circle cx="466" r="3.5" fill="var(--c-violet)">
            <animate attributeName="cy" values="178;178;78;78;178;178" keyTimes="0;0.35;0.44;0.52;0.59;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.35;0.37;0.57;0.59;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
          {/* rule check fires just before the halt; the audit trail is written
              after the resume — causal order, legible without a caption */}
          <circle cx="420" cy="151" r="3.5" fill="var(--c-lime)">
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.29;0.32;0.40;0.44;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
          <circle cx="832" cy="151" r="3.5" fill="var(--c-lime)">
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.74;0.77;0.90;0.94;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
        </>
      )}
    </svg>
  );
}

/** Purpose-built stacked variant. The wide band is not shrunk — at phone
 *  width its 13px labels would fall under 5px. Same top-to-bottom order
 *  (people → harness → agents) so the peer relationship survives. */
function HarnessStacked({ t }: { t: (k: string) => string }) {
  const still = useReducedMotion();
  const humans = [44, 96, 148];
  const checkY = [234, 274, 314, 354];
  const agentY = [428, 476, 524, 572];
  return (
    <svg viewBox="0 0 360 640" style={{ width: "100%" }} role="img" aria-label={`${t("h_harn_q_lead")}${t("h_harn_q_main")}`}>
      <text x="20" y="24" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.14em" fill="var(--c-violet)">
        {t("h_harn_d_people")}
      </text>

      {HUMANS.map((h, i) => (
        <g key={h.k}>
          <rect x="20" y={humans[i]} width="320" height="44" rx="3" fill="var(--c-plate)" stroke="var(--c-violet)" strokeWidth="1.6" />
          <text x="34" y={humans[i] + 19} fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.16em" fill="var(--c-violet)">
            {t("h_harn_d_human_k")}
          </text>
          <text x="34" y={humans[i] + 36} fontFamily="var(--f-sans)" fontWeight="500" fontSize="13" fill="var(--c-ink-1)">
            {t(h.k)}
          </text>
        </g>
      ))}

      {/* Docks sit right of centre so the rule label gets a clear run: the
          English string is ~205u wide and would otherwise cross the line.
          Both docks share the same x — the symmetry is the peer argument. */}
      <path d="M 300 192 V 214" stroke="var(--c-violet)" strokeWidth="1" fill="none" />
      <circle cx="300" cy="214" r="4" fill="var(--c-violet)" />
      {/* On mobile the pause alone carries the beat, so the rule is stated as
          a label rather than acted out by a hand-off dot. */}
      <text x="20" y="206" fontFamily="var(--f-mono)" fontSize="11" fill="var(--c-violet)">
        {t("h_harn_d_gov")}
      </text>

      <rect x="20" y="214" width="320" height="180" rx="20" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.3" />
      {CHECKS.map((c, i) => (
        <g key={c.i}>
          <rect x="36" y={checkY[i]} width="288" height="32" rx="16" fill="none" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
          <text x="50" y={checkY[i] + 20} fontFamily="var(--f-mono)" fontSize="11" fill="var(--c-ink-4)">{c.i}</text>
          <text x="78" y={checkY[i] + 20} fontFamily="var(--f-sans)" fontSize="12" fill="var(--c-ink-1)">{t(c.k)}</text>
        </g>
      ))}
      <path d="M 300 394 V 428" stroke="var(--c-line-graph-mid)" strokeWidth="1" fill="none" />
      <circle cx="300" cy="428" r="4" fill="var(--c-lime)" />

      {AGENTS.map((a, i) => (
        <g key={a.k}>
          <rect x="20" y={agentY[i]} width="320" height="40" rx="20" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.1" />
          <text x="34" y={agentY[i] + 17} fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.16em" fill="var(--c-lime-ink)">
            {t("h_harn_d_agent_k")}
          </text>
          <text x="34" y={agentY[i] + 33} fontFamily="var(--f-sans)" fontSize="13" fill="var(--c-ink-1)">{t(a.k)}</text>
        </g>
      ))}

      {still ? (
        <circle cx="30" cy="290" r="4" fill="var(--c-violet)" />
      ) : (
        <circle r="4" fill="var(--c-lime)">
          <animateMotion dur={DUR} repeatCount="indefinite" path="M 30 226 V 382" keyPoints="0;0.41;0.41;1" keyTimes="0;0.35;0.59;1" calcMode="linear" />
        </circle>
      )}
    </svg>
  );
}
