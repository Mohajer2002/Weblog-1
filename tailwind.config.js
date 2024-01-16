/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Dana: "Dana",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        cWhite: "#fcfcfd",
        cBlack: {
          100: "#7b7e86",
          500: "#1c1c25",
        },
        cBlue: {
          100: "#dce6fe",
          400: "#0e59f2",
          500: "#0e59f2",
          900: "#0b2048",
        },
      },
    },
  },
  plugins: [],
};
