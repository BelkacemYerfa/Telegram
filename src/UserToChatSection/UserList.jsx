import { useDataLayervValue } from "../Config/dataLayer";
import { UserComponent } from "../UserComponents/UserMessaginChat";
import { useState } from "react";

export const UserList = ({
  handleToggle , 
})=>{
 const [{userFriends}] = useDataLayervValue();
 const [Toggle , setToggle] = useState(false);
 const [SearchUsers , setSearchUsers] = useState([]);

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
    <input 
    id="search" className="SearchInput" 
    type="search" placeholder="Search"
    onChange={(e)=>{
      e.preventDefault();
      userFriends.forEach( friend => {
        if(friend.name.toLowerCase().includes(e.target.value.toLowerCase())
         && !SearchUsers.includes(friend)
        ){
          setSearchUsers([...SearchUsers , friend])
        }
      });
      if(e.target.value === ""){
        setSearchUsers([])
      }
    }}
    />
     <div className="SearchHodlerIcon" >
      <span className="material-symbols-rounded">
       search
      </span>
     </div>
   </form>
   <br />
   <div className="UserListHolder" >
      {
       SearchUsers.length === 0 ?
       userFriends.map( user => (
        <UserComponent  
         key={user?.id}
         photoURL={user?.profilePic}
         name={user?.name}
         userId={user?.id}
         OnlineStatus={user?.OnlineStatus} 
         Selected={user?.Selected}
         Members={user?.Members}
         Messages={user?.Messages}
        />
      )) : SearchUsers.map( user => (
        <UserComponent  
         key={user?.id}
         photoURL={user?.profilePic}
         name={user?.name}
         userId={user?.id}
         OnlineStatus={user?.OnlineStatus} 
         Selected={user?.Selected}
         Members={user?.Members}
         Messages={user?.Messages}
        />
      ))
      }
   </div>
  </div>
 )
}