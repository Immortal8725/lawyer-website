import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PracticeCard } from "@/components/PracticeCard";
import { practiceAreas } from "@/lib/practice-areas";

export const metadata: Metadata = {
  title: "Practice areas",
  description:
    "Family, commercial, labour, litigation, property and deceased estate work from a Sandton-based South African law firm.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Practice areas"
        description="A focused Johannesburg practice. We do not hold ourselves out as a full-service national firm. If your matter sits outside these areas, we will say so promptly and, where we can, point you onward."
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <PracticeCard key={area.slug} area={area} featured />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
