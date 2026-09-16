"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { navLinks, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-rule/80 bg-parchment/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="group min-w-0"
          aria-label={`${site.name} home`}
          onClick={() => setOpen(false)}
        >
          <span className="block font-serif text-2xl font-semibold leading-none text-ink">
            Mokoena
          </span>
          <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-stone">
            Attorneys Inc.
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition hover:text-brass-dark ${
                isActive(pathname, link.href)
                  ? "text-ink font-semibold"
                  : "text-stone"
              }`}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-ink px-4 py-2 text-sm font-semibold text-cream transition hover:bg-ink-soft"
          >
            Request a consultation
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-rule text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span className="block h-px w-5 bg-ink" />
            <span className="block h-px w-5 bg-ink" />
            <span className="block h-px w-3 bg-ink" />
          </span>
        </button>
      </Container>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="border-t border-rule bg-cream lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base text-ink"
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 bg-ink px-4 py-3 text-center text-sm font-semibold text-cream"
            onClick={() => setOpen(false)}
          >
            Request a consultation
          </Link>
        </Container>
      </div>
    </header>
  );
}
