import { useDataLayervValue } from "../Config/dataLayer";
import { MessageDropDown } from "./MessageDropDown";


export const MessageComponent = ({
 SelectedUser , 
 message , 
})=>{

 const [{userFriends , user} , dispatch] = useDataLayervValue();

 const handleToggleUserDropDown = ()=>{
  for(let i=0 ; i<userFriends?.length ; i++){
    for(let j=0 ; j<userFriends[i]?.Messages?.length ; j++){
      if(userFriends[i]?.Messages[j]?.id === message?.id){
        userFriends[i].Messages[j].DropDown 
        = !userFriends[i].Messages[j].DropDown 
      }else{
        userFriends[i].Messages[j].DropDown = false
      }
    }
  }
   dispatch({
    type : 'SET_DROPDOWN',
    userFriends : userFriends
   })
 }

 return(
  <div className={message?.userId === user?.uid ?
  "MessageComponentUser" : "MessageComponentUserFriend"} >
     {
      SelectedUser?.Members?.length > 2 ? (
       <img className="profilePicConverstaion" 
       src={message?.profilePic} alt="userprofileImage" />
      ) : null
    }
     {
      !Array.isArray(message?.message) ? (
        <div className={message?.userId === user?.uid ? 
          "UserMessage" : "FriendUserMessage"}
          onClick={handleToggleUserDropDown}
           style={{
            borderRadius : message?.userId !== user?.uid ? 
             SelectedUser?.Messages[SelectedUser?.Messages?.indexOf(message) + 1]?.userId === user?.uid
            ? SelectedUser?.Messages[SelectedUser?.Messages?.indexOf(message) + 1]?.userId !== user?.uid 
            && SelectedUser?.Messages[SelectedUser?.Messages?.indexOf(message) - 1]?.userId === user?.uid
            ? "14px 14px 14px 4px" : "4px 14px 14px 14px" : "4px 14px 14px 14px" :
             SelectedUser?.Messages[SelectedUser?.Messages?.indexOf(message) + 1]?.userId === user?.uid
            ? SelectedUser?.Messages[SelectedUser?.Messages?.indexOf(message) + 1]?.userId === user?.uid 
            && SelectedUser?.Messages[SelectedUser?.Messages?.indexOf(message) - 1]?.userId !== user?.uid
            ? "14px 14px 4px 14px" : "14px 4px 4px 14px" : "14px 4px 14px 14px"
           }}
          >
            <div className="MessageInfo" >
              {message?.message}
            </div>
            <div className="MessageTime">
              {
                message?.time > 12 
                ? `${Number(message?.time) - 12}:${
                  message?.timeMinutes < 10 ? 
                  `0${message?.timeMinutes}`
                  : message?.timeMinutes 
                }PM` 
                : `${Number(message?.time)}:${
                  message?.timeMinutes < 10 ? 
                  `0${message?.timeMinutes}`
                  : message?.timeMinutes 
                }AM`
              }
            </div>
          </div>
      ) :(
        <div className="ImagesHolderSended" >
          {
            message?.message?.map(image => (
              <img src={image} className='UploadedImage' alt='imageSented' />
            ))
          }
          <div className="TimeHolder" >
             {
                message?.time > 12 
                ? `${Number(message?.time) - 12}:${
                  message?.timeMinutes < 10 ? 
                  `0${message?.timeMinutes}`
                  : message?.timeMinutes 
                } PM` 
                : `${Number(message?.time)}:${
                  message?.timeMinutes < 10 ? 
                  `0${message?.timeMinutes}`
                  : message?.timeMinutes 
                } AM`
              }
          </div>
        </div>
      )
      
     }
     {
     message?.DropDown && (
       <MessageDropDown 
         userId={message?.userId} 
         messageId={message?.id} 
         message={message?.message}
       />
     )
   }
   </div>
 );
}