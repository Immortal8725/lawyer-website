import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { practiceAreas } from "@/data/practice-areas";

export const metadata: Metadata = {
  title: "Practice areas",
  description:
    "Family, commercial, labour, estates, and property law advice from a Sandton attorney practice.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Practice areas"
        description="The firm’s work is concentrated in a handful of areas so that advice stays current, practical, and rooted in South African statute and procedure."
      />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <div key={area.slug} className="relative">
              <PracticeAreaCard area={area} featured />
            </div>
          ))}
        </div>
        <div className="mt-14 border border-line bg-cream px-6 py-8 sm:px-8">
          <h2 className="font-serif text-2xl text-ink">Not sure where a matter sits?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone">
            Send a short outline. If the work falls outside the practice, we
            will say so promptly and, where we can, point you toward an
            appropriate colleague.
          </p>
          <p className="mt-6">
            <ButtonLink href="/contact" variant="ghost">
              Contact the practice
            </ButtonLink>
          </p>
        </div>
      </Container>
    </>
  );
}
