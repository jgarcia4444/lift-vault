module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#1f2937',
        primary: '#3b82f6',
        secondary: '#f4f4f5',
        muted: '#f4f4f5',
        accent: '#f4f4f5',
        destructive: '#dc2626',
        border: '#e5e7eb',
        input: '#e5e7eb',
        ring: '#c7d2fe',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}