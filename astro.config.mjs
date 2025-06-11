// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel({
    isr: {
      bypassToken: "0023403204032403204abfw",
      expiration: 60 * 60, // 1 hour in seconds
    }
  })
});