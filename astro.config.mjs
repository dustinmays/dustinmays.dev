// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://dustinmays.dev',
  integrations: [mdx()],
  build: {
    inlineStylesheets: 'auto',
  },
});
