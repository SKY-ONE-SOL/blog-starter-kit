"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import type { Locale } from "@/lib/i18n/translations";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex rounded-full border border-sky-600/50 bg-sky-900/60 p-0.5"
      role="group"
      aria-label="Language"
    >
      {(["en", "ko"] as Locale[]).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition ${
            locale === lang
              ? "bg-sky-500 text-white shadow-sm"
              : "text-sky-200 hover:text-white"
          }`}
          aria-pressed={locale === lang}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
