/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',

  ],
  theme: {
    extend: {
      fontFamily: {
        'crimson': ['"Crimson Text"', 'serif'],
        'cormorant-SC': ['"Cormorant SC"', 'serif'],
        'cormorant': ['"Cormorant"', 'serif'],
      },
      colors: {
        'dusty-pink': '#DF8F8F',
        'light-purple': '#B1A0BA',
        'blue': '#5C95BC',
        'light-blue': '#70B4E3',
        'button-pink': '#F4A688',
        'darker-button-pink': '#E58A76',
        'sage': '#9DAF96',
        'orange': '#FF8B6B',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
