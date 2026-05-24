import Image from "next/image";

type CountryHeroProps = {
  country: string;
  image: string;
  imageAlt: string;
  headingId: string;
};

function CountryHero({ country, image, imageAlt, headingId }: CountryHeroProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden bg-brand-navy text-brand-navy-foreground"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-[#0B1F3A]/85 via-[#0B1F3A]/55 to-[#0B1F3A]/25"
      />
      <div className="mx-auto w-full max-w-350 px-4 sm:px-6">
        <div className="flex min-h-96 flex-col justify-end py-16 sm:min-h-112 sm:py-20 lg:min-h-136 lg:py-24">
          <h1
            id={headingId}
            className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {country}
          </h1>
        </div>
      </div>
    </section>
  );
}

export { CountryHero };
