import { Container, Section } from "@/components/layout/section";
import {
  FeatureRow,
  type FeatureRowProps,
} from "@/components/sections/feature-row";
import {
  type SectionNavItem,
  SectionSideNav,
} from "@/components/sections/section-side-nav";

type ServiceEntry = Omit<FeatureRowProps, "headingId"> & {
  id: string;
};

const SERVICES: ServiceEntry[] = [
  {
    id: "expert-consultation",
    eyebrow: "Service 01 • Consultation",
    title: "Expert Consultation",
    description:
      "Every client starts with a session with our licensed consultants. We take time to understand your goals, background, and risk profile, then map out a clear, achievable path — whether you're exploring options or ready to act.",
    chips: [
      { tag: "format", value: "Direct & Discreet" },
      { tag: "duration", value: "30–45 minutes" },
      { tag: "follow-up", value: "Included" },
    ],
    bullets: [
      "1-on-1 with a licensed travel & visa specialist",
      "Clear next-step roadmap delivered in writing",
      "Comparative pathway analysis across destinations",
      "No-pressure, fully confidential conversation",
    ],
  },
  {
    id: "eligibility-assessment",
    eyebrow: "Service 02 • Assessment",
    title: "Eligibility Assessment",
    description:
      "Before any application goes out, we run a detailed eligibility review against the rules of your target country — points scores, financials, work experience, language tests, and family composition.",
    chips: [
      { tag: "format", value: "Direct & Discreet" },
      { tag: "duration", value: "30–45 minutes" },
      { tag: "follow-up", value: "Included" },
    ],
    bullets: [
      "Country-specific points and rules check",
      "Financial threshold and document verification",
      "Risk factors flagged before you spend on fees",
      "Recommendations to strengthen weak profile areas",
    ],
  },
  {
    id: "application-processing",
    eyebrow: "Service 03 • Application",
    title: "Application Processing",
    description:
      "Our team prepares, reviews, and submits your full application package on your behalf — from forms and supporting evidence to cover letters and translations. Nothing leaves our desk that isn't ready to be approved.",
    chips: [
      { tag: "format", value: "Direct & Discreet" },
      { tag: "duration", value: "30–45 minutes" },
      { tag: "follow-up", value: "Included" },
    ],
    bullets: [
      "Form completion and quality assurance review",
      "Supporting evidence assembly and indexing",
      "Translation and notarization coordination",
      "Submission tracking with status updates",
    ],
  },
  {
    id: "embassy-appointment-support",
    eyebrow: "Service 04 • Appointments",
    title: "Embassy Appointment Support",
    description:
      "Booking and attending an embassy appointment can be the single biggest source of stress in any application. We secure the slot, prepare you for the interview, and coordinate the in-person logistics end to end.",
    chips: [
      { tag: "format", value: "Direct & Discreet" },
      { tag: "duration", value: "30–45 minutes" },
      { tag: "follow-up", value: "Included" },
    ],
    bullets: [
      "Appointment booking across all major embassies",
      "Interview preparation with practice Q&A",
      "Document pack assembly for in-person submission",
      "Reminder and rescheduling support if needed",
    ],
  },
  {
    id: "pre-landing-guidance",
    eyebrow: "Service 05 • Pre-Landing",
    title: "Pre-Landing Guidance",
    description:
      "In the weeks before you fly, we run a personalised pre-departure programme — practical, country-specific guidance so you arrive prepared, not overwhelmed.",
    chips: [
      { tag: "format", value: "Direct & Discreet" },
      { tag: "duration", value: "30–45 minutes" },
      { tag: "follow-up", value: "Included" },
    ],
    bullets: [
      "Country and city orientation briefing",
      "Banking, SIM, and ID setup walk-through",
      "Customs and arrival documentation checklist",
      "Cultural and weather preparation tips",
    ],
  },
  {
    id: "flight-booking",
    eyebrow: "Service 06 • Flights",
    title: "Flight Booking",
    description:
      "We secure the right flights at the right price — direct, multi-stop, business class, or family group bookings — and align timing with your visa validity and onward plans.",
    chips: [
      { tag: "format", value: "Direct & Discreet" },
      { tag: "duration", value: "30–45 minutes" },
      { tag: "follow-up", value: "Included" },
    ],
    bullets: [
      "Comparison across full-service and budget carriers",
      "Flexible booking with change protection",
      "Group and family fare optimization",
      "Coordination with onward and return travel",
    ],
  },
  {
    id: "hotel-accommodation",
    eyebrow: "Service 07 • Accommodation",
    title: "Hotel & Accommodation",
    description:
      "Curated stays at every price point — from short-stay business hotels to longer apartment rentals — pre-booked to meet embassy proof-of-stay requirements where needed.",
    chips: [
      { tag: "format", value: "Direct & Discreet" },
      { tag: "duration", value: "30–45 minutes" },
      { tag: "follow-up", value: "Included" },
    ],
    bullets: [
      "Vetted hotel options near your destination",
      "Long-stay and serviced apartment alternatives",
      "Embassy-compliant booking documentation",
      "Free cancellation terms wherever possible",
    ],
  },
  {
    id: "travel-insurance",
    eyebrow: "Service 08 • Insurance",
    title: "Travel Insurance",
    description:
      "Comprehensive travel insurance covering medical emergencies, trip cancellations, baggage, and delays — accepted by every major embassy and tailored to the length and risk profile of your trip.",
    chips: [
      { tag: "format", value: "Direct & Discreet" },
      { tag: "duration", value: "30–45 minutes" },
      { tag: "follow-up", value: "Included" },
    ],
    bullets: [
      "Embassy-accepted policy documentation",
      "Medical, baggage, and trip cancellation cover",
      "Multi-trip and annual options for frequent travelers",
      "24/7 emergency assistance hotline included",
    ],
  },
  {
    id: "post-landing-assistance",
    eyebrow: "Service 09 • Post-Landing",
    title: "Post-Landing Assistance",
    description:
      "Your journey doesn't end at arrival. We stay on call for the first weeks abroad — local logistics, residency registration, schooling, and any unexpected hurdles in your new country.",
    chips: [
      { tag: "format", value: "Direct & Discreet" },
      { tag: "duration", value: "30–45 minutes" },
      { tag: "follow-up", value: "Included" },
    ],
    bullets: [
      "Residency and address registration assistance",
      "School and child-care enrollment guidance",
      "Local partner network for housing and banking",
      "Dedicated post-arrival advisor for 30 days",
    ],
  },
];

const NAV_ITEMS: SectionNavItem[] = SERVICES.map((service, idx) => ({
  id: service.id,
  title: service.title,
  index: String(idx + 1).padStart(2, "0"),
}));

function ServicesGridSection() {
  return (
    <Section
      surface="muted"
      padding="sm"
      aria-labelledby="services-grid-heading"
    >
      <Container>
        {/*
          Mobile-only table of contents. Renders as a static list at the top
          of the section, followed by a subtle divider, so users can scan
          available services before reading the body content.
        */}
        <div className="lg:hidden">
          <SectionSideNav items={NAV_ITEMS} eyebrow="Services" />
          <div
            aria-hidden="true"
            className="mt-8 border-t border-border"
          />
        </div>

        {/*
          Desktop two-column layout: sticky vertical scrollspy nav on the
          left, service rows on the right. The aside is itself sticky so it
          tracks scroll position while the right column flows past it.
        */}
        <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-12 lg:gap-10">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <SectionSideNav items={NAV_ITEMS} />
            </div>
          </aside>

          <div className="flex flex-col lg:col-span-9">
            {SERVICES.map((service) => (
              <FeatureRow
                key={service.id}
                {...service}
                headingId={`service-${service.id}-heading`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { ServicesGridSection };
