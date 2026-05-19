import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  ServiceFeatureRow,
  type ServiceFeatureRowProps,
} from "./service-feature-row";

type ServiceEntry = Omit<ServiceFeatureRowProps, "reverse" | "headingId"> & {
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
    ctaHref: "#consultation",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "An advisor reviewing documents with a client in a meeting room",
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
    ctaHref: "#consultation",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pages of an immigration application form on a desk",
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
    ctaHref: "#consultation",
    image:
      "https://images.unsplash.com/photo-1623674389905-9c5e0bdf9921?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A passport and immigration documents on a desk",
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
    ctaHref: "#consultation",
    image:
      "https://images.unsplash.com/photo-1493340236077-0bfd674c7eef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Neoclassical embassy building facade",
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
    ctaHref: "#consultation",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A passenger aircraft on the tarmac at sunrise",
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
    ctaHref: "#consultation",
    image:
      "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "View from an airport window of a parked airliner",
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
    ctaHref: "#consultation",
    image:
      "https://images.unsplash.com/photo-1551776235-dde6d482980b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A neatly made hotel bedroom with warm bedside lighting",
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
      "Multi-trip and annual options for frequent travellers",
      "24/7 emergency assistance hotline included",
    ],
    ctaHref: "#consultation",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A health insurance card on a clipboard with a stethoscope",
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
    ctaHref: "#consultation",
    image:
      "https://images.unsplash.com/photo-1503551723145-6c040742065b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A new arrival walking with luggage through a city street",
  },
];

function ServicesGridSection() {
  return (
    <Section
      surface="muted"
      padding="default"
      aria-labelledby="services-grid-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Service Suite"
          heading={
            <span id="services-grid-heading">
              Every Service, Under One Roof
            </span>
          }
          subtitle="From the first call to settling into your new country, here is what's on offer — pick what you need or take the full package."
        />
        <div className="mt-12 flex flex-col gap-8 sm:gap-12">
          {SERVICES.map((service, idx) => (
            <ServiceFeatureRow
              key={service.id}
              {...service}
              reverse={idx % 2 === 1}
              headingId={`service-${service.id}-heading`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export { ServicesGridSection };
