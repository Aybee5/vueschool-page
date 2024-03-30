/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*/*.{js,vue,ts}", "./pages/**/*/*.vue"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        md: "40px",
        lg: "135px",
      },
    },
    extend: {
      colors: {
        "primary-color": "#212435",
        "light-color": "#F3F5FF",
        "brand-color": "#0BD88F",
        "gray-color": "#A0A8C3",
        "dark-color": "#2B2F44",
        "gray-header": "#737B98",
      },
    },
  },
  plugins: [],
};
