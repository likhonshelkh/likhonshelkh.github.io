/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--geist-background)',
        foreground: 'var(--geist-foreground)',
        'accents-1': 'var(--geist-accents-1)',
        'accents-2': 'var(--geist-accents-2)',
        'accents-3': 'var(--geist-accents-3)',
        'accents-4': 'var(--geist-accents-4)',
        'accents-5': 'var(--geist-accents-5)',
        'accents-6': 'var(--geist-accents-6)',
        'accents-7': 'var(--geist-accents-7)',
        'accents-8': 'var(--geist-accents-8)',
        success: 'var(--geist-success)',
        error: 'var(--geist-error)',
        warning: 'var(--geist-warning)',
        cyan: 'var(--geist-cyan)',
        violet: 'var(--geist-violet)',
        highlight: 'var(--geist-highlight)',
      },
      fontFamily: {
        bengali: ['var(--font-bengali)', 'system-ui', 'sans-serif'],
        sans: ['Geist Sans', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--geist-foreground)',
            a: {
              color: 'var(--geist-success)',
              '&:hover': {
                color: 'var(--geist-success)',
                opacity: 0.8,
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--geist-foreground)',
            },
            strong: {
              color: 'var(--geist-foreground)',
            },
            blockquote: {
              color: 'var(--geist-accents-6)',
              borderLeftColor: 'var(--geist-accents-2)',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};