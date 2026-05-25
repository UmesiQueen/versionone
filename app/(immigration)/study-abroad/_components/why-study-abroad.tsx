import Image from "next/image";
import CampusImage from "@/app/assets/study-campus.jpg";
import { Container, Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/layout/section-heading";

function WhyStudyAbroadSection() {
  return (
    <Section padding="default" aria-labelledby="why-study-abroad-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionEyebrow>Why Study Abroad</SectionEyebrow>
            <h2
              id="why-study-abroad-heading"
              className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            >
              A World-Class Education
              <br className="hidden sm:inline" /> Opens Every Door
            </h2>
            <div className="mt-2 flex flex-col gap-4 text-base text-muted-foreground sm:text-[0.975rem]">
              <p>
                Studying abroad is more than earning a degree — it&rsquo;s
                gaining a global perspective, building an international network,
                and unlocking career opportunities that simply aren&rsquo;t
                available at home. The world&rsquo;s top institutions offer not
                just education, but transformation.
              </p>
              <p>
                At VersionOne, we guide students from the very first question —
                &ldquo;Where should I apply?&rdquo; — through to the moment they
                walk onto their campus. We handle every detail: school
                selection, application essays, offer management, student visa
                processing, and pre-departure preparation.
              </p>
              <p>
                Our advisors know each destination&rsquo;s requirements inside
                out, so you never face the process alone or unprepared.
              </p>
            </div>
          </div>

          <div className="relative aspect-5/4 w-full overflow-hidden rounded-2xl bg-muted lg:aspect-4/3">
            <Image
              src={CampusImage}
              alt="A historic university building framed by trees on a sunny day"
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

export { WhyStudyAbroadSection };
