import { Container, Section } from "@/components/layout/section";

/**
 * MigrationOverview
 * Intro/explainer section sitting directly under the page hero on the
 * Migrate page. Pure-prose layout — no eyebrow, no CTA — modeled after
 * the "Migration Made Clear, Strategic, and Achievable" frame in the
 * Figma.
 */
function MigrationOverview() {
  return (
    <Section
      surface="muted"
      padding="default"
      aria-labelledby="migration-overview-heading"
    >
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2
            id="migration-overview-heading"
            className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl"
          >
            Migration Made Clear, Strategic, and Achievable
          </h2>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:text-base text-pretty">
            <p>
              Relocating to another country is one of life&rsquo;s most
              significant decisions. It can open doors to better career
              opportunities, improved quality of life, world-class education,
              and long-term security for you and your family.
            </p>
            <p>
              At VersionOne, we specialize in helping individuals and families
              identify the right migration pathway based on their goals,
              qualifications, and preferred destination. Our expert team
              provides strategic guidance, document support, application
              management, and post-submission assistance throughout the
              process.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { MigrationOverview };
