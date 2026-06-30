import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "I have traveled with VersionOne twice; first to France and later to the USA and both journeys were handled professionally from start to finish. Their expert guidance, excellent customer support, and reliable service gave me complete confidence throughout the process. I highly recommend VersionOne to anyone looking for a trusted travel consultant.",
    authorName: "David Mensah",
    authorRole: "Client",
    authorLocation: "Ghana",
  },
  {
    quote:
      "VersionOne has successfully handled visas and international flight arrangements for our offshore workers on several occasions. More than eight visas were processed faster than the agreed timeline, and every application was managed with exceptional professionalism. Their efficiency, responsiveness, and attention to detail make them a trusted travel partner for our business.",
    authorName: "James Anderson",
    authorRole: "Operations Manager,Offshore Energy Sector",
    authorLocation: "Nigeria",
  },
  {
    quote:
      "VersionOne helped me secure my UK Tourist Visa when I was traveling with my family. From the initial consultation to receiving our visas, the entire process was smooth and stress-free. Their team was always available to answer our questions and provide expert guidance. I highly recommend VersionOne to anyone looking for exceptional travel and visa services.",
    authorName: "Amina Hassan",
    authorRole: "Client",
    authorLocation: "Nigeria",
  },
] as const;

type TestimonialCardProps = {
  quote: string;
  authorName: string;
  authorRole: string;
  authorLocation: string;
  className?: string;
};

function TestimonialCard({
  quote,
  authorName,
  authorRole,
  authorLocation,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-6 text-card-foreground",
        className,
      )}
    >
      <blockquote className="flex-1 text-pretty text-base leading-relaxed text-foreground">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <div
          className="size-10 bg-primary rounded-full inline-flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-base font-semibold uppercase text-white tracking-wider">
            {authorName.split(" ").map((c) => c.slice(0, 1))}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">
            {authorName}
          </span>
          <span className="text-xs text-muted-foreground">
            {authorRole} &middot; {authorLocation}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

function TestimonialsSection() {
  return (
    <Section padding="default" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          eyebrow="Client Stories"
          align="center"
          heading={
            <span id="testimonials-heading">
              Trusted by Thousands Worldwide
            </span>
          }
          subtitle="Real results from real clients — from first-time travelers to high-net-worth investors."
        />
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li key={t.authorName} className="flex">
              <TestimonialCard {...t} className="w-full" />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { TestimonialsSection };
