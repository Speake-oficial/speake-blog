// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://speake-blog.example.com', // TODO: substituir pela URL real de produção antes do deploy — necessário para sitemap/SEO/canonical funcionarem corretamente
  integrations: [sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});