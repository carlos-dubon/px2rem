/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#373E78",
        "accent-2": "#8689BA",
        "accent-3": "#242A63",
      },
    },
  },
  plugins: [],
};
