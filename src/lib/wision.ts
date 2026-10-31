import { useEffect, useState } from "react";
import { EVENT } from "@/content/eventContent";

export type Remaining = { days: number; hours: number; minutes: number; seconds: number };

export function getRemaining(deadlineMs: number, nowMs: number): Remaining | null {
  const diff = deadlineMs - nowMs;
  if (diff <= 0) return null;
  const total = Math.floor(diff / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export const DEADLINE_MS = Date.parse(EVENT.deadlineISO);

/** Live countdown. `ready` is false until hydrated, so SSR never renders fake numbers. */
export function useCountdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const remaining = now === null ? null : getRemaining(DEADLINE_MS, now);
  return { ready: now !== null, remaining, closed: now !== null && remaining === null };
}

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}
