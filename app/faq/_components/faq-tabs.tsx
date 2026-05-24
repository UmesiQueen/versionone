"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  id: string;
  label: string;
  items: ReadonlyArray<FaqItem>;
};

const FAQ_CATEGORIES: ReadonlyArray<FaqCategory> = [
  {
    id: "general",
    label: "General FAQs",
    items: [
      {
        question:
          "Do I need to book directly with the airline, or do you handle everything?",
        answer:
          "We handle everything. Once you share your travel details with us, we search, compare, book, and issue your tickets — you simply confirm your choice and make payment. You never need to visit an airline website or call a booking line.",
      },
      {
        question: "How long does it take to receive flight options after I enquire?",
        answer:
          "Most enquiries receive a tailored set of options within a few business hours. Complex multi-leg or group itineraries may take up to one business day so our advisors can compare fare classes and rules carefully.",
      },
      {
        question: "Are your prices competitive with booking directly online?",
        answer:
          "Yes. We negotiate consolidator and corporate fares that are often equal to or better than public online pricing — and unlike online portals, every booking includes human support before, during, and after travel.",
      },
      {
        question: "Can you help with flights for large groups or pilgrimages?",
        answer:
          "Absolutely. We arrange group flights for corporate teams, families, conferences, weddings, and religious pilgrimages including Hajj and Umrah. Group rates typically require a minimum of 10 passengers.",
      },
      {
        question:
          "What happens if my flight is cancelled or I need to change my travel dates?",
        answer:
          "We act on your behalf. If an airline cancels or reschedules, we contact you immediately with alternatives. For voluntary changes, we apply your ticket's fare rules and walk you through any fare difference or change fee before confirming.",
      },
      {
        question: "Do you arrange travel insurance alongside the flight booking?",
        answer:
          "Yes. We partner with reputable insurers to offer policies covering trip cancellation, medical emergencies, baggage, and visa-related risks. Insurance is optional but strongly recommended for international travel.",
      },
      {
        question: "Are my payments and personal data protected?",
        answer:
          "All payments are processed through PCI-compliant gateways and we never store full card details on our systems. Personal data is handled in line with our privacy policy and the data-protection laws of the jurisdictions we operate in.",
      },
    ],
  },
  {
    id: "immigration",
    label: "Immigration FAQs",
    items: [
      {
        question: "Which countries do you provide immigration support for?",
        answer:
          "We routinely advise on the United Kingdom, Canada, the United States, Australia, the Schengen Area, the UAE, and select Caribbean and Pacific programs. If your destination isn't listed, contact us — we work with vetted partners in 40+ countries.",
      },
      {
        question: "Can you guarantee a visa approval?",
        answer:
          "No reputable adviser can guarantee approval — final decisions rest with the issuing government. What we guarantee is honest case assessment, complete documentation, accurate forms, and representation that maximises your chance of success.",
      },
      {
        question: "How long does a typical visa process take?",
        answer:
          "Processing times depend on the visa type and country. Visitor visas are often resolved in 2–6 weeks; skilled-worker, study, and family visas typically take 2–6 months; residency and citizenship by investment can take 6–24 months.",
      },
      {
        question: "Do I need to be physically present for the application?",
        answer:
          "Most applications can be prepared and submitted remotely. Biometrics, interviews, and medicals usually require in-person attendance at a visa application centre or consulate — we coordinate appointments on your behalf.",
      },
      {
        question: "What documents will I need to provide?",
        answer:
          "Document requirements vary by route but typically include a valid passport, proof of funds, employment or study evidence, civil-status documents, and a clean police record. We send a tailored checklist after your initial consultation.",
      },
      {
        question: "Can my family join me?",
        answer:
          "Most work, study, and residency routes allow dependants — usually a spouse or partner and children under 18. Eligibility, application fees, and processing differ per program, and we plan your family's pathway alongside your own.",
      },
    ],
  },
  {
    id: "travel",
    label: "Travel FAQs",
    items: [
      {
        question: "What's included in a tour package?",
        answer:
          "Our tour packages typically bundle flights, accommodation, ground transfers, guided activities, and 24/7 destination support. Inclusions vary by package — every itinerary lists exactly what's covered before you book.",
      },
      {
        question: "Can I customise an existing tour package?",
        answer:
          "Yes. We treat published packages as a starting point. Extend the trip, swap hotels, add private guides, or build something entirely custom — our travel advisors will redesign the itinerary and re-price it for you.",
      },
      {
        question: "Do you arrange visas as part of travel bookings?",
        answer:
          "Yes. Tourist and short-stay visas can be processed alongside your travel booking. We advise on requirements, prepare the application, and handle the submission so your visa lines up with your travel dates.",
      },
      {
        question: "What happens if my trip is disrupted while I'm abroad?",
        answer:
          "Every booking comes with a 24/7 support line. If a flight is delayed, accommodation is unavailable, or plans change mid-trip, contact our duty desk and we'll rebook, reroute, or escalate with the supplier on your behalf.",
      },
      {
        question: "Do you offer corporate or business travel services?",
        answer:
          "Yes. We manage end-to-end business travel for teams of all sizes — negotiated corporate fares, traveller profiles, expense reporting, and dedicated account managers. Get in touch for a corporate proposal.",
      },
    ],
  },
  {
    id: "investment",
    label: "Investment FAQs",
    items: [
      {
        question:
          "What's the difference between residency and citizenship by investment?",
        answer:
          "Residency by investment grants you the right to live in a country, often as a step toward citizenship after a qualifying period. Citizenship by investment grants nationality and a passport directly, usually with no prior residency required. Both come with different costs, timelines, and obligations.",
      },
      {
        question: "What's the minimum investment required?",
        answer:
          "Thresholds vary widely. Caribbean citizenship programs start around USD 200,000; European residency programs typically range from EUR 250,000 to EUR 500,000; major business or investor visas in the UK, US, and Canada often require seven-figure commitments. We map options against your budget.",
      },
      {
        question: "Are these investments refundable?",
        answer:
          "It depends on the route. Real-estate and fund-based investments can usually be exited after a holding period (often 3–7 years). Government-contribution programs are non-refundable. We always explain the exit profile of every option before you commit.",
      },
      {
        question: "Do investment routes carry tax obligations?",
        answer:
          "Possibly. Gaining residency or citizenship may change your tax residency or trigger reporting obligations. We coordinate with cross-border tax specialists so you understand your position before, during, and after the investment.",
      },
      {
        question: "Can my whole family be included in an investment application?",
        answer:
          "Most programs include a main applicant, spouse, and dependent children. Some also allow parents and grandparents under certain conditions. Family scope and fees vary by jurisdiction and form part of our initial advisory.",
      },
      {
        question: "How long does an investment migration process take?",
        answer:
          "Fast-track Caribbean citizenship programs can complete in 4–6 months. European Golden Visa routes typically take 6–12 months. UK and US investor visas usually span 12–24 months when factoring in due diligence and source-of-funds checks.",
      },
    ],
  },
];

function FaqTabsSection() {
  return (
    <Tabs defaultValue={FAQ_CATEGORIES[0]?.id} className="gap-8">
      <TabsList aria-label="FAQ categories">
        {FAQ_CATEGORIES.map(({ id, label }) => (
          <TabsTrigger key={id} value={id}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      {FAQ_CATEGORIES.map(({ id, items }) => (
        <TabsContent key={id} value={id}>
          <Accordion
            type="single"
            collapsible
            defaultValue={`${id}-0`}
            className="flex flex-col gap-3"
          >
            {items.map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`${id}-${index}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>
                  <p>{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export { FaqTabsSection };
