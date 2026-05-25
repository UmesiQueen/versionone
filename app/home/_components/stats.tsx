"use client";
import CountUp from "@/components/CountUp";
import { Container, Section } from "@/components/layout/section";

const STATS = [
  { value: 18, suffix: "+", label: "Years of experience" },
  { value: 114, suffix: "+", label: "Countries covered" },
  { value: 22248, suffix: "+", label: "Successful applications" },
  // { value: 93, suffix: "%", label: "Client satisfaction rate" },
  { value: 95, suffix: "%", label: "Approval rate" },
] as const;

function StatsSection() {
  return (
    <Section surface="primary" padding="sm" aria-label="Company milestones">
      <Container>
        <ul className="grid grid-cols-2 gap-y-8 md:grid-cols-4 sm:gap-x-4 *:border-l *:border-primary-foreground/20 max-md:[&>*:nth-child(odd)]:border-l-0 md:[&>*:first-child]:border-l-0">
          {STATS.map(({ value, suffix, label }) => (
            <li key={label}>
              <div className="flex flex-col items-center gap-1 text-center text-primary-foreground">
                <span className="text-4xl font-bold leading-none sm:text-5xl lg:text-6xl">
                  <CountUp
                    from={value - 20}
                    to={value}
                    separator=","
                    direction="up"
                    duration={0.8}
                  />
                  <span className="text-blue-300">{suffix}</span>
                </span>
                <span className="text-sm font-medium text-primary-foreground/80 sm:text-base">
                  {label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export { StatsSection };
