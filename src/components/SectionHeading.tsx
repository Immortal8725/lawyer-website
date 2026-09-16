type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleColor = light ? "text-cream" : "text-ink";
  const bodyColor = light ? "text-cream/75" : "text-stone";
  const eyeColor = light ? "text-gold-soft" : "text-gold";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-medium uppercase tracking-[0.22em] ${eyeColor}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${titleColor} ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${bodyColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
