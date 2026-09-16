import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation with Mokoena Attorneys Inc. in Sandton, Johannesburg.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultations"
        title="Tell us, in outline, what has happened"
        description="This form is a client-side demonstration. It validates your details and shows a success message. It does not send email, open a file, or create a mandate."
      />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Suspense
            fallback={
              <div className="border border-rule bg-parchment p-8 text-sm text-stone">
                Loading the enquiry form…
              </div>
            }
          >
            <ContactForm />
          </Suspense>
          <aside className="h-fit space-y-8">
            <div className="border border-rule bg-cream p-8">
              <h2 className="font-serif text-2xl text-ink">Chambers</h2>
              <address className="mt-4 space-y-3 text-sm not-italic leading-7 text-stone">
                <p>{formatAddress()}</p>
                <p>
                  <a className="font-semibold text-ink" href={site.contact.phoneHref}>
                    {site.contact.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    className="font-semibold text-ink"
                    href={`mailto:${site.contact.email}`}
                  >
                    {site.contact.email}
                  </a>
                </p>
                <p>{site.contact.hours}</p>
                <p>{site.contact.hoursNote}</p>
              </address>
            </div>
            <div className="border border-rule p-8">
              <h2 className="font-serif text-2xl text-ink">Before you write</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-stone">
                <li>Do not send originals or highly confidential annexures here.</li>
                <li>If there is a court date already, say so in the first line.</li>
                <li>
                  A reply, in a live practice, would confirm whether we can
                  assist and how to book.
                </li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
