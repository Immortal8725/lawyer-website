# Khumalo Attorneys — website MVP

A polished marketing site for a fictional Johannesburg attorney practice. Built as a working starting point for a solo attorney or small firm: core pages, South African sample copy, and a contact form that validates in the browser.

The firm, people, telephone number, and street address are **placeholders**. They are not a real practice.

## Features

- Home with hero, trust signals, highlighted practice areas, and a clear consultation call to action
- Practice area index plus detail pages (family, commercial, labour, estates, property)
- About the attorney and chambers
- Contact form with client-side validation and a mock success state (no email backend)
- Footer disclaimer that site content is not legal advice
- Responsive layout, skip link, labelled form fields, and visible focus styles
- Serif/sans pairing (Cormorant Garamond + Source Sans 3) and a restrained navy/gold/cream palette

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- TypeScript
- Tailwind CSS 4
- React 19

No database, CMS, or third-party email service is required.

## Prerequisites

- Node.js 20 or later
- npm 10 or later

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script        | Purpose                          |
| ------------- | -------------------------------- |
| `npm run dev`   | Development server with hot reload |
| `npm run build` | Production build                 |
| `npm run start` | Serve the production build       |
| `npm run lint`  | ESLint                           |

## Project structure

```
src/
  app/                 # Routes: home, about, contact, practice areas
  components/          # Header, footer, form, shared UI
  data/                # Firm profile and practice-area copy
public/                # Static assets
```

Edit `src/data/site.ts` and `src/data/practice-areas.ts` to replace placeholder copy with real firm details.

## Contact form

The form on `/contact` checks name, email, matter type, message length, and a consent checkbox. Optional telephone numbers are validated against a simple South African pattern (`0…` or `+27…`).

Submit is **mocked**: after a short delay the page shows a success message. Nothing is stored or emailed. To connect a real backend later, replace the timeout in `src/components/ContactForm.tsx` with a `fetch` to your API or form service. Do not commit secrets; add a `.env.example` if you introduce environment variables.

## Disclaimer

Site copy includes a standing notice that the content is general information, not legal advice, and that using the site does not create an attorney-client relationship. Keep that notice if you adapt this project for a live practice, and have a South African attorney review any public-facing wording.

## Licence

Sample project. Use and adapt as you wish for your own site.
