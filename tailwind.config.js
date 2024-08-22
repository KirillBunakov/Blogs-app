/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {},
    screens: {
      's': {'min': '300px', 'max': '376px'},
      // 'sm': {'min': '300px', 'max': '376px'},
      'md': {'min': '800px','max': '1200px'}
    },
  },
  plugins: [],
}

