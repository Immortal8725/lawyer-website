export const site = {
  name: "Khumalo Attorneys",
  shortName: "Khumalo",
  tagline: "Considered counsel. Discreet representation.",
  description:
    "A Johannesburg attorney practice advising individuals, families, and owner-managed businesses on family, commercial, and labour matters.",
  url: "https://www.khumaloattorneys.co.za",
  principal: {
    name: "Lerato Khumalo",
    title: "Principal Attorney",
    credential: "Attorney of the High Court of South Africa",
    languages: ["English", "isiZulu", "Sesotho"],
  },
  location: {
    city: "Sandton, Johannesburg",
    region: "Gauteng, South Africa",
    addressLines: [
      "2nd Floor, The Forum",
      "2 Maude Street",
      "Sandton, Johannesburg, 2196",
    ],
    hours: "Monday to Friday, 08:30–16:30, by appointment",
    parking: "Visitor parking is available in the building basement. Please mention your appointment at reception.",
  },
  contact: {
    phoneDisplay: "011 555 0148",
    phoneHref: "tel:+27115550148",
    email: "enquiries@khumaloattorneys.co.za",
    emailHref: "mailto:enquiries@khumaloattorneys.co.za",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/practice-areas", label: "Practice areas" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  disclaimer:
    "This website is for general information only and does not constitute legal advice. Viewing these pages or sending an enquiry does not create an attorney-client relationship. Please obtain advice specific to your circumstances before acting.",
} as const;

export type NavItem = (typeof site.nav)[number];
