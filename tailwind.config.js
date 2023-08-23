/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_bg: "#070724",
        mercury_bg: "#419EBB",
        venus_bg: "#EDA249",
        earth_bg: "#6D2ED5",
        mars_bg: "#D14C32",
        jupiter_bg: "#D83A34",
        saturn_bg: "#CD5120",
        uranus_bg: "#1EC1A2",
        neptune_bg: "#2D68F0",
      },
      height: {
        px1: "1px",
        calcHeight: "calc(100vh - 115px)",
        sliderMenuH: "calc(100vh - 112px)",
      },
      minWidth: {
        "min-200": "150px",
      },
    },
  },
  plugins: [],
};
