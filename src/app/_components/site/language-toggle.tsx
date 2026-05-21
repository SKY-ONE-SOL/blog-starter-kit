"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import type { Locale } from "@/lib/i18n/translations";
import cn from "classnames";

type LanguageToggleProps = {
  variant?: "light" | "dark";
};

export function LanguageToggle({ variant = "light" }: LanguageToggleProps) {
  const { locale, setLocale } = useLanguage();
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "flex p-0.5",
        isDark
          ? "border border-white/25 bg-white/5"
          : "border border-steel-200 bg-white",
      )}
      role="group"
      aria-label="Language"
    >
      {(["en", "ko"] as Locale[]).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={cn(
            "px-3 py-1 text-xs font-bold uppercase tracking-wider transition",
            locale === lang
              ? isDark
                ? "bg-white text-navy-950"
                : "bg-brand-600 text-white"
              : isDark
                ? "text-white/70 hover:text-white"
                : "text-steel-600 hover:text-brand-700",
          )}
          aria-pressed={locale === lang}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
