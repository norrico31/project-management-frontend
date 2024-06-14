/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  darkMode: 'class', 
  // ['selector', '[data-mode="dark"]'],
  // eslint-disable-next-line no-undef
  // plugins: [require("tailwind-scrollbar")],
}

