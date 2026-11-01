# WISION 6.0 Event Website

Build a polished, production-oriented, mobile-first event website for WISION 6.0. This is a real working web app, not a static mockup. Use Lovable's default React + TypeScript + Tailwind + shadcn/ui stack. Use GSAP with ScrollTrigger only where it improves the experience. Prioritise responsive layout, functional interactions, accessibility, fast loading, and easy content replacement.

PROJECT
Name: WISION 6.0 — Official Event Website
Organizer: BEC-IEEE WIE Affinity Group
Institution: Basaveshwar Engineering College (BEC), Bagalkote, Karnataka
Tagline: “Your First Step Towards Placement.”
Event: 14–15 November 2026, 4:30 PM–7:00 PM both days
Venue: ECE Department Seminar Hall, Basaveshwar Engineering College, Bagalkote
Eligibility: BEC students from all branches and all academic years only
Team size: exactly 2 members
Registration fee: ₹50 per team, one-time fee covers participation in all six rounds
Participant inclusions: all six rounds, refreshments, participation certificate for every participant
Winner team: certificate, exciting goodies, social media shout-out
Runner-up team: certificate, exciting goodies, social media shout-out
Registration deadline: 10 November 2026, 11:59 PM IST
Registration platform: Google Forms; actual URL is not yet supplied.
Previous editions: WISION 1.0 through WISION 5.0, conducted annually. User has photos from all five editions, to be uploaded later.
Placement rounds: VISION VOICE, APTITUDE, CODE CRACK, TARGET X, GROUP DISCUSSION, INTERVIEW.
Schedule: Day 1 14 Nov 2026 4:30 PM–7:00 PM; Day 2 15 Nov 2026 4:30 PM–7:00 PM. Detailed session timings not supplied.

DESIGN SYSTEM — FOLLOW EXACTLY
Primary background #FAF9FC
Primary purple #4B176D
Secondary purple #6B3A8A
Light purple #C9B8E8
Pale lavender #F0EAF7
Primary text #17131D
Secondary text #716A78
White #FFFFFF
Borders #E6DFEC
Use Inter throughout. Keep a consistent off-white background and purple identity on every section. No black sections, no random accent colours, no alternate dark theme. Spacious layout, 24px mobile horizontal padding, 8px spacing rhythm, cards radius around 16px, buttons 48–52px tall, subtle borders/shadows. Design mobile-first at 390px but make gracefully responsive at larger widths without creating a separate desktop design language. The experience should feel premium, modern, lively, polished, editorial, clear and youth-oriented—not a generic template.

