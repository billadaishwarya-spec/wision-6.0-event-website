import { Award, Coffee, Gift, Layers, Megaphone, Medal, Trophy, Users, type LucideIcon } from "lucide-react";
import { REWARDS } from "@/content/eventContent";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const iconFor: Record<string, LucideIcon> = {
  "Participation certificate": Award,
  Refreshments: Coffee,
  "Access to all six rounds": Layers,
  Certificate: Award,
  "Exciting goodies": Gift,
  "Social media shout-out": Megaphone,
};

const groups = [
  { title: "Every participant", note: "For all registered team members", icon: Users, items: REWARDS.participants, featured: false },
  { title: "Winner team", note: "Top team of WISION 6.0", icon: Trophy, items: REWARDS.winner, featured: true },
  { title: "Runner-up team", note: "Second-placed team", icon: Medal, items: REWARDS.runnerUp, featured: false },
];

export function Rewards() {
  return (
    <section aria-labelledby="rewards-title" id="rewards" className="section-pad">
      <div className="container-page">
        <SectionHeading id="rewards-title" eyebrow="Benefits & rewards" title="Every Step Deserves Recognition." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {groups.map((g) => (
            <article
              key={g.title}
              data-reveal
              className={cn("rounded-2xl border p-6", g.featured ? "bg-gradient-brand border-transparent text-primary-foreground shadow-[var(--shadow-lift)]" : "card-surface")}
            >
              <div className={cn("flex size-12 items-center justify-center rounded-xl", g.featured ? "bg-primary-foreground/15" : "bg-lavender")}>
                <g.icon className={cn("size-6", g.featured ? "text-primary-foreground" : "text-primary")} aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight">{g.title}</h3>
              <p className={cn("text-sm", g.featured ? "text-lilac" : "text-muted-foreground")}>{g.note}</p>
              <ul className="mt-5 space-y-3">
                {g.items.map((it) => {
                  const I = iconFor[it] ?? Award;
                  return (
                    <li key={it} className="flex items-center gap-3 text-[15px] font-medium">
                      <I className={cn("size-4 shrink-0", g.featured ? "text-lilac" : "text-primary-soft")} aria-hidden /> {it}
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
