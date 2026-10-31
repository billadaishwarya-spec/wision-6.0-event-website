import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: "6", label: "Placement rounds" },
  { value: "2", label: "Days" },
  { value: "2", label: "Members per team" },
];

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="section-pad">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div>
          <SectionHeading id="about-title" eyebrow="About WISION" title="More Than Just an Event." />
          <p data-reveal className="mt-6 text-lg leading-relaxed text-foreground">
            WISION is an annual placement-readiness experience organised by BEC-IEEE WIE Affinity Group. It gives
            students an opportunity to experience different stages of a recruitment process through six engaging rounds.
          </p>
          <p data-reveal className="mt-4 leading-relaxed text-muted-foreground">
            From aptitude and coding to communication and interviews, WISION encourages students to challenge
            themselves, discover their strengths and take their first step towards placement preparation.
          </p>
        </div>
        <div data-reveal className="bg-gradient-brand relative overflow-hidden rounded-2xl p-6 text-primary-foreground shadow-[var(--shadow-lift)]">
          <div aria-hidden className="absolute -right-10 -top-10 size-40 rounded-full border border-primary-foreground/20" />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lilac">Our promise</p>
          <p className="mt-3 text-3xl font-extrabold leading-tight tracking-tight">Your First Step Towards Placement.</p>
          <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-primary-foreground/20 pt-5">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-extrabold">{s.value}</dd>
                <dd className="text-xs leading-tight text-lilac">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
