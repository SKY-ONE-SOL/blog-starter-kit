"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { navItems } from "@/lib/i18n/translations";
import { LanguageToggle } from "./language-toggle";

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-sky-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500 text-sm font-bold text-white">
            S1
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            {t.common.companyName}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-sky-100/90 transition hover:text-white"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <a
            href="#contact"
            className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-sky-100"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-sky-950 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-sky-100"
                onClick={() => setOpen(false)}
              >
                {t.nav[item.key]}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-sky-500 px-5 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {t.nav.cta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
