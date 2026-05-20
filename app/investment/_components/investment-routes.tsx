import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  FeatureRow,
  type FeatureRowProps,
} from "@/components/sections/feature-row";
import {
  type SectionNavItem,
  SectionSideNav,
} from "@/components/sections/section-side-nav";

type InvestmentRoute = Omit<FeatureRowProps, "headingId"> & {
  id: string;
};

const ROUTES: InvestmentRoute[] = [
  {
    id: "investor-visa",
    eyebrow: "Route 01 • Investor Visa",
    title: "Investor Visa",
    description:
      "The investor visa is designed for high-net-worth individuals who want to commit capital to a country in exchange for the right to live, work, and study there. We help you compare the minimum thresholds, return profiles, and timelines across all major investor visa programmes.",
    chips: [
      { tag: "type", value: "Active / Passive" },
      { tag: "timeline", value: "6–12 months" },
      { tag: "outcome", value: "Residency" },
    ],
    bullets: [
      "Programme comparison across UAE, Portugal, Greece, UK",
      "Source-of-funds documentation prepared end to end",
      "Family inclusion under the same application",
      "Tax and structuring guidance on inbound investment",
    ],
    whoItsFor:
      "Investors ready to commit capital in exchange for fast-track residency, weighing programmes side-by-side before choosing.",
  },
  {
    id: "entrepreneur-visa",
    eyebrow: "Route 02 • Entrepreneur Visa",
    title: "Entrepreneur Visa",
    description:
      "Entrepreneur visas reward founders building a business in a new country. We help you assess viability against each programme's criteria, prepare a credible business plan, and align your funding structure with the route's expectations.",
    chips: [
      { tag: "type", value: "Active" },
      { tag: "timeline", value: "4–9 months" },
      { tag: "outcome", value: "Residency" },
    ],
    bullets: [
      "Business plan review tailored to each country's panel",
      "Job-creation and revenue milestones mapped out",
      "Visa renewal and PR-conversion pathway planning",
      "Tax-efficient incorporation in the target jurisdiction",
    ],
    whoItsFor:
      "Founders with a fundable idea who want to launch in a new market while securing long-term residency.",
  },
  {
    id: "startup-innovative-visa",
    eyebrow: "Route 03 • Startup Visa",
    title: "Startup & Innovative Visa",
    description:
      "Startup visas accelerate founders whose ventures meet a country's innovation criteria — usually backed by an endorsing body. We position your venture in front of the right endorser, prepare a compelling submission, and coordinate every step through to approval.",
    chips: [
      { tag: "type", value: "Active" },
      { tag: "timeline", value: "6–12 months" },
      { tag: "outcome", value: "Residency" },
    ],
    bullets: [
      "Endorsing body identification and warm introduction",
      "Pitch deck and innovation narrative refinement",
      "Co-founder structuring and equity guidance",
      "Soft-landing programme support post-arrival",
    ],
    whoItsFor:
      "Innovative founders building a venture that fits a country's tech, R&D, or scale-up criteria.",
  },
  {
    id: "business-investment",
    eyebrow: "Route 04 • Business Investment",
    title: "Business Investment Programs",
    description:
      "Larger business investment programmes are designed for clients deploying capital into an existing or new enterprise, often with a job-creation requirement. We source compliant opportunities, run due diligence, and structure the investment to satisfy both immigration and commercial outcomes.",
    chips: [
      { tag: "type", value: "Active" },
      { tag: "timeline", value: "9–18 months" },
      { tag: "outcome", value: "Residency" },
    ],
    bullets: [
      "Acquisition target sourcing and diligence",
      "Joint-venture structuring with local partners",
      "Job-creation compliance tracking",
      "Tax and corporate setup in the chosen jurisdiction",
    ],
    whoItsFor:
      "Capital-rich clients who want to acquire or grow a business abroad while securing residency for themselves and their family.",
  },
  {
    id: "real-estate-investment",
    eyebrow: "Route 05 • Real Estate",
    title: "Real Estate Investment",
    description:
      "Several countries grant residency in exchange for qualifying real estate investment — typically with strong rental yields and capital growth. We pair you with vetted property opportunities, manage diligence, and handle the residency application in parallel.",
    chips: [
      { tag: "minimum", value: "From $250k" },
      { tag: "timeline", value: "3–8 months" },
      { tag: "outcome", value: "Residency" },
    ],
    bullets: [
      "Vetted developer and project shortlist",
      "Yield and capital-appreciation projections",
      "Title due diligence and escrow management",
      "Property management referrals post-purchase",
    ],
    whoItsFor:
      "Investors who prefer tangible, income-producing assets alongside residency benefits.",
  },
  {
    id: "golden-visa",
    eyebrow: "Route 06 • Golden Visa",
    title: "Golden Visa Programs",
    description:
      "Golden Visa programmes offer some of the world's most flexible residency-by-investment pathways. Minimal stay requirements, family inclusion, and routes to citizenship after a holding period make them attractive for globally mobile clients.",
    chips: [
      { tag: "minimum", value: "From $400k" },
      { tag: "timeline", value: "4–8 months" },
      { tag: "outcome", value: "Residency" },
    ],
    bullets: [
      "Comparison across UAE, Portugal, Spain, Greece, UK",
      "Minimum-stay analysis to fit your lifestyle",
      "Family eligibility (spouse, children, parents)",
      "Path to permanent residency or citizenship mapped out",
    ],
    whoItsFor:
      "Mobile professionals and families wanting residency with minimal physical presence requirements.",
  },
  {
    id: "permanent-residency-investment",
    eyebrow: "Route 07 • Permanent Residency",
    title: "Permanent Residency by Investment",
    description:
      "For investors who want full residency rights with no time-limited renewals, several jurisdictions offer permanent residency directly. We identify the cleanest route based on your capital base, family setup, and target country.",
    chips: [
      { tag: "minimum", value: "From $500k" },
      { tag: "timeline", value: "8–15 months" },
      { tag: "outcome", value: "PR" },
    ],
    bullets: [
      "Direct PR programmes (no renewal grind)",
      "Spouse and dependant inclusion",
      "Access to healthcare, schools, and labour markets",
      "Citizenship pathway after qualifying period",
    ],
    whoItsFor:
      "Clients who want permanent status outright — no temporary renewals, full access to local rights.",
  },
  {
    id: "citizenship-by-investment",
    eyebrow: "Route 08 • Citizenship",
    title: "Citizenship by Investment",
    description:
      "Citizenship-by-Investment (CBI) programmes deliver a second passport in months, not decades. We compare programmes head-to-head, manage the multi-stage diligence process, and shepherd your application through to oath.",
    chips: [
      { tag: "minimum", value: "From $150k" },
      { tag: "timeline", value: "6–12 months" },
      { tag: "outcome", value: "Citizenship" },
    ],
    bullets: [
      "CBI comparison across Caribbean, Malta, Türkiye",
      "Visa-free travel and tax analysis per passport",
      "Family inclusion and successive-generation planning",
      "Source-of-funds diligence handled end to end",
    ],
    whoItsFor:
      "Clients seeking a second passport for travel freedom, succession planning, or geopolitical hedging.",
  },
];

