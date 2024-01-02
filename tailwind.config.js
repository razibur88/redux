/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        Container: "1320px",
      },
      colors: {
        red: "red",
      },
      backgroundImage: {
        banImg: "url(../src/assets/ban.jpg)",
      },
    },
  },
  plugins: [],
};