PAGE STRUCTURE — ONE CONTINUOUS SCROLLING HOME PAGE
1) Header: WISION 6.0 wordmark, compact header, menu icon and register CTA. Show five official logo placeholders (BEC, IEEE Bangalore Section, IEEE NKSS, IEEE WIE, BEC IEEE) in a tidy institution/organiser strip. Do not fabricate official logos; create labelled replaceable placeholders.
2) Hero: “BEC-IEEE WIE PRESENTS”, WISION 6.0, “YOUR FIRST STEP TOWARDS PLACEMENT.” Supporting text: “Step into the experience. Challenge your skills. Discover your potential.” Event date and venue, primary “Register Now” and secondary “Explore WISION” actions. Use restrained abstract purple visual accents, confident typography and gentle entrance animation.
3) About WISION: Heading “More Than Just an Event.” Copy: “WISION is an annual placement-readiness experience organised by BEC-IEEE WIE Affinity Group. It gives students an opportunity to experience different stages of a recruitment process through six engaging rounds.” Supporting copy: “From aptitude and coding to communication and interviews, WISION encourages students to challenge themselves, discover their strengths and take their first step towards placement preparation.” Highlight “Your First Step Towards Placement.” Do not make an about-IEEE-WIE section or describe other WIE activities.
4) Legacy: “Five Editions. One Legacy.” A year selector for WISION 1.0, 2.0, 3.0, 4.0, 5.0. Build real working year/category filters and a responsive photo grid with replaceable placeholder images until actual user photos arrive. Categories can include Inauguration, Activities, Participants, Winners, Team and Behind the Scenes. Clicking a photo opens accessible full-screen lightbox with close, previous/next, captions and keyboard navigation. Support swipe on mobile if practical. Include friendly empty-state messages for missing photos. Do not use AI-generated event images or imply placeholders are actual event photos.
5) Previous winners: “Celebrating Excellence.” Prominent winner-team feature card then smaller runner-up card below. Each has two member-name placeholders, team image placeholder, title/label and benefits: certificates, exciting goodies, social media shout-out. No invented names or achievements.
6) Six rounds: “Six Rounds. One Step Closer.” Six elegant accordion cards numbered 01–06, exact round names above. On tap expand to show a clearly marked “Round details to be added” placeholder and placeholder for “Skills explored”; don't invent round rules/scoring/descriptions. Use smooth open/close and accessible keyboard interactions.
7) Benefits and rewards: “Every Step Deserves Recognition.” Separate participant, winner and runner-up benefit groupings with icons: participants get participation certificates and refreshments; winner and runner-up teams each get certificates, exciting goodies, social media shout-out. Do not imply every participant gets goodies.
8) Event schedule: “Plan Your WISION Experience.” Day 1 and Day 2 accessible tabs. Show confirmed dates, 4:30–7:00 PM, venue. Individual session timings remain a “Detailed schedule will be announced” placeholder. Do not invent sessions.
9) Meet the team: “The People Behind WISION.” Four consistent rounded-rectangle photo cards: Faculty Advisor, Chair, Secretary, Secretary. Use clearly marked photo/name placeholders, not invented people. Display name and position.
10) Registration: “Your First Step Starts Here.” Explain eligibility (BEC only, all branches/years), exactly two members/team, ₹50 per team, one-time payment covers all six rounds, refreshments and participant certificates, event dates/venue, registration deadline. Create a real live countdown to 2026-11-10T23:59:00+05:30 using client-side time calculation updated every second. Display days/hours/minutes/seconds. Handle zero/expired deadline explicitly: show “Registrations Closed” and disable all registration CTAs. Do not hardcode sample countdown numbers. Google Forms URL must be a central configuration constant/placeholder; while URL is unset, the button must not pretend to work—show “Registration link will be available soon” or disabled state, with clear message. Once real URL is added, open it safely in a new tab. Include a team-size and fee summary.
11) Contact/footer: “Have Questions? Let’s Connect.” Two student contact cards with name and phone placeholders. Once actual phone numbers are supplied, make tel: links; optional WhatsApp only when user provides valid number. Official Instagram placeholder link only; don't fabricate handles or use dead links. Footer says WISION 6.0 and “Organised by BEC-IEEE WIE Affinity Group”, institution and tagline.

INTERACTION REQUIREMENTS
- Right-side slide-out menu, working open/close, backdrop, escape key, close after selection and smooth scroll to section IDs.
- “Explore WISION” smoothly scrolls to About.
- All Register Now CTAs scroll to Registration section (or open configured Google Form only when real URL exists). Do not pretend a placeholder URL works.
- Sticky bottom mobile registration bar showing “₹50/team” and Register button; account for safe area and never obscure footer/content. Hide or adapt at narrow view if needed.
- Legacy year and category filters actually filter the gallery data.
- Image card opens full-screen accessible lightbox, previous/next and close work.
- Six round accordions genuinely expand/collapse.
- Day 1/Day 2 tabs switch the visible schedule.
- Countdown is live and uses IST deadline correctly.
- Contact controls only active when real numbers exist.
- All buttons have hover/focus/pressed/disabled states and meaningful actions. No fake clickable UI.
- Respect prefers-reduced-motion. Use GSAP/ScrollTrigger for restrained hero reveal and section/card entrance, avoid excessive animations and performance-heavy effects. Ensure animations don't block content or user interaction.

TECHNICAL IMPLEMENTATION
- React + TypeScript, Tailwind and shadcn/ui components consistent with Lovable defaults.
- Use reusable typed data arrays/config objects for gallery, rounds, schedule, team, contacts, official logos and registration URL.
- Centralise all missing content in an obvious eventContent/config file or equivalent so owner can fill actual team names, winner names, contact numbers, form URL, Instagram URL, and replace images later without editing many components.
- Make images responsive with aspect-ratio containers, object-fit, lazy loading and meaningful alt text.
- Build a polished favicon/title/metadata placeholder for WISION 6.0.
- Add semantic landmarks, accessible labels, keyboard support, good contrast, and focus-visible states.
- No backend/database/auth is needed for this informational event website at this stage. Do not enable database or add payment integration. ₹50 is informational; don't collect payment on-site.
- Avoid unnecessary package dependencies.
- Verify all UI interactions and no overflow on mobile. Include sensible loading and empty states.

DELIVERABLE
Implement the complete first version of the site in the app, not just a plan. After building, check the entire page at a 390px viewport, fix layout and functional issues, and report which content is still placeholder. Do not deploy/publish unless asked.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a5129fbd-a2df-4431-9b32-b5a1c0c5af85).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
