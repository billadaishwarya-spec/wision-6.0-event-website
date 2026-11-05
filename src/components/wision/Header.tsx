import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS, OFFICIAL_LOGOS, EVENT } from "@/content/eventContent";
import { scrollToId } from "@/lib/wision";
import { RegisterButton } from "./RegisterButton";

export function Wordmark() {
  return (
    <span className="text-lg font-extrabold tracking-tight text-primary">
      WISION<span className="text-primary-soft"> 6.0</span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const go = (id: string) => {
    setOpen(false);
    // wait for the sheet to close and restore scroll lock before scrolling
    window.setTimeout(() => scrollToId(id), 320);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <a href="#top" className="rounded-md" aria-label="WISION 6.0 — back to top">
          <Wordmark />
        </a>
        <div className="flex items-center gap-2">
          <RegisterButton size="default" label="Register" className="h-10 rounded-xl px-4" />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="iconLg" aria-label="Open menu">
                <Menu aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86%] max-w-sm border-border bg-background p-0">
              <div className="flex h-16 items-center border-b border-border px-6">
                <SheetTitle asChild>
                  <span><Wordmark /></span>
                </SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
              </div>
              <nav aria-label="Main" className="px-3 py-4">
                <ul className="space-y-1">
                  {NAV_LINKS.map((l, i) => (
                    <li key={l.id}>
                      <button
                        onClick={() => go(l.id)}
                        className="flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left text-base font-semibold text-foreground transition-colors hover:bg-lavender hover:text-primary focus-visible:bg-lavender active:bg-lilac/40"
                      >
                        <span className="w-6 text-xs font-medium tabular-nums text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="border-t border-border px-6 py-5 text-sm text-muted-foreground">
                {EVENT.dates} · {EVENT.time}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function LogoStrip() {
  return (
    <section
      aria-label="Organisers and institutions"
      className="border-b border-border bg-card/60"
    >
      <div className="container-page py-4">
        <ul className="grid grid-cols-5 items-center gap-2 sm:flex sm:justify-center sm:gap-6">
          {OFFICIAL_LOGOS.map((logo) => (
            <li
              key={logo.id}
              className="flex min-w-0 items-center justify-center sm:shrink-0"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="h-9 w-full max-w-[68px] object-contain sm:h-12 sm:w-auto sm:max-w-[140px]"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-9 w-full max-w-[68px] items-center justify-center rounded-lg border border-dashed border-lilac bg-lavender/60 px-1 text-center text-[9px] font-semibold text-primary-soft sm:h-12 sm:max-w-[140px]">
                  {logo.name}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
