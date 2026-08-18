# Content Audit — Unverified Claims

Generated during the company-site restructure (branch `restructure-company-site`). Every item below needs
confirmation, correction, or a real source from Joseph before this branch is deployed. Nothing fabricated was
added to fill gaps — unresolved items are marked `[TODO: confirm/provide]` directly in the code.

## Removed entirely (no source, not relocated)

| Claim | Was in | Action taken |
|---|---|---|
| "50+ Active Agencies" | `app/page.tsx`, `app/welcome/page.tsx` | Removed. No source for this number. |
| "1,000+ Projects Managed" | `app/page.tsx`, `app/welcome/page.tsx` | Removed. No source for this number. |
| "25+ AI Models" | `app/page.tsx`, `app/welcome/page.tsx` | Removed. Watchmann does not ship a shipped feature offering a choice of 25+ models; replaced with a factual, non-numeric description of Jems AI on the new `/products` page instead. |
| "99.9% Uptime" | `app/page.tsx`, `app/welcome/page.tsx` | Removed. No uptime monitoring/SLA data available. |
| "Join 500+ agencies using Watchmann" | `app/page.tsx` (final CTA) | Removed — directly contradicted the "50+ Active Agencies" stat elsewhere on the same page. Rewrote the CTA without a headcount claim. |
| SOC 2 Type II badge | `app/page.tsx` ("Enterprise-Grade Trust" section) | Removed. No audit report/certificate exists. |
| ISO 27001 badge | `app/page.tsx` | Removed. No certificate exists. |
| GDPR Compliant badge | `app/page.tsx` | Removed. No compliance assessment exists. |
| Testimonial — Daniel Moseray / LandBiznes | `app/page.tsx` | Removed. Not reconfirmed with the named individual. |
| Testimonial — Thomas Kobba / Kobtec Company | `app/page.tsx` | Removed. Not reconfirmed with the named individual. |
| Testimonial — Momodu Thoronka / Configure SL Media | `app/page.tsx` | Removed. Not reconfirmed with the named individual. |
| LinkedIn link (`https://linkedin.com`) | `app/about/page.tsx` (founder section) | Removed — it was a placeholder pointing nowhere useful, not a real profile URL. |

**Action needed:** if any of these numbers or testimonials are real and you can point to a source (analytics
dashboard, signed testimonial confirmation, actual certificate), tell me and I'll put them back with the real
values — don't want to re-guess them.

## Relocated but still flagged (not yet safe to publish as-is)

| Item | Now lives at | Flag |
|---|---|---|
| Client marquee ("LandBiznes · Kobtec · Configure SL · Wafjed · TranscendMovement") | `app/platform/page.tsx` | Kept as a plain list of names (no quotes/claims attached) since it's lower-risk than a fabricated testimonial, but it still needs reconfirmation with each company before launch. Marked with an inline `TODO` comment in the code. |

## Explicit TODO placeholders in the code (must be filled in or removed before launch)

| Item | Location | What's needed |
|---|---|---|
| Alward — category, description, status | `app/page.tsx` (portfolio card), `app/products/page.tsx` (product card) | Nothing about Alward exists anywhere in the codebase or in prior context. Confirm the product name spelling, what it does, who it's for, and its current status (live / in development / planned), or remove the card entirely if it shouldn't be public yet. |
| Founder LinkedIn URL | `app/about/page.tsx` | Provide the real profile URL, or leave it out. |
| Legal entity name / registration status | `app/about/page.tsx` (Location section) | The site currently only states the brand name "Watchmann Technologies" and "Freetown, Sierra Leone." If a distinct registered legal entity name exists and matters for enterprise/investor trust, provide it. |

## Pre-existing issues found but out of scope for this change

- Footer previously linked to `/docs`, `/support`, and `/pricing` — none of these routes exist in the app. This
  was true before the restructure and wasn't part of the requested content-accuracy fixes, so it's flagged here
  rather than silently fixed. Worth a follow-up: either build these pages or remove the links.
- `app/services/page.tsx` was reviewed and contains no numeric/badge/testimonial claims — only category labels
  ("Core"/"Advanced") on a static services list, which are not factual claims requiring a source.
- `/ai-labs`, `/marketplace`, `/academy`, `/blog` were reviewed and contain no hardcoded stats, badges, or
  testimonials — their content is pulled from the Supabase-backed CMS/admin panels, so any inaccurate claims
  there are a content-entry issue, not a code issue.

## Jems AI — patent-sensitivity note

Per instruction, `app/products/page.tsx` and `app/page.tsx` describe Jems AI only at the level of "fuses multiple
AI models into a single, unified intelligence layer" and explicitly avoid describing the underlying mechanism.
Keep any future copy about Jems AI at this same level of abstraction unless legal/patent counsel says otherwise.
