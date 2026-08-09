# Jack Brown · jackbrown.xyz

Personal portfolio site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

Requires Node 22+.

```bash
npm install
npm run dev
```

## Add a project

Open [https://jackbrown.xyz/admin/](https://jackbrown.xyz/admin/).

1. Create a fine grained GitHub token with Contents read/write on `null65/jackbrown.xyz`
2. Sign in on the admin page
3. Add or edit a project and save
4. GitHub Actions publishes the change

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` build and publish via GitHub Actions (GitHub Pages).
The custom domain is set in `public/CNAME` (`jackbrown.xyz`).
