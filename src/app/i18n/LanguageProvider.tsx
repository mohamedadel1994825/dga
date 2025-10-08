"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type SupportedLang = "ar" | "en";

type Dictionary = {
  header: {
    brand: string;
    menu: string[]; // ordered list of top-level menu labels
    actions: {
      search: string;
      login: string;
      langToggle: string; // label shown for the target language (e.g., "En" or "عربي")
    };
  };
};

const DICTS: Record<SupportedLang, Dictionary> = {
  ar: {
    header: {
      brand: "جامعة الإمام",
      menu: [
        "عن الجامعة",
        "الكليات",
        "البحث العلمي",
        "الحياة الجامعية",
        "العمادات",
        "الأخبار",
        "الخدمات",
      ],
      actions: {
        search: "بحث",
        login: "تسجيل الدخول",
        langToggle: "En",
      },
    },
  },
  en: {
    header: {
      brand: "Imam University",
      menu: [
        "About",
        "Colleges",
        "Research",
        "Campus Life",
        "Deanships",
        "News",
        "Services",
      ],
      actions: {
        search: "Search",
        login: "Login",
        langToggle: "عربي",
      },
    },
  },
};

type LanguageContextValue = {
  lang: SupportedLang;
  dict: Dictionary;
  toggle: () => void;
  set: (lang: SupportedLang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

function setHtmlLangAndDir(lang: SupportedLang) {
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

function syncPlatformComponentsLanguage(lang: SupportedLang) {
  try {
    const all = Array.from(document.querySelectorAll("*") as unknown as HTMLElement[]);
    for (const el of all) {
      const tag = el.tagName;
      if (tag.startsWith("DGA-") || tag.startsWith("NDS-")) {
        el.setAttribute("language", lang);
        if (tag === "DGA-SEARCH-BOX") {
          el.setAttribute("speech-lang", lang === "ar" ? "ar-SA" : "en-US");
        }
      }
    }
  } catch {}
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<SupportedLang>(() => {
    // Default is Arabic on first load
    return "ar";
  });

  const set = useCallback((l: SupportedLang) => {
    setLang(l);
    try { localStorage.setItem("site-lang", l); } catch {}
    setHtmlLangAndDir(l);
    syncPlatformComponentsLanguage(l);
  }, []);

  const toggle = useCallback(() => {
    set(lang === "ar" ? "en" : "ar");
  }, [lang, set]);

  useEffect(() => {
    // On first mount, prefer saved value if present, else keep Arabic
    const saved = (localStorage.getItem("site-lang") as SupportedLang | null) || undefined;
    const initial = saved || lang;
    setHtmlLangAndDir(initial);
    syncPlatformComponentsLanguage(initial);
    setLang(initial);
    const html = document.documentElement;
    const obs = new MutationObserver(() => {
      const l = (html.getAttribute("lang") as SupportedLang) || "ar";
      if (l !== initial) set(l);
    });
    obs.observe(html, { attributes: true, attributeFilter: ["lang"] });
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo<LanguageContextValue>(() => ({ lang, dict: DICTS[lang], toggle, set }), [lang, toggle, set]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export type { SupportedLang, Dictionary };


