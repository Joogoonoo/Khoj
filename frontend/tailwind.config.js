/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4285F4',
        secondary: '#EA4335',
        tertiary: '#FBBC05',
        quaternary: '#34A853',
      },
    },
  },
  plugins: [],
};
 
