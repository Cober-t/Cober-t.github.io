/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/**/*.{js,jsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
	],
	mode: "jit",
	plugins: [],
	theme: {
		extend: {
			colors: {
				// primary: "#050816",
				primary: "#d9d9d9",
				secondary: "#aaa6c3",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
				orange: "#EF821E",
				darkOrange: "rgba(193, 78, 47, 1)",
				toolBGColor:"rgba(0, 0, 0, 1)",
				backgroundColor: "rgba(30, 30, 30, 1)",
				contactColor: "rgba(49, 49, 49, 1)",
			},
			cursor: {
				'fancy': 'url(hand.cur), pointer',
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			lineWeights: {
				thin: '1',
				light: '2',
				medium: '3',
				bold: '5',
			},
			screens: {
				xs: "450px",
			},
			fontFamily: {
				homeSections: 'Montserrat, sans-serif',
				titleSections: 'Inter, sans-serif',
				bodySection: 'Reckless Neue, sans-serif',
			},
			fontWeight: {
				thin: '100',
				regular: '300',
				bold: '400',
				semibold: '500',
				extrabold: '800',
			}
		},
	},
};