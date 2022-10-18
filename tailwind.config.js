/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'md858': '858px',
        // => @media (min-width: 858px) { ... }

        'sm540': '540px',
        // => @media (min-width: 540px) { ... }
        
        'lg1085': '1085px',
        // => @media (min-width: 1085px) { ... }

        'tiny350': '350px',
        // => @media (min-width: 350px) { ... }
      },
    },
  },
  plugins: [],
}
