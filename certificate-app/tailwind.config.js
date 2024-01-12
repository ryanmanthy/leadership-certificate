/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          '500': '#CC0000', // Customize the bg-red-500 color here
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

