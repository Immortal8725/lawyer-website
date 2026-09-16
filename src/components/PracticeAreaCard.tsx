import Link from "next/link";
import type { PracticeArea } from "@/data/practice-areas";

export function PracticeAreaCard({
  area,
  featured = false,
}: {
  area: PracticeArea;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col border border-line bg-paper p-6 transition-colors hover:border-gold/60 ${
        featured ? "sm:p-8" : ""
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
        Practice
      </p>
      <h3 className="mt-3 font-serif text-2xl font-semibold text-ink">
        <Link
          href={`/practice-areas/${area.slug}`}
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          {area.title}
          <span className="absolute inset-0" aria-hidden />
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-stone">
        {area.summary}
      </p>
      <p className="mt-6 text-sm font-medium text-ink group-hover:text-gold">
        Read more
        <span aria-hidden> →</span>
      </p>
    </article>
  );
}
