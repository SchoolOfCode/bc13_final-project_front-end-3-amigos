/** @type {import('tailwindcss').Config} */
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
      spacing: {
        "2/3": "50%",
        "1/3": "33.3333%",
        "20%": "20%",
        "5%": "5%",
        "10%": "10%",
        "1/3": "33.3333%",
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
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        // put the default values of any config you want themed
        // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
        extend: {
          backgroundImage:  {
              'main-bg':"url('/Blue-Lagoon-in-Malta-6.png')",
          },
          textColor: {
            skin: {
              base: 'var(--color-text-base)',
              muted: 'var(--color-text-muted)',
              inverted: 'var(--color-text-inverted)'
            }
          },
          backgroundColor:{
            'button-fill': '#F87575',
            'main-fill': '#7DAB87',
            'other-fill': '#2C5746',
            'card-background':'#95CCD8'
            // skin: {
            //   fill:'var(--color-button-fill)',
            //   'button-accent':'var(--color-button-accent)',
            //   'card-fill':'var(--color-card-background)',
            //   'button-accent-hover':'var(--color-button-accent-hover)',
            //   'button-muted':'var(--color-button-muted)',
            //   'image-source':'var(--image-source)',
            // }
          },
          height: {
            '50%':'55%',
            '35':'35rem'
          },
          colors: {
            "dark-green": "#2C5746",
            "light-green": "#7DAB87",
            "off-white": "#D9D9D9",
            "google-red": "#DC143C",
            "google-dark-red": "#8B0000",
            "google-orange": "#FF8C00",
            "corn-silk": "#FFF8DC",
            "ctc":'#95CCD8'
          },
         
        }
      },
      themes: [
        {
          // name your theme anything that could be a valid css selector
          // remember what you named your theme because you will use it as a class to enable the theme
          name: 'minimal-theme',
          // put any overrides your theme has here
          // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
          extend: {
            backgroundImage:  {
    
              
              'main-bg': "url('/minimalistBG.jpg')",
              
    
          },
          backgroundColor:{
            'button-fill': '#2C5746',
            'main-fill': '#FCEFF9',
            'other-fill': '#2C5746',
            'card-background':''
            // skin: {
            //   fill:'var(--color-button-fill)',
            //   'button-accent':'var(--color-button-accent)',
            //   'card-fill':'var(--color-card-background)',
            //   'button-accent-hover':'var(--color-button-accent-hover)',
            //   'button-muted':'var(--color-button-muted)',
            //   'image-source':'var(--image-source)',
            // }
          },
          colors: {
            "ctc":'#000000'
          },
          }
        }
      ]
    })
  ],
};
