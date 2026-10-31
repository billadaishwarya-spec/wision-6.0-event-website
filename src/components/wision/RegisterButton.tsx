import { ArrowUpRight, ArrowDown, Lock } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { getRegistrationUrl } from "@/content/eventContent";
import { scrollToId, useCountdown } from "@/lib/wision";

type Props = Pick<ButtonProps, "variant" | "size" | "className"> & { label?: string };

/**
 * Any "Register Now" CTA. Opens the Google Form only when a real URL is configured,
 * otherwise scrolls to the registration section. Disabled after the deadline.
 */
export function RegisterButton({ label = "Register Now", variant = "brand", size = "cta", className }: Props) {
  const { closed } = useCountdown();
  const url = getRegistrationUrl();

  if (closed) {
    return (
      <Button variant={variant} size={size} className={className} disabled aria-disabled="true">
        <Lock aria-hidden /> Registrations Closed
      </Button>
    );
  }
  if (url) {
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {label} <ArrowUpRight aria-hidden />
          <span className="sr-only">(opens Google Form in a new tab)</span>
        </a>
      </Button>
    );
  }
  return (
    <Button variant={variant} size={size} className={className} onClick={() => scrollToId("register")}>
      {label} <ArrowDown aria-hidden />
    </Button>
  );
}
