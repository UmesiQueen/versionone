import Image from "next/image";
import FamilyImage from "@/app/assets/visit-family.jpg";
import { Container, Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/layout/section-heading";

function RightVisaIntroSection() {
  return (
    <Section padding="default" aria-labelledby="right-visa-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionEyebrow>Visitor Visas</SectionEyebrow>
            <h2
              id="right-visa-heading"
              className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            >
              Your Journey Starts With
              <br className="hidden sm:inline" /> the Right Visa
            </h2>
            <div className="mt-2 flex flex-col gap-4 text-base text-muted-foreground sm:text-[0.975rem]">
              <p>
                A visitor visa is the first essential stop for any short-stay
                travel — whether you&rsquo;re going for tourism, a business
                meeting, or visiting family. The wrong document, a missed
                requirement, or a poorly written cover letter can mean weeks of
                delay or an outright refusal.
              </p>
              <p>
                VersionOne removes that risk entirely. Our travel advisors
                manage every aspect of your application: document preparation,
                embassy scheduling, flight and hotel proof, and travel insurance
                — all handled with precision and care.
              </p>
              <p>
                We&rsquo;re not just a visa agency. We&rsquo;re your end-to-end
                travel preparation partner, from application to departure gate.
              </p>
            </div>
          </div>

          <div className="relative aspect-5/4 w-full overflow-hidden rounded-2xl bg-muted lg:aspect-4/3">
            <Image
              src={FamilyImage}
              alt="A family in a convertible car celebrating the start of a holiday"
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

export { RightVisaIntroSection };
