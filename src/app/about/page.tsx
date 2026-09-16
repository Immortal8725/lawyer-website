import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} and principal attorney ${site.principal.name}, practising from Sandton, Johannesburg.`,
};

const values = [
  {
    title: "Plain language",
    body: "Advice is written so that a client can act on it. Technical terms are used where they matter, and explained where they do not.",
  },
  {
    title: "Discretion",
    body: "Family, employment, and commercial files are kept on a need-to-know basis. Consultations may be held in chambers or by secure video.",
  },
  {
    title: "Proportion",
    body: "Not every dispute belongs in court. We will say when a letter, a meeting, or a carefully drafted agreement is the better spend.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The firm"
        title={`${site.name} is a Sandton practice built around one attorney’s files.`}
        description="A boutique Johannesburg firm advising individuals, families, and owner-managed businesses. The work is selected so that it can be done properly."
      />

      <Container className="grid gap-12 py-14 lg:grid-cols-2 sm:py-16">
        <div>
          <h2 className="font-serif text-3xl text-ink">The attorney</h2>
          <p className="mt-4 leading-relaxed text-stone">
            {site.principal.name} is an {site.principal.credential.toLowerCase()},
            practising as {site.principal.title.toLowerCase()} of {site.name}.
            Chambers are in Sandton, with a focus on clients in Johannesburg
            and the wider Gauteng province.
          </p>
          <p className="mt-4 leading-relaxed text-stone">
            Consultations are offered in {site.principal.languages.join(", ")}.
            The practice does not claim to be all things to all clients: where a
            matter needs specialist counsel — for example complex tax or
            competition work — we say so and help you instruct the right person.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-line bg-cream p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-gold">Admission</dt>
              <dd className="mt-2 text-sm text-ink">High Court of South Africa</dd>
            </div>
            <div className="border border-line bg-cream p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-gold">Seat</dt>
              <dd className="mt-2 text-sm text-ink">{site.location.city}</dd>
            </div>
          </dl>
        </div>
        <div className="border border-line bg-cream p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Approach
          </p>
          <p className="mt-4 font-serif text-2xl leading-snug text-ink">
            Explain the position. Agree the work. Then do it without leaving
            the client to chase an update.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-stone">
            Fees are discussed at the first meeting. Depending on the matter,
            work may be billed on a mandate, an estimate with staged invoices,
            or — where appropriate — a fixed fee for a defined piece of work
            such as a will or a contract review.
          </p>
        </div>
      </Container>

      <section className="border-y border-line bg-cream py-14 sm:py-16">
        <Container>
          <h2 className="font-serif text-3xl text-ink">How we prefer to practise</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="border border-line bg-paper p-6">
                <h3 className="font-serif text-2xl text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{value.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <h2 className="font-serif text-3xl text-ink">Chambers</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <address className="not-italic leading-relaxed text-stone">
            {site.location.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="mt-4">{site.location.hours}</p>
            <p className="mt-2">{site.location.parking}</p>
          </address>
          <p className="leading-relaxed text-stone">
            Sandton is convenient for clients travelling from Midrand,
            Randburg, the East Rand, and Pretoria. Virtual consultations are
            available where the matter does not require original documents at
            the first meeting.
          </p>
        </div>
        <p className="mt-10">
          <ButtonLink href="/contact" variant="ghost">
            Arrange a consultation
          </ButtonLink>
        </p>
      </Container>
    </>
  );
}
