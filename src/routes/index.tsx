import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header, LogoStrip } from "@/components/wision/Header";
import { Hero } from "@/components/wision/Hero";
import { About } from "@/components/wision/About";
import { Legacy } from "@/components/wision/Legacy";
import { Winners } from "@/components/wision/Winners";
import { Rounds } from "@/components/wision/Rounds";
import { Rewards } from "@/components/wision/Rewards";
import { Schedule } from "@/components/wision/Schedule";
import { Team } from "@/components/wision/Team";
import { Registration } from "@/components/wision/Registration";
import { Contact, Footer } from "@/components/wision/Contact";
import { MobileBar } from "@/components/wision/MobileBar";
import { prefersReducedMotion } from "@/lib/wision";

const title = "WISION 6.0 — Your First Step Towards Placement | BEC-IEEE WIE";
const description =
  "WISION 6.0 by BEC-IEEE WIE Affinity Group: six placement rounds on 14–15 Nov 2026 at BEC Bagalkote. ₹50 per team of 2. Register by 10 Nov.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useAnimations() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from("[data-hero]", { y: 24, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.08, clearProps: "all" });
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 90%",
          once: true,
          onEnter: (els) => gsap.from(els, { y: 20, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.06, clearProps: "all" }),
        });
      });
    })();
    return () => { cancelled = true; ctx?.revert(); };
  }, []);
}

function Index() {
  useAnimations();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <Header />
      <main id="main" className="pb-safe-bar">
        <LogoStrip />
        <Hero />
        <About />
        <Legacy />
        <Winners />
        <Rounds />
        <Rewards />
        <Schedule />
        <Team />
        <Registration />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
