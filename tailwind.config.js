/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-quicksand)'],
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(215, 20%, 25%)', // slate-800
          foreground: 'hsl(210, 40%, 98%)', // slate-50
        },
        muted: {
          DEFAULT: 'hsl(215, 16%, 47%)', // slate-500
          foreground: 'hsl(215, 20%, 65%)', // slate-400
        },
        background: {
          DEFAULT: 'hsl(0, 0%, 100%)', // white
          foreground: 'hsl(215, 25%, 27%)', // slate-700
        },
      },
    },
  },
  plugins: [],
} 