"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { practiceAreas } from "@/data/practice-areas";

type FieldName =
  | "fullName"
  | "email"
  | "phone"
  | "matter"
  | "message"
  | "consent";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  matter: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  matter: "",
  message: "",
  consent: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(\+27|0)[\d\s()-]{8,16}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone.trim() && !phonePattern.test(values.phone.trim())) {
    errors.phone = "Use a South African number, for example 011 555 0148 or +27 11 555 0148.";
  }

  if (!values.matter) {
    errors.matter = "Please select a matter type.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Please share a short outline of at least 20 characters.";
  }

  if (!values.consent) {
    errors.consent = "Please confirm you understand this enquiry is not legal advice.";
  }

  return errors;
}

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function fieldId(name: FieldName) {
    return `${formId}-${name}`;
  }

  function errorId(name: FieldName) {
    return `${formId}-${name}-error`;
  }

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key as FieldName]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[key as FieldName];
        return next;
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const first = (Object.keys(nextErrors) as FieldName[])[0];
      document.getElementById(fieldId(first))?.focus();
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="border border-gold/40 bg-cream px-6 py-10 text-center sm:px-10"
        role="status"
        aria-live="polite"
      >
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
          Enquiry received
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-ink">
          Thank you. We have your message.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-stone">
          This demonstration form does not send email. In a live deployment,
          the practice would reply during ordinary office hours. If your matter
          is urgent, please telephone chambers.
        </p>
        <button
          type="button"
          className="mt-8 rounded-sm border border-ink/20 px-4 py-2 text-sm font-medium text-ink hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          onClick={() => {
            setValues(initialValues);
            setErrors({});
            setSubmitted(false);
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-line bg-paper p-6 sm:p-8"
      aria-describedby={`${formId}-privacy`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={fieldId("fullName")}
          errorId={errorId("fullName")}
          label="Full name"
          error={errors.fullName}
        >
          <input
            id={fieldId("fullName")}
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? errorId("fullName") : undefined}
            onChange={(event) => update("fullName", event.target.value)}
            className={inputClass(Boolean(errors.fullName))}
          />
        </Field>

        <Field
          id={fieldId("email")}
          errorId={errorId("email")}
          label="Email"
          error={errors.email}
        >
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorId("email") : undefined}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>

        <Field
          id={fieldId("phone")}
          errorId={errorId("phone")}
          label="Telephone (optional)"
          error={errors.phone}
        >
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="011 555 0148"
            value={values.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? errorId("phone") : undefined}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>

        <Field
          id={fieldId("matter")}
          errorId={errorId("matter")}
          label="Matter type"
          error={errors.matter}
        >
          <select
            id={fieldId("matter")}
            name="matter"
            value={values.matter}
            aria-invalid={Boolean(errors.matter)}
            aria-describedby={errors.matter ? errorId("matter") : undefined}
            onChange={(event) => update("matter", event.target.value)}
            className={inputClass(Boolean(errors.matter))}
          >
            <option value="">Select a practice area</option>
            {practiceAreas.map((area) => (
              <option key={area.slug} value={area.slug}>
                {area.title}
              </option>
            ))}
            <option value="other">Other / not sure</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field
          id={fieldId("message")}
          errorId={errorId("message")}
          label="How can we assist?"
          error={errors.message}
        >
          <textarea
            id={fieldId("message")}
            name="message"
            rows={6}
            value={values.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? errorId("message") : undefined}
            onChange={(event) => update("message", event.target.value)}
            className={`${inputClass(Boolean(errors.message))} resize-y`}
          />
        </Field>
      </div>

      <div className="mt-5">
        <div className="flex items-start gap-3">
          <input
            id={fieldId("consent")}
            name="consent"
            type="checkbox"
            checked={values.consent}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? errorId("consent") : undefined}
            onChange={(event) => update("consent", event.target.checked)}
            className="mt-1 h-4 w-4 rounded-sm border-line text-ink accent-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          />
          <label htmlFor={fieldId("consent")} className="text-sm leading-relaxed text-stone">
            I understand that submitting this form does not create an
            attorney-client relationship and that the contents of this website
            are not legal advice.
          </label>
        </div>
        {errors.consent ? (
          <p id={errorId("consent")} className="mt-2 text-sm text-red-800" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <p id={`${formId}-privacy`} className="mt-5 text-xs leading-relaxed text-stone-light">
        Please do not include privileged documents or unnecessary personal
        information. Enquiries are treated as confidential in line with the
        Protection of Personal Information Act 4 of 2013. This demo form stores
        nothing on a server.
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex min-w-44 items-center justify-center rounded-sm bg-ink px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-ink-mid disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        {submitting ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return `mt-2 w-full rounded-sm border bg-paper px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-gold ${
    invalid ? "border-red-800" : "border-line"
  }`;
}

function Field({
  id,
  errorId,
  label,
  error,
  children,
}: {
  id: string;
  errorId: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
