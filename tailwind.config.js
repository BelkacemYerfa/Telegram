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
        ChatOptionBg : 'rgba(255, 255, 255, 0.08)',
        UserMessageBg : '#1566A3' , 
        UserFriendMessageBg : ' rgba(255, 255, 255, 0.1)',
        SettingImageComponentBg : 'rgba(0, 0, 0, 0.2)',
        MessageComponentBg : 'rgba(0, 0, 0, 0.3)',
      } , 
      backgroundImage : {
        bannerImage : 'url(C:/Users/MON HP/Desktop/systemos/src/assets/img21.png)'
      } , 
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}
