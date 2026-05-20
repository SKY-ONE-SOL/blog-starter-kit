"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import type { Locale } from "@/lib/i18n/translations";
import cn from "classnames";

type LanguageToggleProps = {
  variant?: "light" | "dark";
};

export function LanguageToggle({ variant = "dark" }: LanguageToggleProps) {
  const { locale, setLocale } = useLanguage();
  const isLight = variant === "light";

  return (
    <div
      className={cn(
        "flex border p-0.5",
        isLight
          ? "border-steel-300 bg-steel-50"
          : "border-steel-200 bg-steel-100",
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
              ? "bg-brand-600 text-white"
              : isLight
                ? "text-steel-600 hover:text-brand-700"
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
