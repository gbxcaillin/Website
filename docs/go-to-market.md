# Go-to-market playbook

How GBX Professional Services turns the website into a steady source of enquiries.
This file records the decisions made, the decisions still open, and the
operating rhythm. It is deliberately practical. Update it as things change.

Written after a review of comparable firms (Audere, Business Health, Fortitude
and others). The short version of that review: GBX Professional Services is
under-proven and under-packaged, not under-built. The site already has more
useful tools and content than most competitors. What it lacked was a packaged
entry offer, sharper positioning, benchmark data and distribution. Case
studies and testimonials are the remaining gap and come later.

## 1. The entry offer: The Performance Diagnostic

Live at `/diagnostic`. Copy lives in `src/content.js` under `diagnostic`.

The ladder is deliberate. Each step is small enough to say yes to on its own:

1. Free two-minute Business Health Check (the tool). Captures an email in
   exchange for the results, and feeds the benchmark data below.
2. Free 30-minute diagnostic call, phone or Microsoft Teams. Qualifies the
   prospect and sets up the Diagnostic.
3. The Performance Diagnostic: two weeks, fixed fee, fixed scope, written
   report and 90-day plan the client owns.

### Decisions still open (yours)

| Decision | Options | Recommendation |
| --- | --- | --- |
| Publish a price? | Publish "From $X + GST", or keep "Quoted up front" | Publish once you have run two or three. A visible price is a strong qualifier and matches the "fixed fee, no surprises" positioning. Set `diagnostic.price.value` in `src/content.js`. |
| Price level | Value-based; two weeks of senior time plus a readout with three leaders | For a 5 to 50 person firm, somewhere between $4,500 and $9,500 + GST is typical for a fixed-scope diagnostic in this market. Start at the lower end and lift once case studies exist. |
| Credit against delivery? | Credit the fee against a Deliver engagement signed within 60 days, or no credit | Offer the credit. It makes the Diagnostic feel risk-free and nudges the next step. Add a line to `diagnostic.price.note` when decided. |
| Tiering | One Diagnostic, or a "Lite" (one week, numbers only) and "Full" version | One offer for now. Tiers add friction before you have volume. |
| Guarantee | "If you do not find at least one opportunity worth more than the fee, we refund it" | Worth considering after a few runs. Strong differentiator, low real risk. |

### Delivery checklist (so the offer is real on day one)

- A one-page data request template (P&L by segment, pipeline export, capacity
  or utilisation numbers, systems list).
- An interview guide for leaders and for staff (30 to 45 minutes each).
- The scoring rubric: the same six dimensions as the Health Check tool so the
  free result and the paid result line up.
- A report template: one page summary, scored view, three to five opportunities
  (gain, effort, sequence), 90-day plan with owners and measures.
- A mutual confidentiality agreement.
- A readout agenda (60 to 90 minutes, all three leaders present).

## 2. Positioning

The six points the site now presses everywhere (`whyUs` in `src/content.js`,
shown on the Services and Diagnostic pages):

1. Three leaders, three disciplines (systems, brand and communication, education).
2. Built for regulated businesses, with no AFSL and no products to sell, so
   recommendations are not tied to anything.
3. Tools before talk: free tools and a published method to test the thinking.
4. AI that is practical, not theatrical.
5. Engagements built to end.
6. Melbourne-based, delivering globally.

Use the same six points in LinkedIn profiles, proposals and the diagnostic
call. Consistency is the point.

One-line positioning for bios and intros:

> GBX Professional Services is a Melbourne consultancy that helps
> professional-services firms and advice practices run sharper and grow with
> discipline. Three leaders, one operating view, and free tools you can use
> before you ever hire us.

## 3. Benchmark data

Competitors with the strongest authority (Business Health) lead with data.
GBX Professional Services can build the same asset from the Health Check.

What is now in place:

- Every Health Check submission stores the six dimension scores and the
  overall score in D1 (`fields` JSON on the `leads` table).
- `/api/benchmarks?tool=health-check` aggregates anonymous averages (latest
  submission per email) and returns them once there are at least 25 results.
- The Health Check results screen shows "your score is N points above or below
  the average of X businesses" automatically once that threshold is met.

Nothing is shown until the sample is real, so there is no risk of a
misleading number while the site is new.

To make this an authority asset over time:

- At 100 results, publish an insights article: "What 100 businesses told us
  about where they are weakest", with the average by dimension and the two
  most common weak spots. Repeat every 100 or every quarter.
- Add an optional "sector" question to the Health Check once volume allows
  (advice practice, accounting, legal, other professional services) so
  benchmarks can be cut by sector. That is the step that makes the data
  genuinely valuable to a prospect.
- Turn the annual cut into a short downloadable report gated by email.

Requires the D1 binding to be live. See `docs/lead-capture-setup.md`.

## 4. Distribution

A good site with no traffic produces no enquiries. The rhythm below is light
enough to sustain and each piece feeds the next.

### Weekly (about two hours)

- Two LinkedIn posts from the three leaders' personal profiles (not the
  company page, which gets far less reach). One practical observation from
  client work, one link to a tool or article. Rotate authors.
- Reply to comments and to five to ten relevant posts by prospects and peers.

### Monthly

- One new insights article (the library already has thirty; keep the cadence).
- One newsletter issue to the subscriber list: the article, one tool, one
  observation. The footer signup and the tool email captures feed this list.
- Review the leads table: who took which tool, what their scores were, and
  who is worth a personal follow-up note.

### Quarterly

- Benchmark article from the Health Check data (see section 3).
- Review the Diagnostic funnel: Health Check completions, calls booked,
  Diagnostics sold, Diagnostics converted to delivery. Adjust the copy or the
  offer based on where the drop-off is.

### One-off setup

- Google Business Profile for 260 Spencer Street, category "Business
  management consultant", with the site, the email and the same one-line
  positioning above. This is the single biggest local search lever.
- Google Search Console verification, and submit `sitemap.xml`.
- Add the site, the Diagnostic and the tools to each leader's LinkedIn
  profile (featured section and headline).
- Set `site.bookingUrl` in `src/content.js` to a Microsoft Bookings page so
  "Book a call" is a one-click booking rather than a form.
- Paid search is optional. If tried, one small campaign on "business
  consultant Melbourne" and "advice practice consultant", landing on
  `/diagnostic`, with a strict monthly cap. Do not run it until the
  Diagnostic has been delivered at least twice.

## 5. Funnel measurement

Cloudflare Web Analytics gives page views. The `leads` table gives everything
after that. Track monthly:

| Stage | Source |
| --- | --- |
| Visits to `/diagnostic` and `/tools/health-check` | Cloudflare Web Analytics |
| Health Check completions with email | `leads` where source = Business Health Check |
| Contact enquiries mentioning the Diagnostic | `leads` where kind = contact and fields include The Performance Diagnostic |
| Calls held | Manual |
| Diagnostics sold and delivered | Manual |
| Delivery engagements that followed | Manual |

Once case studies exist, add them to `src/content.js` under `caseStudies`
and set `featured: true` on the two best. The home page teaser appears
automatically once two are published.
