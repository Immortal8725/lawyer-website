export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  typicalMatters: string[];
  whoWeAssist: string;
  highlight: boolean;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "family-law",
    title: "Family law",
    shortTitle: "Family",
    highlight: true,
    summary:
      "Divorce, parental rights, maintenance, and customary-marriage matters handled with discretion and a clear plan of action.",
    intro:
      "Family disputes sit at the intersection of statute, procedure, and people’s lives. We advise clients across Johannesburg and Gauteng on separation, care of children, and related financial arrangements, with an emphasis on early, practical advice so that you know where you stand before papers are issued.",
    typicalMatters: [
      "Divorce and Rule 43 interim-relief applications",
      "Parental rights and responsibilities, care, and contact",
      "Maintenance for spouses and children",
      "Ante-nuptial contracts and matrimonial-property advice",
      "Recognition of customary marriages and related disputes",
      "Domestic-protection orders where urgent intervention is required",
    ],
    whoWeAssist:
      "Individuals and families who need considered, confidential advice — whether the matter is likely to settle or will proceed in the High Court or Regional Court.",
  },
  {
    slug: "commercial-law",
    title: "Commercial law",
    shortTitle: "Commercial",
    highlight: true,
    summary:
      "Contracts, company advice, and commercial disputes for owner-managed businesses and professional practices.",
    intro:
      "Most commercial problems are cheaper to prevent than to litigate. We work with Gauteng businesses on the documents and structures that keep trading relationships clear, and we step in when a contract, shareholder arrangement, or payment dispute needs a firm response.",
    typicalMatters: [
      "Contract drafting, review, and negotiation",
      "Shareholder and members’ disputes in companies and close corporations",
      "Sale-of-business and professional-practice agreements",
      "Terms of trade, service agreements, and confidentiality arrangements",
      "Letters of demand and commercial litigation in the Magistrates’ and High Courts",
      "Advice on company and close-corporation governance for smaller enterprises",
    ],
    whoWeAssist:
      "Owner-managed companies, close corporations, professional practices, and individuals entering or exiting a business relationship.",
  },
  {
    slug: "labour-law",
    title: "Labour and employment",
    shortTitle: "Labour",
    highlight: true,
    summary:
      "CCMA matters, unfair-dismissal disputes, and workplace investigations for employees and employers.",
    intro:
      "South African labour law rewards process as much as outcome. We advise both employees and employers so that disciplinary steps, retrenchments, and referrals to the CCMA or Labour Court are handled on a proper footing — and so that settlement is explored where it is in the client’s interest.",
    typicalMatters: [
      "Unfair-dismissal and unfair-labour-practice disputes",
      "CCMA conciliation and arbitration",
      "Disciplinary enquiries and workplace investigations",
      "Employment contracts, policies, and restraint-of-trade advice",
      "Retrenchment consultations under the LRA",
      "Settlement agreements and certificates of service",
    ],
    whoWeAssist:
      "Employees who need a realistic view of their position, and employers — particularly SMEs — who want the process done correctly the first time.",
  },
  {
    slug: "wills-estates",
    title: "Wills, estates and trusts",
    shortTitle: "Estates",
    highlight: false,
    summary:
      "Wills, deceased-estate administration, and practical estate planning through the Master’s Office.",
    intro:
      "A current will, and an estate that can be wound up without avoidable delay, is one of the more useful things a family can put in place. We draft wills that reflect South African succession law and assist executors with deceased-estate reporting to the Master of the High Court.",
    typicalMatters: [
      "Wills, living wills, and simple estate-planning structures",
      "Reporting deceased estates to the Master’s Office",
      "Executor support, liquidation and distribution accounts",
      "Intestate-succession queries and heir disputes",
      "Trust deeds for family and special-needs arrangements",
      "Advice on marriage contracts as they affect an estate",
    ],
    whoWeAssist:
      "Individuals putting their affairs in order, and families who have been appointed to wind up a deceased estate in Gauteng.",
  },
  {
    slug: "property-law",
    title: "Property law",
    shortTitle: "Property",
    highlight: false,
    summary:
      "Sale agreements, transfers, and sectional-title advice for residential and small-commercial property in Gauteng.",
    intro:
      "Property transactions move quickly and leave little room for an unclear mandate. We review and settle agreements of sale, advise on suspensive conditions, and work with conveyancers so that clients understand risk before they sign.",
    typicalMatters: [
      "Agreements of sale for residential and small-commercial property",
      "Advice on deposits, voeistoots clauses, and suspensive conditions",
      "Sectional-title and homeowners’ association queries",
      "Lease agreements for homes and small business premises",
      "Evictions and related High Court or Magistrates’ Court applications",
      "Co-ordination with transferring attorneys and bond attorneys",
    ],
    whoWeAssist:
      "Buyers, sellers, landlords, and tenants who want the documents — and the process — explained in plain language before they commit.",
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}

export function getHighlightedPracticeAreas() {
  return practiceAreas.filter((area) => area.highlight);
}
