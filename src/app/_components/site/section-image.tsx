import Image from "next/image";
import cn from "classnames";

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
};

export function SectionImage({
  src,
  alt,
  className,
  priority = false,
  fill = true,
  sizes = "100vw",
}: SectionImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={cn("absolute inset-0 h-full w-full object-cover object-center", className)}
    />
  );
}
