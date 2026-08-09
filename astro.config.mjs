import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

const isBuild = process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  site: 'https://jackbrown.xyz',
  trailingSlash: 'always',
  // Keystatic admin is for local editing only (GitHub Pages is static).
  integrations: [react(), ...(isBuild ? [] : [keystatic()])],
});
