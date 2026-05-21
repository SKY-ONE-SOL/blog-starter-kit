"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { navItems } from "@/lib/i18n/translations";
import { CompanyLogo } from "./company-logo";
import { LanguageToggle } from "./language-toggle";
import cn from "classnames";

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-steel-200/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#" className="shrink-0">
          <CompanyLogo
            size={44}
            wordmark={t.common.companyName}
            subline={t.common.wordmarkSubline}
            variant={scrolled ? "dark" : "light"}
            showWordmark
          />
        </a>

        <nav className="hidden items-center gap-10 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium uppercase tracking-[0.12em] transition",
                scrolled
                  ? "text-steel-600 hover:text-brand-700"
                  : "text-white/90 hover:text-white",
              )}
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle variant={scrolled ? "light" : "dark"} />
          <a
            href="#contact"
            className={cn(
              "px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition",
              scrolled
                ? "bg-brand-600 text-white hover:bg-brand-700"
                : "border border-white/40 text-white hover:bg-white/10",
            )}
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <LanguageToggle variant={scrolled ? "light" : "dark"} />
          <button
            type="button"
            className={cn("p-2", scrolled ? "text-steel-800" : "text-white")}
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-steel-200 bg-white px-6 py-6 xl:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wider text-steel-800"
                onClick={() => setOpen(false)}
              >
                {t.nav[item.key]}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-600 px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white"
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
