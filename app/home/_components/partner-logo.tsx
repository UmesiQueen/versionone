import Image from "next/image";
import { Container, Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

const PARTNERS = [
  { name: "CICC" },
  { name: "IATA" },
  { name: "CCBA" },
  { name: "ATTA" },
  { name: "CLIA" },
  { name: "ASTA" },
  { name: "IDP" },
  { name: "IELTS" },
] as const;

type PartnerLogoProps = {
  name: string;
  src?: string;
  width?: number;
  height?: number;
  className?: string;
};

function PartnerLogo({
  name,
  src,
  width = 120,
  height = 48,
  className,
}: PartnerLogoProps) {
  return (
    <div
      className={cn(
        "flex h-14 w-full items-center justify-center px-2",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={`${name} logo`}
          width={width}
          height={height}
          className="h-full w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
        />
      ) : (
        <span className="text-base font-bold uppercase tracking-[0.15em] text-muted-foreground/70 transition hover:text-foreground">
          {name}
        </span>
      )}
    </div>
  );
}

export function PartnerLogoSection() {
  return (
    <Section padding="sm" surface="muted" aria-labelledby="partners-heading">
      <Container>
        <p
          id="partners-heading"
          className="text-center text-sm font-medium text-muted-foreground"
        >
          Recognized by Leading Global Regulatory and Industry Bodies
        </p>
        <ul className="mt-8 grid grid-cols-4 items-center gap-y-6 sm:grid-cols-8">
          {PARTNERS.map((partner) => (
            <li key={partner.name} className="flex items-center justify-center">
              <PartnerLogo name={partner.name} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
