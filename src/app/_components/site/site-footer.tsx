"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { CompanyLogo } from "./company-logo";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-steel-800 bg-navy-950 text-steel-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <CompanyLogo
              size={48}
              wordmark={t.common.companyName}
              subline={t.common.wordmarkSubline}
              variant="light"
            />
            <p className="mt-4 max-w-sm text-sm text-steel-400">{t.hero.tagline}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-steel-200">
                {t.footer.location}
              </h3>
              <p className="mt-3 text-sm">{t.about.location.address}</p>
              <p className="mt-1 text-sm text-steel-400">{t.about.location.area}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-steel-200">
                {t.footer.contact}
              </h3>
              <a
                href={`mailto:${t.common.email}`}
                className="mt-3 block font-mono text-sm text-brand-300 hover:text-brand-200"
              >
                {t.common.email}
              </a>
              <p className="mt-2 text-sm text-steel-400">{t.common.domain}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-steel-800 pt-6 text-center text-xs uppercase tracking-wider text-steel-500">
          © {new Date().getFullYear()} {t.common.companyName}. {t.common.rights}
        </div>
      </div>
    </footer>
  );
}
