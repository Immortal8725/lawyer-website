import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { site } from "@/data/site";
import { practiceAreas } from "@/data/practice-areas";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/20 bg-ink text-cream">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            {site.tagline} A Sandton practice advising individuals and
            businesses across Gauteng.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/80 hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
            Practice areas
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="text-cream/80 hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
            Chambers
          </h2>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-cream/80">
            {site.location.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <p className="mt-4 text-sm text-cream/80">
            <a
              href={site.contact.phoneHref}
              className="hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {site.contact.phoneDisplay}
            </a>
          </p>
          <p className="text-sm text-cream/80">
            <a
              href={site.contact.emailHref}
              className="hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {site.contact.email}
            </a>
          </p>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-3xl text-xs leading-relaxed text-cream/55">
            {site.disclaimer}
          </p>
          <p className="shrink-0 text-xs text-cream/45">
            © {new Date().getFullYear()} {site.name}. Sample content for
            demonstration.
          </p>
        </Container>
      </div>
    </footer>
  );
}
