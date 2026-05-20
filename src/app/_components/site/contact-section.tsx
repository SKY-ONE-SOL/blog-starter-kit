import { siteConfig } from "@/lib/site-content";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-sky-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Thank You"
          subtitle="We look forward to partnering with you. Reach out to discuss how SKY ONE Solution can support your operations."
          subtitleKo="함께 성장할 파트너가 되겠습니다. 문의해 주세요."
          light
        />

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-sky-950 transition hover:bg-sky-50"
          >
            {siteConfig.email}
          </a>
          <p className="text-sky-200">{siteConfig.location.address}</p>
        </div>
      </div>
    </section>
  );
}
