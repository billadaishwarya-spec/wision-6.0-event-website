
import { useState } from "react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { NAV_LINKS, EVENT } from "@/content/eventContent";
import { scrollToId } from "@/lib/wision";
import { RegisterButton } from "./RegisterButton";

// --------------------------------------------------
// WISION WORDMARK
// --------------------------------------------------

export function Wordmark() {
  return (
    <span className="text-lg font-extrabold tracking-tight text-primary">
      WISION<span className="text-primary-soft"> 6.0</span>
    </span>
  );
}

// --------------------------------------------------
// HEADER
// --------------------------------------------------

export function Header() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);

    // Wait for the sheet to close before scrolling.
    window.setTimeout(() => scrollToId(id), 320);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-3">

        {/* WISION LOGO / WORDMARK */}

        <a
          href="#top"
          className="rounded-md"
          aria-label="WISION 6.0 — back to top"
        >
          <Wordmark />
        </a>

        <div className="flex items-center gap-2">

          {/* REGISTER BUTTON */}

          <RegisterButton
            size="default"
            label="Register"
            className="h-10 rounded-xl px-4"
          />

          {/* MOBILE NAVIGATION */}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="iconLg"
                aria-label="Open menu"
              >
                <Menu aria-hidden />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[86%] max-w-sm border-border bg-background p-0"
            >
              <div className="flex h-16 items-center border-b border-border px-6">
                <SheetTitle asChild>
                  <span>
                    <Wordmark />
                  </span>
                </SheetTitle>

                <SheetDescription className="sr-only">
                  Site navigation
                </SheetDescription>
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

// --------------------------------------------------
// COMBINED ORGANISATION LOGO STRIP
// --------------------------------------------------

export function LogoStrip() {
  return (
    <section
      aria-label="Organisers and institutions"
      className="border-b border-border bg-card/60"
    >
      <div className="container-page py-3 sm:py-4">
        <img
          src="/logos/wision-partner-logos.png"
          alt="BEC, IEEE Women in Engineering, IEEE Bangalore Section, IEEE NKSS and BEC IEEE logos"
          className="mx-auto block h-auto w-full max-w-5xl object-contain"
          loading="eager"
        />
      </div>
    </section>
  );
}
