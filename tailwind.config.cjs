/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			"colors": {
				"skobeloff": "#00635D",
				"pacific-blue": "#08A4BD",
				"undermarine-blue": "#446DF6",
				"oxford-blue": "#01172F",
				"light-oxford-blue": "#011e3d",
				"dark-sienna": "#4C212A",
				"middle-blue": "rgb(137 210 220)"
			},
			"minWidth": {
				"lg": "25rem"
			},
			"fontFamily": {
				"hind": [ "Hind", "sans-serif" ],
				"nunito-sans": [ "Nunito Sans", "sans-serif" ],
				"open-sans": [ "Open Sans", "sans-serif" ],
				"pt-serif": [ "Pt Serif", "serif" ],
				"varela-round": [ "Varela Round", "sans-serif" ],
				"raleway": [ "Raleway", "sans-serif" ]
			}
		},
	},
	plugins: [],
}
