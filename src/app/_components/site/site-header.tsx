"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { navItems } from "@/lib/i18n/translations";
import { CompanyLogo } from "./company-logo";
import { LanguageToggle } from "./language-toggle";

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-steel-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#" className="shrink-0">
          <CompanyLogo
            size={40}
            wordmark={t.common.companyName}
            subline={t.common.wordmarkSubline}
            variant="dark"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-steel-600 transition hover:text-brand-700"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <a href="#contact" className="btn-primary">
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle variant="light" />
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-steel-700"
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
        <nav className="border-t border-steel-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wide text-steel-700"
                onClick={() => setOpen(false)}
              >
                {t.nav[item.key]}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2 text-center" onClick={() => setOpen(false)}>
              {t.nav.cta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
