/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "Alata", "Mulish", "Bai Jamjuree", "sans-serif"],
        mono: ["Rokkitt", "monospace"],
      },
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
    },
  },
  plugins: [],
  variants: {
    backgroundColor: ["hover"],
  },
};
