import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/app/assets/hero-img.jpg";
import { Container } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-brand-navy text-brand-navy-foreground"
    >
      <Image
        src={HeroImage}
        alt="Hero"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-125 from-[#0B1F3A]/75 via-[#0B1F3A]/60 to-[#0B1F3A]/35"
      />

      <Container className="relative flex min-h-160 h-screen flex-col justify-center py-20 sm:py-24 lg:py-32">
        <div className="flex flex-col gap-6 max-w-2xl">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-navy-foreground/10 px-3 py-2 text-xs font-medium text-brand-navy-foreground backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-secondary"
            />
            Trusted by 5,000+ clients globally
          </span>

          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Your Gateway to
            <br />
            <span className="text-primary-foreground">
              Global Opportunities
            </span>
          </h1>

          <p className="max-w-xl text-base text-brand-navy-foreground/80 sm:text-lg">
            VersionOne helps individuals, families, corporate organizations and
            investors navigate immigration, travel, study, and investment
            migration — with expert guidance at every step.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="xl"
              className="group rounded-full px-5 border border-blue-900/60 bg-linear-to-b from-blue-400 via-blue-500/70 to-blue-950/40 text-white/90 hover:text-white hover:border-blue-900 hover:via-blue-600 hover:to-blue-950 hover:shadow-lg transition-colors duration-300 ease-in-out"
            >
              <Link href="/immigration">
                Explore Immigration Options
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
                />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="rounded-full border-brand-navy-foreground/30 bg-brand-navy-foreground/10 px-6 text-brand-navy-foreground backdrop-blur-sm hover:bg-brand-navy-foreground/20 hover:text-brand-navy-foreground"
            >
              <Link href="/book-consultation">
                <Calendar aria-hidden="true" className="size-4" />
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
