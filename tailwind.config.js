// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add Roboto to the fontFamily
      },
      animation: {
        blink: 'blink 3s infinite',
        ringing: "ringing 1s ease-in-out infinite", // Adds a custom blink animation
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        ringing: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(-10deg)' },
          '20%': { transform: 'rotate(10deg)' },
          '30%': { transform: 'rotate(-10deg)' },
          '40%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-5deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '70%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'], // Add hover variant for animation
    },
  },
  plugins: [],
}
