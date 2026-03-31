/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy:        '#1B2A47',
        beige:       '#C9A96E',
        cream:       '#F5EDD6',
        gold:        '#9B7B3C',
        'cream-light': '#FAF8F2',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body:    ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        brand: '10px',
      },
    },
  },
  plugins: [],
};
