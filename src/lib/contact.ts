import { practiceAreas } from "@/lib/practice-areas";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  matter: string;
  message: string;
  consent: boolean;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s()-]{6,}$/;

export const emptyContactForm: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  matter: "",
  message: "",
  consent: false,
};

export function isKnownMatter(value: string) {
  return practiceAreas.some((area) => area.slug === value);
}

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone.trim() && !phonePattern.test(values.phone.trim())) {
    errors.phone = "Please enter a valid telephone number, or leave this blank.";
  }

  if (!values.matter || !isKnownMatter(values.matter)) {
    errors.matter = "Please select a practice area.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Please share a little more detail (at least 20 characters).";
  }

  if (!values.consent) {
    errors.consent =
      "Please confirm you understand this enquiry does not create a mandate.";
  }

  return errors;
}
