type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={centered ? "flex flex-col items-center" : "flex items-start gap-4"}>
        {!centered && (
          <div
            className={`mt-1 h-12 w-1 shrink-0 ${light ? "bg-brand-400" : "bg-brand-600"}`}
            aria-hidden
          />
        )}
        <div>
          <p
            className={`text-xs font-bold uppercase tracking-[0.22em] ${
              light ? "text-brand-300" : "text-brand-600"
            }`}
          >
            {label}
          </p>
          <h2
            className={`mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
              light ? "text-white" : "text-navy-950"
            }`}
          >
            {title}
          </h2>
        </div>
      </div>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            centered ? "mx-auto" : "ml-5"
          } ${light ? "text-steel-300" : "text-steel-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
