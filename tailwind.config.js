/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: { content: ["./src/**/*.vue"] },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
