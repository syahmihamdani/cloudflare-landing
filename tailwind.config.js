/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cloudflare: {
          orange: '#f48120',
          yellow: '#faad3f', 
          black: '#404041', 
          blue: '#070033',
          white: '#FFFFFF',

        },
      },
      plugins: [],
      corePlugins: [],
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    }
  }
}