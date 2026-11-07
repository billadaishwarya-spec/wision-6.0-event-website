
import { UserRound } from "lucide-react";
import { TEAM } from "@/content/eventContent";
import { SectionHeading } from "./SectionHeading";

export function Team() {
  return (
    <section
      aria-labelledby="team-title"
      id="team"
      className="section-pad"
    >
      <div className="container-page">
        <SectionHeading
          id="team-title"
          eyebrow="Meet the team"
          title="The People Behind WISION."
        />

        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {TEAM.map((m) => (
            <li
              key={m.role}
              data-reveal
              className="w-full"
            >
              <div className="card-surface overflow-hidden p-2">
                <div className="bg-placeholder aspect-[4/5] overflow-hidden rounded-xl">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={`${m.name}, ${m.role}`}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex size-full flex-col items-center justify-center gap-1"
                      role="img"
                      aria-label={`${m.role} photo placeholder`}
                    >
                      <UserRound
                        className="size-10 text-lilac"
                        aria-hidden
                      />
                      <span className="text-[11px] font-semibold text-primary-soft">
                        Photo placeholder
                      </span>
                    </div>
                  )}
                </div>

                <div className="px-2 pb-2 pt-3">
                  <p className="font-bold">{m.name}</p>

                  <p className="text-sm font-medium text-primary-soft">
                    {m.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
