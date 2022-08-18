/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/public/assets/images/Background_工作區域 1-02.png')",
      },
      animation: {
        "bounce-custom": "wave 3s linear infinite",
        "navbar-custom": "navbar 0.4s linear",
        "navbarout-custom": "navbarout 0.4s linear"
      },
      backgroundColor: {
        primary: "#0DF99E",
        hover: "#4C01EF",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateY(-3%)" },
          "50%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-3%)" },
        },
        navbar: {
            "0%": { opacity: 0},
            "100%": { opacity: 1},
        },
        navbarout: {
            "0%": { opacity: 1},
            "100%": { opacity: 0},
        }
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
