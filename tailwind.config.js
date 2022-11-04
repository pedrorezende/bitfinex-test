/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Roboto", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "bitfinex-blue": {
          DEFAULT: "#172C3D",
          50: "#A8C6DE",
          100: "#99BCD9",
          200: "#7BA9CD",
          300: "#82baf6",
          400: "#4481B4",
          500: "#396C96",
          600: "#284556",
          700: "#172C3D",
          800: "#112331",
          900: "#121F27",
        },
      },
    },
  },
  plugins: [],
};
