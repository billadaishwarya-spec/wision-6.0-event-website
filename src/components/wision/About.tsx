import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: "6", label: "Engaging rounds" },
  { value: "2", label: "Days" },
  { value: "2", label: "Members per team" },
];

export function About() {
  return (
    <section
      aria-labelledby="about-title"
      id="about"
      className="section-pad"
    >
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">

        {/* ABOUT WISION */}
        <div>
          <SectionHeading
            id="about-title"
            eyebrow="About WISION"
            title="More Than Just an Event."
          />

          <p
            data-reveal
            className="mt-6 text-lg leading-relaxed text-foreground"
          >
            WISION is an annual event organised by the BEC-IEEE
            Women in Engineering (WIE) Affinity Group, celebrating
            the talent, creativity and potential of women in engineering.
          </p>

          <p
            data-reveal
            className="mt-4 leading-relaxed text-muted-foreground"
          >
            Through six exciting rounds, WISION encourages participants
            to explore their abilities, build confidence, collaborate
            and embrace new challenges.
          </p>
        </div>

        {/* WISION HIGHLIGHTS */}
        <div
          data-reveal
          className="bg-gradient-brand relative overflow-hidden rounded-2xl p-6 text-primary-foreground shadow-[var(--shadow-lift)]"
        >
          <div
            aria-hidden
            className="absolute -right-10 -top-10 size-40 rounded-full border border-primary-foreground/20"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lilac">
            Our spirit
          </p>

          <p className="mt-3 text-3xl font-extrabold leading-tight tracking-tight">
            Celebrating Talent. Inspiring Confidence.
          </p>

          <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-primary-foreground/20 pt-5">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-extrabold">{s.value}</dd>
                <dd className="text-xs leading-tight text-lilac">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  );
}