
/**
 * WISION 6.0 — Central content and configuration.
 * All event information is maintained in this file.
 */

// --------------------------------------------------
// EVENT INFORMATION
// --------------------------------------------------

export const EVENT = {
  name: "WISION 6.0",
  organiser: "BEC-IEEE WIE Affinity Group",
  institution:
    "Basaveshwar Engineering College (BEC), Bagalkote, Karnataka",

  tagline: "Think. Explore. Experience.",

  dates: "13–14 November 2026",
  time: "4:30 PM – 7:00 PM",

  venue:
    "ECE Department Seminar Hall, Basaveshwar Engineering College, Bagalkote",

  venueShort: "ECE Seminar Hall, BEC Bagalkote",

  // Registration fees per person
  fee: 50,
  ieeeMemberFee: 50,
  nonIeeeFee: 70,
  teamSize: 2,

  // Registration deadline
  deadlineISO: "2026-11-10T23:59:00+05:30",
  deadlineLabel: "10 November 2026, 11:59 PM IST",

  // Event statistics
  activities: 6,
  participants: "50+",
};

// --------------------------------------------------
// REGISTRATION AND SOCIAL LINKS
// --------------------------------------------------

// Add the actual Google Form URL when available.
export const REGISTRATION_URL = "https://forms.gle/vUoF9VbzJtAydPr18";

export const INSTAGRAM_URL =
  "https://www.instagram.com/bec_ieee/";

export function getRegistrationUrl(): string | null {
  const url = REGISTRATION_URL.trim();

  if (
    !/^https:\/\/(forms\.gle|docs\.google\.com\/forms)\//.test(url)
  ) {
    return null;
  }

  return url;
}

export function getInstagramUrl(): string | null {
  const url = INSTAGRAM_URL.trim();

  return /^https:\/\/(www\.)?instagram\.com\/[^/]+/.test(url)
    ? url
    : null;
}

// --------------------------------------------------
// OFFICIAL LOGOS
// Stored in public/logos/
// --------------------------------------------------

export type OfficialLogo = {
  id: string;
  name: string;
  src: string;
};

export const OFFICIAL_LOGOS: OfficialLogo[] = [
  {
    id: "bec",
    name: "BEC",
    src: "/logos/bec-logo.png",
  },
  {
    id: "ieee-bangalore",
    name: "IEEE Bangalore Section",
    src: "/logos/ieee-bangalore-section.jpeg",
  },
  {
    id: "ieee-nkss",
    name: "IEEE NKSS",
    src: "/logos/ieee-nkss.jpeg",
  },
  {
    id: "ieee-wie",
    name: "IEEE WIE",
    src: "/logos/ieee_wie.webp",
  },
  {
    id: "bec-ieee",
    name: "BEC IEEE",
    src: "/logos/bec-ieee.png",
  },
];

// --------------------------------------------------
// SIX PLACEMENT ROUNDS
// --------------------------------------------------

export type Round = {
  number: string;
  name: string;
  details?: string;
  skills?: string[];
};

export const ROUNDS: Round[] = [
  {
    number: "01",
    name: "VISION VOICE",
    details:
      "A story-based challenge that tests reading comprehension and listening skills. One team member reads the given story while the other listens carefully. Both members then work together to answer questions based on the story through a single shared Google Form.",
  },
  {
    number: "02",
    name: "APTITUDE",
    details:
      "Test your analytical and problem-solving abilities through three sections: Technical, Logical Reasoning and Verbal Ability. Put your knowledge, reasoning and language skills to the test.",
  },
  {
    number: "03",
    name: "CODE CRACK",
    details:
      "A paper-based coding challenge where participants solve simple programming problems by writing code on paper. No laptops or computers are allowed. Focus on logic, accuracy and problem-solving.",
  },
  {
    number: "04",
    name: "TARGET X",
    details:
      "Enter the Mystery Challenge! Teams receive a series of clues, puzzles and problem scenarios. Analyse the information, connect the clues and discover the correct solution within the given time.",
  },
  {
    number: "05",
    name: "GROUP DISCUSSION",
    details:
      "Share your perspectives, exchange ideas and participate in a structured group discussion on a given topic. Express your thoughts clearly while listening to and respecting different viewpoints.",
  },
  {
    number: "06",
    name: "INTERVIEW",
    details:
      "Experience a placement-style interview covering personal introduction, technical knowledge, projects and situational questions. Demonstrate your confidence, clarity and readiness for real-world interviews.",
  },
];

