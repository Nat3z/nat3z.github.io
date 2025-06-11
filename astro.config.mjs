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
      bypassToken: "EyUPFxvODK@aP2FEa2tPubY^p!qYhg5h",
      expiration: 60 * 60, // 1 hour in seconds
    }
  })
});