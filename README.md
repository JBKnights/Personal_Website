# Academic Website

A minimal academic personal site built with [Astro](https://astro.build) and Tailwind CSS v4. Structure is
inspired by researcher sites like [jnaylor.au](https://jnaylor.au/): a home page with a bio, news feed and
selected publications, plus a Publications page, a Mentoring page, and a CV link that opens a PDF directly.
All colors, type, and spacing are original, defined as CSS variables so the look is easy to change.

## Getting started

```sh
npm install
npm run dev
```

Then open http://localhost:4321.

## Making it yours

Everything content-related lives in `src/data/`, so you generally don't need to touch components or pages:

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Name, role, institution, bio, email, social links, CV PDF path |
| `src/data/news.ts` | The "News" list on the homepage |
| `src/data/publications.ts` | Publications (shown on `/publications`; items with `featured: true` also appear on the homepage) |
| `src/data/mentoring.ts` | The `/mentoring` page (students supervised) |

### Adding a photo

By default the hero section shows an initials avatar (`src/components/Avatar.astro`). To use a real photo,
drop an image in `public/images/` and replace the component's contents with an `<img>` tag — instructions are
in a comment at the top of that file.

### Updating the CV

The header's "CV" link opens `public/cv.pdf` directly in a new tab (no in-site summary page — just the PDF).
To update it, replace `public/cv.pdf` with a new file of the same name, or change `cvPdfUrl` in
`src/data/site.ts` if you rename it.

### Colors & fonts

All design tokens (colors, fonts, spacing, corner radius) are defined once at the top of
`src/styles/global.css` under `:root`, with a matching dark-mode block. Change the values there to re-theme
the whole site. The site ships with a light/dark toggle in the header that respects the visitor's OS
preference by default and remembers an explicit choice in `localStorage`.

### Before deploying

Set the `site` field in `astro.config.mjs` to your site's real URL (used for canonical links).

## Build

```sh
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```
