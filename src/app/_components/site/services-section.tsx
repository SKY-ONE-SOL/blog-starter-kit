"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

const serviceIcons: Record<string, ReactNode> = {
  warehouse: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
  ),
  package: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />
  ),
  inspect: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  ),
  rework: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  intern: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824 2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  ),
  port: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  ),
  more: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  ),
};

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.services.label}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service) => (
            <div
              key={service.icon}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:border-sky-200 hover:shadow-card-hover"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {serviceIcons[service.icon]}
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-sky-950">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
