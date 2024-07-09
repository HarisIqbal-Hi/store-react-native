/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        '1':'1px',
        '2':'2px',
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      borderColor: theme => ({
        ...theme('colors'),
        secondary: theme('colors.secondary'),
      }),
      colors: {
        
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        error: {
          DEFAULT: "#CF6679", // Your error color
          // You can define shades if needed
          100: "#FF8888",
          200: "#FF4444",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '64px',
      },
    },
  },
  plugins: [
    // require('tailwindcss-opacity'),
  ],
};