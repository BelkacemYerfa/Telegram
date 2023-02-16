import { useDataLayervValue } from "../Config/dataLayer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const UserComponent = ({
 photoURL , 
 name ,
 userId , 
 OnlineStatus ,
 Selected , 
 Members , 
}) => {
  
 const [{userFriends} , dispatch] = useDataLayervValue();
 const [Message , setMessage] = useState(null);
 const [LastMessageTime , setLastMessageTime] = useState(null);
 
 const handleSelectedConversation = () => {
  for(let i=0; i<userFriends.length; i++){
   if(userFriends[i].id === userId){
    userFriends[i].Selected = true;
   }else{
    userFriends[i].Selected = false;
   }
  }
  dispatch({
    type: "SET_USER_FRIENDS",
    userFriends: userFriends
  })
  }
  const getLastMessageTime = ()=>{
    if(userFriends.length > 0) {
      userFriends.forEach(friend => {
        if(userId === friend.id){
          if(friend.Messages.length > 0){
           setLastMessageTime({
            hour : Number(friend?.Messages[friend?.Messages.length - 1]?.time) , 
            minute : Number(friend?.Messages[friend?.Messages.length - 1]?.timeMinutes)
           })
          } 
        }
      })
    }
  }
  const getLastMessage = ()=>{
   if(userFriends.length > 0) {
    userFriends.forEach(friend => {
      if(userId === friend.id){
        if(friend.Messages.length > 0){
          setMessage(friend.Messages[friend.Messages.length - 1].message)
        } 
      }
    })
   }
  }
  
  useEffect(()=>{
    getLastMessageTime();
    getLastMessage();
  } ,[])

  return (
  <Link className="UserComponent group" id={userId}
   onClick={handleSelectedConversation}
   style={{
    backgroundColor: Selected ? "rgba(255, 255, 255, 0.0605)" : "transparent"
   }}
  >
    <div className="SelectedDiscussion" ></div>
    <div className="UserOnlineComponent" >
     <img className="userImagePic" src={photoURL} alt="userPicture" />
     {
      OnlineStatus ? (<div className="UserOnlineChecker"></div>) 
      : null
     }
    </div>
    <div className="UserComponentInfo" >
     <div className="UserInfo" >
      <p className="Username" >
      {
       Members.length > 2 ? (
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.8001 8.0001C9.68375 8.0001 10.4001 8.71644 10.4001 9.6001V10.8001C10.4001 12.4436 8.72966 13.6001 6.0001 13.6001C3.27053 13.6001 1.6001 12.4436 1.6001 10.8001V9.6001C1.6001 8.71644 2.31644 8.0001 3.2001 8.0001H8.8001ZM12.8001 8.0001C13.6838 8.0001 14.4001 8.71644 14.4001 9.6001V10.0001C14.4001 11.671 13.1455 12.8001 10.8001 12.8001C10.6871 12.8001 10.5765 12.7975 10.4686 12.7923C10.9001 12.2901 11.1552 11.6834 11.1947 10.991L11.2001 10.8001V9.6001C11.2001 9.04658 11.0127 8.53683 10.6979 8.13081L10.5884 7.99939L12.8001 8.0001ZM6.0001 1.6001C7.54649 1.6001 8.8001 2.8537 8.8001 4.4001C8.8001 5.9465 7.54649 7.2001 6.0001 7.2001C4.4537 7.2001 3.2001 5.9465 3.2001 4.4001C3.2001 2.8537 4.4537 1.6001 6.0001 1.6001ZM11.6001 3.2001C12.7047 3.2001 13.6001 4.09553 13.6001 5.2001C13.6001 6.30467 12.7047 7.2001 11.6001 7.2001C10.4955 7.2001 9.6001 6.30467 9.6001 5.2001C9.6001 4.09553 10.4955 3.2001 11.6001 3.2001Z" fill="white"/>
         </svg>
       ) : null
      }
       {name}
      </p>
      <p className="UserLastMessageTime" >
       {
        LastMessageTime?.hour > 12 ? 
        `${LastMessageTime?.hour - 12}:${LastMessageTime?.minute < 10 ? 
          `0${LastMessageTime?.minute}` 
          : LastMessageTime?.minute } 
        PM`
        :
        `${LastMessageTime?.hour}`
       }
      </p>
     </div>
     <div className="UserLastMessageComponent" >
      <p className="UserLastMessage" >
       {
        Message
       }
      </p>
     </div>
    </div>
  </Link>
 )
}