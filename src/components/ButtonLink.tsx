import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

const variants = {
  primary:
    "bg-brass text-ink hover:bg-brass-dark hover:text-cream focus-visible:outline-offset-2",
  secondary:
    "border border-cream/40 bg-transparent text-cream hover:border-brass hover:text-brass",
  light:
    "border border-ink/15 bg-transparent text-ink hover:border-brass hover:text-brass-dark",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
