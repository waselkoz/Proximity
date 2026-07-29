/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#be3231',
          light: '#d64544',
          dark: '#862423',
        },
        background: {
          DEFAULT: '#ffffff',
          elevated: '#f8f8f8',
        },
        text: {
          DEFAULT: '#0c0402',
          muted: '#555555',
        },
        border: '#eaeaea',
      },
    },
  },
  plugins: [],
}

