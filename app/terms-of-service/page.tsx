import type { Metadata } from "next";

import { Container, Section } from "@/components/layout/section";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that govern your use of VersionOne's website and our travel, immigration, and investment advisory services.",
};

// Bump this string when the terms are republished.
const EFFECTIVE_DATE = "20 Jan 2025";

export default function TermsOfServicePage() {
  return (
    <>
      {/* Compact hero — mirrors the lighter template used on Privacy. Muted
          surface, centered eyebrow + H1 + lede, no background image. */}
      <Section aria-labelledby="terms-heading" surface="muted" padding="lg">
        <Container className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Current as of {EFFECTIVE_DATE}
          </p>
          <h1
            id="terms-heading"
            className="text-4xl font-bold tracking-tight text-balance sm:text-5xl"
          >
            Terms and Conditions
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg text-pretty">
            By accessing our website, you are agreeing to be bound by these
            terms of service, and agree that you are responsible for compliance
            with any applicable local laws.
          </p>
        </Container>
      </Section>

      <Section surface="default" padding="default">
        <Container>
          <article
            aria-label="Terms and conditions text"
            className="mx-auto flex max-w-3xl flex-col gap-10 text-[15px] leading-relaxed text-muted-foreground sm:text-base"
          >
            {/* Intro */}
            <div className="flex flex-col gap-4">
              <p>
                These terms ("Terms") govern your access to and use of the
                VersionOne website and the travel, immigration, and investment
                advisory services we provide (together, the "Services"). By
                visiting our site, requesting a consultation, or engaging us to
                act on your behalf, you agree to these Terms. If you do not
                agree, please do not use the Services.
              </p>
              <p>
                We may update these Terms from time to time. The "Current as of"
                date above reflects the most recent revision. Continued use of
                the Services after a change has been published constitutes your
                acceptance of the revised Terms.
              </p>
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                What service are we providing?
              </h2>
              <p>
                VersionOne provides professional advisory and administrative
                support across travel bookings, visa and immigration
                applications, and investment migration. The exact scope of any
                engagement is set out in a written service agreement or
                quotation issued to you before work begins.
              </p>
              <p>
                We act as a professional adviser and facilitator. We do not
                guarantee any outcome that is dependent on a third party — for
                example, the grant of a visa, the approval of a residency
                application, the issuance of a passport, or the availability of
                a flight, hotel, or investment slot.
              </p>
              <p>
                Where the success of your matter depends on a government
                authority, airline, hotel, fund, or other independent
                organisation, we will represent your interests diligently and
                in good faith, but the final decision rests with that
                organisation.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                What is the client obligation?
              </h2>
              <p>
                You agree to provide accurate, complete, and current
                information at the time of engagement and throughout the
                course of your matter. This includes identity documents,
                contact details, civil-status information, employment and
                financial information, and any disclosures required by an
                immigration authority or investment program.
              </p>
              <p>
                You agree to respond promptly to requests for additional
                information and documentation. Delays in providing what we
                request may extend processing times or, in some cases, cause
                an application to lapse.
              </p>
              <p>
                You also agree not to misrepresent any fact to us or to any
                third party in connection with the Services. We may suspend or
                terminate an engagement at our discretion if we discover that
                information you have provided is false, fraudulent, or
                materially misleading.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Fees &amp; Payment
              </h2>
              <p>
                Our fees are set out in writing before you engage us. Unless
                stated otherwise, fees are payable in full at the start of an
                engagement and are non-refundable once substantive work has
                begun. Third-party costs — including government, biometric,
                courier, and translation fees — are passed through at cost and
                billed separately.
              </p>
              <p>
                We accept payment through PCI-compliant payment gateways and
                approved bank-transfer channels. Cheques, cash, and informal
                payment arrangements are not accepted.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, VersionOne, its
                directors, employees, and licensed partners shall not be
                liable for any indirect, incidental, consequential, or special
                damages arising out of or in connection with the Services —
                including loss of profit, loss of opportunity, missed travel,
                or refusal of a visa or investment application.
              </p>
              <p>
                Our total aggregate liability under any engagement shall not
                exceed the professional fees you have paid to VersionOne in
                connection with that engagement, save in cases of fraud or
                wilful misconduct on our part, where liability cannot lawfully
                be excluded.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Intellectual Property
              </h2>
              <p>
                All content on our website — including text, logos, graphics,
                checklists, templates, and process documentation — is the
                property of VersionOne or its licensors and is protected by
                copyright and trademark laws. You may view and print
                reasonable amounts of content for your personal,
                non-commercial use, but you may not reproduce, redistribute,
                or commercially exploit it without our prior written consent.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the Federal Republic
                of Nigeria. Any dispute arising out of or in connection with
                these Terms or the Services shall be subject to the exclusive
                jurisdiction of the courts of Rivers State, Nigeria, unless
                otherwise agreed in writing.
              </p>
              <p>
                Where you engage us in connection with a matter in another
                jurisdiction, additional terms required by the law of that
                jurisdiction may apply alongside these Terms.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                Updates to Terms
              </h2>
              <p>
                We may revise these Terms at any time. When we do, we will
                update the "Current as of" date above and post the revised
                Terms on this page. For material changes — including changes
                affecting your rights or our liability — we will, where
                practical, also notify you by email if you have an active
                engagement with us.
              </p>
              <ol className="ml-6 flex list-decimal flex-col gap-2 marker:font-semibold marker:text-foreground">
                <li>
                  Review the updated Terms when you next access the Services.
                </li>
                <li>
                  Contact us if any change is unclear or you wish to discuss
                  its impact on a live engagement.
                </li>
                <li>
                  Discontinue use of the Services if you do not agree with the
                  revised Terms.
                </li>
              </ol>
            </section>
          </article>
        </Container>
      </Section>

      <FinalCtaSection />
    </>
  );
}
