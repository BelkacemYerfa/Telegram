import { UserList } from "../UserToChatSection/UserList"
import { MessagingRoom } from "../MessaginRoom/MessaginRoom"

export const ChatComponent = () => {
 return (
  <div className="Chat" >
   <div className='ChatBody' >
     <UserList />
   </div>
   <div className="ChatMessaginComponent" >
    <MessagingRoom />
   </div>
  </div>
 )
}