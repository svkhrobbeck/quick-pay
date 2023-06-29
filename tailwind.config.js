/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "gradient-primary": `linear-gradient(130deg, ${theme("colors.lightBrown")}, ${theme("colors.darkBrown")})`,
        "gradient-secondary":
          "radial-gradient(64% 64% at 71% 36%, #def9fa 0.9%, #bef3f5 17%, #9dedf0 42%, #7de7eb 55%, #5ce1e6 71%, #33bbcf 100%)",
        "gradient-pink": "linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%)",
        "gradient-blue": "linear-gradient(180deg, rgba(188, 165, 255, 0.1) 0%, #214d76 100%)",
        "gradient-light-blue":
          "linear-gradient(158deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 30%, #5ce1e6 52%, #33bbcf 90%)",
        "gradient-black": "linear-gradient(-168deg, #ffffff -279%, #6d6d6d -78%, #11101d 92%)",
      }),
      boxShadow: theme => ({
        card: "0px 20px 100px -10px rgba(66, 71, 91, 0.3)",
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
