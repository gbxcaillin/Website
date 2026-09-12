---
name: brand-revamp
description: >-
  Run a complete brand refresh, revamp, redesign or rebrand engagement end to end:
  brand audit, positioning and strategy, verbal identity (name, tagline, messaging,
  tone of voice), visual identity direction, and a full marketing plan (channels,
  campaign calendar, budget, funnel, KPIs) plus a rollout plan. Use this whenever the
  user mentions a brand refresh, revamp, redesign, rebrand, brand strategy,
  repositioning, messaging or identity overhaul, visual identity, go-to-market, launch
  plan, or a "marketing plan" or "content plan" — even if they only ask for one piece
  (just a tagline, just a competitor/brand audit, just a campaign calendar), because the
  frameworks and templates here apply to each part. Prefer this skill over ad-hoc
  answers for any branding or marketing-strategy work.
---

# Brand revamp

A brand engagement is a chain: **who you are for and why you win** (positioning) drives
**what you say and how you look** (identity), which drives **how you reach people and
what you spend** (marketing plan), which drives **how you launch and measure** (rollout).
Work the chain in order. Skipping to visuals or tactics before the positioning is settled
is the single most common way brand work fails, because every later choice then has no
standard to be judged against.

This skill runs the whole chain, or any single link, and produces written deliverables the
client can act on and edit, not slideware abstractions.

## First: scope the engagement

Before producing anything, establish these. Ask only for what you genuinely can't infer
from the conversation, files, or an existing site/repo — come prepared, don't interrogate.

- **Trigger and goal.** Why now? (New strategy, stale look, merger, new market, a
  compliance or trust problem, flat growth.) What does success look like in 6–12 months?
- **Scope.** Full rebrand, a refresh (evolve, don't replace), or one component? A *refresh*
  keeps recognisable equity and modernises; a *revamp/rebrand* is licensed to break from
  the old. Naming stays or changes? Confirm this early — it changes everything downstream.
- **Audience.** Who must this move — buyers, and any other decisive audiences (referrers,
  partners, hires, regulators)? B2B, B2C, or both?
- **Constraints.** Regulated industry? Legal/compliance limits on claims? Fixed assets
  (name, logo, colours, domain)? Budget and timeline? In-house vs agency delivery?
- **Inputs available.** Existing brand assets, analytics, customer research, competitor
  list, sales feedback. Pull from these before asking the user to generate them.

Write the scope back to the user in a few lines and get a nod before going deep. A wrong
assumption about scope wastes the whole engagement.

## Deliverables this skill produces

Depending on scope, produce some or all of these as clean Markdown documents (the client
edits words, not decks). Templates are in `assets/`.

1. **Brand audit** — where the brand stands today, honestly. → `references/brand-audit.md`
2. **Positioning & strategy** — audience, value proposition, positioning statement,
   competitive frame, brand architecture. → `references/positioning.md`
3. **Verbal & visual identity** — name/tagline options, messaging house, tone of voice,
   and a visual identity *direction* (logo, colour, type, imagery, motion).
   → `references/identity.md`
4. **Marketing plan** — objectives, funnel, channel plan, campaign calendar, content
   engine, budget, and KPIs. → `references/marketing-plan.md`
5. **Rollout plan** — sequencing, asset checklist, internal launch, external launch,
   risk and measurement. → `references/rollout.md`

Use the fill-in templates: `assets/brand-brief-template.md` (the strategy foundation) and
`assets/marketing-plan-template.md` (the executable plan).

## How to run a full engagement

Work in phases. After each phase, show the user the output and get a decision before
building on it — later work inherits earlier choices, so an unreviewed positioning error
compounds.

**Phase 1 — Audit.** Read `references/brand-audit.md`. Assess the current brand across
perception, verbal, visual, experience, and market. Output the honest state and the 3–5
issues the revamp must fix. This defines the brief.

**Phase 2 — Positioning & strategy.** Read `references/positioning.md`. Nail the target
audience, the value proposition, the one-line positioning statement, and the competitive
frame. Everything downstream is judged against this. Fill `assets/brand-brief-template.md`.

**Phase 3 — Identity.** Read `references/identity.md`. Derive the verbal identity (name if
in scope, tagline, messaging house, tone of voice) and the visual direction from the
positioning — never from taste alone. State the *why* behind each choice so the client can
defend it.

**Phase 4 — Marketing plan.** Read `references/marketing-plan.md`. Turn the brand into a
demand engine: objectives → funnel → channels → calendar → budget → KPIs. Fill
`assets/marketing-plan-template.md`.

**Phase 5 — Rollout.** Read `references/rollout.md`. Sequence the launch (internal before
external), list every asset to change, and set the measurement baseline so you can prove
the revamp worked.

When the user asks for just one piece, jump straight to that reference file, but sanity
-check that the upstream links exist — a tagline with no agreed positioning is a guess.
If positioning is missing, say so and offer to nail it first; it takes minutes and saves
the deliverable.

## Operating principles

- **Positioning before pixels.** Strategy first, always. If asked for a logo or campaign
  cold, surface the missing positioning and offer to establish it fast.
- **Evidence over adjectives.** "Premium," "innovative," "trusted" are claims, not
  positioning. Tie every claim to a proof point, a differentiator, or a customer truth.
  A brand that can't say what it is *not* hasn't positioned itself.
- **Differentiation is the job.** If a competitor could put their logo on your copy and it
  still reads true, it isn't positioning — it's category boilerplate. Push for the sharp,
  ownable thing.
- **One audience, one primary message.** Trying to speak to everyone dilutes to nothing.
  Pick the audience that most moves the goal and lead with them; segment secondary
  messages beneath, don't average them into mush.
- **Respect equity in a refresh.** Don't torch recognisable, valuable assets to look new.
  Change what's holding the brand back; evolve the rest.
- **Design direction, not final art.** This skill sets visual *direction* (principles,
  palette logic, type pairing, imagery rules, references) that a designer executes. Say so;
  don't pretend a described palette is a finished identity. For actual mockups, hand off to
  a design tool or designer.
- **Compliance is a first-class constraint.** In regulated industries (finance, health,
  legal), a claim that overreaches is a legal risk, not just a wording nit. When claims
  touch a regulated area, flag it and recommend professional sign-off — never imply a
  licence, approval, or outcome the client can't back.
- **Make it executable.** A plan the client can't staff or fund is decoration. Match the
  marketing plan to real budget, headcount and cadence, and say what to cut if resources
  are tight.
- **Everything is editable.** Deliver Markdown the client can rewrite. Offer options
  (usually three) for subjective calls like taglines, with a recommendation and the reason.

## Output and packaging

- One Markdown document per deliverable, named clearly (`brand-audit.md`,
  `positioning.md`, `marketing-plan.md`, …). For a full engagement, also write a short
  `brand-strategy-overview.md` that stitches them together for an exec reader.
- Lead each document with a 3–5 line executive summary — the reader who only reads that
  should still get the decision and the reason.
- Where a polished, shareable artifact would serve the audience better than a terminal
  file (a board-ready strategy one-pager, a launch microsite, a campaign dashboard), offer
  to build it as an artifact after the written strategy is agreed.
- Follow the client's copy rules if they have any (house style, banned words, em-dash
  policy). Mirror them; don't impose your own.
