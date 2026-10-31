import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ROUNDS } from "@/content/eventContent";
import { SectionHeading, PlaceholderNote } from "./SectionHeading";

export function Rounds() {
  return (
    <section aria-labelledby="rounds-title" id="rounds" className="section-pad bg-lavender/50">
      <div className="container-page">
        <SectionHeading id="rounds-title" eyebrow="The journey" title="Six Rounds. One Step Closer.">
          Each round mirrors a stage of a real recruitment process. Tap a round to learn more.
        </SectionHeading>
        <Accordion type="single" collapsible className="mt-8 grid gap-3 md:grid-cols-2 md:items-start">
          {ROUNDS.map((r) => (
            <AccordionItem
              key={r.number}
              value={r.number}
              data-reveal
              className="card-surface overflow-hidden border-b-0 transition-colors data-[state=open]:border-lilac"
            >
              <AccordionTrigger className="group gap-4 px-5 py-5 hover:no-underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset [&>svg]:size-5 [&>svg]:text-primary">
                <span className="flex items-center gap-4 text-left">
                  <span className="text-3xl font-extrabold tabular-nums text-lilac transition-colors group-data-[state=open]:text-primary-soft">
                    {r.number}
                  </span>
                  <span className="text-base font-extrabold tracking-wide text-foreground">{r.name}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5">
                <div className="space-y-4 border-t border-border pt-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">About this round</p>
                    {r.details ? <p className="mt-1.5 leading-relaxed">{r.details}</p> : <p className="mt-2"><PlaceholderNote>Round details to be added</PlaceholderNote></p>}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Skills explored</p>
                    {r.skills?.length ? (
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {r.skills.map((s) => <li key={s} className="rounded-full bg-lavender px-3 py-1 text-xs font-semibold text-primary">{s}</li>)}
                      </ul>
                    ) : (
                      <p className="mt-2"><PlaceholderNote>Skills explored — to be added</PlaceholderNote></p>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
