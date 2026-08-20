# biipmk

A practice rebuild of [biipmk.com](https://biipmk.com) — a mechanical-keyboard and keycap design studio. The goal was to reconstruct the layout and motion from measurements, not to copy markup. Spacing and type come from `lib/tokens.ts`. Pages are ordinary semantic components. The works list is data, not hard-coded cards.

This project is not affiliated with the original studio. Product names and photography are study material only.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Full-bleed keyboard hero, cursor image-stamp trail, intro, selected works |
| `/works` | Table of works; rows invert on hover and float a preview near the pointer |
| `/works/[slug]` | Individual work page |
| `/about` | Studio copy |
| `/contact` | Contact and social links |
| `/privacy-policy`, `/terms-of-service` | Legal stubs |

Theme is dark-first, with a toggle. Lenis handles smooth scroll. Reveal motion uses Motion.

Works data: `lib/works.ts` and `lib/work-cms.json`.

## Stack

- Next.js 16 (App Router) and React 19
- Tailwind CSS v4, shadcn/ui
- Lenis
- Motion (`motion`)

## Run

```bash
npm install
npm run dev
```

Dev server: [http://localhost:3000](http://localhost:3000)

```bash
npm run build
npm run start
```
