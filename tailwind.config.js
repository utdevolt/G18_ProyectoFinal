/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      },
      colors: {
        "pink" : "#F195B2",
        "blue" : "#62C3E7",
        "bpink" : "#f8cce0", // baby pink
        "bgreen": "#c4e5c9", // baby green
        "bblue": "#d1e5f8",
        "bmint": "#8af0ce",
        "byellow": "#eff57c",
        "peach": "#f8b184",
        "lavender": "#d8d5f7",
      }
    },
  },
  plugins: [],
}

