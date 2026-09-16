export type PracticeArea = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  typicalMatters: string[];
  consultationNotes: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "family-law",
    name: "Family law",
    shortName: "Family",
    summary:
      "Divorce, parenting plans, maintenance and care-and-contact matters handled with discretion.",
    description:
      "Family disputes ask a great deal of the people involved. We help clients in Johannesburg and across Gauteng find practical, lawful paths through divorce, parenting arrangements and financial support, with an eye on both the Children’s Act and the realities of daily life.",
    typicalMatters: [
      "Uncontested and opposed divorce",
      "Parenting plans, care and contact",
      "Maintenance for children and spouses",
      "Domestic violence protection orders",
      "Antenuptial contracts and matrimonial property advice",
    ],
    consultationNotes: [
      "Identity documents and marriage certificate, if applicable",
      "Any existing court orders or parenting plans",
      "A plain-language note of what you would like to achieve",
    ],
  },
  {
    slug: "commercial-law",
    name: "Commercial law",
    shortName: "Commercial",
    summary:
      "Contracts, company work and commercial disputes for owner-managed and growing businesses.",
    description:
      "We advise South African companies, directors and entrepreneurs on the documents and decisions that keep a business moving: formation, shareholder arrangements, supplier and customer contracts, and commercial disputes before they harden into litigation.",
    typicalMatters: [
      "Company formation and shareholders’ agreements",
      "Sale of business and share transactions",
      "Commercial contracts and terms of trade",
      "Director and governance advice under the Companies Act",
      "Contractual disputes and settlement strategy",
    ],
    consultationNotes: [
      "Company registration documents, if you have them",
      "The contract or correspondence in dispute",
      "A timeline of key dates and who the other parties are",
    ],
  },
  {
    slug: "labour-employment",
    name: "Labour and employment",
    shortName: "Labour",
    summary:
      "CCMA, disciplinary processes and workplace disputes for employees and employers.",
    description:
      "Workplace conflict is expensive in time, morale and risk. We assist employees and employers with unfair dismissal, disciplinary hearings, retrenchment processes and CCMA referrals, grounded in the Labour Relations Act and the Basic Conditions of Employment Act.",
    typicalMatters: [
      "Unfair dismissal and unfair labour practice",
      "Disciplinary hearings and workplace investigations",
      "Retrenchment consultation processes",
      "CCMA and bargaining council referrals",
      "Employment contracts and workplace policies",
    ],
    consultationNotes: [
      "Your employment contract and any warnings",
      "Letters, emails or notices from the employer or employee",
      "Dates of hearings, dismissals or CCMA referrals",
    ],
  },
  {
    slug: "civil-litigation",
    name: "Civil litigation",
    shortName: "Litigation",
    summary:
      "High Court and Magistrates’ Court disputes pursued with a clear view of cost, risk and outcome.",
    description:
      "Not every disagreement belongs in court. When litigation is the right tool, we prepare thoroughly and communicate plainly about prospects, timelines and cost. Our civil work includes contractual claims, delictual disputes and motion proceedings in Gauteng courts.",
    typicalMatters: [
      "Contractual claims and defences",
      "Motion proceedings and urgent applications",
      "Debt recovery and opposed matters",
      "Interdicts and declaratory relief",
      "Settlement negotiations alongside active litigation",
    ],
    consultationNotes: [
      "The core documents behind the dispute",
      "Any issued summons, notice or court papers",
      "A realistic note of what a good outcome would look like",
    ],
  },
  {
    slug: "property-conveyancing",
    name: "Property and conveyancing",
    shortName: "Property",
    summary:
      "Transfers, sectional title and property disputes with Deeds Office process in mind.",
    description:
      "Buying, selling or transferring immovable property in South Africa is a formal process. We assist with conveyancing instructions, sale agreements, sectional title queries and related disputes, coordinating with transferring attorneys, banks and the Deeds Office as required.",
    typicalMatters: [
      "Residential and commercial transfers",
      "Sale of immovable property agreements",
      "Sectional title and body corporate queries",
      "Property-related disputes between parties",
      "Lost title deed applications and related attendances",
    ],
    consultationNotes: [
      "Offer to purchase or existing deed of sale",
      "Title deed or property description, if available",
      "FICA documents for the parties involved",
    ],
  },
  {
    slug: "wills-estates",
    name: "Wills and deceased estates",
    shortName: "Estates",
    summary:
      "Wills, estate planning and deceased estate administration through the Master’s Office.",
    description:
      "A carefully drawn will is an act of care for the people who remain. We draft and review wills, advise on straightforward estate planning, and assist families with reporting and administering deceased estates at the Master of the High Court.",
    typicalMatters: [
      "Will drafting and reviews",
      "Nomination of executors and guardians",
      "Reporting a deceased estate",
      "Executor support and Master’s Office attendances",
      "Disputes about wills or estate administration",
    ],
    consultationNotes: [
      "An existing will, if there is one",
      "A list of assets, liabilities and intended beneficiaries",
      "Death certificate and identity documents, for estate work",
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}
