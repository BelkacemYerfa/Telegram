

export const UserComponent = ({
 photoURL , 
 name ,
 lastMessage ,
 lastMessageTime , 
 userId , 
}) => {
 return (
  <div className="UserComponent" id={userId} >
    <img className="userImagePic" src={photoURL} alt="userPicture" />
    <div className="UserComponentInfo" >
     <div className="UserInfo" >
      <p className="Username" >
       {name}
      </p>
      <p className="UserLastMessageTime" >
       {lastMessageTime}
      </p>
     </div>
     <div className="UserLastMessageComponent" >
      <p className="UserLastMessage" >
       {lastMessage}
      </p>
     </div>
    </div>
  </div>
 )
}