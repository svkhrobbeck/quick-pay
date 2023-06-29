/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "gradient-primary": `linear-gradient(130deg, ${theme("colors.lightBrown")}, ${theme("colors.darkBrown")})`,
        "gradient-secondary": `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)`,
        "gradient-pink": `linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%)`,
        "gradient-blue": `linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%)`,
        "gradient-light-blue": `linear-gradient(158deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 30%, #5ce1e6 52%, #33bbcf 90%)`,
      }),
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        lightWhite: "rgba(255, 255, 255, 0.7)",
        lightBlue: "rgba(9, 151, 124, 0.1)",
        lightBrown: "#272727",
        darkBrown: "#11101d",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  screens: {
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  plugins: [],
};
