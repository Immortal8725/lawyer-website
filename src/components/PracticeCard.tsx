import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import type { PracticeArea } from "@/lib/practice-areas";

export function PracticeCard({
  area,
  featured = false,
}: {
  area: PracticeArea;
  featured?: boolean;
}) {
  return (
    <article className="flex h-full flex-col border border-rule bg-parchment p-6 transition hover:border-brass/60">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-dark">
        {area.shortName}
      </p>
      <h3 className="mt-3 font-serif text-2xl text-ink">{area.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-stone">{area.summary}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/practice-areas/${area.slug}`}
          className="text-sm font-semibold text-ink underline decoration-brass decoration-2 underline-offset-4 hover:text-brass-dark"
        >
          Read more
          <span className="sr-only"> about {area.name}</span>
        </Link>
        {featured ? (
          <ButtonLink href={`/contact?matter=${area.slug}`} variant="light">
            Enquire
          </ButtonLink>
        ) : null}
      </div>
    </article>
  );
}
