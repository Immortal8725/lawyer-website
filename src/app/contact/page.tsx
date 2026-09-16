import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Sandton, Johannesburg to request a confidential consultation.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Request a confidential consultation"
        description="Tell us briefly what the matter concerns. We will confirm whether we can assist and propose a time. Please do not send original documents through this form."
      />
      <Container className="grid items-start gap-12 py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.75fr)] sm:py-16">
        <ContactForm />
        <aside className="h-fit space-y-8">
          <div className="border border-line bg-cream p-6">
            <h2 className="font-serif text-2xl text-ink">Chambers</h2>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-stone">
              {site.location.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <p className="mt-4 text-sm text-stone">{site.location.hours}</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-gold">Telephone</dt>
                <dd className="mt-1">
                  <a
                    href={site.contact.phoneHref}
                    className="text-ink hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {site.contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-gold">Email</dt>
                <dd className="mt-1">
                  <a
                    href={site.contact.emailHref}
                    className="text-ink hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="border border-line bg-paper p-6">
            <h2 className="font-serif text-2xl text-ink">Before you write</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone">
              <li>A short chronology is more useful than a full bundle of papers.</li>
              <li>If a court date is already set, please mention it in the first line.</li>
              <li>This form is a demonstration: it validates locally and does not send email.</li>
            </ul>
          </div>
        </aside>
      </Container>
    </>
  );
}
