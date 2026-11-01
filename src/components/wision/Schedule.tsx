import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EVENT, SCHEDULE } from "@/content/eventContent";
import { SectionHeading, PlaceholderNote } from "./SectionHeading";

export function Schedule() {
  return (
    <section aria-labelledby="schedule-title" id="schedule" className="section-pad bg-lavender/50">
      <div className="container-page max-w-3xl">
        <SectionHeading id="schedule-title" eyebrow="Event schedule" title="Plan Your WISION Experience." />
        <Tabs defaultValue={SCHEDULE[0]?.id ?? ""} className="mt-8" data-reveal>
          <TabsList className="grid h-auto w-full grid-cols-2 rounded-2xl border border-border bg-card p-1.5">
            {SCHEDULE.map((d) => (
              <TabsTrigger
                key={d.id}
                value={d.id}
                className="h-11 rounded-xl text-sm font-bold text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow focus-visible:ring-2 focus-visible:ring-ring"
              >
                {d.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {SCHEDULE.map((d) => (
            <TabsContent key={d.id} value={d.id} className="mt-4">
              <div className="card-surface p-6">
                <p className="eyebrow">{d.label}</p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3"><CalendarDays className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><span className="font-semibold">{d.date}</span></li>
                  <li className="flex items-start gap-3"><Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><span className="font-semibold">{d.time}</span></li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><span>{EVENT.venue}</span></li>
                </ul>
                <div className="mt-6 border-t border-border pt-5">
                  {d.sessions.length ? (
                    <ol className="space-y-3">
                      {d.sessions.map((s) => (
                        <li key={s.time + s.title} className="flex gap-4"><span className="w-24 shrink-0 text-sm font-semibold text-primary-soft">{s.time}</span><span className="font-medium">{s.title}</span></li>
                      ))}
                    </ol>
                  ) : (
                    <div className="rounded-xl border border-dashed border-lilac bg-lavender/60 p-4 text-center">
                      <PlaceholderNote>Detailed schedule will be announced</PlaceholderNote>
                      <p className="mt-2 text-sm text-muted-foreground">Session-wise timings for {d.label} will be shared before the event.</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
