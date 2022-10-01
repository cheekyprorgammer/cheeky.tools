/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter'],
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        
        'fade-in': {
            '0%': {
                opacity: '0'
            },
            '100%': {
                opacity: '1'
            },
        },

        'wiggle': {
            '0%, 100%': {
              transform: 'rotate(-3deg)'
            },
            '50%': {
              transform: 'rotate(3deg)'
            },
        },
      },
      animation: {
          'fade-in-down': 'fade-in-down 0.5s ease-out',
          'fade-in': 'fade-in 0.5s ease-in',
          'wiggle': 'wiggle 1s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}
