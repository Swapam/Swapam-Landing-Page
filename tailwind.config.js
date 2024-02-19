/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FEFEFE",
        accent: "#52a8a6",
        darkBlue: "#363753",
        lightPurple: "#6D6EA5",
        lightGray: "#f0f2f9",
        lightGreen: "#8cc6c5",
        lightGrayText: "#353535",
        lightOrange: "#ee7d2b",
      },
    },
  },
  plugins: [],
};
