import { siteConfig } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-700 text-sm font-bold text-white">
                S1
              </span>
              <span className="font-display text-lg font-semibold text-sky-950">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              {siteConfig.tagline}
            </p>
            <p className="mt-1 text-sm text-slate-500">{siteConfig.taglineKo}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                Location
              </h3>
              <p className="mt-2 text-sm text-slate-600">{siteConfig.location.address}</p>
              <p className="mt-1 text-sm text-slate-600">{siteConfig.location.area}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                Contact
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-sm text-sky-700 hover:text-sky-600"
              >
                {siteConfig.email}
              </a>
              <p className="mt-2 text-sm text-slate-600">{siteConfig.domain}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
