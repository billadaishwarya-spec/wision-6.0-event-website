import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { RegisterButton } from "./RegisterButton";

/** Sticky mobile CTA. Hides over the hero, the registration section and the footer area. */
export function MobileBar() {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    const targets = ["top", "register", "contact"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        setHidden(visible.size > 0);
      },
      { threshold: 0.05 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden",
        hidden ? "translate-y-full" : "translate-y-0",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={hidden}
      inert={hidden}
    >
      <div className="container-page flex items-center justify-between gap-3 py-3">
        <div className="leading-tight">
          <p className="text-lg font-extrabold text-primary">₹50<span className="text-sm font-semibold text-muted-foreground">/team</span></p>
          <p className="text-xs text-muted-foreground">2 members · all 6 rounds</p>
        </div>
        <RegisterButton label="Register" className="min-w-[140px]" />
      </div>
    </div>
  );
}
