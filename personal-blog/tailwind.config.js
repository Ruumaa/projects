/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1F2633',

          secondary: '#5D7398',

          accent: '#272F3F',

          neutral: '#0D1F22',

          'base-100': '#CAD2C5',

          info: '#C0C9D8',

          success: '#57A773',

          warning: '#E7BE36',

          error: '#ED461D',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
