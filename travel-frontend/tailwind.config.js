/** @type {import('tailwindcss').Config} */
module.exports = {
  // compiles CSS on the fly 'Just in Time'
  mode: "jit",
  // Removes any unused styles at production reducing file sizes
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "auth-bg": "url('../public/mouintain-bg.jpg')",
      },
      colors: {
        "dark-green": "#2C5746",
        "light-green": "#7DAB87",
        "off-white": "#D9D9D9",
        "google-red": "#DC143C",
        "google-dark-red": "#8B0000",
        "google-orange": "#FF8C00",
        "corn-silk": "#FFF8DC",
      },
      margin: {
        "7%": "7%",
        "12%": "12%",
        "5%": "5%",
        "10%": "22%",
      },
    },
  },
  plugins: [],
};
