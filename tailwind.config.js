/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: ['media', 'class'],
    extend: {
      colors:{
        main: '#489441',
        primary: '#064e3b',
        secondary: '#4c1d95',
        error: '#be185d',
        body: '#f5f5f5',
        txt:{
          900: '#0f172a',
          800: '#1e293b',
          600: '#475569',
          light: '#d1d5db',
        },
        accent:{
          emerald: '#022c22',
          teal: '#2dd4bf'
        },
      },
    },
    fontFamily:{
      body: ["Quicksand"],
      pacifico: ["Pacifico"]
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',  /* Chrome, Safari, and Opera */
        },
      });
    },
  ],
}

