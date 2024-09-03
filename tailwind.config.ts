import type { Config } from "tailwindcss";

export const colors = {
  gray: {
    100: "#F1F1F1",
    200: "#BDBDBD",
    300: "#606467",
    400: "#22282E",
  },
  "f1-light": "#00FFC5",
  "f1-dark": "#01CA9A",
  cloud: "#D2F3F3",
  consulting: "#FEFFE0",
  security: "#FBE3FF",
  alert: "#F24055",
};

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: colors,
    spacing: {
      "200": "200px",
      "180": "180px",
      "120": "120px",
      "100": "100px",
      "90": "90px",
      "60": "60px",
      "40": "40px",
      "30": "30px",
      "20": "20px",
      "15": "15px",
      "10": "10px",
      "5": "5px",
      "0": "0px",
    },
    size: {
      "300": "300px",
      "90": "90px",
      "70": "70px",
      "50": "50px",
      "5": "5px",
    },
    fontFamily: {
      title: "RFDewiExpanded-Ultrabold",
      subtitle: "RFDewiExpanded-Bold",
      // light: "RFDewiExpanded-Light",
      text: "Bahnschrift",
      "button-md": "RFDewiExpanded",
    },
    screens: {
      "2xl": "1921px",
      xl: "1600px",
      lg: "1300px",
      md: "1024px",
      sm: "770px",
    },
    extend: {},
  },

  plugins: [],
} satisfies Config;
