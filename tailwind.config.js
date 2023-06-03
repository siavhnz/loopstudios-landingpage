/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "alata": ["Alata", "sans-serif"],
      "josefin": ['"Josefin Sans"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/images/mobile/image-hero.jpg')",
        'hero-desktop': "url('/images/desktop/image-hero.jpg')",
      },
      margin: {
        '38': '9.5rem',
        "46": "11.5rem",
      },
      padding: {
        "18": "4.5rem",
      },
      maxWidth: {
        "84": "21rem",
        "289": "72.25rem",
      },
      screens: {
        'semi-xl': '1156px',
        // => @media (min-width: 1156px) { ... }
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
      },
      grayscale: {
        50: '50%',
      }
    },
  },
  plugins: [],
}

