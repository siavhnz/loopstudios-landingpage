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
      },
      padding: {
        "18": "4.5rem"
      },
      maxWidth: {
        "84": "21rem",
        "289": "72.25rem"
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'semi-xl': '1156px',
      // => @media (min-width: 1156px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

