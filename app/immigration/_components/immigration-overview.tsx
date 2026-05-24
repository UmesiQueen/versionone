import { Container, Section } from "@/components/layout/section";

/**
 * ImmigrationOverview
 * Brief intro section sitting directly under the page hero on the
 * Immigration landing page. Sets the context before guiding visitors
 * into the four pathway cards below.
 */
function ImmigrationOverview() {
  return (
    <Section
      surface="muted"
      padding="default"
      aria-labelledby="immigration-overview-heading"
    >
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2
            id="immigration-overview-heading"
            className="text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl"
          >
            One Destination, Four Clear Pathways
          </h2>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:text-base text-pretty">
            <p>
              Immigration looks different for everyone. Some clients are
              relocating their family, others are advancing a career, pursuing
              an international education, or deploying capital in exchange for
              residency or citizenship.
            </p>
            <p>
              Whatever your goal, VersionOne pairs you with the right pathway
              and shepherds the entire process — from eligibility assessment
              and documentation to embassy submission and post-landing
              support.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { ImmigrationOverview };
