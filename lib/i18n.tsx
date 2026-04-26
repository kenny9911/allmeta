"use client";
import React from "react";

export type Lang = "zh" | "en";

export const I18N: Record<Lang, Record<string, string>> = {
  zh: {
    brand_tag_zh: "新一代企业智能业务操作系统",
    brand_tag_en: "Enterprise Intelligent Operating System",
    hero_description: "为 AI 原生企业打造的本体设计、治理与智能体协同操作平台。",

    product_ontology_title: "allm²eta Ontology",
    product_ontology_subtitle: "企业本体 · 设计与治理",
    product_ontology_desc:
      "AI 优先的企业本体工作台,统一对象、规则、动作与事件,让模型推理、智能体规划与自然语言交互在同一语义空间中协作。",

    product_operator_title: "Agentic Operator",
    product_operator_subtitle: "AI 智能体 · 控制平面",
    product_operator_desc:
      "面向规模化部署的智能体操作中枢,可视化编排工作流、实时追踪运行轨迹,并通过事件总线统一治理舰队。",

    cta_launch: "进入控制台",
    cta_launch_short: "启动",

    footer_copyright: "© 2026 allm²eta · 新一代企业智能业务操作系统",
    footer_version: "v0.1",

    topbar_lang: "语言",
    topbar_theme: "主题",
    theme_light: "亮",
    theme_dark: "暗",
  },
  en: {
    brand_tag_zh: "新一代企业智能业务操作系统",
    brand_tag_en: "Enterprise Intelligent Operating System",
    hero_description:
      "An ontology design, governance, and agent operating platform built for the AI-native enterprise.",

    product_ontology_title: "allm²eta Ontology",
    product_ontology_subtitle: "Enterprise Ontology · Design & Governance",
    product_ontology_desc:
      "An AI-first ontology studio. Author Objects, Rules, Actions and Events in one semantic surface — designed for machine reasoning, agent planning, and natural-language interaction.",

    product_operator_title: "Agentic Operator",
    product_operator_subtitle: "AI Agent · Control Plane",
    product_operator_desc:
      "An operating console for AI agent fleets at scale. Compose workflows visually, trace every run in real-time, and govern the system through a unified event bus.",

    cta_launch: "Launch console",
    cta_launch_short: "Launch",

    footer_copyright: "© 2026 allm²eta · Enterprise Intelligent Operating System",
    footer_version: "v0.1",

    topbar_lang: "Language",
    topbar_theme: "Theme",
    theme_light: "Light",
    theme_dark: "Dark",
  },
};

type Ctx = {
  lang: Lang;
  t: (k: string) => string;
  setLang: (l: Lang) => void;
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
};

const LangContext = React.createContext<Ctx>({
  lang: "zh",
  t: (k) => k,
  setLang: () => {},
  theme: "light",
  setTheme: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("zh");
  const [theme, setThemeState] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const storedLang = (typeof window !== "undefined" ? localStorage.getItem("allmeta:lang") : null) as Lang | null;
    if (storedLang === "zh" || storedLang === "en") setLangState(storedLang);
    else {
      const n = (typeof navigator !== "undefined" ? navigator.language : "zh").toLowerCase();
      setLangState(n.startsWith("zh") ? "zh" : "en");
    }
    const storedTheme = typeof window !== "undefined" ? localStorage.getItem("allmeta:theme") : null;
    if (storedTheme === "light" || storedTheme === "dark") setThemeState(storedTheme);
  }, []);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("allmeta:theme", theme);
    }
  }, [theme]);

  React.useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("allmeta:lang", lang);
  }, [lang]);

  const t = React.useCallback(
    (k: string) => (I18N[lang] && I18N[lang][k]) || I18N.zh[k] || k,
    [lang]
  );

  const setLang = React.useCallback((l: Lang) => setLangState(l), []);
  const setTheme = React.useCallback((tt: "light" | "dark") => setThemeState(tt), []);

  return (
    <LangContext.Provider value={{ lang, t, setLang, theme, setTheme }}>
      {children}
    </LangContext.Provider>
  );
}

export function useApp() {
  return React.useContext(LangContext);
}
