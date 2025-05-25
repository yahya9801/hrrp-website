// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Include all your source files where Tailwind CSS is used
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1D4ED8',  // Custom primary color (you can change the color code)
        'secondary': '#F59E0B', // Custom secondary color
        'dark-bg': '#111827',   // Custom dark background color
        'light-text': '#F3F4F6', // Custom light text color
      },
      spacing: {
        '128': '32rem', // Custom spacing for margin/padding (128 is just an example)
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Custom font stack for sans-serif fonts
        serif: ['Georgia', 'serif'],           // Custom font stack for serif fonts
      },
      boxShadow: {
        'xl': '0 4px 6px rgba(0, 0, 0, 0.1)',  // Custom shadow
        'custom': '0 2px 4px rgba(0, 0, 0, 0.2)', // Custom shadow
      },
    },
  },
}