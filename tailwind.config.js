/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#252138",
      purple: "#9456fe",
      salmon: "#f69282",
      mustard: "#efcb89",
      cyan: "#5bd2d7",
      blueGray: "#9995bd",
    },
    extend: {
      fontSize: {
        "heading-1": ["var(--heading-1)", "var(--heading-1-line-height)"],
        "heading-2": ["var(--heading-2)", "var(--heading-2-line-height)"],
        "heading-3": ["var(--heading-3)", "var(--heading-3-line-height)"],
        "heading-4": ["var(--heading-4)", "var(--heading-4-line-height)"],
        "heading-5": ["var(--heading-5)", "var(--heading-5-line-height)"],
        "heading-6": ["var(--heading-6)", "var(--heading-6-line-height)"],
        body: ["var(--body-text)", "var(--body-text-line-height)"],
        "small-body": [
          "var(--small-body-text)",
          "var(--small-body-text-line-height)",
        ],
        "tiny-body": [
          "var(--tiny-body-text)",
          "var(--tiny-body-text-line-height)",
        ],
      },
    },
  },
  plugins: [],
};
