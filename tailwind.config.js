/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_bg: "#070724",
      },
      height: {
        px1: "1px",
      },
    },
  },
  plugins: [],
};
