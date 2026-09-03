# Seven

A landing page for a fictional web agency, built as a learning project.

No client and no real business behind it — I built it to practise structuring a long marketing page
without it turning into one unmaintainable file.

## What I was practising

- **Section components.** The page is Hero, Services, Process, Portfolio, Pricing, FAQ, Contact and
  Footer, each its own component. The point was finding the level where a section is reusable but
  still readable, instead of driving everything from one config object.
- **Motion with restraint.** Framer Motion drives scroll reveals in a few places rather than
  animating every element.
- **Routing.** React Router serves the landing page plus Impressum and Datenschutz — the two pages a
  German business site legally needs.
- **Tailwind** with tokens defined in `tailwind.config.ts` rather than ad-hoc utility values.

## Stack

React 18 · TypeScript · Vite · React Router · Tailwind CSS · Framer Motion · deployed on Vercel

## Running it

```bash
npm install
npm run dev
```

`npm run build` runs `tsc -b` first, so a type error fails the build.
