import Image from "next/image";
import TourImage from "@/app/assets/tour-vacation.jpg";
import { Container, Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/layout/section-heading";

function OurPhilosophySection() {
  return (
    <Section padding="default" aria-labelledby="philosophy-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionEyebrow>Our Philosophy</SectionEyebrow>
            <h2
              id="philosophy-heading"
              className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            >
              We Don&rsquo;t Just Book Trips.
              <br className="hidden sm:inline" /> We Design Journeys.
            </h2>
            <div className="mt-2 flex flex-col gap-4 text-base text-muted-foreground sm:text-[0.975rem]">
              <p>
                At VersionOne, we believe travel should be effortless and deeply
                memorable. Every package we offer is curated by our expert
                travel team — not assembled from generic templates, but designed
                around real destinations, real experiences, and your unique
                expectations.
              </p>
              <p>
                Whether you&rsquo;re celebrating a honeymoon, exploring with
                family, traveling for business, or embarking on a sacred Hajj or
                Umrah journey — we manage every moving part: visas, flights,
                hotels, transfers, excursions, and insurance.
              </p>
            </div>
          </div>

          <div className="relative aspect-5/4 w-full overflow-hidden rounded-2xl bg-muted lg:aspect-4/3">
            <Image
              src={TourImage}
              alt="A traveler smiling at her phone in an airport terminal with her luggage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { OurPhilosophySection };
