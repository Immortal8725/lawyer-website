import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-gold text-ink hover:bg-gold-soft border-gold",
  secondary:
    "bg-transparent text-cream border-cream/40 hover:border-cream hover:bg-cream/5",
  ghost:
    "bg-transparent text-ink border-ink/20 hover:border-ink hover:bg-ink/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-sm border px-5 py-2.5 text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
