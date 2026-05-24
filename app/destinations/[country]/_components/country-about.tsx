import Image from "next/image";
import { Container, Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/layout/section-heading";

type CountryAboutProps = {
  eyebrow: string;
  heading: string;
  paragraphs: readonly string[];
  image: string;
  imageAlt: string;
  headingId: string;
};

/**
 * CountryAbout
 * Two-column "Why {Country}?" section — left column has eyebrow + heading +
 * prose, right column has a country-themed image. Stacks on mobile with the
 * image first to mirror the Figma rhythm.
 */
function CountryAbout({
  eyebrow,
  heading,
  paragraphs,
  image,
  imageAlt,
  headingId,
}: CountryAboutProps) {
  return (
    <Section padding="default" aria-labelledby={headingId}>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2
              id={headingId}
              className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            >
              {heading}
            </h2>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:text-base text-pretty">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-muted order-1 lg:order-2">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export { CountryAbout };
