import { siteConfig } from "@/lib/site-content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-sky-950 pt-16">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #3374ff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1a52f5 0%, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-900/50 px-4 py-1.5 text-sm text-sky-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Montgomery, Alabama · Automotive Logistics Hub
          </p>

          <h1 className="mt-8 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-sky-100 sm:text-2xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-2 text-lg text-sky-200/80">{siteConfig.taglineKo}</p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-sky-100/90 sm:text-lg">
            SKY ONE Solution provides total solution services based on the automobile industry.
            Our team brings deep expertise from the automotive sector to deliver results that
            meet your expectations.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sky-200/70">
            스카이 원 솔루션은 자동차 산업 관련 필요하신 모든 서비스를 제공합니다.
            자동차 분야 출신의 직원들로 이 분야에 높은 이해도를 갖추고 있습니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
            >
              Our Services
            </a>
            <a
              href="#about"
              className="rounded-full border border-sky-400/40 px-8 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-900/50"
            >
              Company Profile
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { value: "15", unit: "Acres", label: "Facility Area" },
            { value: "34,588", unit: "sq.ft", label: "Warehouse Space" },
            { value: "24/7", unit: "", label: "Ready to Serve" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm"
            >
              <p className="font-display text-3xl font-bold text-white">
                {stat.value}
                {stat.unit && (
                  <span className="ml-1 text-lg font-medium text-sky-300">{stat.unit}</span>
                )}
              </p>
              <p className="mt-1 text-sm text-sky-200/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