// --------------------------------------------------
// EVENT SCHEDULE
// --------------------------------------------------

export type ScheduleSession = {
  time: string;
  title: string;
};

export type ScheduleDay = {
  id: string;
  label: string;
  date: string;
  time: string;
  sessions: ScheduleSession[];
};

export const SCHEDULE: ScheduleDay[] = [
  {
    id: "day1",
    label: "Day 1",
    date: "Friday, 13 November 2026",
    time: "4:30 PM – 7:00 PM",
    sessions: [],
  },
  {
    id: "day2",
    label: "Day 2",
    date: "Saturday, 14 November 2026",
    time: "4:30 PM – 7:00 PM",
    sessions: [],
  },
];

// --------------------------------------------------
// ORGANISING TEAM
// Photos stored in public/team/
// --------------------------------------------------

export type TeamMember = {
  role: string;
  name: string;
  photo?: string;
};

export const TEAM: TeamMember[] = [
  {
    role: "Faculty Advisor BEC-IEEE WIE",
    name: "Dr. Vijaylakshmi S. Jigajinni",
    photo: "/team/faculty.png",
  },
  {
    role: "WIE Chair",
    name: "Aishwarya Billad",
    photo: "/team/wie-chair.png",
  },
  {
  role: "WIE Secretary",
  name: "Soujanya Sajjan",
  photo: "/team/secretary.png",
},
{
  role: "WIE Joint Secretary",
  name: "Gouri Kurtakoti",
  photo: "/team/Joint-secretary.png",
},
];

// --------------------------------------------------
// CONTACT INFORMATION
// --------------------------------------------------

export type Contact = {
  name: string;
  phone: string;
  whatsapp?: string;
};

export const CONTACTS: Contact[] = [
  {
    name: "Aishwarya Billad",
    phone: "9449311134",
    whatsapp: "",
  },
  {
    name: "Bharatesh B.",
    phone: "9113218190",
    whatsapp: "",
  },
];

export function normalisePhone(raw?: string): string | null {
  if (!raw) return null;

  const digits = raw.replace(/\D/g, "");

  const ten =
    digits.length === 12 && digits.startsWith("91")
      ? digits.slice(2)
      : digits;

  return /^[6-9]\d{9}$/.test(ten) ? `+91${ten}` : null;
}

// --------------------------------------------------
// PREVIOUS WINNERS
// Previous Winners section removed from the website.
// --------------------------------------------------

// --------------------------------------------------
// PARTICIPANT BENEFITS AND REWARDS
// --------------------------------------------------

export const REWARDS = {
  participants: [
    "Participation in all Day 1 rounds",
    "Refreshments",
    "Participation certificate for every participant",
    "Opportunity to qualify for Day 2",
  ],

  // WISION 6.0 benefits and rewards
  winner: [
    "Certificate",
    "Exciting goodies",
    "Social media shout-out",
  ],

  runnerUp: [
    "Certificate",
    "Exciting goodies",
    "Social media shout-out",
  ],
};

// --------------------------------------------------
// WISION LEGACY PHOTO GALLERY
// Latest edition appears first.
// --------------------------------------------------

export const EDITIONS = [
  "5.0",
  "4.0",
  "3.0",
  "2.0",
  "1.0",
] as const;

export type Edition = (typeof EDITIONS)[number];

// --------------------------------------------------
// GALLERY CATEGORIES
// Participants category removed.
// --------------------------------------------------

