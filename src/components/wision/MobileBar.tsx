import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { RegisterButton } from "./RegisterButton";

/**
 * Sticky mobile registration button.
 * Hides over the hero, registration section and footer area.
 */
export function MobileBar() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const targets = ["top", "register", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const visible = new Set<string>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.isIntersecting
            ? visible.add(e.target.id)
            : visible.delete(e.target.id)
        );

        setHidden(visible.size > 0);
      },
      { threshold: 0.05 }
    );

    targets.forEach((t) => io.observe(t));

    return () => io.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden",
        hidden ? "translate-y-full" : "translate-y-0"
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={hidden}
      inert={hidden}
    >
      <div className="container-page flex items-center justify-end py-3">
        <RegisterButton
          label="Register"
          className="min-w-[140px]"
        />
      </div>
    </div>
  );
}