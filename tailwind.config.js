/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        MobiHubTheme: {
          primary: "#FF0000",
          secondary: "#24242C",
          accent: "#23242a",
          neutral: "#353B47",
          "base-100": "#FCFCFC",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
