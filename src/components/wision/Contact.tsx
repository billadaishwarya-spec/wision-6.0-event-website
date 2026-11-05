import { Instagram, MessageCircle, Phone, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACTS, EVENT, getInstagramUrl, normalisePhone } from "@/content/eventContent";
import { SectionHeading } from "./SectionHeading";
import { Wordmark } from "./Header";

export function Contact() {
  const insta = getInstagramUrl();
  return (
    <section aria-labelledby="contact-title" id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeading id="contact-title" eyebrow="Contact" title="Have Questions? Let’s Connect." />
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {CONTACTS.map((c, i) => {
            const tel = normalisePhone(c.phone);
            const wa = normalisePhone(c.whatsapp);
            const name = c.name || `Student Coordinator ${i + 1}`;
            return (
              <li key={i} data-reveal className="card-surface p-5">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-lavender"><UserRound className="size-6 text-primary" aria-hidden /></span>
                  <div>
                    <p className="font-bold">{c.name || <span>{name} <span className="text-muted-foreground font-medium">(name to be added)</span></span>}</p>
                    <p className="text-sm text-muted-foreground">{tel ? c.phone : "Phone number to be added"}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  {tel ? (
                    <Button asChild variant="default" size="cta" className="flex-1">
                      <a href={`tel:${tel}`} aria-label={`Call ${name}`}><Phone aria-hidden /> Call</a>
                    </Button>
                  ) : (
                    <Button variant="soft" size="cta" className="flex-1" disabled><Phone aria-hidden /> Number coming soon</Button>
                  )}
                  {wa && (
                    <Button asChild variant="outline" size="cta" className="flex-1">
                      <a href={`https://wa.me/${wa.slice(1)}`} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${name} (opens in new tab)`}>
                        <MessageCircle aria-hidden /> WhatsApp
                      </a>
                    </Button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <div data-reveal className="card-surface mt-3 flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Instagram className="size-6 text-primary" aria-hidden />
            <div>
              <p className="font-bold">Follow bec_ieee on Instagram</p>
              <p className="text-sm text-muted-foreground">{insta ? "Updates, results and shout-outs" : "Official handle will be shared soon"}</p>
            </div>
          </div>
          {insta ? (
            <Button asChild variant="outline" size="cta">
              <a href={insta} target="_blank" rel="noopener noreferrer">Open Instagram<span className="sr-only"> (opens in new tab)</span></a>
            </Button>
          ) : (
            <Button variant="soft" size="cta" disabled>Coming soon</Button>
          )}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-lavender/60">
      <div className="container-page py-10">
        <Wordmark />
        <p className="mt-3 text-sm font-semibold text-foreground">Organised by {EVENT.organiser}</p>
        <p className="mt-1 text-sm text-muted-foreground">{EVENT.institution}</p>
        <p className="mt-6 text-lg font-extrabold tracking-tight text-primary">{EVENT.tagline}</p>
        <p className="mt-6 text-xs text-muted-foreground">© 2026 WISION 6.0 · {EVENT.organiser}</p>
      </div>
    </footer>
  );
}
