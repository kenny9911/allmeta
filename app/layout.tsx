import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "allm²eta · 新一代企业智能业务操作系统",
  description: "新一代企业智能业务操作系统 / Enterprise Intelligent Operating System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        {/* Sync data-theme from localStorage before paint to prevent FOUC and
            keep DOM in sync with React state on first hydration. Runs before
            React mounts; AppProvider's lazy useState reads window.__initialTheme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('allmeta:theme');var v=(t==='dark'||t==='light')?t:'light';document.documentElement.setAttribute('data-theme',v);window.__initialTheme=v;}catch(e){document.documentElement.setAttribute('data-theme','light');window.__initialTheme='light';}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
