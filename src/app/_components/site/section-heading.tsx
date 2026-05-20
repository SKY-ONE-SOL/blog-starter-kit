type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-sm font-semibold uppercase tracking-widest ${
          light ? "text-sky-300" : "text-sky-600"
        }`}
      >
        {label}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-sky-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-sky-100/90" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
