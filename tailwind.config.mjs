// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Aquí definimos la utilidad que falta
      spacing: {
        '96': '24rem', // Le decimos a Tailwind que w-96 = 24rem
      },
      // También definimos las animaciones para usarlas como clases
      animation: {
        'scroll-left': 'scroll-left 40s linear infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [], 
}