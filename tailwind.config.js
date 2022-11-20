/** @type {import('tailwindcss').Config} */
module.exports = {
  //*.js geeft aan dat elke javascript bestand in dit mapje wordt gelezen door tCss
  content: ['./pages/*.js', './components/Navbar.js'],
  theme: {screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    
}}
