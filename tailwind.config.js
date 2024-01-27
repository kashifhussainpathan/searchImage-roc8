/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        5: "5px",
        6: "6px",
      },

      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },

    boxShadow: {
      innerShadow: "inset 0 0 12px 0px rgba(255, 255, 255, 0.8)",
    },
  },
  plugins: [],
};
