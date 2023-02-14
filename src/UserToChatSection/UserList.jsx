import { useDataLayervValue } from "../Config/dataLayer";
import { UserComponent } from "../UserComponents/UserMessaginChat";
import { useState } from "react";

export const UserList = ({
  handleToggle , 
})=>{
 const [{userFriends}] = useDataLayervValue();
 const [Toggle , setToggle] = useState(false);

 const HandleToggle = ()=>{
  setToggle(!Toggle);
  handleToggle(Toggle);
 }
 
 return (
  <div className="UserList" >
   <div className="ChatTitle">
    <div className="Menu" onClick={HandleToggle} >
     <span className="material-symbols-rounded" >
      menu
     </span>
    </div>
    <p>Chats</p>
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
        userFriends.map( user => (
          <UserComponent  
           key={user?.id}
           photoURL={user?.profilePic}
           name={user?.name}
           lastMessage={user?.lastMessage}
           lastMessageTime={user?.lastMessageTime}
           userId={user?.id}
           OnlineStatus={user?.OnlineStatus} 
           Selected={user?.Selected}
           Members={user?.Members}
          />
        ))
      }
   </div>
  </div>
 )
}