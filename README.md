# VersionOne

Marketing website for **VersionOne** — a global mobility consultancy covering immigration, study and work abroad, travel, and investment migration.

Built with the Next.js App Router, TypeScript, Tailwind CSS v4 and shadcn/ui. The site is public-facing and international, so **responsive layout and WCAG-level accessibility are treated as requirements, not nice-to-haves**.

---

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19, Server Components) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first config in `app/globals.css`) |
| Components | shadcn/ui (`radix-nova` style) on Radix UI + Base UI |
| Icons | `lucide-react`, plus custom brand icons in `components/icons` |
| Forms | `react-hook-form` + `zod` (via `@hookform/resolvers`) |
| Email | Resend (templated transactional sends) |
| Bot protection | Cloudflare Turnstile |
| Toasts | `sonner` |
| Formatting / linting | Biome (formatter + linter), ESLint (`eslint-config-next`) |
| Package manager | Bun (`bun.lock`) |

---

## Getting started

Requires **Bun**. Node 20+ works if you prefer npm, but the lockfile is Bun's.

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
bun dev      # start the dev server
bun run build # production build
bun start    # serve the production build
bun run lint # eslint
bunx biome check --write .  # format + autofix
```

---

## Project structure

```
app/
  (home)/              route group → "/" (parentheses keep the folder name out of the URL)
  (immigration)/       migrate, study-abroad, work-abroad
  (travel)/            visit, luxury-travel, sports-travel, corporate-travel, tour-packages
  destinations/[country]/   dynamic country pages, generated from data/destinations.json
  immigration/         immigration hub page
  investment/          investment migration page
  about/  services/  faq/  contact/  book-consultation/
  privacy-policy/  terms-of-service/
  api/
    booking/route.ts   consultation booking → Turnstile check → Resend batch send
    contact/route.ts   contact form → Turnstile check → Resend
  layout.tsx           root layout: fonts, header/footer, JSON-LD, preloader, toaster
  globals.css          Tailwind v4 @theme — all design tokens live here
  sitemap.ts  robots.ts  manifest.ts  not-found.tsx

components/
  ui/          shadcn primitives (button, input, dialog, combobox, phone-input…)
  layout/      site-header, site-footer, page-hero, section, section-heading
  sections/    reusable page sections (feature-row, final-cta, journey-process…)
  cards/       destination-card
  icons/       custom social/brand icons
  providers/   app-preloader

lib/
  seo.ts         siteConfig, buildMetadata(), businessInfo, LocalBusiness JSON-LD
  destinations.ts  typed accessors over data/destinations.json
  booking.ts     zod schemas + select options for the booking form
  turnstile.ts   server-side Turnstile verification
  utils.ts       cn()

data/
  destinations.json   19 country entries (content, advantages, pathways, imagery)
```

---

Built with ❤️ Queen