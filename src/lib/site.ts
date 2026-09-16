export const site = {
  name: "Mokoena Attorneys Inc.",
  shortName: "Mokoena Attorneys",
  tagline: "Measured advice. Firm advocacy.",
  description:
    "A Sandton-based South African law firm advising individuals, families and businesses on family, commercial, labour and related matters.",
  url: "https://www.mokoenaattorneys.example",
  locale: "en_ZA",
  attorney: {
    name: "Thandiwe Mokoena",
    title: "Director and attorney",
    qualifications: "LLB (Wits), LLM Commercial Law (UCT)",
    admission: "Admitted attorney of the High Court of South Africa",
    experienceYears: 15,
  },
  location: {
    city: "Sandton",
    province: "Gauteng",
    country: "South Africa",
    line1: "11th Floor, The Forum",
    line2: "2 Maude Street",
    suburb: "Sandton",
    postalCode: "2196",
  },
  contact: {
    phoneDisplay: "+27 11 555 0148",
    phoneHref: "tel:+27115550148",
    email: "consultations@mokoenaattorneys.example",
    hours: "Monday to Friday, 08:30–16:30 SAST",
    hoursNote: "Consultations are by appointment, including selected early evenings.",
  },
  regulator: "Legal Practice Council (Gauteng)",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function formatAddress() {
  const { line1, line2, suburb, postalCode, city, country } = site.location;
  const locality = suburb === city ? city : `${suburb}, ${city}`;
  return `${line1}, ${line2}, ${locality}, ${postalCode}, ${country}`;
}
