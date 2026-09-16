import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { getPracticeArea, practiceAreas } from "@/lib/practice-areas";

type PracticeAreaPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PracticeAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) {
    return { title: "Practice area" };
  }

  return {
    title: area.name,
    description: area.summary,
  };
}

export default async function PracticeAreaPage({
  params,
}: PracticeAreaPageProps) {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Practice area"
        title={area.name}
        description={area.description}
      />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-serif text-3xl text-ink">Typical matters</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-stone">
              {area.typicalMatters.map((item) => (
                <li key={item} className="border-l-2 border-brass pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="border border-rule bg-cream p-8">
            <h2 className="font-serif text-2xl text-ink">
              For a first consultation
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone">
              Bring what you have. Incomplete papers are better than a delayed
              conversation.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-stone">
              {area.consultationNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href={`/contact?matter=${area.slug}`}>
                Enquire about {area.shortName.toLowerCase()}
              </ButtonLink>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
