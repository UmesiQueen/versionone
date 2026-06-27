import Image from "next/image";

import PlaceholderImage from "@/app/assets/corporate-aside.jpg";
import { Container, Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/layout/section-heading";

function CorporateIntroSection() {
  return (
    <Section padding="default" aria-labelledby="corporate-intro-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionEyebrow>Corporate Travel</SectionEyebrow>
            <h2
              id="corporate-intro-heading"
              className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            >
              Moving Skilled Professionals
              <br className="hidden sm:inline" /> Across Borders
            </h2>
            <div className="mt-2 flex flex-col gap-4 text-base text-muted-foreground sm:text-[0.975rem]">
              <p>
                Moving skilled professionals across borders requires more than
                booking flights. It demands expert visa management, immigration
                support, travel coordination, compliance monitoring, and ongoing
                workforce mobility services.
              </p>
              <p>
                At VersionOne, we help multinational companies, oil and
                gas contractors, marine operators, engineering firms, and
                offshore service providers relocate employees and deploy
                personnel worldwide — from visa application to arrival and
                beyond.
              </p>
            </div>
          </div>

          <div className="relative aspect-5/4 w-full overflow-hidden rounded-2xl bg-muted lg:aspect-4/3">
            <Image
              src={PlaceholderImage}
              alt="Corporate travel — business professionals at an international airport"
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

export { CorporateIntroSection };
