/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
       brand: ['Movement Direct']
    },
    extend: {
      width: {
        '112': '28rem',
        '128': '32rem',
      },
      height: {
        '120': '30rem',
      }
     }
  },
  plugins: [],

}

