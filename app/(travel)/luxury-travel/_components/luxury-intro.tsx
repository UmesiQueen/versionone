import Image from "next/image";

import PlaceholderImage from "@/app/assets/luxury-aside.jpg";
import { Container, Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/layout/section-heading";

function LuxuryIntroSection() {
  return (
    <Section padding="default" aria-labelledby="luxury-intro-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionEyebrow>Luxury Travel</SectionEyebrow>
            <h2
              id="luxury-intro-heading"
              className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            >
              We Don&rsquo;t Just Plan Trips.
              <br className="hidden sm:inline" /> We Craft Experiences.
            </h2>
            <div className="mt-2 flex flex-col gap-4 text-base text-muted-foreground sm:text-[0.975rem]">
              <p>
                At VersionOne, we create extraordinary luxury travel
                experiences tailored to discerning travelers — business
                executives, families, celebrities, entrepreneurs, and
                high-net-worth individuals seeking the very best the world has
                to offer.
              </p>
              <p>
                From private island escapes and first-class flights to bespoke
                itineraries and VIP concierge services, we transform every
                journey into an unforgettable experience where every detail is
                designed around you.
              </p>
            </div>
          </div>

          <div className="relative aspect-5/4 w-full overflow-hidden rounded-2xl bg-muted lg:aspect-4/3">
            <Image
              src={PlaceholderImage}
              alt="Luxury travel — a private terrace overlooking a stunning coastal destination"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { LuxuryIntroSection };
