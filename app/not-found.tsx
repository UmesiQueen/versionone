import { ArrowRight, Compass, Home } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for can't be found. Return to the VersionOne homepage or get in touch with our team.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="relative isolate flex min-h-[calc(100vh-6rem)] items-center bg-muted py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-accent)_0%,transparent_55%),radial-gradient(ellipse_at_bottom,var(--color-muted)_0%,transparent_60%)]"
      />

      <Container className="flex flex-col items-center text-center">
        <p
          aria-hidden="true"
          className="mt-6 select-none bg-linear-to-b from-primary via-brand-light-blue to-primary/40 bg-clip-text font-bold leading-none tracking-tighter text-transparent text-[6rem] sm:text-[9rem] lg:text-[12rem]"
        >
          404
        </p>

        <h1
          id="not-found-heading"
          className="mt-2 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          We can&rsquo;t find the page you&rsquo;re looking for
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          The link may be broken, or the page may have moved. Let&rsquo;s get
          you back on track to exploring global opportunities with VersionOne.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-5">
          <Button
            asChild
            size="xl"
            className="w-full rounded-full px-6 sm:w-auto"
          >
            <Link href="/">
              <Home aria-hidden="true" />
              Back to Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="xl"
            className="w-full rounded-full px-6 sm:w-auto shadow-md"
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Helpful quick links to recover from a dead URL */}
        <nav
          aria-label="Helpful links"
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2 text-foreground/70">
            <Compass aria-hidden="true" className="size-4 text-secondary" />
            Try one of these:
          </span>
          <Link
            href="/about"
            className="rounded-sm underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            About
          </Link>
          <Link
            href="/immigration"
            className="rounded-sm underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Immigration
          </Link>
          <Link
            href="/services"
            className="rounded-sm underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Services
          </Link>
          <Link
            href="/faq"
            className="rounded-sm underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            FAQ
          </Link>
        </nav>
      </Container>
    </section>
  );
}
