import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PracticeCard } from "@/components/PracticeCard";
import { practiceAreas } from "@/lib/practice-areas";
import { site } from "@/lib/site";

const trustItems = [
  {
    label: "Regulated profession",
    value: "Legal Practice Council",
  },
  {
    label: "Forum",
    value: "Gauteng Division, Johannesburg",
  },
  {
    label: "Experience",
    value: `${site.attorney.experienceYears}+ years in practice`,
  },
  {
    label: "Consultations",
    value: "Sandton, by appointment",
  },
];

const approach = [
  {
    title: "Listen first",
    body: "We start with the facts, the papers you already have, and the outcome you actually need — not a catalogue of every possible procedure.",
  },
  {
    title: "Advise plainly",
    body: "You will hear the strengths, the risks and the likely cost in language you can use to decide. If a matter is not for us, we will say so.",
  },
  {
    title: "Act with care",
    body: "Whether the next step is a letter, a settlement meeting or papers in court, we prepare thoroughly and keep you informed.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <Container className="grid items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">
              Attorneys · Sandton, Johannesburg
            </p>
            <h1 className="mt-6 max-w-xl font-serif text-5xl leading-[1.1] sm:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-cream/80">
              {site.name} is a boutique Johannesburg practice helping individuals,
              families and owner-managed businesses through family, commercial and
              labour matters — with the same care we would want for our own.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Request a consultation</ButtonLink>
              <ButtonLink href="/practice-areas" variant="secondary">
                Explore practice areas
              </ButtonLink>
            </div>
          </div>

          <aside className="hero-grid border border-brass/25 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              Featured counsel
            </p>
            <p className="mt-4 font-serif text-3xl">{site.attorney.name}</p>
            <p className="mt-2 text-sm text-cream/75">{site.attorney.title}</p>
            <dl className="mt-8 space-y-4 text-sm leading-6">
              <div>
                <dt className="text-cream/50">Qualifications</dt>
                <dd>{site.attorney.qualifications}</dd>
              </div>
              <div>
                <dt className="text-cream/50">Admission</dt>
                <dd>{site.attorney.admission}</dd>
              </div>
              <div>
                <dt className="text-cream/50">Chambers</dt>
                <dd>
                  {site.location.line1}, {site.location.suburb}
                </dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      <section className="border-y border-rule bg-cream" aria-label="Trust signals">
        <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-dark">
                {item.label}
              </p>
              <p className="mt-2 font-serif text-2xl text-ink">{item.value}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-dark">
                Practice
              </p>
              <h2 className="mt-3 font-serif text-4xl text-ink">
                Where we can assist
              </h2>
            </div>
            <ButtonLink href="/practice-areas" variant="light">
              All practice areas
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.slice(0, 3).map((area) => (
              <PracticeCard key={area.slug} area={area} featured />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-dark">
            How we work
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl text-ink">
            A calm process for matters that rarely feel calm
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {approach.map((item, index) => (
              <article key={item.title} className="border-t border-brass/50 pt-6">
                <p className="text-sm text-stone">0{index + 1}</p>
                <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <blockquote className="border border-rule bg-cream p-8">
            <p className="font-serif text-2xl leading-9 text-ink">
              “The advice was direct, the papers were ready, and I always knew
              what the next week would ask of me.”
            </p>
            <footer className="mt-6 text-sm text-stone">
              Family law client · Johannesburg (sample testimonial)
            </footer>
          </blockquote>
          <blockquote className="border border-rule bg-cream p-8">
            <p className="font-serif text-2xl leading-9 text-ink">
              “They treated a commercial dispute as a business problem first,
              and a court file second. That was the difference.”
            </p>
            <footer className="mt-6 text-sm text-stone">
              Director, owner-managed company · Sandton (sample testimonial)
            </footer>
          </blockquote>
        </Container>
      </section>

      <section className="bg-ink py-16 text-cream">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-4xl">Begin with a conversation</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-cream/75">
              Tell us, in outline, what has happened. We will let you know whether
              we can assist and what a first consultation would cover.
            </p>
          </div>
          <ButtonLink href="/contact">Contact the practice</ButtonLink>
        </Container>
      </section>
    </>
  );
}
