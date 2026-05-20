import type { Metadata } from "next";

import { Container, Section } from "@/components/layout/section";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How VersionOne collects, uses, stores, and protects the personal information you share with us across travel, immigration, and investment advisory services.",
};

// Bump this string when the policy is republished.
const EFFECTIVE_DATE = "20 Jan 2025";

export default function PrivacyPage() {
  return (
    <>
      {/* Compact hero — intentionally different from the image-led PageHero used
          on About/Services/etc. Privacy/Terms/Cookie pages share this lighter
          template: muted surface, centered eyebrow + H1 + lede. */}
      <Section
        aria-labelledby="privacy-heading"
        surface="muted"
        padding="lg"
      >
        <Container className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Current as of {EFFECTIVE_DATE}
          </p>
          <h1
            id="privacy-heading"
            className="text-4xl font-bold tracking-tight text-balance sm:text-5xl"
          >
            Privacy Policy
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg text-pretty">
            Your privacy is important to us at VersionOne. We respect your
            privacy regarding any information we may collect from you across our
            website.
          </p>
        </Container>
      </Section>

      <Section surface="default" padding="default">
        <Container>
          <article
            aria-label="Privacy policy text"
            className="mx-auto flex max-w-3xl flex-col gap-10 text-[15px] leading-relaxed text-muted-foreground sm:text-base"
          >
            {/* Intro */}
            <div className="flex flex-col gap-4">
              <p>
                VersionOne ("we," "us," or "our") respects your privacy and is
                committed to protecting it through our compliance with this
                policy. This policy describes the types of information we may
                collect from you, or that you may provide to us, when you visit
                our website or engage our travel, immigration, and investment
                advisory services, and our practices for collecting, using,
                maintaining, protecting, and disclosing that information.
              </p>
              <p>
                This policy applies to information we collect on our website, in
                email, text, and other electronic messages between you and
                VersionOne, and through any related applications you use to
                engage with us. It does not apply to information collected by
                any third party, including through any application or content
                that may link to or be accessible from our site.
              </p>
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                What information do we collect?
              </h2>
              <p>
                We collect information by which you may be personally
                identified, such as your name, date of birth, passport details,
                nationality, residential address, email address, telephone
                number, employment history, and financial information you
                provide as part of an immigration, travel, or investment
                application.
              </p>
              <p>
                We also collect information about your internet connection, the
                equipment you use to access our website, and your usage details
                — including IP address, browser type, operating system, pages
                viewed, and the dates and times of your visits.
              </p>
              <p>
                Where you ask us to act on your behalf — for example, in
                submitting a visa application, booking travel, or processing an
                investment — we may also collect supporting documents and
                biometric data required by the relevant authority. We only
                request what is necessary for the service you have engaged us
                to provide.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                How do we use your information?
              </h2>
              <p>
                We use the information we collect to deliver the services you
                request, communicate with you about your case, provide tailored
                advice, process payments, comply with our legal and regulatory
                obligations, improve our website and services, and — where you
                have agreed — send you updates about programs and opportunities
                that may be relevant to you.
              </p>
              <p>
                We do not sell your personal information. We share it only with
                the third parties necessary to deliver our services — for
                example, airlines, hotels, visa application centres, government
                departments, and licensed legal partners — and only to the
                extent required to complete the work you have asked us to do.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Do we use cookies and other tracking technologies?
              </h2>
              <p>
                We use cookies and similar technologies to recognise you when
                you return to our website, remember your preferences,
                understand how the site is used, and improve your experience.
                You can configure your browser to refuse all or some cookies;
                if you do, parts of our site may no longer function correctly.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                How long do we keep your information?
              </h2>
              <p>
                We retain personal information for as long as necessary to
                provide our services, meet our legal obligations, resolve
                disputes, and enforce our agreements. Where we are required by
                law or by the rules of an immigration authority to retain
                records for a defined period, we hold those records for that
                period and securely delete them thereafter.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                How do we keep your information safe?
              </h2>
              <p>
                We have implemented administrative, technical, and physical
                safeguards designed to protect your information against
                accidental loss and unauthorised access, alteration, or
                disclosure. These include encrypted storage, restricted
                need-to-know access, PCI-compliant payment processing, and
                regular review of our security practices.
              </p>
              <p>
                The safety of your information also depends on you. Where you
                have chosen a password to access any part of our services, you
                are responsible for keeping that password confidential.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                What are your privacy rights?
              </h2>
              <p>
                Subject to applicable law, you may have the right to access,
                correct, update, or request deletion of the personal
                information we hold about you, to object to or restrict our
                processing of it, to withdraw consent where processing is based
                on consent, and to lodge a complaint with a relevant
                data-protection authority.
              </p>
              <p>
                To exercise any of these rights, please contact us using the
                details below. We will respond within a reasonable time and in
                accordance with the law.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                How can you contact us about this policy?
              </h2>
              <p>
                If you have questions or concerns about this policy or our
                handling of your personal information, you can reach us by any
                of the following:
              </p>
              <ol className="ml-6 flex list-decimal flex-col gap-2 marker:font-semibold marker:text-foreground">
                <li>
                  Email us at{" "}
                  <a
                    href="mailto:privacy@versionone.global"
                    className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    privacy@versionone.global
                  </a>
                  .
                </li>
                <li>
                  Write to VersionOne Advisory, 12 Aba Road, GRA Phase 2, Port
                  Harcourt, Rivers State, Nigeria.
                </li>
                <li>
                  Call us at{" "}
                  <a
                    href="tel:+2348000000000"
                    className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    +234&nbsp;800&nbsp;000&nbsp;0000
                  </a>{" "}
                  between 8&nbsp;AM and 6&nbsp;PM WAT.
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
