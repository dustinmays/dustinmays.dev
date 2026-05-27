# dustinmays.dev

Personal credibility site. Single-page Astro static build, deployed to Cloudflare Workers static-assets. Cream surface, warm dark brown body, muted terracotta accent. Source Serif 4 throughout. Six sections: hero, Aptx Health, before Aptx Health, about, now, colophon.

Design and product context live in [`PRODUCT.md`](https://github.com/dmays-newb/jobsearch2026/blob/main/PRODUCT.md), [`DESIGN.md`](https://github.com/dmays-newb/jobsearch2026/blob/main/DESIGN.md), and [`BUILD.md`](https://github.com/dmays-newb/jobsearch2026/blob/main/BUILD.md) in the jobsearch repo.

## Develop

Requires Node 22+ (`nvm use 22`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist/
npm run preview  # serves ./dist/ locally
```

## Content

Section copy lives in `src/content/*.mdx`. A content agent edits these files directly without touching layout or styles. Voice rules and source documents are referenced in the MDX file headers.

Photos go in `public/photos/` with the filenames declared in `src/pages/index.astro` (and in `BUILD.md`).

## Deploy

`git push` to `main`. GitHub Actions runs `npm ci && npm run build && wrangler deploy`. Requires two repo secrets:

- `CLOUDFLARE_API_TOKEN` — Workers Scripts edit permission, scoped to this account
- `CLOUDFLARE_ACCOUNT_ID`

First-time setup: in the Cloudflare dashboard, add a custom domain `dustinmays.dev` to the `dustinmays-dev` Worker. DNS is already on Cloudflare.

## Stack

- [Astro](https://astro.build) with MDX, zero JS by default
- [@fontsource/source-serif-4](https://fontsource.org/fonts/source-serif-4) (latin subset, self-hosted)
- Cloudflare Workers static-assets binding (not Pages)
