"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { navItems } from "@/lib/i18n/translations";
import { CompanyLogo } from "./company-logo";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-steel-900 text-steel-400">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <CompanyLogo
              size={48}
              wordmark={t.common.companyName}
              subline={t.common.wordmarkSubline}
              variant="light"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">{t.hero.intro}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Menu</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : undefined)}
                    className="text-sm transition hover:text-white"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              {t.footer.contact}
            </h3>
            <a
              href={`mailto:${t.common.email}`}
              className="mt-4 block text-sm text-brand-300 hover:text-brand-200"
            >
              {t.common.email}
            </a>
            <p className="mt-4 text-sm">{t.about.location.address}</p>
            <p className="mt-1 text-sm">{t.common.domain}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-steel-700 pt-8 text-xs uppercase tracking-wider sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t.common.companyName}. {t.common.rights}
          </p>
          <p className="text-steel-500">Montgomery, Alabama · USA</p>
        </div>
      </div>
    </footer>
  );
}
