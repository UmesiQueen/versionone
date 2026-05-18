import { TestimonialCard } from "@/components/cards/testimonial-card"
import { Container, Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading"

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
] as const

function TestimonialsSection() {
  return (
    <Section padding="default" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          eyebrow="Client Stories"
          align="center"
          heading={
            <span id="testimonials-heading">Trusted by Thousands Worldwide</span>
          }
          subtitle="Real results from real clients — from first-time travelers to high-net-worth investors."
        />
        <ul
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <li key={t.authorName} className="flex">
              <TestimonialCard {...t} className="w-full" />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export { TestimonialsSection }
