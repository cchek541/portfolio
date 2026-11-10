# Chinguun — full-stack developer portfolio

English-first site (with a Korean toggle) for software engineering recruiters. Dark engineering-brief layout, case studies, and a live job-matching API demo.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Node.js API (later PR) + Vitest + GitHub Actions

## Local setup

```bash
npm install
npm run dev
```

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

## Deployment

Hosted on Vercel, connected to this repo. Every merge to `main` deploys to production, and each pull request gets a preview URL.

`vercel.json` sends every non-file path except `/api/*` to `index.html`, so client-side routes like `/work/tomyo` work on refresh and direct links.

Do not commit `.env` files or confidential employer code.

CVs: `/cv.pdf` (English) and `/cv-ko.pdf` (Korean), served from `public/`.
