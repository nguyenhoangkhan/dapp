module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-white": "#E9EAEC",
        "primary-blue": "#06D4BF",
        text: "#22313F",
        black: { DEFAULT: "#010101", 1: "#141414" },
      },
    },
    container: {
      center: true,
      screens: {
        "2xl": "1320px",
      },
    },
  },
  variants: {},
  plugins: [],
};
