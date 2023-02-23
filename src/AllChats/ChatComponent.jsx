import { UserList } from "../UserToChatSection/UserList"
import { MessagingRoom } from "../MessaginRoom/MessaginRoom";

export const ChatComponent = ({
  handleToggle , 
  need
}) => {

  const handleToggleNavBar = (toggle)=>{
    handleToggle(toggle);
  }

 return (
  <div className="Chat" >
   <div className='ChatBody'>
     <UserList  
      handleToggle={handleToggleNavBar}
      need={need}
     />
   </div>
   <div className="ChatMessaginComponent" >
    <MessagingRoom />
   </div>
  </div>
 )
}