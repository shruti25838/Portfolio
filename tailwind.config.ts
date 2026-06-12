import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#F7F1E6',
        surface: '#FFFEFA',
        ink: {
          DEFAULT: '#191512',
          2: '#6B6256',
        },
        line: 'rgba(25,21,18,0.13)',
        accent: {
          coral: '#FF4326',
          blue: '#2D52FF',
          green: '#06A567',
          violet: '#6E37F0',
          amber: '#F79A12',
          pink: '#FF3D8B',
        },
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'sans-serif'],
        body: ['Hanken Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
