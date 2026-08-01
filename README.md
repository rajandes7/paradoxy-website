# ParadOxy Particles — Marketing Site

The [ParadOxy Particles](https://www.paradoxyparticles.com) marketing site: a single-scroll
homepage (hero, what we do, team, contact) plus a small technology blog. Built with
[Astro](https://astro.build), TypeScript, and Tailwind CSS v4, and deployed statically to
GitHub Pages.

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start the local dev server at `localhost:4321` |
| `npm run build`     | Type-check (`astro check`) and build to `./dist/` |
| `npm run preview`   | Preview the production build locally        |
| `npm run check`     | Run `astro check` only                      |

## Project structure

```
src/
├── components/     Hero, WhatWeDo, Team, Contact, Header, Footer, PostCard, ...
├── layouts/        Layout.astro (document shell + SEO), BaseLayout.astro (+ header/footer)
├── pages/
│   ├── index.astro         single-scroll homepage
│   ├── blog/index.astro    blog index
│   ├── blog/[...slug].astro  individual post pages
│   └── rss.xml.ts
├── data/blog/       markdown blog posts (content collection)
├── content.config.ts  blog collection schema
├── config.ts         site metadata
└── constants.ts       nav sections, team, socials, contact email

brand/                brand guide PDF + source logo files (not shipped to the built site,
                      except the SVG/PNG logos referenced from public/brand)
public/brand/         logo files actually used by the site
```

Homepage sections are anchor-linked (`/#what-we-do`, `/#team`, `/#contact`) so the same nav
links work whether you're already on `/` (smooth in-page scroll) or navigating back from
`/blog`.

## Deployment

Pushes to `main` build and deploy automatically via `.github/workflows/deploy.yml` to GitHub
Pages. `astro.config.ts` is configured for the custom domain `www.paradoxyparticles.com`
(see `public/CNAME`).
