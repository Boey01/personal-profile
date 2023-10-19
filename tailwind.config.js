const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      textShadow: {
        DEFAULT:
          " 0px 0px 7px #ffff, 0px 0px 14px #ffff, 0px 0px 21px var(--tw-shadow-color), 0px 0px 28px var(--tw-shadow-color), 0px 0px 35px var(--tw-shadow-color) ",
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
  darkMode: "class",
};
