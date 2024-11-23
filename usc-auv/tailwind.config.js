/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
                'slide-up': {
                  '0%': { transform: 'translateY(30px)', opacity: '0' },
                  '100%': { transform: 'translateY(0)', opacity: '1' },
                }
              },
              animation: {
                'slide-up': 'slide-up 0.8s ease-out forwards'
       }
    
    },
  },
  plugins: [
    
  ],
}