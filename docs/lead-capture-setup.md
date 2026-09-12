# Lead capture setup (Cloudflare D1 + Resend)

The interactive tools and the contact form POST to the Pages Function at
`functions/api/tool-lead.js` (route `/api/tool-lead`). That function logs every
submission to a D1 database and emails the owner plus, for tools, the visitor.

Everything is best effort: with nothing configured the site still works, but
submissions are only captured once the steps below are done. Do the database
first (works immediately), then email (best after the domain is on Cloudflare).

## 1. Database (Cloudflare D1)

From the repo root, with Wrangler (`npm i -g wrangler`, then `wrangler login`):

```bash
# Create the database (copy the database_id it prints)
npx wrangler d1 create gbx-leads

# Create the table
npx wrangler d1 execute gbx-leads --remote --file=./schema.sql
```

Bind it to the Pages project so the Function can see it:

- Cloudflare dashboard -> Workers & Pages -> **gbx** -> Settings -> Functions ->
  **D1 database bindings** -> Add binding.
- Variable name: `DB` (exactly). Database: `gbx-leads`. Save.
- Add it for **Production** (and Preview if you want preview captures).

Redeploy (any push, or "Retry deployment"). Submissions now log to D1.

### Reading your leads

```bash
# Recent leads
npx wrangler d1 execute gbx-leads --remote \
  --command "SELECT created_at, source, email, name FROM leads ORDER BY id DESC LIMIT 25;"

# One full record (fields is JSON)
npx wrangler d1 execute gbx-leads --remote \
  --command "SELECT * FROM leads WHERE id = 1;"
```

## 2. Email (Resend)

1. Sign up at https://resend.com with `admin@gbxps.com`.
2. Add the domain **gbxps.com** and add the DNS records Resend gives you (SPF,
   DKIM). This is easiest once DNS is on Cloudflare. Until the domain is
   verified, Resend only sends to your own verified address, so visitor emails
   will not reach real visitors yet — the database still captures everything.
3. Create an **API key**.
4. In Cloudflare -> Pages -> **gbx** -> Settings -> Environment variables, add
   (Production):
   - `RESEND_API_KEY` = the key (mark as **encrypted / secret**)
   - `MAIL_FROM` = `GBX Professional Services <noreply@gbxps.com>` (use
     `onboarding@resend.dev` before the domain is verified)
   - `MAIL_TO` = `admin@gbxps.com`
5. Redeploy.

## 3. What gets sent

- **Owner** (`MAIL_TO`): every submission, with the email, name, all inputs and
  results, and the page. Reply-to is set to the visitor.
- **Visitor**: for a tool, their findings plus a short note; for a contact
  enquiry, an acknowledgement.

## Notes

- The honeypot field (`_gotcha`) silently drops bot submissions.
- No secrets live in the repo; they are set in Cloudflare only.
- Local `vite preview` does not run Functions. To test the Function locally use
  `npx wrangler pages dev dist` after a build.
