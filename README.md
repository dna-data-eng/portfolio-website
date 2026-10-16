# Dan Nyarkoh Andoh | Portfolio

Portfolio site for an aspiring junior database administrator, built with Next.js, Tailwind CSS, and Supabase (PostgreSQL).

## What is on the site

- About, experience, skills, and contact details
- A small live project: weather readings for Accra are fetched from OpenWeatherMap, stored in a PostgreSQL table, and charted for the last 24 hours
- CV and resume viewer (PDF files are served from a Supabase storage bucket)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Create a `.env.local` file (never commit it):

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
OPENWEATHER_API_KEY=
```

## Notes

- The Supabase anon key is public by design, so access to the `weather_logs` table should be controlled with Row-Level Security policies.
- The site is deployed on Vercel.
