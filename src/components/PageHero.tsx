type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <header className="border-b border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink text-balance sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
