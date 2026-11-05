import { Award, Gift, Megaphone, Trophy, Medal, Users } from "lucide-react";
import { WINNERS, type WinnerTeam } from "@/content/eventContent";
import { cn } from "@/lib/utils";
import { SectionHeading, PlaceholderNote } from "./SectionHeading";

const perks = [
  { icon: Award, label: "Certificates" },
  { icon: Gift, label: "Exciting goodies" },
  { icon: Megaphone, label: "Social media shout-out" },
];

function TeamCard({ team, featured }: { team: WinnerTeam; featured?: boolean }) {
  const Icon = featured ? Trophy : Medal;
  return (
    <article data-reveal className={cn("card-surface overflow-hidden", featured && "border-lilac shadow-[var(--shadow-lift)]")}>
      <div className={cn("relative bg-placeholder", featured ? "aspect-[16/10]" : "aspect-[16/7]")}>
        {team.photo ? (
          <img src={team.photo} alt={`${team.label}, ${team.edition}`} loading="lazy" className="size-full object-cover" />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-1 text-primary-soft" role="img" aria-label="Team photo placeholder">
            <Users className="size-8 text-lilac" aria-hidden />
            <span className="text-xs font-semibold">Team photo placeholder</span>
          </div>
        )}
        <span className={cn(
          "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider",
          featured ? "bg-gradient-brand text-primary-foreground" : "bg-card text-primary border border-border",
        )}>
          <Icon className="size-3.5" aria-hidden /> {team.label}
        </span>
      </div>
      <div className={cn("p-5", featured && "md:p-6")}>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{team.edition}</p>
        <ul className="mt-2 space-y-1">
          {team.members.map((m, i) => (
            <li key={i} className={cn("font-bold", featured ? "text-xl" : "text-lg")}>
              {m || <span className="text-muted-foreground">Member {i + 1} name — to be added</span>}
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-2">
          {perks.filter(({ label }) => label !== "Social media shout-out").map(({ icon: P, label }) => (
            <li key={label} className="inline-flex items-center gap-1.5 rounded-full bg-lavender px-3 py-1.5 text-xs font-semibold text-primary">
              <P className="size-3.5" aria-hidden /> {label}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Winners() {
  return (
    <section aria-labelledby="winners-title" id="winners" className="section-pad">
      <div className="container-page">
        <SectionHeading id="winners-title" eyebrow="Previous winners" title="Celebrating Excellence.">
          <PlaceholderNote>Winner details will be added</PlaceholderNote>
        </SectionHeading>
        <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr_1fr] md:items-start">
          <TeamCard team={WINNERS.winner} featured />
          <TeamCard team={WINNERS.runnerUp} />
        </div>
      </div>
    </section>
  );
}
