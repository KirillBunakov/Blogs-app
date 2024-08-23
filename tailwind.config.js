/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {},
    screens: {
      's': {'max': '400px'},
      // 'sm': {'min': '300px', 'max': '376px'},
      'md': {'min': '401px','max': '900px'}
    },
  },
  plugins: [],
}

