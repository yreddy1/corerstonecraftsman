import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-orange text-white hover:bg-orange-dark border-transparent",
  secondary:
    "bg-white text-navy border-navy hover:bg-sand",
  ghost:
    "bg-transparent text-white border-white hover:bg-white/10",
  navy: "bg-navy text-white hover:bg-navy-dark border-transparent",
} as const;

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md border-2 px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
