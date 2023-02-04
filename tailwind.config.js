/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E5383B", // usage: bg-primary
        base: "#F5F3F4",
        textBase: "#ba181bff",
        cultured: "#f5f3f4ff",
        "light-gray": "#d3d3d3ff",
        "black-shadows": "#b1a7a6ff",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
