import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const markClass = variant === "light" ? "text-gold-soft" : "text-gold";
  const wordClass = variant === "light" ? "text-cream" : "text-ink";
  const subClass = variant === "light" ? "text-cream/70" : "text-stone";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      aria-label="Khumalo Attorneys, home"
    >
      <span className={`inline-flex h-10 w-10 items-center justify-center ${markClass}`} aria-hidden>
        <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
          <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M20 8.5v4.2M14 13.2h12M14 13.2c0 5.4 2.6 8.6 6 10.3 3.4-1.7 6-4.9 6-10.3M20 23.5V31"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M16 31h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.35rem] font-semibold tracking-tight ${wordClass}`}
        >
          Khumalo
        </span>
        {!compact ? (
          <span
            className={`mt-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] ${subClass}`}
          >
            Attorneys
          </span>
        ) : null}
      </span>
    </Link>
  );
}
