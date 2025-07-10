import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Traditional Japanese color palette
        wabi: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4dd',
          300: '#d9d2c7',
          400: '#c4b8a8',
          500: '#a8967f',
          600: '#8d7660',
          700: '#6f5c47',
          800: '#594935',
          900: '#453929',
        },
        matcha: {
          50: '#f7f9f5',
          100: '#edf4e7',
          200: '#d7e6c7',
          300: '#b8d19f',
          400: '#94b470',
          500: '#7a9e52',
          600: '#608140',
          700: '#4c6535',
          800: '#3e522d',
          900: '#344427',
        },
        sumi: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#a6a6a6',
          500: '#8c8c8c',
          600: '#737373',
          700: '#595959',
          800: '#404040',
          900: '#262626',
        },
        zen: {
          50: '#fefefe',
          100: '#fcfcfc',
          200: '#f8f8f8',
          300: '#f3f3f3',
          400: '#eeeeee',
          500: '#e8e8e8',
          600: '#cccccc',
          700: '#999999',
          800: '#666666',
          900: '#333333',
        },
      },
      fontFamily: {
        'noto-serif': ['Noto Serif JP', 'serif'],
        'noto-sans': ['Noto Sans JP', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config