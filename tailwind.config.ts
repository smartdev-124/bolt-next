import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0A0A0A',
          900: '#121212',
          800: '#1A1A1A',
          700: '#242424',
          600: '#2D2D2D',
          500: '#363636',
          400: '#404040',
          300: '#737373',
          200: '#A3A3A3',
          100: '#D4D4D4',
        },
        accent: {
          green: '#10B981',
          'green-dark': '#059669',
          'green-light': '#34D399',
          purple: '#8B5CF6',
          'purple-dark': '#6D28D9',
          'purple-light': '#A78BFA',
        },
      },
      animation: {
        flip: "flip 3s linear infinite",
        rotate: "rotate 3s linear infinite",
        'aura': 'aura-pulse 0.5s ease-in-out',
      },
      keyframes: {
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        'aura-pulse': {
          '0%': {
            opacity: '0.8',
            transform: 'scale(0.95)',
          },
          '50%': {
            opacity: '0.4',
            transform: 'scale(1.05)',
          },
          '100%': {
            opacity: '0.8',
            transform: 'scale(0.95)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
