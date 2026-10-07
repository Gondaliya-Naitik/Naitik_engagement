import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { wedding } from "./config";
import { gu, uiEn, uiGu } from "./i18n";

// ============================================================
//  LANGUAGE — "en" (default) or "gu" (Gujarati)
//  Components read the active-language config via useWedding()
//  and loose UI strings via useT(). The choice is remembered
//  in localStorage and stamped on <html data-lang="…"> so the
//  CSS can switch fonts.
// ============================================================

const isPlainObject = (v) =>
  v !== null && typeof v === "object" && !Array.isArray(v);

/** Merge translation overrides over the base config (arrays replace). */
function deepMerge(base, over) {
  if (!isPlainObject(base) || !isPlainObject(over)) return over;
  const out = { ...base };
  for (const key of Object.keys(over)) {
    out[key] = key in base ? deepMerge(base[key], over[key]) : over[key];
  }
  return out;
}

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") === "gu" ? "gu" : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* private mode — just keep it in memory */
    }
  }, [lang]);

  const value = useMemo(() => {
    const activeWedding = lang === "gu" ? deepMerge(wedding, gu) : wedding;
    const ui = lang === "gu" ? { ...uiEn, ...uiGu } : uiEn;
    return {
      lang,
      wedding: activeWedding,
      ui,
      setLang,
      toggle: () => setLang((l) => (l === "en" ? "gu" : "en")),
    };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

function useLangData() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useWedding/useLang must be used inside <LanguageProvider>");
  return ctx;
}

/** Active-language config — same shape as `wedding` in config.js. */
export function useWedding() {
  return useLangData().wedding;
}

/** Loose UI strings for buttons, labels and small notes. */
export function useT() {
  return useLangData().ui;
}

/** { lang, toggle } — for the language button. */
export function useLang() {
  const { lang, toggle } = useLangData();
  return { lang, toggle };
}
