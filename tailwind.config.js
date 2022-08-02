/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0984e3",
        black1: "#272833",
        gray1: "rgb(233, 231, 231)",
        gray2: "rgba(0, 0, 0, 0.5)",
        green1: "rgba(105, 188, 103, 1)",
      },
    },
  },
  plugins: [],
};
