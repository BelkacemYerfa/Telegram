import { UserList } from "../UserToChatSection/UserList"
import { MessagingRoom } from "../MessaginRoom/MessaginRoom";

export const ChatComponent = ({
  handleToggle
}) => {

  const handleToggleNavBar = (toggle)=>{
    handleToggle(toggle);
  }

 return (
  <div className="Chat" >
   <div className='ChatBody' >
     <UserList 
      handleToggle={handleToggleNavBar}
     />
   </div>
   <div className="ChatMessaginComponent" >
    <MessagingRoom />
   </div>
  </div>
 )
}