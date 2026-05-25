import Image, {type StaticImageData } from "next/image";
import {
  ATTA,
  CCIC,
  CLIA,
  IAA,
  IDP,
  IELTS,
  IRCC,
  NANTA,
} from "@/app/assets/partners";
import { Container, Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";


const PARTNERS = [
  { name: "CCIC", src: CCIC },
  { name: "IAA", src: IAA },
  { name: "IRCC", src: IRCC },
  { name: "ATTA", src: ATTA },
  { name: "CLIA", src: CLIA },
  { name: "NANTA", src: NANTA },
  { name: "IDP", src: IDP },
  { name: "IELTS", src: IELTS },
];

type PartnerLogoProps = {
  name: string;
  src?: StaticImageData;
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
          className="h-full aspect-4/3 object-contain"
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
              <PartnerLogo name={partner.name} src={partner.src} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
