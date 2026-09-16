import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the practice",
  description:
    "Meet Thandiwe Mokoena and the Sandton-based practice of Mokoena Attorneys Inc.",
};

const values = [
  {
    title: "Independence",
    body: "We are a small practice. That means fewer conflicts, shorter lines of communication, and advice that is not filtered through a large-firm committee.",
  },
  {
    title: "Preparation",
    body: "Court and counterparties notice the difference. We would rather spend an extra hour on the papers than an extra month undoing a hasty step.",
  },
  {
    title: "Dignity",
    body: "Family and workplace matters are personal. Commercial disputes can be too. Clients can expect courtesy, confidentiality and a steady hand.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The practice"
        title="A Johannesburg firm built around careful counsel"
        description={`${site.name} is a sample Sandton practice created for this website. The biography below is placeholder copy, written in the register of a real South African attorneys' firm so the site can be customised with live details.`}
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-dark">
              Director
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink">
              {site.attorney.name}
            </h2>
            <p className="mt-2 text-sm text-stone">{site.attorney.title}</p>
            <div className="mt-8 space-y-5 text-base leading-8 text-stone">
              <p>
                Thandiwe was born in Soweto, studied at the University of the
                Witwatersrand, and completed her LLM in commercial law at the
                University of Cape Town. After articles in Johannesburg she was
                admitted as an attorney of the High Court of South Africa and
                has practised in Gauteng for more than{" "}
                {site.attorney.experienceYears} years.
              </p>
              <p>
                Her work sits at the intersection of people and paper: family
                arrangements that must still function on a Monday morning,
                owner-managed companies that need contracts they can actually
                use, and workplace disputes that are better resolved before they
                calcify at the CCMA.
              </p>
              <p>
                Consultations are held at the firm’s Sandton chambers, with
                virtual meetings available where the matter allows. The practice
                takes instructions from individuals, families, and South African
                companies.
              </p>
            </div>
          </div>

          <aside className="h-fit border border-rule bg-cream p-8">
            <h2 className="font-serif text-2xl">Credentials</h2>
            <dl className="mt-6 space-y-5 text-sm leading-7">
              <div>
                <dt className="font-semibold text-ink">Qualifications</dt>
                <dd className="text-stone">{site.attorney.qualifications}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Admission</dt>
                <dd className="text-stone">{site.attorney.admission}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Regulator</dt>
                <dd className="text-stone">{site.regulator}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Chambers</dt>
                <dd className="text-stone">{formatAddress()}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Languages</dt>
                <dd className="text-stone">
                  English, isiZulu and conversational Sesotho (sample)
                </dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container>
          <h2 className="font-serif text-3xl text-ink">How we practise</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title}>
                <h3 className="font-serif text-2xl">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone">{value.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-col items-start justify-between gap-6 border border-rule bg-ink px-8 py-10 text-cream md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-3xl">A first meeting, without obligation</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-cream/75">
              Bring the documents you have. We will tell you whether we can
              help, what it is likely to involve, and what it is likely to cost.
            </p>
          </div>
          <ButtonLink href="/contact">Request a consultation</ButtonLink>
        </Container>
      </section>
    </>
  );
}
