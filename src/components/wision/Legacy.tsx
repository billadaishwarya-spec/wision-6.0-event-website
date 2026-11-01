import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CATEGORIES, EDITIONS, GALLERY, type Category, type Edition, type GalleryPhoto } from "@/content/eventContent";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

function PhotoTile({ photo, large = false }: { photo: GalleryPhoto; large?: boolean }) {
  if (photo.src) {
    return (
      <img
        src={photo.src}
        alt={photo.alt ?? photo.caption}
        loading="lazy"
        decoding="async"
        className={cn("size-full", large ? "object-contain" : "object-cover")}
      />
    );
  }
  return (
    <div className="bg-placeholder flex size-full flex-col items-center justify-center gap-2 p-3 text-center" role="img" aria-label={`Placeholder: ${photo.caption}`}>
      <ImageIcon className={cn("text-lilac", large ? "size-14" : "size-8")} aria-hidden />
      <span className={cn("font-semibold text-primary-soft", large ? "text-base" : "text-xs")}>Photo placeholder</span>
      <span className={cn("text-muted-foreground", large ? "text-sm" : "text-[11px]")}>{photo.category}</span>
    </div>
  );
}

const chip =
  "h-10 shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97]";

export function Legacy() {
  const [edition, setEdition] = useState<Edition>("5.0");
  const [category, setCategory] = useState<Category | "All">("All");
  const [index, setIndex] = useState<number | null>(null);

  const photos = useMemo(
    () => GALLERY.filter((p) => p.edition === edition && (category === "All" || p.category === category)),
    [edition, category],
  );
  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    GALLERY.filter((p) => p.edition === edition).forEach((p) => (m[p.category] = (m[p.category] ?? 0) + 1));
    return m;
  }, [edition]);

  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const touchX = useRef<number | null>(null);
  const current = index !== null ? photos[index] : null;

  return (
    <section aria-labelledby="legacy-title" id="legacy" className="section-pad bg-lavender/50">
      <div className="container-page">
        <SectionHeading id="legacy-title" eyebrow="The legacy" title="Five Editions. One Legacy.">
          Moments from WISION 1.0 to 5.0. Choose an edition and category to explore.
        </SectionHeading>

        <div className="mt-8" data-reveal>
          <p id="edition-label" className="mb-2 text-sm font-semibold">Edition</p>
          <div role="radiogroup" aria-labelledby="edition-label" className="grid grid-cols-5 gap-1.5 rounded-2xl border border-border bg-card p-1.5">
            {EDITIONS.map((e) => (
              <button
                key={e}
                role="radio"
                aria-checked={edition === e}
                onClick={() => { setEdition(e); setCategory("All"); }}
                className={cn(
                  "h-11 rounded-xl text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.97]",
                  edition === e ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:bg-lavender hover:text-primary",
                )}
              >
                <span className="sr-only">WISION </span>{e}
              </button>
            ))}
          </div>

          <p id="cat-label" className="mb-2 mt-5 text-sm font-semibold">Category</p>
          <div role="radiogroup" aria-labelledby="cat-label" className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none]">
            {(["All", ...CATEGORIES] as const).map((c) => {
              const n = c === "All" ? GALLERY.filter((p) => p.edition === edition).length : counts[c] ?? 0;
              return (
                <button
                  key={c}
                  role="radio"
                  aria-checked={category === c}
                  onClick={() => setCategory(c)}
                  className={cn(
                    chip,
                    category === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-lilac hover:bg-lavender",
                  )}
                >
                  {c} <span className={cn("ml-1 text-xs", category === c ? "text-lilac" : "text-muted-foreground")}>{n}</span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          WISION {edition} · {category === "All" ? "All categories" : category} — {photos.length} {photos.length === 1 ? "photo" : "photos"}
        </p>

        {photos.length === 0 ? (
          <div className="card-surface mt-4 flex flex-col items-center px-6 py-12 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-lavender">
              <ImageIcon className="size-7 text-primary-soft" aria-hidden />
            </div>
            <p className="mt-4 font-semibold">No {category !== "All" ? category.toLowerCase() : ""} photos for WISION {edition} yet</p>
            <p className="mt-1 max-w-xs text-sm text-muted-foreground">We're still collecting memories from this edition. Try another category.</p>
            <Button variant="soft" size="cta" className="mt-5" onClick={() => setCategory("All")}>Show all categories</Button>
          </div>
        ) : (
          <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((p, i) => (
              <li key={p.id} className={cn(i === 0 && photos.length > 2 && "col-span-2 row-span-2")}>
                <button
                  onClick={() => setIndex(i)}
                  className="group relative block aspect-square w-full overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[var(--shadow-lift)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`Open ${p.caption}`}
                >
                  <span className="block size-full transition-transform duration-500 group-hover:scale-[1.03]">
                    <PhotoTile photo={p} />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 text-xs text-muted-foreground">More photos from previous editions will be added as they're collected.</p>
      </div>

      <Dialog open={index !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          className="flex h-[100dvh] max-h-none w-screen max-w-none flex-col gap-0 rounded-none border-0 bg-background p-0 sm:rounded-none [&>button:last-child]:hidden"
          onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          {current && (
            <>
              <div className="flex h-16 items-center justify-between border-b border-border px-4">
                <DialogTitle className="text-sm font-semibold">
                  WISION {current.edition} · {index! + 1} / {photos.length}
                </DialogTitle>
                <Button variant="ghost" size="iconLg" onClick={() => setIndex(null)} aria-label="Close gallery">
                  <X aria-hidden />
                </Button>
              </div>
              <div className="relative flex min-h-0 flex-1 items-center justify-center p-4">
                <div className="aspect-[4/3] max-h-full w-full max-w-4xl overflow-hidden rounded-2xl border border-border">
                  <PhotoTile photo={current} large />
                </div>
              </div>
              <div className="border-t border-border px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4">
                <DialogDescription className="text-center text-sm text-muted-foreground">{current.caption}</DialogDescription>
                <div className="mt-3 flex justify-center gap-3">
                  <Button variant="outline" size="cta" onClick={() => step(-1)} disabled={photos.length < 2} aria-label="Previous photo">
                    <ChevronLeft aria-hidden /> Prev
                  </Button>
                  <Button variant="outline" size="cta" onClick={() => step(1)} disabled={photos.length < 2} aria-label="Next photo">
                    Next <ChevronRight aria-hidden />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
