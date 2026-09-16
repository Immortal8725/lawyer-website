import Link from "next/link";
import { Container } from "@/components/Container";
import { practiceAreas } from "@/lib/practice-areas";
import { formatAddress, navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl">Mokoena Attorneys Inc.</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-cream/75">
            A Sandton practice advising on family, commercial, labour, litigation,
            property and deceased estate matters. Consultations are by appointment.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Visit
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-cream" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            {practiceAreas.slice(0, 3).map((area) => (
              <li key={area.slug}>
                <Link
                  className="hover:text-cream"
                  href={`/practice-areas/${area.slug}`}
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Chambers
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic leading-6 text-cream/80">
            <p>{formatAddress()}</p>
            <p>
              <a className="hover:text-cream" href={site.contact.phoneHref}>
                {site.contact.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                className="hover:text-cream"
                href={`mailto:${site.contact.email}`}
              >
                {site.contact.email}
              </a>
            </p>
            <p>{site.contact.hours}</p>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="space-y-4 py-8 text-xs leading-6 text-cream/65">
          <p>
            The information on this website is general information only and is
            not legal advice. Viewing these pages, completing the contact form,
            or corresponding with the firm does not create an attorney–client
            relationship or a mandate. Please consult a qualified South African
            attorney about your specific circumstances.
          </p>
          <p>
            {site.name} is a sample Johannesburg practice for this website
            MVP. In a live deployment, attorneys would be admitted to the High
            Court of South Africa and regulated by the {site.regulator}.
          </p>
          <p className="text-cream/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
            Sample content only.
          </p>
        </Container>
      </div>
    </footer>
  );
}
