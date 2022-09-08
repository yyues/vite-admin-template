module.exports = {
  content: [
    "./index.html",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white': '0 1px 3px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}