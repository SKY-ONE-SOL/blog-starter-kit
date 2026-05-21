"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function MarqueeBanner() {
  const { t } = useLanguage();
  const text = `${t.marquee.text} · `;
  const repeated = Array(8).fill(text).join("");

  return (
    <div className="overflow-hidden border-y border-steel-200 bg-steel-50 py-6">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex shrink-0">
          <span className="mx-8 font-display text-2xl font-bold uppercase tracking-wider text-steel-300 md:text-3xl">
            {repeated}
          </span>
          <span className="mx-8 font-display text-2xl font-bold uppercase tracking-wider text-steel-300 md:text-3xl" aria-hidden>
            {repeated}
          </span>
        </div>
      </div>
    </div>
  );
}
