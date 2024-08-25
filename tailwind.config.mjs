// import defaultTheme from 'tailwindcss/defaultTheme'
// import '@fontsource/geist-mono';
// import '@fontsource/geist-sans';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// fontFamily: {
			// 	sans: ['Geist sans', ...defaultTheme.fontFamily.sans],
			// },
		},
	},
	plugins: [],
}
