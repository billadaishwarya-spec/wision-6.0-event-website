/**
 * WISION 6.0 — central content & configuration.
 * ------------------------------------------------------------------
 * Fill in everything marked TODO here. Components read from this file,
 * so you never need to edit layout code to update content.
 * Leave a value as "" (empty) while it is unknown — the site will show
 * a clear placeholder and keep related buttons disabled.
 */

export const EVENT = {
  name: "WISION 6.0",
  organiser: "BEC-IEEE WIE Affinity Group",
  institution: "Basaveshwar Engineering College (BEC), Bagalkote, Karnataka",
  tagline: "Your First Step Towards Placement.",
  dates: "14–15 November 2026",
  time: "4:30 PM – 7:00 PM",
  venue: "ECE Department Seminar Hall, Basaveshwar Engineering College, Bagalkote",
  venueShort: "ECE Seminar Hall, BEC Bagalkote",
  fee: 50,
  teamSize: 2,
  /** Registration deadline in IST. */
  deadlineISO: "2026-11-10T23:59:00+05:30",
  deadlineLabel: "10 November 2026, 11:59 PM IST",
};

/** TODO: paste the Google Form link (https://forms.gle/... or https://docs.google.com/forms/...). */
export const REGISTRATION_URL = "";

/** TODO: official Instagram profile URL, e.g. https://www.instagram.com/<handle>/ */
export const INSTAGRAM_URL = "";

/** Only accept real https Google Forms links so a placeholder can never "pretend" to work. */
export function getRegistrationUrl(): string | null {
  const url = REGISTRATION_URL.trim();
  if (!/^https:\/\/(forms\.gle|docs\.google\.com\/forms)\//.test(url)) return null;
  return url;
}

export function getInstagramUrl(): string | null {
  const url = INSTAGRAM_URL.trim();
  return /^https:\/\/(www\.)?instagram\.com\/[^/]+/.test(url) ? url : null;
}

/** Official logos. Add `src` (e.g. "/logos/bec.png" placed in /public/logos) to replace a placeholder. */
export type OfficialLogo = { id: string; name: string; src?: string };
export const OFFICIAL_LOGOS: OfficialLogo[] = [
  { id: "bec", name: "BEC" },
  { id: "ieee-bangalore", name: "IEEE Bangalore Section" },
  { id: "ieee-nkss", name: "IEEE NKSS" },
  { id: "ieee-wie", name: "IEEE WIE" },
  { id: "bec-ieee", name: "BEC IEEE" },
];

export type Round = { number: string; name: string; details?: string; skills?: string[] };
export const ROUNDS: Round[] = [
  { number: "01", name: "VISION VOICE" },
  { number: "02", name: "APTITUDE" },
  { number: "03", name: "CODE CRACK" },
  { number: "04", name: "TARGET X" },
  { number: "05", name: "GROUP DISCUSSION" },
  { number: "06", name: "INTERVIEW" },
];

export type ScheduleSession = { time: string; title: string };
export type ScheduleDay = {
  id: string;
  label: string;
  date: string;
  time: string;
  /** TODO: add sessions once announced. Empty = "Detailed schedule will be announced". */
  sessions: ScheduleSession[];
};
export const SCHEDULE: ScheduleDay[] = [
  { id: "day1", label: "Day 1", date: "Saturday, 14 November 2026", time: "4:30 PM – 7:00 PM", sessions: [] },
  { id: "day2", label: "Day 2", date: "Sunday, 15 November 2026", time: "4:30 PM – 7:00 PM", sessions: [] },
];

export type TeamMember = { role: string; name: string; photo?: string };
/** TODO: add names and photo paths (e.g. "/team/chair.jpg"). */
export const TEAM: TeamMember[] = [
  { role: "Faculty Advisor", name: "" },
  { role: "Chair", name: "" },
  { role: "Secretary", name: "" },
  { role: "Secretary", name: "" },
];

export type Contact = { name: string; phone: string; whatsapp?: string };
/** TODO: phone numbers with country code, e.g. "+91 98xxxxxxxx". WhatsApp optional. */
export const CONTACTS: Contact[] = [
  { name: "", phone: "", whatsapp: "" },
  { name: "", phone: "", whatsapp: "" },
];

/** Returns a dialable +91 number or null if not a valid Indian mobile. */
export function normalisePhone(raw?: string): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, "");
  const ten = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(ten) ? `+91${ten}` : null;
}

export type WinnerTeam = {
  label: string;
  edition: string;
  members: [string, string];
  photo?: string;
};
/** TODO: fill in previous edition winners. */
export const WINNERS: { winner: WinnerTeam; runnerUp: WinnerTeam } = {
  winner: { label: "Winner Team", edition: "WISION 5.0", members: ["", ""] },
  runnerUp: { label: "Runner-up Team", edition: "WISION 5.0", members: ["", ""] },
};

export const REWARDS = {
  participants: ["Participation certificate", "Refreshments", "Access to all six rounds"],
  winner: ["Certificate", "Exciting goodies", "Social media shout-out"],
  runnerUp: ["Certificate", "Exciting goodies", "Social media shout-out"],
};

/* ---------------- Legacy gallery ---------------- */
export const EDITIONS = ["1.0", "2.0", "3.0", "4.0", "5.0"] as const;
export type Edition = (typeof EDITIONS)[number];
export const CATEGORIES = [
  "Inauguration",
  "Activities",
  "Participants",
  "Winners",
  "Team",
  "Behind the Scenes",
] as const;
export type Category = (typeof CATEGORIES)[number];

export type GalleryPhoto = {
  id: string;
  edition: Edition;
  category: Category;
  caption: string;
  /** Put real photo path here (e.g. "/gallery/5.0/inauguration-1.jpg"). Missing = placeholder tile. */
  src?: string;
  alt?: string;
};

/**
 * Placeholder slots — replace each with a real photo by adding `src` and `alt`,
 * add more entries, or delete ones you don't need.
 * Some categories are intentionally empty to show the empty state.
 */
const slots: Record<Edition, Partial<Record<Category, number>>> = {
  "1.0": { Inauguration: 1, Activities: 2, Participants: 1 },
  "2.0": { Inauguration: 1, Activities: 2, Winners: 1, Team: 1 },
  "3.0": { Inauguration: 1, Activities: 2, Participants: 2, Winners: 1 },
  "4.0": { Inauguration: 1, Activities: 2, Participants: 1, Winners: 1, Team: 1 },
  "5.0": { Inauguration: 1, Activities: 3, Participants: 2, Winners: 1, Team: 1, "Behind the Scenes": 1 },
};

export const GALLERY: GalleryPhoto[] = EDITIONS.flatMap((edition) =>
  CATEGORIES.flatMap((category) =>
    Array.from({ length: slots[edition][category] ?? 0 }, (_, i) => ({
      id: `${edition}-${category}-${i}`.replace(/\s+/g, "-").toLowerCase(),
      edition,
      category,
      caption: `WISION ${edition} · ${category} — photo ${i + 1} (to be added)`,
    })),
  ),
);

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "legacy", label: "Legacy" },
  { id: "winners", label: "Winners" },
  { id: "rounds", label: "Six Rounds" },
  { id: "rewards", label: "Rewards" },
  { id: "schedule", label: "Schedule" },
  { id: "team", label: "Team" },
  { id: "register", label: "Register" },
  { id: "contact", label: "Contact" },
];
