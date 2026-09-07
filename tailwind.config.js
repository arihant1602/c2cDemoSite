/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          yellow: '#ffe17c',
          charcoal: '#171e19',
          sage: '#b7c6c2',
          white: '#ffffff',
          black: '#000000',
          darkgray: '#272727',
          problem: '#f4f4f5',
          amber: '#ffbc2e',
        }
      },
      fontFamily: {
        heading: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['"Satoshi"', 'sans-serif'],
      },
      boxShadow: {
        'hard-sm': '2px 2px 0px 0px #000000',
        'hard': '4px 4px 0px 0px #000000',
        'hard-lg': '8px 8px 0px 0px #000000',
        'hard-xl': '12px 12px 0px 0px #000000',
        'hard-white': '4px 4px 0px 0px #ffffff',
        'hard-white-lg': '8px 8px 0px 0px #ffffff',
      },
      borderRadius: {
        'neo-btn': '0.75rem', // 12px
      }
    },
  },
  plugins: [],
}
