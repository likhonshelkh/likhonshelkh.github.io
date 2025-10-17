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
        background: '#fff',
        foreground: '#000',
        'accents-1': '#fafafa',
        'accents-2': '#eaeaea',
        'accents-3': '#999',
        'accents-4': '#888',
        'accents-5': '#666',
        'accents-6': '#444',
        'accents-7': '#333',
        'accents-8': '#111',
        success: '#0070f3',
        error: '#e00',
        warning: '#f5a623',
        cyan: '#50e3c2',
        violet: '#7928ca',
        highlight: '#ff0080',
      },
      fontFamily: {
        bengali: ['var(--font-bengali)', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.accents-6'),
            a: {
              color: theme('colors.success'),
              '&:hover': {
                color: theme('colors.success'),
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