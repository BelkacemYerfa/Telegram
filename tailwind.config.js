/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        UserListBg : '#202020' ,
        SearchInputBg : 'rgba(255, 255, 255, 0.0605)', 
        testBg : '#E5E5E5' , 
        MessagesTime : '#838383',
        LattestMessageColor : '#888888',
        SelecteDiscussionBg : '#60CDFF',
      } , 
      backgroundImage : {
        bannerImage : 'url(https://4kwallpapers.com/images/wallpapers/windows-11-dark-mode-blue-stock-official-3840x2400-5630.jpg)'
      }
    },
  },
  plugins: [],
}
