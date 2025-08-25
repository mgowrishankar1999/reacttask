/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(66, 121, 74, 1) 0%, rgba(97, 206, 112, 1) 100%)',
      },
      colors: {
        'pending-yellow': '#EDB823',
        'failed-red': '#E87474',
        'success-green': '#61CE70',
      },
    },
  },
  plugins: [],
}

