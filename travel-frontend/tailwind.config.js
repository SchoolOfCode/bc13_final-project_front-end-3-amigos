/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  // compiles CSS on the fly 'Just in Time'
  mode: "jit",
  // Removes any unused styles at production reducing file sizes
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      spacing: {
        "2/3": "50%",
        "1/3": "33.3333%",
        "20%": "20%",
        "5%": "5%",
        "10%": "10%",
        "1/3": "33.3333%",
      },
      backgroundImage: {
        "auth-bg": "url('../public/mouintain-bg.jpg')",
        "main-bg": "url('/Blue-Lagoon-in-Malta-6.png')",
      },

      colors: {
        "dark-green": "#2C5746",
        "light-green": "#7DAB87",
        "off-white": "#D9D9D9",
        "google-red": "#DC143C",
        "google-dark-red": "#8B0000",
        "google-orange": "#FF8C00",
        "corn-silk": "#FFF8DC",
        coral: "#F87575",
      },
      margin: {
        "4%": "4%",
        "5%": "5%",
        "6%": "6.6%",
        "7%": "7%",
        "12%": "12%",
        "14%": "14%",
        "22%": "22%",
        "24%": "24%",
        "25%": "25%",
        "26.7%": "26.7%",
        "28%": "28.2%",
        "35%": "35%",
        "46.5%": "46.5%",
        "63%": "63%",
        "100%": "100%",
      },
    },
    fontFamily: {
      lobster: ["Lobster", "cursive"],
    },
  },
  plugins: [],
};
