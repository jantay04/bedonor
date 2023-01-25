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
        mapRed: "#AB3D51",
      },
      height: {
        footerHeight: "300px",
        mapHeight: "528px",
      },
      width: {
        mapWidth: "796px",
      },
      fontFamily: {
        ourFont: " 'Manrope'",
      },
      transitionDelay: {
        tr: "1s",
      },
      spacing: {
        "96px": "107px",
        leftSpacing: "105px",
        rightSpacing: "401px",
        BottomSpacing: "424px",
        LeftIKSpacing: "243px",
        REDTalasSpacing: "27.5px",
        REDOshAndBatkenDivSpacing: "230px",
        REDOshAndBatkenDivSpacingBottom: "40px",
        RedrightSpacing: "300px",
        RedRightSpacingMain: "1135px",
      },
      container: {
        padding: {
          DEFAULT: "1240px",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      lineHeight: {
        "44px": "44px",
      },
      letterSpacing: {
        "0.15px": "0.15px",
      },
      borderColor: {
        borderColor: "rgba(42, 85, 115, 0.5)",
      },
    },
  },
  plugins: [],
};
