import Image from "next/image";
import { Container, Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/layout/section-heading";

function WhoWeAreSection() {
  return (
    <Section padding="default" aria-labelledby="who-we-are-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionEyebrow>Who We Are</SectionEyebrow>
            <h2
              id="who-we-are-heading"
              className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            >
              More Than an Agency —<br className="hidden sm:inline" /> a Trusted
              Partner
            </h2>
            <div className="mt-2 flex flex-col gap-4 text-base text-muted-foreground sm:text-[0.975rem]">
              <p>
                VersionOne Advisory was founded on a singular belief: that the
                world should be more accessible to those who aspire to live,
                invest, and grow beyond borders. What began as a boutique
                consultancy has evolved into a globally recognized advisory
                firm with deep expertise across three pillars — travel,
                immigration, and investment.
              </p>
              <p>
                Our team comprises immigration lawyers, financial strategists,
                visa specialists, and regional experts who understand that
                every client&rsquo;s journey is unique. We don&rsquo;t offer
                templates. We craft bespoke pathways.
              </p>
            </div>
          </div>

          <div className="relative aspect-5/4 w-full overflow-hidden rounded-2xl bg-muted lg:aspect-4/3">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Two professionals shaking hands to mark a partnership agreement"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { WhoWeAreSection };
