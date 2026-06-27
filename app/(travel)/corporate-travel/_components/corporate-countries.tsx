import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

const COUNTRIES = [
  "United Kingdom",
  "Canada",
  "Australia",
  "United States",
  "Germany",
  "Netherlands",
  "Ireland",
  "Norway",
  "United Arab Emirates",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "New Zealand",
  "France",
  "Poland",
  "South Africa",
  "Congo Brazzaville",
];

function CorporateCountriesSection() {
  return (
    <Section padding="default" surface="muted" aria-labelledby="corporate-countries-heading">
      <Container>
        <SectionHeading
          eyebrow="Countries We Support"
          heading={
            <span id="corporate-countries-heading">
              Global Reach, Local Expertise
            </span>
          }
          subtitle="We assist with visa and immigration processes for major business destinations across Europe, North America, the Middle East, Asia, and Africa — and many more."
        />

        <ul
          className="mt-12 flex flex-wrap justify-center gap-3"
          aria-label="Supported countries"
        >
          {COUNTRIES.map((country) => (
            <li key={country}>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                {country}
              </span>
            </li>
          ))}
          <li>
            <span className="inline-flex items-center rounded-full border border-dashed border-border bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground">
              + Many more destinations
            </span>
          </li>
        </ul>
      </Container>
    </Section>
  );
}

export { CorporateCountriesSection };
