import { useDataLayervValue } from "../Config/dataLayer"
import { UserComponent } from "../UserComponents/UserMessaginChat"

export const UserList = ()=>{
 const [{userFriends} , dispatch] = useDataLayervValue()
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
        userFriends.map( user => (
          <UserComponent  
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