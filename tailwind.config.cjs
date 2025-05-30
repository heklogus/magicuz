module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-header',
    'text-primary',
    'bg-primary',
    'fill-primary',
    'border-primary',
    'hover:bg-transparent',
    'hover:text-primary',
    'hover:border-primary',
    'hover:fill-primary',
    'gap-12',
    'md:gap-12',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC400',
        secondary: '#292727',
      },
      backgroundImage: {
        'header': "url('/public/img/bg.png')",
      }
    },
  },
  plugins: [],
};
