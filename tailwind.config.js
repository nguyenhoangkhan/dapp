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
        green: { DEFAULT: "#156B56" },
        red: "#EB4141",
        gray: { DEFAULT: "#A7ADB2" },
        yellow: { DEFAULT: "#f7b735" },
        "shadow-btn": "0px 0px 20px 0px rgb(6 212 191)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "798px" },

      sm: { max: "639px" },
    },
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
        xl: "1279px",
        lg: "1023px",
        md: "798px",
        sm: "649px",
      },
      padding: {
        DEFAULT: "16px",
      },
    },
  },
  variants: {},
  plugins: [],
};
