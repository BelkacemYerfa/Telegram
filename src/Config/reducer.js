export let initialState = {
 user : {
  photoURL : 'https://wallpaperaccess.com/full/4595683.jpg',
  username : 'Bylka',
  email : 'belkacem.yerfa@gmail.com',
  uid : '111',
 } ,
 userFriends : [{
  name: "リムル・テンペスト",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`,
  OnlineStatus : false , 
  Selected : false ,
  Members : [{
   name: "Bylka",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://wallpaperaccess.com/full/4595683.jpg" ,
  } ,
  {
   name: "リムル・テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  }
 ] , 
 Messages : [{
  name : 'Bylka' ,
  userId:'111',
  id :`${crypto.randomUUID()}`  ,
  message : 'Hello , how are you buddy ?' ,
  time : `${new Date().getHours()}` ,
  timeMinutes : `${new Date().getMinutes()}` ,
  profilePic : 'https://wallpaperaccess.com/full/4595683.jpg' ,
  DropDown : false , 
 }, 
 {
  name : 'リムル・テンペスト' ,
  userId : '222' ,
  id: `${crypto.randomUUID()}`,
  message : 'Hello , I am fine , and you ?' ,
  time : `${new Date().getHours()}` ,
  timeMinutes : `${new Date().getMinutes()}` ,
  profilePic : 'https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg' ,
  DropDown : false ,  
}
]
 },
 {
  name: "リムル・テンペスト",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`,
  OnlineStatus : true , 
  Selected : false ,
  Members : [{
   name: "Bylka",
   id: '111',
   profilePic: "https://wallpaperaccess.com/full/4595683.jpg" ,
  } ,
  {
   name: "リムル・テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  }
 ],
 Messages : [{
  name : 'Bylka' ,
  userId:'111',
  id :`${crypto.randomUUID()}`  ,
  message : 'Hello , how are you buddy ?' ,
  time : `${new Date().getHours()}` ,
  timeMinutes : `${new Date().getMinutes()}` ,
  profilePic : 'https://wallpaperaccess.com/full/4595683.jpg' ,
  DropDown : false , 
 }, 
 {
  name : 'リムル・テンペスト' ,
  userId : '222' , 
  id: `${crypto.randomUUID()}`,
  message : 'Hello , I am fine , and you ?' ,
  time : `${new Date().getHours()}` ,
  timeMinutes : `${new Date().getMinutes()}` ,
  profilePic : 'https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg' ,
  DropDown : false ,  
}
]
 },
 {
  name: "リムル・テンペスト",
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
   name: "リムル・テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  }
 ],
 Messages : [{
  name : 'Bylka' ,
  userId:'111',
  id :`${crypto.randomUUID()}`  ,
  message : 'Hello , how are you buddy ?' ,
  time : `${new Date().getHours()}` ,
  timeMinutes : `${new Date().getMinutes()}` ,
  profilePic : 'https://wallpaperaccess.com/full/4595683.jpg' ,
  DropDown : false , 
 }, 
 {
  name : 'リムル・テンペスト' ,
  userId:'222',
  id: `${crypto.randomUUID()}`,
  message : 'Hello , I am fine , and you ?' ,
  time : `${new Date().getHours()}` ,
  timeMinutes : `${new Date().getMinutes()}` ,
  profilePic : 'https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg' ,
  DropDown : false , 
 }
]
 },
 {
  name: 'Groupe 1',
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  id: `${crypto.randomUUID()}`,
  OnlineStatus : false ,
  Selected : false ,
  Members : [{
   name: "リムル・テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  } ,
  {
   name: "リムル・テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  } ,
  {
   name: "リムル・テンペスト",
   id: `${crypto.randomUUID()}`,
   profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" ,
  }
 ],
 Messages : [{
  name : 'Bylka' ,
  userId:'111',
  id : `${crypto.randomUUID()}` ,
  message : 'Hello , how are you buddy ?' ,
  time : `${new Date().getHours()}` ,
  timeMinutes : `${new Date().getMinutes()}` ,
  profilePic : 'https://wallpaperaccess.com/full/4595683.jpg' ,
  DropDown : false , 
 }, 
 {
  name : 'リムル・テンペスト' ,
  userId:'222',
  id: `${crypto.randomUUID()}`,
  message : 'Hello , I am fine , and you ?' ,
  time : `${new Date().getHours()}` ,
  timeMinutes : `${new Date().getMinutes()}` ,
  profilePic : 'https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg' ,
  DropDown : false , 
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
   case 'SET_USER_NEW_MESSAGE' : return {
    ...state ,
    userFriends : action.userFriends
   }
   case 'SET_USER_FRIENDS' : return {
    ...state ,
    userFriends : action.userFriends
   }
   case 'SET_DROPDOWN' : return {
    ...state ,
    userFriends : action.userFriends
   }
   default : return state 
  }
}