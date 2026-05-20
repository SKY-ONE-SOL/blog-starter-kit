"use client";

import Image from "next/image";
import cn from "classnames";
import { useState } from "react";

/** Prefer `public/logo.png` (attached brand asset); falls back to `public/logo.svg`. */
const LOGO_PNG = "/logo.png";
const LOGO_SVG = "/logo.svg";

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
  wordmark = "SKY ONE Solution",
  subline = "Logistics · QC · Inspection",
  className,
  variant = "dark",
}: CompanyLogoProps) {
  const [src, setSrc] = useState(LOGO_PNG);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src={src}
        alt="SKY ONE"
        width={size}
        height={size}
        priority
        className="shrink-0"
        onError={() => setSrc(LOGO_SVG)}
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
