/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Futura PT Light", "sans-serif"],
      serif: ["Sorts Mill Goudy", "serif"],
    },

    extend: {
      colors: {
        mainColor: "#6f2b06",
      },
    },
  },
  variants: {},
  plugins: [],
};
