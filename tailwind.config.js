/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./templates/**/*.html", "**/templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        hyello: {
          950: "#D2A354",
        },
        hred: {
          950: "#B00008",
        },
        hblue: {
          950: "#C5D8E1",
        },
        hgray: {
          1000: "#252525",
        },
      },
      maxWidth: {
        "8.5xl": "96rem",
      },
      fontFamily: {
        Grotesk: ["Schibsted Grotesk", "sans-serif"],
        Play: ["Play", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Coiny: ["Coiny", "cursive"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    plugin(function ({ addVariant }) {
      addVariant("htmx-settling", ["&.htmx-settling", ".htmx-settling &"]);
      addVariant("htmx-request", ["&.htmx-request", ".htmx-request &"]);
      addVariant("htmx-swapping", ["&.htmx-swapping", ".htmx-swapping &"]);
      addVariant("htmx-added", ["&.htmx-added", ".htmx-added &"]);
    }),
  ],
};
