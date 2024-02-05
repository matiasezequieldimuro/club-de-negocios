/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				bungee: ["Bungee", "sans-serif"],
				kanit: ["Kanit", "sans-serif"]
			},
			colors: {
				dark: '#141414',
				light: '#f1eee',
				primary: '#edb91c',
				primary_dark: '#CFA116',
				secondary: '#7AFC16',
				secondary_dark: '#61C216'
			}
		},
	},
	plugins: [],
}
