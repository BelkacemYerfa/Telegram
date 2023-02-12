import { useState } from "react"
import { UserComponent } from "../UserComponents/UserMessaginChat"

export const UserList = ()=>{
 const [users, setUsers] = useState([{
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`
 },
 {
  name: "リムル゠テンペスト",
  lastMessage: "Hello",
  lastMessageTime: "12:00",
  profilePic: "https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg" , 
  id: `${crypto.randomUUID()}`
 },
])
 return (
  <div className="UserListHolder" >
   <div className="ChatTitle">
    <div className="Menu" >
     <span className="material-symbols-rounded">
      menu
     </span>
    </div>
    Chats
   </div>
   <form action="" className="SearchForm" >
    <input id="search" className="SearchInput" type="search" placeholder="Search" />
     <div className="SearchHodlerIcon" >
      <span className="material-symbols-rounded">
       search
      </span>
     </div>
   </form>
   <br />
   <div className="UserListHolder" >
      {
        users.map( user => (
          <UserComponent  
           photoURL={user?.profilePic}
           name={user?.name}
           lastMessage={user?.lastMessage}
           lastMessageTime={user?.lastMessageTime}
           userId={user?.id} 
          />
        ))
      }
   </div>
  </div>
 )
}