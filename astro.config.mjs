// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Importamos el plugin

export default defineConfig({
  
  site: 'https://ALPullaguariSW.github.io',
  base: '/mi-web',
  404: '/404',
  vite: {
    plugins: [
      // Pasamos el plugin de tailwind a vite
      tailwindcss(),
    ],
  },
});