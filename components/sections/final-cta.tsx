import Image from "next/image";
import Link from "next/link";
import FinalCTAImage from "@/app/assets/final-cta-img.png";
import { Container } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "../layout/section-heading";

type FinalCtaSectionProps = {
  heading?: string;
  subtitle?: string;
};

const DEFAULT_HEADING = "Ready to Begin Your Journey Today?";
const DEFAULT_SUBTITLE =
  "Speak with one of our expert advisors — no obligation. We'll assess your profile, recommend programs, and map out the right path for you.";

function FinalCtaSection({
  heading = DEFAULT_HEADING,
  subtitle = DEFAULT_SUBTITLE,
}: FinalCtaSectionProps = {}) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="py-16 sm:py-20 px-4 bg-background"
    >
      <Container className="relative isolate w-full overflow-hidden py-20 rounded-2xl">
        <Image
          src={FinalCTAImage}
          alt="New york times square"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[100%_70%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 to-black/40"
        />
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-10 text-center">
          <SectionHeading
            heading={
              <span
                id="final-cta-heading"
                className="lg:text-3xl font-semibold"
              >
                {heading}
              </span>
            }
            subtitle={subtitle}
            tone="inverse"
          />
          <Button
            asChild
            size="xl"
            className="rounded-full px-5 border border-blue-900/60 bg-linear-to-b from-blue-400 via-blue-500/70 to-blue-950/40 text-white/90 hover:text-white hover:border-blue-900 hover:via-blue-600 hover:to-blue-950 hover:shadow-lg transition-colors duration-300 ease-in-out"
          >
            <Link href="/book-consultation">Book a Consultation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export { FinalCtaSection };