export const CATEGORIES = [
  "Banner / Poster",
  "Activities",
] as const;

export type Category = (typeof CATEGORIES)[number];

// --------------------------------------------------
// GALLERY PHOTO TYPE
// --------------------------------------------------

export type GalleryPhoto = {
  id: string;
  edition: Edition;
  category: Category;
  caption: string;
  src: string;
  alt: string;
};

// --------------------------------------------------
// ACTUAL LEGACY PHOTOGRAPHS
//
// WISION 1.0 — No photographs.
// WISION 2.0 — One banner.
// WISION 3.0 — One banner.
// WISION 4.0 — One banner.
// WISION 5.0 — One banner + four activity photos.
//
// --------------------------------------------------

export const GALLERY: GalleryPhoto[] = [
  // -----------------------------------------------
  // WISION 5.0 — OFFICIAL BANNER
  // -----------------------------------------------

  {
    id: "wision-5-banner",
    edition: "5.0",
    category: "Banner / Poster",
    caption: "WISION 5.0 — Official Event Banner",
    src: "/gallery/5.0/banner.jpeg",
    alt: "WISION 5.0 official event banner",
  },

  // -----------------------------------------------
  // WISION 5.0 — ACTIVITY PHOTOGRAPHS
  // -----------------------------------------------

  {
    id: "wision-5-activity-01",
    edition: "5.0",
    category: "Activities",
    caption: "WISION 5.0 — Activity 1",
    src: "/gallery/5.0/activity-01.jpeg",
    alt: "WISION 5.0 activity photograph 1",
  },
  {
    id: "wision-5-activity-02",
    edition: "5.0",
    category: "Activities",
    caption: "WISION 5.0 — Activity 2",
    src: "/gallery/5.0/activity-02.jpeg",
    alt: "WISION 5.0 activity photograph 2",
  },
  {
    id: "wision-5-activity-03",
    edition: "5.0",
    category: "Activities",
    caption: "WISION 5.0 — Activity 3",
    src: "/gallery/5.0/activity-03.jpeg",
    alt: "WISION 5.0 activity photograph 3",
  },
  {
    id: "wision-5-activity-04",
    edition: "5.0",
    category: "Activities",
    caption: "WISION 5.0 — Activity 4",
    src: "/gallery/5.0/activity-04.jpeg",
    alt: "WISION 5.0 activity photograph 4",
  },

  // -----------------------------------------------
  // WISION 4.0 — BANNER
  // -----------------------------------------------

  {
    id: "wision-4-banner",
    edition: "4.0",
    category: "Banner / Poster",
    caption: "WISION 4.0",
    src: "/gallery/4.0/wision-4.0.jpeg",
    alt: "WISION 4.0 event banner",
  },

  // -----------------------------------------------
  // WISION 3.0 — BANNER
  // -----------------------------------------------

  {
    id: "wision-3-banner",
    edition: "3.0",
    category: "Banner / Poster",
    caption: "WISION 3.0",
    src: "/gallery/3.0/wision-3.0.jpeg",
    alt: "WISION 3.0 event banner",
  },

  // -----------------------------------------------
  // WISION 2.0 — BANNER
  // -----------------------------------------------

  {
    id: "wision-2-banner",
    edition: "2.0",
    category: "Banner / Poster",
    caption: "WISION 2.0",
    src: "/gallery/2.0/wision-2.0.jpeg",
    alt: "WISION 2.0 event banner",
  },
];

// --------------------------------------------------
// MOBILE NAVIGATION
// Previous Winners link removed.
// --------------------------------------------------

export const NAV_LINKS = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "legacy",
    label: "Legacy",
  },
  {
    id: "rounds",
    label: "Six Rounds",
  },
  {
    id: "rewards",
    label: "Rewards",
  },
  {
    id: "schedule",
    label: "Schedule",
  },
  {
    id: "team",
    label: "Team",
  },
  {
    id: "register",
    label: "Register",
  },
  {
    id: "contact",
    label: "Contact",
  },
];
