/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1240px",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        ourblue: "#2A5573",
        ourred: "#C53A3F",
        ourredanim: "#CA3338",
        footerBlueText: "#2A5573",
        mapRed: "#AB3D51",
        mapblue: "#D1E5F2",
        inputblue: "#2A5573 20%",
      },
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
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-1%)",
            transtion: "3s",
          },
        },
      },
    },
  },
  plugins: [],
};
