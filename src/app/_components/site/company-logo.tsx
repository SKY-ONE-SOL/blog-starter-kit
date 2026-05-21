"use client";

import Image from "next/image";
import cn from "classnames";
import { LOGO_ALT, LOGO_SRC } from "@/lib/brand";

type CompanyLogoProps = {
  size?: number;
  showWordmark?: boolean;
  wordmark?: string;
  subline?: string;
  className?: string;
  variant?: "light" | "dark";
};

export function CompanyLogo({
  size = 44,
  showWordmark = true,
  wordmark = "SKY ONE SOLUTION",
  subline = "Logistics · QC · Inspection",
  className,
  variant = "dark",
}: CompanyLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src={LOGO_SRC}
        alt={LOGO_ALT}
        width={size}
        height={size}
        priority
        className="shrink-0"
      />
      {showWordmark && (
        <div className="hidden min-w-0 sm:block">
          <p
            className={cn(
              "font-display text-base font-bold leading-tight tracking-tight",
              variant === "light" ? "text-white" : "text-steel-900",
            )}
          >
            {wordmark}
          </p>
          <p
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.18em]",
              variant === "light" ? "text-steel-400" : "text-brand-600",
            )}
          >
            {subline}
          </p>
        </div>
      )}
    </div>
  );
}
