# Mokoena Attorneys — law firm website MVP

A polished marketing website for a fictional Sandton / Johannesburg attorneys’ practice. Built as a working local demo: static pages, accessible layout, and a contact form that validates in the browser and shows a success state. There is no email backend and no secrets.

All names, addresses, telephone numbers, qualifications and testimonials are **sample placeholders**. The site is not legal advice and does not represent a real firm.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- Google fonts via `next/font`: Cormorant Garamond (headings) and Source Sans 3 (body)

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero, trust signals, featured practice areas, approach, sample testimonials |
| `/practice-areas` | Full list of practice areas |
| `/practice-areas/[slug]` | Detail page for each area |
| `/about` | Attorney and firm profile |
| `/contact` | Chambers details plus validated enquiry form (mock submit) |

Practice areas in this sample: family, commercial, labour, civil litigation, property / conveyancing, and wills / deceased estates — written in a South African register (LPC, CCMA, High Court, Master’s Office, Deeds Office).

## Run locally

Prerequisites: **Node.js 20+** and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build    # production build
npm start        # serve the production build (after build)
npm run lint     # ESLint
```

No environment variables are required. Do not add API keys or SMTP credentials to this repo.

## Contact form

The form lives in `src/components/ContactForm.tsx` and validates:

- Full name
- Email
- Optional telephone
- Practice area
- Message length
- Confirmation that the enquiry is not a mandate

Submit is mocked with a short delay, then a success message. To wire a real inbox later, replace the timeout in `onSubmit` with a server action or form endpoint — still keep the disclaimer that an enquiry does not create an attorney–client relationship.

You can pre-select a practice area with `?matter=family-law` (or any other slug).

## Project structure

```text
src/
  app/                  # Routes, layout, metadata, sitemap
  components/           # Header, footer, form, cards
  lib/                  # Sample firm copy and form validation
```

Edit `src/lib/site.ts` and `src/lib/practice-areas.ts` to replace the sample firm with real details.

## Design notes

- Navy, cream and brass palette with a serif / sans pairing
- Sticky header, skip link, labelled form fields, and visible focus states
- Footer disclaimer: content is not legal advice

## Licence

Sample project. Use and adapt the code; replace the placeholder identity before any public or client-facing launch.
