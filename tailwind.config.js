/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Hanken-Grotesk': ['Hanken-Grotesk', 'sans-serif'],
        'Manrope': ['Manrope', 'sans-serif']
      },
      colors: {
        'Light-slate-blue': 'hsl(252, 100%, 67%)',
        'Light-royal-blue': 'hsl(241, 81%, 54%)',
        'Violet-blue': 'hsla(256, 72%, 46%, 1)',
        'Persian-blue': 'hsla(241, 72%, 46%, 0)',
        'White': 'hsl(0, 0%, 100%)',
        'Pale-blue': 'hsl(221, 100%, 96%)',
        'Light-lavender': 'hsl(241, 100%, 89%)',
        'Light-Cyan': 'hsl(193, 38%, 86%)',
        'Neon-Green': 'hsl(150, 100%, 66%)',
        'Grayish-Blue': 'hsl(217, 19%, 38%)',
        'Dark-Grayish-Blue': 'hsl(217, 19%, 24%)',
        'Dark-Blue': 'hsl(218, 23%, 16%)',
        'Dark-gray-blue': 'hsl(224, 30%, 27%)',
        'Dark-gray-blue-alpha': 'hsl(224, 30%, 27%,0.5)',
        'Light-red': 'hsl(0, 100%, 67%)',
        'Light-red-alpha': 'hsla(0, 100%, 67%,0.1)',
        'Orangey-yellow': 'hsl(39, 100%, 56%)',
        'Orangey-yellow-alpha': 'hsla(39, 100%, 56%,0.1)',
        'Green-teal': 'hsl(166, 100%, 37%)',
        'Green-teal-alpha': 'hsla(166, 100%, 37%,0.1)',
        'Cobalt-blue': 'hsl(234, 85%, 45%)',
        'Cobalt-blue-alpha': 'hsla(234, 85%, 45%,0.1)'
      },
      width: {
        '42': '175px'
      }
    },
  },
  plugins: [],
}