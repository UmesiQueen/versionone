import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

function SupportOverviewSection() {
  return (
    <Section padding="default" aria-labelledby="support-overview-heading">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          heading={
            <span id="support-overview-heading">
              Support That Fits Your Needs
            </span>
          }
          subtitle="Whether you're moving abroad, exploring a new city, attending a conference, or applying for permanent residency — VersionOne handles every detail so you can travel with confidence."
        />
      </Container>
    </Section>
  );
}

export { SupportOverviewSection };
