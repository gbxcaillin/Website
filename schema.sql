-- D1 schema for tool and contact-form leads.
-- Apply with: npx wrangler d1 execute gbx-leads --remote --file=./schema.sql

CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,
  kind TEXT,
  source TEXT,
  email TEXT,
  name TEXT,
  fields TEXT,        -- JSON of all captured inputs and results
  summary TEXT,       -- the findings report or message
  page TEXT,
  ip TEXT,
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads (email);
