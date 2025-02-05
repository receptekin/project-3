/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',    // Parlak mavi - daha görünür bir ana renk
        secondary: '#f97316',  // Canlı turuncu - dikkat çekici aksan rengi
        accent: '#1e293b',     // Koyu lacivert - kurumsal görünüm
      },
    },
  },
  plugins: [],
};
