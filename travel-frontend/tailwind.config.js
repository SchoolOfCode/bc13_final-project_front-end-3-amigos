/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
// const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  future: {
    // allows hover only on supported devices i.e. not touchscreen/mobile
    hoverOnlyWhenSupported: true,
  },
  // compiles CSS on the fly 'Just in Time'
  mode: "jit",
  // Removes any unused styles at production reducing file sizes
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'mob':'370px',
        'fold4':'768px',
        'mob-xl':'390px',
        ...defaultTheme.screens,
      },
      spacing: {
        "2/3": "50%",
        "1/3": "33.3333%",
        "20%": "20%",
        "5%": "5%",
        "10%": "10%",
        "1/3": "33.3333%",
      },

      backgroundImage: {
        "auth-bg": "url('/auth.jpg')",
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
        "3%": "3%",
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
      courgette: ['Courgette','cursive']
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          backgroundImage: {
            "main-bg": "url('/Blue-Lagoon.webp')",
          },
          textColor: {
            skin: {
              base: "#ffffff",
            },
          },
          height: {
            "50%": "55%",
            35: "35rem",
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
        },
      },
      themes: [
        {
          name: "minimal-theme",
          extend: {
            backgroundImage: {
              "main-bg": "url('/darkMode.webp')",
            },

            colors: {
              ctc: "#2C5746",
            },
          },
        },
      ],
    }),
  ],
};
