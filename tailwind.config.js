/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#4CAF50",
        bgGray: "#F5F5F5",
        textBlack: "#222222"
      }
    }
  },
  plugins: []
}
