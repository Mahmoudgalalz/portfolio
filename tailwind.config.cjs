/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			'main':'#F9F5EB',
			'prime':'#002B5B',
			'sub-main':'#E4DCCF',
			'accent':'#EA5455',
		},
		container:{
			center:true,
			padding:'2rem',
		},
		extend: {},
	},
	plugins: [],
}
