
import { CalendarDays, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENT } from "@/content/eventContent";
import { scrollToId } from "@/lib/wision";
import { RegisterButton } from "./RegisterButton";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      {/* Abstract accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-glow absolute -right-32 -top-24 size-[420px] rounded-full opacity-90" />
        <div className="absolute -left-20 top-1/2 size-56 rounded-full border border-lilac/70" />
        <div className="absolute -left-10 top-[58%] size-28 rounded-full border border-lilac/50" />

        <svg
          className="absolute right-6 top-10 h-24 w-24 text-lilac"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <circle
              key={i}
              cx={10 + (i % 5) * 20}
              cy={10 + Math.floor(i / 5) * 20}
              r="2.2"
            />
          ))}
        </svg>
      </div>

      <div className="container-page relative pb-16 pt-12 md:pb-24 md:pt-20">

        {/* Organiser label */}
        <p
          data-hero
          className="eyebrow inline-flex items-center gap-2 rounded-full border border-lilac bg-card/70 px-3 py-1.5"
        >
          <span
            className="size-1.5 rounded-full bg-primary-soft"
            aria-hidden
          />
          BEC-IEEE WIE presents
        </p>

        {/* WISION 6.0 Heading */}
        <h1
          id="hero-title"
          data-hero
          className="heading-display mt-6 text-[clamp(4rem,22vw,9.5rem)]"
        >
          <span className="text-gradient-brand">WISION</span>
          <span className="block text-primary-soft">6.0</span>
        </h1>

        {/* Registration Button */}
        <div data-hero className="mt-5">
          <RegisterButton
            label="Register Here"
            className="w-full sm:w-auto"
          />
        </div>

        {/* Event Tagline */}
        <p
          data-hero
          className="mt-6 max-w-xl text-xl font-bold uppercase leading-snug tracking-tight text-foreground md:text-2xl"
        >
          Think. Explore. Experience.
        </p>

        <p
          data-hero
          className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground"
        >
          Step into the experience. Challenge your skills. Discover your
          potential.
        </p>

        {/* Event Details */}
        <dl
          data-hero
          className="mt-8 grid gap-3 sm:grid-cols-2 sm:max-w-2xl"
        >
          {/* Date and Time */}
          <div className="card-surface flex items-start gap-3 p-4">
            <CalendarDays
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden
            />

            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                When
              </dt>

              <dd className="font-semibold">
                {EVENT.dates}
              </dd>

              <dd className="text-sm text-muted-foreground">
                {EVENT.time}, both days
              </dd>
            </div>
          </div>

          {/* Venue */}
          <div className="card-surface flex items-start gap-3 p-4">
            <MapPin
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden
            />

            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Where
              </dt>

              <dd className="font-semibold">
                {EVENT.venue}
              </dd>
            </div>
          </div>
        </dl>

        {/* Explore WISION Button */}
        <div
          data-hero
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button
            variant="outline"
            size="cta"
            className="w-full sm:w-auto"
            onClick={() => scrollToId("about")}
          >
            Explore WISION <ArrowDown aria-hidden />
          </Button>
        </div>

      </div>
    </section>
  );
}
