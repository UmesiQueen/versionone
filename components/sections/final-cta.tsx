import Image from "next/image";
import Link from "next/link";
import FinalCTAImage from "@/app/assets/final-cta-img.png";
import { Container } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "../layout/section-heading";

function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-heading" className="py-16 sm:py-20 px-4 sm:px-0">
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
                Ready to Begin Your Journey Today?
              </span>
            }
            subtitle="Travel with one of our expert advisors &mdash; no obligation.
            We&rsquo;ll assess your profile, recommend programs, and map out the
            right path for you."
            tone="inverse"
          />
          <div className="group rounded-full bg-[#004E99]/40 hover:bg-white/20 transition-colors duration-300 ease-in-out">
            <Button
              asChild
              size="xl"
              className="rounded-full px-5 bg-linear-to-b from-[#004E99]/60 to-[#004E99] text-white group-hover:to-blue-950/80 transition-colors duration-300 ease-in-out"
            >
              <Link href="/book-consultation">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { FinalCtaSection };
