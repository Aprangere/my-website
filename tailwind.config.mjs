/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Named palette
        'web-orange':  '#ffa600',
        'texas-rose':  '#ffb84d',
        'chardonnay':  '#ffcc80',
        'frangipani':  '#ffe0b3',
        'salmon':      '#ff8a66',

        // Semantic accent
        accent: {
          DEFAULT: '#ff8a66',
          dark:    '#e06545',
          light:   '#ffb84d',
          muted:   '#ffe0b3',
        },

        // Light mode surfaces
        lm: {
          bg:     '#fdf6ee',   // warm cream page background
          card:   '#fff9f2',   // warm white cards
          border: '#e8ddd0',   // warm border
        },

        // Dark mode surfaces
        dm: {
          bg:     '#1e1a16',   // warm charcoal — not black
          card:   '#272119',   // warm dark card
          border: '#3c3228',   // warm dark border
        },
      },
      fontSize: {
        base: ['20px', { lineHeight: '1.7' }],
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
