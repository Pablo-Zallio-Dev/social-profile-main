/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green": "hsl(75, 94%, 57%)",
        "grey-700": "hsl(0, 0%, 20%)",
        "grey-800": "hsl(0, 0%, 14%)",
        "grey-900": "hsl(0, 0%, 4%)",
      },
      fontFamily:{
        "inter": ["Inter", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

