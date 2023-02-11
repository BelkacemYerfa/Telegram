/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        UserListBg : 'rgba(0, 0, 0, 0.25)' ,
        SearchInputBg : 'rgba(255, 255, 255, 0.0605)', 
      }
    },
  },
  plugins: [],
}
