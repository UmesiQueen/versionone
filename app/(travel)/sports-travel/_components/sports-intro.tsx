import Image from "next/image";

import PlaceholderImage from "@/app/assets/sports-aside.jpg";
import { Container, Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/layout/section-heading";

function SportsIntroSection() {
  return (
    <Section padding="default" aria-labelledby="sports-intro-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionEyebrow>Sports Travel</SectionEyebrow>
            <h2
              id="sports-intro-heading"
              className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            >
              Travel Where
              <br className="hidden sm:inline" /> the Action Happens
            </h2>
            <div className="mt-2 flex flex-col gap-4 text-base text-muted-foreground sm:text-[0.975rem]">
              <p>
                Whether you&rsquo;re an athlete, sports team, coach, supporter,
                corporate sponsor, or passionate fan, VersionOne delivers
                world-class sports travel experiences across the globe.
              </p>
              <p>
                From international tournaments and training camps to major
                sporting events and team logistics, we handle every aspect of
                your journey so you can focus on performance, competition, and
                unforgettable experiences.
              </p>
            </div>
          </div>

          <div className="relative aspect-5/4 w-full overflow-hidden rounded-2xl bg-muted lg:aspect-4/3">
            <Image
              src={PlaceholderImage}
              alt="Sports travel — footballers playing at a football event"
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

export { SportsIntroSection };
