/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'opaque-white': '#ffffffb3',
      'purple':'#545ADE',
      'light-purple': '#545ADE',
      'slate-purple':'#756EA5',
    },
    extend: {
      fontFamily: {
        'Khula': ['Khula', 'sans-serif'],
        'Gelica': ['Gelica', 'sans-serif'],
        'Montserrat':['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
