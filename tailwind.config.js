/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ourblue: "#2A5573",
      ourred: "#C53A3F",
    },
    extend: {},
    width: {
      vsm: "50vmax",
      logo: "9vmax",
      btn: "7vmax",
    },
    height: {
      btn: "3vmax",
    },
    outlineWidth: {
      16: "16px",
    },
    borderRadius: {
      btn: "14px",
    },
  },
  plugins: [],
};
