import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-stone">
        The page you requested is not on this site. Return home or browse the
        practice areas.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="inline-flex rounded-sm border border-ink/20 px-4 py-2 text-sm font-medium text-ink hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Back to home
        </Link>
      </p>
    </Container>
  );
}