const NAV_ITEMS: SectionNavItem[] = ROUTES.map((route, idx) => ({
  id: route.id,
  title: route.title,
  index: String(idx + 1).padStart(2, "0"),
}));

function InvestmentRoutesSection() {
  return (
    <Section
      surface="muted"
      padding="default"
      aria-labelledby="investment-routes-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Routes to Residency"
          heading={
            <span id="investment-routes-heading">
              Eight Routes to Global Residency
            </span>
          }
          subtitle="Real outcomes, real money. Where it lands, what it returns, the milestones along the way."
        />

        {/*
          Mobile-only sticky tab strip. Sits below the site header so users
          can pivot between routes while scrolling without a sidebar.
        */}
        <div className="sticky top-24 z-30 -mx-4 mt-10 sm:-mx-6 lg:hidden">
          <SectionSideNav
            items={NAV_ITEMS}
            layout="horizontal"
            ariaLabel="Investment routes on this page"
          />
        </div>

        {/*
          Desktop two-column layout: sticky vertical scrollspy nav on the
          left, route rows on the right. The aside is itself sticky so it
          tracks scroll position while the right column flows past it.
        */}
        <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-12 lg:gap-10">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <SectionSideNav
                items={NAV_ITEMS}
                layout="vertical"
                eyebrow="Investment Routes"
                ariaLabel="Investment routes on this page"
              />
            </div>
          </aside>

          <div className="flex flex-col lg:col-span-9">
            {ROUTES.map((route) => (
              <FeatureRow
                key={route.id}
                {...route}
                headingId={`route-${route.id}-heading`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { InvestmentRoutesSection };
