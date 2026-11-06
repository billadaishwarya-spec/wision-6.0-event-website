
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  GraduationCap,
  IndianRupee,
  Lock,
  MapPin,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { EVENT, getRegistrationUrl } from "@/content/eventContent";
import { useCountdown } from "@/lib/wision";
import { SectionHeading } from "./SectionHeading";

// --------------------------------------------------
// REGISTRATION COUNTDOWN
// --------------------------------------------------

function Countdown() {
  const { ready, remaining, closed } = useCountdown();

  const units = [
    { label: "Days", v: remaining?.days },
    { label: "Hours", v: remaining?.hours },
    { label: "Minutes", v: remaining?.minutes },
    { label: "Seconds", v: remaining?.seconds },
  ];

  if (closed) {
    return (
      <div
        className="rounded-2xl border border-lilac bg-lavender p-5 text-center"
        role="status"
      >
        <Lock className="mx-auto size-6 text-primary" aria-hidden />

        <p className="mt-2 text-xl font-extrabold text-primary">
          Registrations Closed
        </p>

        <p className="text-sm text-muted-foreground">
          The deadline ({EVENT.deadlineLabel}) has passed.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm font-semibold text-lilac">
        Registration closes in
      </p>

      <div
        className="mt-3 grid grid-cols-4 gap-2"
        aria-hidden={!ready}
      >
        {units.map((u) => (
          <div
            key={u.label}
            className="rounded-xl bg-primary-foreground/10 px-1 py-3 text-center ring-1 ring-primary-foreground/15"
          >
            <span className="block text-3xl font-extrabold tabular-nums leading-none">
              {ready && u.v !== undefined
                ? String(u.v).padStart(2, "0")
                : "--"}
            </span>

            <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-wider text-lilac">
              {u.label}
            </span>
          </div>
        ))}
      </div>

      {ready && remaining && (
        <p className="sr-only" aria-live="off">
          {remaining.days} days, {remaining.hours} hours and{" "}
          {remaining.minutes} minutes remaining
        </p>
      )}

      <p className="mt-3 text-xs text-lilac">
        Deadline: {EVENT.deadlineLabel}
      </p>
    </div>
  );
}

// --------------------------------------------------
// REGISTRATION BUTTON
// --------------------------------------------------

function FormButton() {
  const { closed } = useCountdown();
  const url = getRegistrationUrl();

  if (closed) {
    return (
      <Button variant="soft" size="cta" className="w-full" disabled>
        <Lock aria-hidden /> Registrations Closed
      </Button>
    );
  }

  if (!url) {
    return (
      <div>
        <Button
          variant="soft"
          size="cta"
          className="w-full"
          disabled
          aria-describedby="form-soon"
        >
          Registration link coming soon
        </Button>

        <p
          id="form-soon"
          className="mt-2 text-center text-sm text-lilac"
        >
          Registration link will be available soon. Check back shortly.
        </p>
      </div>
    );
  }

  return (
    <Button asChild variant="soft" size="cta" className="w-full">
      <a href={url} target="_blank" rel="noopener noreferrer">
        Register on Google Forms <ArrowUpRight aria-hidden />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </Button>
  );
}

// --------------------------------------------------
// REGISTRATION FACTS
// --------------------------------------------------

const facts = [
  {
    icon: GraduationCap,
    title: "Eligibility",
    text:
      "Open only to BEC students across all branches and academic years.",
  },
  {
    icon: Users,
    title: "Team composition",
    text:
      "Exactly 2 members per team. At least one girl member is compulsory. Both members can be girls.",
  },
  {
    icon: IndianRupee,
    title: "Registration fee",
    text:
      `₹${EVENT.ieeeMemberFee} per IEEE member and ₹${EVENT.nonIeeeFee} per non-IEEE member. The fee is calculated individually.`,
  },
  {
    icon: CalendarDays,
    title: "Event dates",
    text: `${EVENT.dates}, ${EVENT.time}`,
  },
  {
    icon: MapPin,
    title: "Venue",
    text: EVENT.venue,
  },
  {
    icon: Clock,
    title: "Deadline",
    text: EVENT.deadlineLabel,
  },
];

// --------------------------------------------------
// REGISTRATION SECTION
// --------------------------------------------------

export function Registration() {
  const bothIeee =
    EVENT.ieeeMemberFee * EVENT.teamSize;

  const oneIeeeOneNonIeee =
    EVENT.ieeeMemberFee + EVENT.nonIeeeFee;

  const bothNonIeee =
    EVENT.nonIeeeFee * EVENT.teamSize;

  return (
    <section
      aria-labelledby="register-title"
      id="register"
      className="section-pad bg-lavender/50"
    >
      <div className="container-page grid gap-8 md:grid-cols-[1fr_1.05fr] md:items-start">

        {/* LEFT SIDE */}

        <div>
          <SectionHeading
            id="register-title"
            eyebrow="Registration"
            title="Register Your Team."
          >
            Bring your teammate and join the WISION 6.0 experience!
          </SectionHeading>

          <ul className="mt-8 grid gap-3">
            {facts.map((f) => (
              <li
                key={f.title}
                data-reveal
                className="card-surface flex items-start gap-4 p-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-lavender">
                  <f.icon
                    className="size-5 text-primary"
                    aria-hidden
                  />
                </span>

                <span>
                  <span className="block text-sm font-bold">
                    {f.title}
                  </span>

                  <span className="block text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE — FEE SUMMARY */}

        <div
          data-reveal
          className="bg-gradient-brand relative overflow-hidden rounded-2xl p-6 text-primary-foreground shadow-[var(--shadow-lift)] md:sticky md:top-24 md:p-8"
        >
          <div
            aria-hidden
            className="absolute -right-16 -top-16 size-48 rounded-full border border-primary-foreground/15"
          />

          <Countdown />

          {/* PER-PERSON FEE CARD */}

          <div className="mt-6 rounded-xl bg-primary-foreground/10 p-5 ring-1 ring-primary-foreground/15">

            <p className="text-xs font-semibold uppercase tracking-wider text-lilac">
              Registration fee per person
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3">

              {/* IEEE MEMBER */}

              <div className="rounded-xl bg-primary-foreground/10 p-3">
                <p className="text-3xl font-extrabold">
                  ₹{EVENT.ieeeMemberFee}
                </p>

                <p className="mt-1 text-xs font-semibold text-lilac">
                  IEEE member
                </p>

                <p className="mt-1 text-xs text-primary-foreground/80">
                  Per person
                </p>
              </div>

              {/* NON-IEEE MEMBER */}

              <div className="rounded-xl bg-primary-foreground/10 p-3">
                <p className="text-3xl font-extrabold">
                  ₹{EVENT.nonIeeeFee}
                </p>

                <p className="mt-1 text-xs font-semibold text-lilac">
                  Non-IEEE member
                </p>

                <p className="mt-1 text-xs text-primary-foreground/80">
                  Per person
                </p>
              </div>

            </div>

            {/* TEAM TOTALS */}

            <div className="mt-5 border-t border-primary-foreground/20 pt-4">

              <p className="text-sm font-bold">
                Total fee for a team of {EVENT.teamSize}
              </p>

              <ul className="mt-3 space-y-3 text-sm">

                <li className="flex items-center justify-between gap-3">
                  <span>Both members are IEEE</span>
                  <span className="font-extrabold">
                    ₹{bothIeee}
                  </span>
                </li>

                <li className="flex items-center justify-between gap-3">
                  <span>One IEEE + one non-IEEE</span>
                  <span className="font-extrabold">
                    ₹{oneIeeeOneNonIeee}
                  </span>
                </li>

                <li className="flex items-center justify-between gap-3">
                  <span>Both members are non-IEEE</span>
                  <span className="font-extrabold">
                    ₹{bothNonIeee}
                  </span>
                </li>

              </ul>
            </div>

            <p className="mt-4 text-right text-sm font-semibold">
              Exactly {EVENT.teamSize} members per team
            </p>

            {/* DAY 2 QUALIFICATION */}

            <div className="mt-4 rounded-lg bg-primary-foreground/10 p-3">
              <p className="text-sm font-semibold leading-relaxed">
                Only teams shortlisted on Day 1 will advance to Day 2.
              </p>
            </div>

          </div>

          <div className="mt-6">
            <FormButton />
          </div>

          <p className="mt-3 text-center text-xs text-lilac">
            Payment is not collected on this website.
          </p>

        </div>
      </div>
    </section>
  );
}
