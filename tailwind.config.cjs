/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      dark: "#30475e",
      darker: "#222831",
      primary: "white",
      secondary: "#f2a365",
    },
    fontFamily: {
      sans: "ShareTech",
      mono: "ShareTechMono",
    },
  },
  plugins: [],
};
