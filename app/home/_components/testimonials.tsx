import Image from "next/image";
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "VersionOne turned what felt like an impossible process into a smooth, manageable journey. My Canada PR was approved on the first attempt — I can't recommend them enough.",
    authorName: "Adaeze Okereke",
    authorRole: "Skilled worker",
    authorLocation: "United Kingdom",
    avatarSrc: "https://i.pravatar.cc/120?img=47",
  },
  {
    quote:
      "From the initial consultation to landing in London, everything was handled professionally. My UK Skilled Worker Visa was approved within 3 weeks. Exceptional service.",
    authorName: "Kola Iya",
    authorRole: "Software lead",
    authorLocation: "United Kingdom",
    avatarSrc: "https://i.pravatar.cc/120?img=12",
  },
  {
    quote:
      "My daughter is now studying in Germany. VersionOne handled every detail — university shortlisting, student visa, pre-departure briefing. Absolutely seamless from start to finish.",
    authorName: "Funke Martins",
    authorRole: "Parent",
    authorLocation: "Nigeria",
    avatarSrc: "https://i.pravatar.cc/120?img=32",
  },
] as const;

type TestimonialCardProps = {
  quote: string;
  authorName: string;
  authorRole: string;
  authorLocation: string;
  avatarSrc: string;
  className?: string;
};

function TestimonialCard({
  quote,
  authorName,
  authorRole,
  authorLocation,
  avatarSrc,
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
        <Image
          src={avatarSrc}
          alt={`Photo of ${authorName}`}
          width={40}
          height={40}
          className="size-10 rounded-full object-cover"
          aria-hidden="true"
        />
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
