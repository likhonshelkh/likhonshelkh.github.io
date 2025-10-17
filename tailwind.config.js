/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DCFF50',
        secondary: '#7B61FF',
        black: '#161616',
        white: '#FFFFFF',
        red: '#FF3D00',
        orange: '#FF9900',
        yellow: '#FFE600',
        green: '#6FEC5B',
        blue: '#00B2FF',
      },
      fontFamily: {
        bengali: ['var(--font-bengali)', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.secondary'),
                opacity: 0.8,
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};