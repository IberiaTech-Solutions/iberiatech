/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand navy — single coherent OKLCH ramp anchored at #002F71 (primary-800).
        // Chroma softens toward both extremes to avoid garish light/dark variants.
        primary: {
          50:  'oklch(96% 0.015 265)',
          100: 'oklch(92% 0.030 265)',
          200: 'oklch(85% 0.055 265)',
          300: 'oklch(75% 0.085 265)',
          400: 'oklch(60% 0.110 265)',
          500: 'oklch(45% 0.130 265)',
          600: 'oklch(35% 0.140 265)',
          700: 'oklch(28% 0.140 265)',
          800: 'oklch(23% 0.125 265)', // ≈ #002F71
          900: 'oklch(18% 0.100 265)',
          950: 'oklch(12% 0.070 265)',
        },
        // Accent — single coherent green ramp anchored at #00C389 (accent-500).
        accent: {
          50:  'oklch(97% 0.025 158)',
          100: 'oklch(93% 0.055 158)',
          200: 'oklch(87% 0.090 158)',
          300: 'oklch(82% 0.130 158)',
          400: 'oklch(78% 0.155 158)',
          500: 'oklch(73% 0.170 158)', // ≈ #00C389
          600: 'oklch(62% 0.160 158)',
          700: 'oklch(52% 0.145 158)',
          800: 'oklch(42% 0.120 158)',
          900: 'oklch(30% 0.090 158)',
        },
        // Neutrals lightly tinted toward the brand hue for subconscious cohesion.
        ink: {
          50:  'oklch(98.5% 0.004 265)',
          100: 'oklch(96.5% 0.006 265)',
          200: 'oklch(92% 0.008 265)',
          300: 'oklch(84% 0.010 265)',
          400: 'oklch(70% 0.012 265)',
          500: 'oklch(55% 0.014 265)',
          600: 'oklch(42% 0.014 265)',
          700: 'oklch(32% 0.012 265)',
          800: 'oklch(22% 0.010 265)',
          900: 'oklch(15% 0.008 265)',
          950: 'oklch(10% 0.006 265)',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
