import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";

type CountryBiggerPictureProps = {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  headingId: string;
};

function CountryBiggerPicture({
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  headingId,
}: CountryBiggerPictureProps) {
  return (
    <Section padding="default" aria-labelledby={headingId}>
      <Container>
        <div className="rounded-3xl bg-primary/5 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <div className="flex flex-col gap-5">
              <SectionEyebrow>{eyebrow}</SectionEyebrow>
              <h2
                id={headingId}
                className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl"
              >
                {heading}
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base text-pretty">
                {body}
              </p>
              <div className="mt-2">
                <Button
                  asChild
                  size="xl"
                  className="rounded-full px-5 border border-blue-900/60 bg-linear-to-b from-blue-400 via-blue-500/70 to-blue-950/40 text-white/90 hover:text-white hover:border-blue-900 hover:via-blue-600 hover:to-blue-950 hover:shadow-lg transition-colors duration-300 ease-in-out"
                >
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { CountryBiggerPicture };
