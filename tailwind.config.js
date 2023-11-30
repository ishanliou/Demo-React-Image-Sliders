/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        arrowAnimation: {
          "50%": {
            transform: "scale(1.1) ",
          },
        },
      },
      animation: {
        arrowAnimation: "arrowAnimation 700ms ease-in-out",
      },
    },
  },
  plugins: [],
};
