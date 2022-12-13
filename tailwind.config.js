/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
	theme: {
		colors: {
			'marine-blue': 'hsl(213, 96%, 18%)',
			'purplish-blue': 'hsl(243, 100%, 62%)',
			'pastel-blue': 'hsl(228, 100%, 84%)',
			'light-blue': 'hsl(206, 94%, 87%)',
			'strawberry-red': 'hsl(354, 84%, 57%)',

			'cool-gray': 'hsl(231, 11%, 63%)',
			'light-gray': 'hsl(229, 24%, 87%)',
			Magnolia: 'hsl(217, 100%, 97%)',
			Alabaster: 'hsl(231, 100%, 99%)',
			white: 'hsl(0, 0%, 100%)',
		},
		screens: {
			md: '520px',
			lg: '768px',
			xl: '1440px',
		},
		fontFamily: {
			sans: ['Ubuntu', 'ui-sans-serif', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				'aside-mobile-pattern': "url('./assets/images/bg-sidebar-mobile.svg')",
				'aside-desktop-pattern': "url('./assets/images/bg-sidebar-desktop.svg')",
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
