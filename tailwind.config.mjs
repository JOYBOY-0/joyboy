/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: '#0B0B0B',
				light: '#f9f8f3',
				paper: '#f2eee8',
				cream: '#fbf2e5',
				lavender: '#8976ff',
				candy: '#ff84eb',
				sugar: '#ffd439',
				'theme-bg': 'var(--theme-background)',
				'theme-color': 'var(--theme-color)',
				'theme-accent': 'var(--theme-accent)',
				'theme-secondary': 'var(--theme-secondary)'
			},
			fontFamily: {
				heading: 'var(--font-heading)',
				body: 'var(--font-body)'
			}
		}
	},
	plugins: []
}
