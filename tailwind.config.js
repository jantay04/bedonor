/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ourblue: "#2A5573",
      ourred: "#C53A3F",
      ourredanim: "#CA3338",
      footerBlueText: "#2A5573",
    },
    extend: {},
    width: {
      vsm: "50vmax",
      logo: "9vmax",
      btn: "7vmax",
    },
    height: {
      btn: "3vmax",
      footerHeight: "300px",
    },
    outlineWidth: {
      16: "16px",
    },
    borderRadius: {
      btn: "14px",
    },
    fontFamily: {
      ourFont: " 'Manrope'",
    },
    backgroundColor: {
      ourBlue: " #D1E5F2",
    },
    keyframes: {
      // pulse: {
      //   "0%, 100%": { color: "C53A3F" },
      //   "20%": {
      //     color: "#DF2126",
      //   },
      // },
      bounce: {
        "0%, 100%": {
          transform: " none",
          transtion: "0.5s",
        },
        "43% ": {
          transform: "translateY(-5%)",
          transtion: "0.5s",
        },
      },
    },
  },
  plugins: [],
};
