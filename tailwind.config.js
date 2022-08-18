/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
            'background': "url('/public/assets/images/Background_工作區域 1-02.png')",
          },
          animation: {
            'bounce-custom': 'wave 3s linear infinite',
          },
          keyframes: {
            wave: {
              '0%': { transform: 'translateY(-3%)' },
              '50%': { transform: 'translateY(0%)' },
              '100%': { transform: 'translateY(-3%)' },
            },
          },
      },
    },
    plugins: [],
  }