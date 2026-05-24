import { Container, Section } from "@/components/layout/section";

function ImmigrationOverview() {
  return (
    <Section
      surface="muted"
      padding="sm"
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
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { ImmigrationOverview };
