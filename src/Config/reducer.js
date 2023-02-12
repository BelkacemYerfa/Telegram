export let initialState = {
 user : {
  photoURL : 'https://wallpaperaccess.com/full/4595683.jpg',
  username : 'Bylka',
  email : 'belkacem.yerfa@gmail.com',
  uid : '111',
 } ,
 userFriends : [{
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`,
  OnlineStatus : false , 
  Selected : false ,
  Members : [{
   name: "Bylka",
   id: '111',
   profilePic: "https://wallpaperaccess.com/full/4595683.jpg" ,
  } ,
  {
   name: "リムル゠テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  }
 ]
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`,
  OnlineStatus : true , 
  Selected : true ,
  Members : [{
   name: "Bylka",
   id: '111',
   profilePic: "https://wallpaperaccess.com/full/4595683.jpg" ,
  } ,
  {
   name: "リムル゠テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  }
 ]
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`,
  OnlineStatus : false , 
  Selected : false ,
  Members : [{
   name: "Bylka",
   id: '111',
   profilePic: "https://wallpaperaccess.com/full/4595683.jpg" ,
  } ,
  {
   name: "リムル゠テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  }
 ]
 },
 {
  name: 'Groupe 1',
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  id: `${crypto.randomUUID()}`,
  OnlineStatus : false ,
  Selected : false ,
  Members : [{
   name: "リムル゠テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  } ,
  {
   name: "リムル゠テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  } ,
  {
   name: "リムル゠テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  }
 ]
 }
]
}

export const reducer = (state , action)=>{
  console.log(action) ;
  switch(action.type){
   case 'SET_USER' : return {
    ...state , 
    user : action.user 
   }
   case 'SET_USER_FRIENDS' : return {
    ...state ,
    userFriends : action.userFriends
   }
   default : return state 
  }
}