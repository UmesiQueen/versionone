import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

function GlobalAccessOverviewSection() {
  return (
    <Section padding="default" aria-labelledby="global-access-heading">
      <Container>
        <SectionHeading
          eyebrow="Strategic Investment"
          heading={
            <span id="global-access-heading">
              Eight Routes to Global Residency
            </span>
          }
          subtitle="VersionOne helps individuals and families convert capital into opportunity — investment-based residency, citizenship, and entry to the world's most resilient economies. We pair the right programme with the right portfolio so your capital works twice: once for return, once for mobility."
        />
      </Container>
    </Section>
  );
}

export { GlobalAccessOverviewSection };
