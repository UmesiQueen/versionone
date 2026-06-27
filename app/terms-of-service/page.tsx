import type { Metadata } from "next";

import { Container, Section } from "@/components/layout/section";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms-of-service",
  description:
    "Legal policies, process overview, and pre-purchase information governing the use of VersionOne' services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "refund policy",
    "disclaimer",
    "legal",
  ],
});

export default function TermsOfServicePage() {
  return (
    <>
      <Section aria-labelledby="terms-heading" surface="muted" padding="lg">
        <Container className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Legal
          </p>
          <h1
            id="terms-heading"
            className="text-4xl font-bold tracking-tight text-balance sm:text-5xl"
          >
            Terms of Service
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg text-pretty">
            Welcome to VersionOne. This page outlines our legal
            policies governing the use of our website and services. By using
            our website or engaging our services, you agree to the policies
            below.
          </p>
        </Container>
      </Section>

      <Section surface="default" padding="default">
        <Container>
          <article
            aria-label="Terms of service"
            className="mx-auto flex max-w-3xl flex-col gap-14 text-[15px] leading-relaxed text-muted-foreground sm:text-base"
          >

            {/* ── HOW OUR PROCESS WORKS ── */}
            <section aria-labelledby="process-heading" className="flex flex-col gap-6">
              <h2
                id="process-heading"
                className="text-xl font-bold text-foreground sm:text-2xl"
              >
                How Our Process Works
              </h2>
              <p>
                At VersionOne, we follow a structured, transparent, and
                client-focused process designed to make your travel, visa,
                immigration, study abroad, or relocation journey as smooth and
                stress-free as possible.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">Step 1 — Consultation</h3>
                  <p>
                    We begin by understanding your travel plans, qualifications,
                    experience, goals, budget, and preferred destination to
                    recommend the most suitable solution.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">Step 2 — Eligibility Assessment</h3>
                  <p>
                    Our consultants assess your profile and determine the most
                    appropriate travel, visa, study, work, business, or
                    immigration pathway based on your circumstances.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">Step 3 — Personalized Strategy</h3>
                  <p>
                    We provide a clear roadmap outlining your available options,
                    required documents, estimated timelines, costs, and the next
                    steps in your journey.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">Step 4 — Documentation Support</h3>
                  <p>
                    We guide you through preparing, reviewing, and organizing all
                    required documents to help ensure your application meets the
                    relevant requirements.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">Step 5 — Application Support</h3>
                  <p>
                    Where applicable, we assist with completing application forms,
                    document submissions, compliance requirements, and liaising
                    with relevant institutions or partners.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">Step 6 — Additional Services</h3>
                  <p>
                    Depending on your needs, we can also assist with services such
                    as flight bookings, travel insurance, accommodation, corporate
                    travel arrangements, employer or school guidance, interview
                    preparation, and pre-departure planning.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">Step 7 — Processing &amp; Updates</h3>
                  <p>
                    We monitor the progress of your application where possible
                    and keep you informed throughout the process. Processing times
                    are determined by the relevant authorities and may vary.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">Step 8 — Travel &amp; Relocation Support</h3>
                  <p>
                    Once your application is approved, we provide guidance on
                    travel planning, departure preparation, and relocation
                    arrangements to help you travel with confidence.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">Step 9 — Post-Arrival Assistance</h3>
                  <p>
                    Where applicable, we continue to support you after arrival
                    with settlement guidance, orientation, and other relocation
                    support services.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-lg border border-border bg-muted/50 p-5">
                <p className="font-semibold text-foreground">Important Information</p>
                <ul className="ml-5 flex list-disc flex-col gap-1.5 marker:text-foreground">
                  <li>
                    We do not issue visas, work permits, residence permits, or
                    passports. These are issued solely by the relevant Embassy or
                    Government Authority.
                  </li>
                  <li>
                    We do not guarantee visa approvals, employment opportunities,
                    admission into educational institutions, or immigration
                    outcomes.
                  </li>
                  <li>
                    Embassy appointments and processing times are controlled
                    exclusively by the relevant Embassy or Visa Application
                    Centre.
                  </li>
                  <li>
                    Our fees cover professional consulting and support services.
                    Government fees, Embassy fees, airline tickets, travel
                    insurance, and other third-party charges are separate unless
                    expressly stated.
                  </li>
                  <li>
                    The success of any application depends on the accuracy of the
                    information and documents provided by the applicant, as well
                    as the final decision of the relevant authorities.
                  </li>
                </ul>
              </div>
            </section>

            {/* ── BEFORE YOU PURCHASE ── */}
            <section aria-labelledby="before-purchase-heading" className="flex flex-col gap-6">
              <h2
                id="before-purchase-heading"
                className="text-xl font-bold text-foreground sm:text-2xl"
              >
                Before You Purchase
              </h2>
              <p>
                At VersionOne, we believe every client should fully
                understand the immigration and travel process before engaging
                our services. Transparency is one of our core values, and we
                encourage all clients to read the information below.
              </p>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">
                    1. We Guide You Through the Process
                  </h3>
                  <p>
                    We provide professional travel and immigration consulting,
                    document guidance, and application support. However, we do
                    not issue visas, work permits, residence permits, or
                    passports. These are issued solely by the relevant Embassy
                    or Government Authority.
                  </p>
                  <p className="mt-1">
                    No consultant or agency can legally guarantee a visa or
                    influence an Embassy&rsquo;s decision.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">
                    2. We Are Not an Employment Agency
                  </h3>
                  <p>
                    VersionOne does not recruit employees or provide
                    jobs. We do not issue employment contracts, job offers, or
                    work invitations. Any employment-related documents are
                    issued only by legitimate employers or authorized
                    organizations.
                  </p>
                  <p className="mt-1">
                    Always verify any information claiming to represent
                    VersionOne directly with us.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">
                    3. Embassy Appointments
                  </h3>
                  <p>
                    Embassy appointments are managed exclusively by the relevant
                    Embassy or its authorized Visa Application Centre (such as
                    VFS Global, TLScontact, or BLS, where applicable). We
                    cannot guarantee appointment availability or processing
                    speed, and we cannot influence Embassy scheduling decisions.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">
                    4. What You Are Paying For
                  </h3>
                  <p>
                    Our fees cover our professional consulting and support
                    services, which may include:
                  </p>
                  <ul className="ml-5 flex list-disc flex-col gap-1 marker:text-foreground">
                    <li>Eligibility assessment</li>
                    <li>Immigration and travel advice</li>
                    <li>Document review</li>
                    <li>Application guidance</li>
                    <li>Administrative support</li>
                  </ul>
                  <p>
                    Government fees, Embassy fees, biometric fees, airline
                    tickets, travel insurance, and other third-party charges are
                    separate unless specifically stated.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">5. Refunds</h3>
                  <p>
                    Please review our Refund Policy before purchasing any
                    service. Visa refusals, Embassy decisions, appointment
                    availability, government policy changes, or changes in your
                    personal plans do not automatically qualify for a refund.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">
                    6. Your Role in the Process
                  </h3>
                  <p>
                    The success of your application depends largely on you. You
                    are responsible for:
                  </p>
                  <ul className="ml-5 flex list-disc flex-col gap-1 marker:text-foreground">
                    <li>Providing accurate information.</li>
                    <li>Submitting genuine documents.</li>
                    <li>Meeting Embassy requirements.</li>
                    <li>Attending interviews where required.</li>
                    <li>
                      Responding promptly to requests for additional
                      information.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground">7. Stay Informed</h3>
                  <p>
                    We encourage every client to rely only on official
                    information published by Embassies and Government
                    Authorities. Be cautious of anyone promising guaranteed
                    visas, guaranteed jobs, or expedited approvals in exchange
                    for money.
                  </p>
                  <p className="mt-1">
                    If you have questions at any stage of the process, our team
                    is always available to guide you.
                  </p>
                </div>
              </div>

              <p className="italic">
                We&rsquo;re committed to providing honest advice, professional
                support, and transparent service every step of the way.
              </p>
            </section>

            {/* ── TERMS & CONDITIONS ── */}
            <section aria-labelledby="tc-heading" className="flex flex-col gap-6">
              <h2
                id="tc-heading"
                className="text-xl font-bold text-foreground sm:text-2xl"
              >
                Terms &amp; Conditions
              </h2>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">Our Services</h3>
                <p>
                  VersionOne provides travel, visa advisory, immigration
                  consulting, education consulting, corporate travel, relocation
                  support, and related professional services.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">No Guarantee</h3>
                <p>
                  We do not issue visas, work permits, residence permits,
                  passports, or employment offers. All decisions are made solely
                  by the relevant Embassy, Immigration Authority, Government
                  Agency, Employer, or Educational Institution.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">
                  Client Responsibilities
                </h3>
                <p>
                  You agree to provide accurate information, genuine documents,
                  and comply with all applicable immigration and travel
                  requirements.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">Payments</h3>
                <p>
                  Our fees cover professional consulting and support services
                  unless otherwise stated. Government fees, Embassy fees,
                  airline tickets, accommodation, and other third-party costs
                  are excluded unless specified.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">
                  Limitation of Liability
                </h3>
                <p>
                  We are not responsible for visa refusals, government
                  decisions, third-party delays, travel disruptions, or losses
                  arising from circumstances beyond our control.
                </p>
              </div>
            </section>

            {/* ── REFUND POLICY ── */}
            <section aria-labelledby="refund-heading" className="flex flex-col gap-4">
              <h2
                id="refund-heading"
                className="text-xl font-bold text-foreground sm:text-2xl"
              >
                Refund Policy
              </h2>
              <p>
                Refund eligibility depends on the type of service purchased.
                Consulting fees are generally non-refundable once work has
                commenced.
              </p>
              <p>Refunds are not available for:</p>
              <ul className="ml-5 flex list-disc flex-col gap-1 marker:text-foreground">
                <li>Visa refusals</li>
                <li>Embassy delays</li>
                <li>Appointment unavailability</li>
                <li>Government policy changes</li>
                <li>Client cancellation after work has begun</li>
                <li>Changes in personal circumstances</li>
              </ul>
              <p>
                Where a refund is approved, it will be processed in accordance
                with our applicable refund procedures.
              </p>
            </section>

            {/* ── DISCLAIMER ── */}
            <section aria-labelledby="disclaimer-heading" className="flex flex-col gap-4">
              <h2
                id="disclaimer-heading"
                className="text-xl font-bold text-foreground sm:text-2xl"
              >
                Disclaimer
              </h2>
              <p>
                VersionOne acts solely as a professional travel and
                immigration consulting company. We do not represent any Embassy,
                Government, Immigration Authority, Employer, or Educational
                Institution unless expressly stated.
              </p>
              <p>We do not guarantee:</p>
              <ul className="ml-5 flex list-disc flex-col gap-1 marker:text-foreground">
                <li>Visa approval</li>
                <li>Work permits</li>
                <li>Employment</li>
                <li>Permanent residence</li>
                <li>Citizenship</li>
                <li>Admission into schools</li>
                <li>Processing times</li>
              </ul>
              <p>
                All decisions remain entirely at the discretion of the relevant
                authorities. Clients are encouraged to verify official
                requirements directly with the relevant Embassy or Government
                Authority before making travel or immigration decisions.
              </p>
            </section>

            {/* ── ACCEPTANCE ── */}
            <section
              aria-labelledby="acceptance-heading"
              className="flex flex-col gap-4 rounded-lg border border-border bg-muted/50 p-6"
            >
              <h2
                id="acceptance-heading"
                className="text-xl font-bold text-foreground sm:text-2xl"
              >
                Acceptance of These Terms
              </h2>
              <p>
                By accessing this website, submitting an enquiry, creating an
                account, requesting a quotation, making a payment, booking a
                service, or otherwise using any services provided by VersionOne
                Travels, you acknowledge that you have read, understood, and
                agree to be bound by these Terms &amp; Conditions, our Privacy
                Policy, Refund Policy, and Disclaimer.
              </p>
              <p>
                If you do not agree with any part of these policies, you should
                not use our website or purchase our services.
              </p>
            </section>

          </article>
        </Container>
      </Section>

      <FinalCtaSection />
    </>
  );
}
