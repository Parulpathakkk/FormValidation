/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta : ["Plus Jakarta Sans, sans-serif"],
        inter : ["Inter, sans-serif"]
      },
      colors:{
        darkBlue : '#111927',
        lightBlue : '#F8F9FA',
        purple: '#6366F1'
      }
    },
  },
  plugins: [],
}

