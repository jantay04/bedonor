/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        ourBlue: " #D1E5F2",
      },
      colors: {
        footerBlueText: "#2A5573",
      },
      height: {
        footerHeight: "300px",
      },
      fontFamily: {
        ourFont: " 'Manrope'",
      },
    },
  },
  plugins: [],
};
