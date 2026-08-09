# Jack Brown · jackbrown.xyz

Personal portfolio site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

Requires Node 22+.

```bash
npm install
npm run dev
```

## Add a project (CMS)

1. Run `npm run dev`
2. Open [http://127.0.0.1:4321/keystatic/](http://127.0.0.1:4321/keystatic/)
3. Click **Projects** → **Create entry**
4. Fill in the fields and save
5. Commit and push (GitHub Actions publishes the site)

The CMS is local only. Your live site stays static on GitHub Pages.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` build and publish via GitHub Actions (GitHub Pages).
The custom domain is set in `public/CNAME` (`jackbrown.xyz`).
