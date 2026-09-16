import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-dark">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl text-ink">
          This page is not in the brief
        </h1>
        <p className="mt-4 text-base leading-8 text-stone">
          The address may have changed, or the matter may never have been filed
          here. Return home or start with a consultation enquiry.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="light">
            Contact
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
