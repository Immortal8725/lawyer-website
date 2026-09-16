"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuId = useId();

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isCurrent(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="border-b border-line bg-paper">
      <div className="hidden border-b border-ink bg-ink text-cream sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-xs tracking-wide sm:px-8">
          <p>
            {site.location.city}
            <span className="mx-2 text-gold-soft" aria-hidden>
              ·
            </span>
            {site.location.region}
          </p>
          <p className="flex items-center gap-4">
            <a
              href={site.contact.phoneHref}
              className="hover:text-gold-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {site.contact.phoneDisplay}
            </a>
            <a
              href={site.contact.emailHref}
              className="hover:text-gold-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {site.contact.email}
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => {
            const current = isCurrent(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`text-sm tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                  current ? "text-ink" : "text-stone hover:text-ink"
                }`}
              >
                {item.label}
                {current ? (
                  <span className="mt-1 block h-px w-full bg-gold" aria-hidden />
                ) : (
                  <span className="mt-1 block h-px w-full bg-transparent" aria-hidden />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-sm bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-ink-mid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:inline-flex"
          >
            Request a consultation
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm border border-line p-2 text-ink lg:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            aria-controls={menuId}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-line bg-paper px-5 py-4 lg:hidden"
        >
          <nav aria-label="Mobile primary" className="flex flex-col gap-1">
            {site.nav.map((item) => {
              const current = isCurrent(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`rounded-sm px-2 py-3 text-base focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                    current ? "bg-cream text-ink" : "text-stone hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 rounded-sm bg-ink px-3 py-3 text-center text-sm font-medium text-cream"
            >
              Request a consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
