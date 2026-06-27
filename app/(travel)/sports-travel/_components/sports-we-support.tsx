import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

type Sport = {
  name: string;
  description: string;
};

const SPORTS: Sport[] = [
  {
    name: "Football (Soccer)",
    description:
      "Travel packages for football tournaments, club tours, supporter groups, youth competitions, and international championships.",
  },
  {
    name: "Tennis",
    description:
      "Travel solutions for players, coaches, officials, and fans attending premier tennis events worldwide.",
  },
  {
    name: "Basketball",
    description:
      "Comprehensive travel management for basketball teams, tournaments, and supporters.",
  },
  {
    name: "Athletics",
    description:
      "Support for athletes, coaches, officials, and fans attending track and field competitions globally.",
  },
  {
    name: "Rugby",
    description:
      "End-to-end travel for rugby clubs, national teams, and supporters attending major tournaments.",
  },
  {
    name: "Cricket",
    description:
      "Tailored travel packages for cricket teams, supporters, and officials at domestic and international fixtures.",
  },
  {
    name: "Golf",
    description:
      "Premium travel arrangements for golfers, caddies, and spectators at championship events worldwide.",
  },
  {
    name: "Combat Sports",
    description:
      "Travel coordination for boxing, MMA, and wrestling events — fighters, teams, and fans.",
  },
];

function SportsWeSupportSection() {
  return (
    <Section padding="default" aria-labelledby="sports-we-support-heading">
      <Container>
        <SectionHeading
          eyebrow="Sports We Support"
          heading={
            <span id="sports-we-support-heading">
              Any Sport, Any Destination
            </span>
          }
          subtitle="We support athletes, teams, and fans across a wide range of sports — delivering tailored travel solutions no matter the competition or location."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SPORTS.map(({ name, description }) => (
            <li key={name} className="flex">
              <article className="flex w-full flex-col gap-3 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-md sm:p-7">
                <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                  {name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { SportsWeSupportSection };
