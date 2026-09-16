import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getHighlightedPracticeAreas } from "@/data/practice-areas";
import { site } from "@/data/site";

const trustSignals = [
  {
    label: "High Court",
    value: "Attorney of the High Court of South Africa",
  },
  {
    label: "Chambers",
    value: "Sandton, Johannesburg",
  },
  {
    label: "Languages",
    value: site.principal.languages.join(" · "),
  },
  {
    label: "Consultations",
    value: "By appointment, in person or online",
  },
];

const steps = [
  {
    n: "01",
    title: "Confidential consultation",
    body: "We listen first, then set out the legal position in plain language — including what is realistic, and what is not.",
  },
  {
    n: "02",
    title: "Scope and fee estimate",
    body: "You receive a written outline of the work, likely timeframes, and how fees will be charged before we proceed.",
  },
  {
    n: "03",
    title: "Steady representation",
    body: "Papers, negotiations, and appearances are handled with regular updates so you are not left guessing.",
  },
];

export default function HomePage() {
  const highlights = getHighlightedPracticeAreas();

  return (
    <>
      <section className="hero-panel text-cream">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
              Johannesburg · Gauteng
            </p>
            <h1 className="mt-5 max-w-xl font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Counsel that is considered, discreet, and grounded in South
              African law.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">
              {site.name} advises individuals, families, and owner-managed
              businesses from chambers in Sandton. Family, commercial, and
              labour matters are the core of the practice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="primary">
                Request a consultation
              </ButtonLink>
              <ButtonLink href="/practice-areas" variant="secondary">
                View practice areas
              </ButtonLink>
            </div>
          </div>

          <aside className="border border-cream/15 bg-ink-mid/60 p-7 backdrop-blur-sm">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-soft">
              Principal
            </p>
            <p className="mt-3 font-serif text-3xl text-cream">
              {site.principal.name}
            </p>
            <p className="mt-2 text-sm text-cream/70">
              {site.principal.credential}
            </p>
            <dl className="mt-8 space-y-4 border-t border-cream/10 pt-6 text-sm">
              <div>
                <dt className="text-cream/50">Chambers</dt>
                <dd className="mt-1 text-cream/90">{site.location.city}</dd>
              </div>
              <div>
                <dt className="text-cream/50">Hours</dt>
                <dd className="mt-1 text-cream/90">{site.location.hours}</dd>
              </div>
              <div>
                <dt className="text-cream/50">Telephone</dt>
                <dd className="mt-1">
                  <a
                    href={site.contact.phoneHref}
                    className="text-cream hover:text-gold-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {site.contact.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      <section className="border-b border-line bg-cream" aria-label="Trust signals">
        <Container className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((item) => (
            <div key={item.label}>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">{item.value}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The practice"
            title="A boutique Sandton firm for matters that require care."
            description="We are not a full-service factory. The work is selected so that each file can be given proper attention — from a first consultation through to settlement or hearing."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((area) => (
              <div key={area.slug} className="relative">
                <PracticeAreaCard area={area} featured />
              </div>
            ))}
          </div>
          <p className="mt-8">
            <ButtonLink href="/practice-areas" variant="ghost">
              All practice areas
            </ButtonLink>
          </p>
        </Container>
      </section>

      <section className="border-y border-line bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="Clear steps. No theatre."
            description="Clients are entitled to know the process, the cost, and the likely path of a matter before they instruct."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n} className="border border-line bg-paper p-6">
                <p className="font-serif text-2xl text-gold">{step.n}</p>
                <h3 className="mt-3 font-serif text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About the attorney"
              title={`${site.principal.name} leads the practice.`}
              description="An attorney of the High Court of South Africa, practising from Sandton and advising clients throughout Gauteng. Consultations are offered in English, isiZulu, and Sesotho."
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone">
              The firm is built around a simple brief: explain the law as it
              applies to this client, in this province, on these facts — and
              then do the work without fuss.
            </p>
            <p className="mt-8">
              <ButtonLink href="/about" variant="ghost">
                About the firm
              </ButtonLink>
            </p>
          </div>
          <blockquote className="border border-line bg-cream p-8 sm:p-10">
            <p className="font-serif text-2xl leading-snug text-ink text-balance sm:text-3xl">
              “Most people do not need more legal language. They need a clear
              view of their position, and someone who will see the matter
              through.”
            </p>
            <footer className="mt-6 text-sm text-stone">
              {site.principal.name}, {site.principal.title}
            </footer>
          </blockquote>
        </Container>
      </section>

      <section className="bg-ink py-16 text-cream sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us about the matter.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              Send a confidential enquiry or telephone chambers during office
              hours. Urgent appearances are discussed by appointment.
            </p>
          </div>
          <ButtonLink href="/contact" variant="primary">
            Contact the practice
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
