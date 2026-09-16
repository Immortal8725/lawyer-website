import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { getPracticeArea, practiceAreas } from "@/data/practice-areas";

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
  if (!area) return { title: "Practice area" };
  return {
    title: area.title,
    description: area.summary,
  };
}

export default async function PracticeAreaDetailPage({
  params,
}: PracticeAreaPageProps) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const others = practiceAreas.filter((item) => item.slug !== area.slug);

  return (
    <>
      <PageHero eyebrow="Practice area" title={area.title} description={area.intro} />
      <Container className="grid gap-12 py-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)] sm:py-16">
        <div>
          <h2 className="font-serif text-3xl text-ink">Typical matters</h2>
          <ul className="mt-6 space-y-3">
            {area.typicalMatters.map((item) => (
              <li key={item} className="flex gap-3 text-stone">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-line pt-8">
            <h2 className="font-serif text-3xl text-ink">Who we assist</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-stone">{area.whoWeAssist}</p>
          </div>
        </div>
        <aside className="h-fit border border-line bg-cream p-6">
          <h2 className="font-serif text-2xl text-ink">Instruct us</h2>
          <p className="mt-3 text-sm leading-relaxed text-stone">
            Share a confidential outline of the matter. We will confirm whether
            we are in a position to assist, and the likely next step.
          </p>
          <p className="mt-6">
            <ButtonLink href="/contact" variant="ghost">
              Request a consultation
            </ButtonLink>
          </p>
          <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Other areas
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {others.map((item) => (
              <li key={item.slug}>
                <ButtonLink href={`/practice-areas/${item.slug}`} variant="ghost" className="w-full justify-start border-0 px-0 py-1 hover:bg-transparent">
                  {item.title}
                </ButtonLink>
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </>
  );
}
