# Phos Design Workspace — Website

Portfolio website for **Phos Design Workspace**, a multidisciplinary architecture & interior design firm in Kolhapur, Maharashtra. Built with Next.js 15 (App Router), Tailwind CSS v4, Motion (Framer Motion) and Lenis smooth scrolling.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Contact form setup

The contact form posts to `/api/contact`, which forwards enquiries to **phosworkspace@gmail.com** via [Web3Forms](https://web3forms.com) (free).

1. Go to web3forms.com and create an access key using `phosworkspace@gmail.com`.
2. Copy `.env.example` to `.env.local` and paste the key:
   ```
   WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. Restart the dev server / redeploy.

Until the key is set, the form shows a graceful fallback pointing visitors to email/phone.

## Editing content

All site copy lives in two typed data files — no component changes needed:

- `src/data/site.ts` — contact details, services, team, stats, memberships
- `src/data/projects.ts` — every project: facts, briefs, sector, images, featured flags

Project photos live in `public/images/projects/<slug>/01.jpg, 02.jpg, …`. To add a photo, drop it in the project's folder with the next number and bump the image count for that project in `projects.ts`.

## Deploying

The site is static-first and deploys anywhere Next.js runs — [Vercel](https://vercel.com) is the zero-config option (import the repo, add the `WEB3FORMS_ACCESS_KEY` env var, deploy). Point the `phosdesignworkspace.in` domain at the deployment when ready.

## Structure

```
src/
  app/            pages (/, /projects, /projects/[slug], /about, /services, /contact)
  components/     shared UI (header, footer, reveal animations, lightbox, …)
  data/           all editable content
public/images/    curated photography from the firm's profile deck
```
