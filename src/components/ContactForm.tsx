"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  emptyContactForm,
  isKnownMatter,
  validateContactForm,
  type ContactFormValues,
} from "@/lib/contact";
import { practiceAreas } from "@/lib/practice-areas";
import { site } from "@/lib/site";

type ContactFormProps = {
  defaultMatter?: string;
};

export function ContactForm({ defaultMatter = "" }: ContactFormProps) {
  const searchParams = useSearchParams();
  const matterFromQuery = searchParams.get("matter") ?? "";
  const initialMatter = isKnownMatter(defaultMatter)
    ? defaultMatter
    : isKnownMatter(matterFromQuery)
      ? matterFromQuery
      : "";
  const [values, setValues] = useState<ContactFormValues>({
    ...emptyContactForm,
    matter: initialMatter,
  });
  const [errors, setErrors] = useState<ReturnType<typeof validateContactForm>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  function update<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(firstField)?.focus();
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className="border border-brass/40 bg-cream px-6 py-10"
        role="status"
        aria-live="polite"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-dark">
          Enquiry received
        </p>
        <h2 className="mt-3 font-serif text-3xl text-ink">Thank you, {values.name.trim()}.</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-stone">
          This is a demonstration form, so no email has been sent. In a live
          practice, the intake team would reply to {values.email.trim()} to
          arrange a consultation. Nothing in this message creates a mandate or
          attorney–client relationship.
        </p>
        <button
          type="button"
          className="mt-8 border border-ink px-5 py-2 text-sm font-semibold text-ink hover:border-brass hover:text-brass-dark"
          onClick={() => {
            setValues({
              ...emptyContactForm,
              matter: initialMatter,
            });
            setErrors({});
            setStatus("idle");
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="border border-rule bg-parchment p-6 sm:p-8"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          value={values.name}
          error={errors.name}
          autoComplete="name"
          onChange={(value) => update("name", value)}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          autoComplete="email"
          onChange={(value) => update("email", value)}
        />
        <Field
          id="phone"
          label="Telephone (optional)"
          type="tel"
          value={values.phone}
          error={errors.phone}
          autoComplete="tel"
          onChange={(value) => update("phone", value)}
        />
        <div>
          <label htmlFor="matter" className="block text-sm font-semibold text-ink">
            Practice area
          </label>
          <select
            id="matter"
            name="matter"
            value={values.matter}
            aria-invalid={Boolean(errors.matter)}
            aria-describedby={errors.matter ? "matter-error" : undefined}
            className="mt-2 w-full border border-rule bg-white px-3 py-3 text-sm text-ink"
            onChange={(event) => update("matter", event.target.value)}
          >
            <option value="">Select a matter type</option>
            {practiceAreas.map((area) => (
              <option key={area.slug} value={area.slug}>
                {area.name}
              </option>
            ))}
          </select>
          {errors.matter ? (
            <p id="matter-error" className="mt-2 text-sm text-error" role="alert">
              {errors.matter}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-semibold text-ink">
          How can we assist?
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className="mt-2 w-full border border-rule bg-white px-3 py-3 text-sm leading-6 text-ink"
          onChange={(event) => update("message", event.target.value)}
        />
        <p id="message-hint" className="mt-2 text-sm text-stone">
          Please avoid sending highly sensitive documents through this form.
        </p>
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-error" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm leading-6 text-stone">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-4 w-4 accent-ink"
            onChange={(event) => update("consent", event.target.checked)}
          />
          <span>
            I understand this is an enquiry only, not legal advice, and that
            submitting it does not create a mandate with {site.shortName}.
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="mt-2 text-sm text-error" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-8 bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-ink-soft disabled:cursor-wait disabled:opacity-70"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending enquiry…" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: keyof ContactFormValues;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full border border-rule bg-white px-3 py-3 text-sm text-ink"
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
