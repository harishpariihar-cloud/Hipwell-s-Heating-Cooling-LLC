/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key)
- `name` (text, not null) — submitter's full name
- `phone` (text, not null) — submitter's phone number
- `email` (text, not null) — submitter's email address
- `service_needed` (text, not null) — which HVAC service they're interested in
- `message` (text, not null) — their inquiry details
- `status` (text, default 'new') — tracks whether the submission has been reviewed
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- Allow anyone (anon + authenticated) to INSERT new submissions — this is a public contact form.
- No SELECT/UPDATE/DELETE for anon — only the database owner can read submissions via the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service_needed text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);