import {Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

export function BrandStatement() {
  return (
    <Section padding="sm" surface="muted" aria-labelledby="brand-statement-heading">
      <Container>
          <SectionHeading
            eyebrow="Brand Statement"
            heading={
              <span id="brand-statement-heading">We are Redefining Travel</span>
            }
            subtitle="Our business fosters mutual success and built through the power of three (3) key elements: Innovation, Technology and Collaboration."
          />
      </Container>
    </Section>
  );
}
