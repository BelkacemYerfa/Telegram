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
        ChatOptionsBg : 'rgba(255, 255, 255, 0.07)',
        ChatOptionsHoverBg : '#0F80D7',
        ChatMessagingComponent : 'rgba(255, 255, 255, 0.0512)' , 
        MessaginInputTextColor:'rgba(255, 255, 255, 0.5442)',
        MessagingComponentBg : 'rgba(255, 255, 255, 0.18)',
        NavBarBg : '#2C2E32',
        ChatOptionBg : 'rgba(255, 255, 255, 0.08)'
      } , 
      backgroundImage : {
        bannerImage : 'url(https://4kwallpapers.com/images/wallpapers/windows-11-dark-mode-blue-stock-official-3840x2400-5630.jpg)'
      } , 
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}
