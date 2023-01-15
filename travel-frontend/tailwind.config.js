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
				"hero" : "url('https://www.deviantart.com/antivvibu/art/Minimalist-Vector-Landscape-769629587')",
				"next" : "url('/right-arrow.png')",
				"prev" : "url('/left-arrow.png')"
			},
			colors: {
				"dark-green": "#2C5746",
				"light-green": "#7DAB87",
				"off-white": "#D9D9D9",
			},
			margin: {
				'7%': '7%'
			}
		},
	},
	plugins: [],
};
