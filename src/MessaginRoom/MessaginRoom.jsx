import { useDataLayervValue } from "../Config/dataLayer";
import { useEffect, useState } from "react";
import { MessaginComponent } from "../Config/MessageParameters";
import { MessageComponent } from "../UserComponents/MessageComponent";

export const MessagingRoom = () => {

  const [{userFriends , user} , dispatch] = useDataLayervValue();
  const [SelectedUser , setSelectedUser] = useState(null);
  const [UserMessage , SetUserMessage] = useState(null);
  const [UploadedImagesToggle , setUploadedImagesToggle] = useState(false);
  const [UploadedImages , setUploadedImages] = useState([]);
  const [SelectedMessageComponent , setSelectedMessageComponent] = useState(MessaginComponent[1]);
  const [UserRank , SetUserRank] = useState(null)

  const RemoveImage = (image)=>{
    setUploadedImages(UploadedImages.filter( img => img !== image));
    if(UploadedImages.length === 1){
      setUploadedImagesToggle(false);
      setSelectedMessageComponent(MessaginComponent[1]);
    }
  }

  const ImageUploading = (e)=>{
    e.preventDefault();
    if(e.target.files[0] !== null || undefined){
      let file = URL.createObjectURL(e.target.files[0]);
      setUploadedImages(UploadedImages => [...UploadedImages , file]);
      setUploadedImagesToggle(true);
      setSelectedMessageComponent(MessaginComponent[0]);
    }
  }

  /*
   const SelectAuthorization = ()=>{
    for(let i = 0 ; i < SelectedUser?.Messages.length ; i++){
      if(SelectedUser.Messages[i].userId === user?.uid){
        SetUserRank(
          SelectedUser.Messages[i].userRank
        )
        console.log(SelectedUser.Messages[i].userRank);
      }
    }
  }
  */

  const SendMessageVerification = (event)=>{
    if(event.key === 'Enter'){
      event.preventDefault();
      if(UserMessage !== null || '' || undefined){
        handleUserMessage();
        event.target.value = '';
      }
      if(UploadedImages.length > 0){
        handleUserImages();
      }
    }
   }

  const handleSelectedUser = ()=>{
    userFriends.forEach( user => {
      if(user.Selected === true){
        setSelectedUser(user);
      }
    })
  }

  const handleUserImages = ()=>{
    if (UploadedImages.length > 0){
      userFriends.forEach( friend => {
        if(friend?.id === SelectedUser?.id){
          friend?.Messages?.push({
            name : user?.username ,
            userId: user?.uid,
            id: `${crypto.randomUUID()}`,
            message: UploadedImages,
            time: new Date().getHours(),
            timeMinutes: new Date().getMinutes(),
            profilePic: user?.photoURL,
            DropDown : false , 
            userRank : UserRank !== null ? UserRank : 'Member'
          })
        }
       })
       setUploadedImagesToggle(false);
       setUploadedImages([]);
    }
    dispatch({
      type: 'SET_USER_NEW_MESSAGE',
      userFriends : userFriends
    });
    setSelectedMessageComponent(MessaginComponent[1]);
  }

  const handleUserMessage = ()=>{
    if(UserMessage !== null || '' || undefined){
      if(UserMessage.toLowerCase() === '/clear'){
        userFriends.forEach( friend => {
          if(friend?.id === SelectedUser?.id){
            friend.Messages = [];
          }
        })
      }else {
        userFriends.forEach( friend => {
          if(friend?.id === SelectedUser?.id){
            friend?.Messages?.push({
              name : user?.username ,
              userId: user?.uid,
              id: `${crypto.randomUUID()}`,
              message: UserMessage,
              time: new Date().getHours(),
              timeMinutes: new Date().getMinutes(),
              profilePic: user?.photoURL,
              DropDown : false , 
              userRank : UserRank !== null ? UserRank : 'Member'
            })
          }
         })
         SetUserMessage(null);
      }
    }
     dispatch({
      type: 'SET_USER_NEW_MESSAGE',
      userFriends : userFriends
    });
  }
  useEffect(()=>{
    handleSelectedUser();
  } );
 return(
  <div className="ChatRoom" >
    {
      SelectedUser ? (
        <>
         <div className="ChatRoomHeader" >
          <div className="ChatRoomDetails" >
            <div className="UserChatInfo" >
              <img src={SelectedUser?.profilePic} 
              className="userImage" alt="" />
              <div className="ChatRoomInfo" >
              <h3>{SelectedUser?.name}</h3>
              {
                SelectedUser?.Members?.length > 2 ? 
                  (<p className="RoomMembers" >
                    { SelectedUser?.Members.length } members
                  </p>) :
                  (<p className={SelectedUser?.OnlineStatus === true ? "Online" : "RoomMembers" } >
                    { SelectedUser?.OnlineStatus === true ? "Online" : "Offline" }
                  </p>)
              }
              </div>
            </div>
            <div className="MessaginOptions" >
              <div className="Option" >
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z" fill="white"/>
              </svg>
              </div>
              <div className="Option" >
                {
                  SelectedUser?.Members?.length > 2 ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4809 13.8423H15.4C16.2962 13.8423 17 13.1288 17 12.2764V5.56582C17 4.71348 16.2962 4 15.4 4H4.6C3.70383 4 3 4.71348 3 5.56582V12.2764C3 13.1288 3.70383 13.8423 4.6 13.8423H6.19908L6.2 17L6.20346 16.9997L6.20502 16.9988L10.4809 13.8423ZM6.79895 17.8034C6.35668 18.1298 5.73 18.0406 5.39921 17.6042C5.26989 17.4335 5.2 17.2262 5.2 17.0133L5.19937 14.8423H4.6C3.16406 14.8423 2 13.6935 2 12.2764V5.56582C2 4.14876 3.16406 3 4.6 3H15.4C16.8359 3 18 4.14876 18 5.56582V12.2764C18 13.6935 16.8359 14.8423 15.4 14.8423H10.81L6.79895 17.8034Z" fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 5.5C10.2761 5.5 10.5 5.72386 10.5 6V12C10.5 12.2761 10.2761 12.5 10 12.5C9.72386 12.5 9.5 12.2761 9.5 12V6C9.5 5.72386 9.72386 5.5 10 5.5ZM7 6.5C7.27614 6.5 7.5 6.72386 7.5 7V11C7.5 11.2761 7.27614 11.5 7 11.5C6.72386 11.5 6.5 11.2761 6.5 11V7C6.5 6.72386 6.72386 6.5 7 6.5ZM13 7C13.2761 7 13.5 7.22386 13.5 7.5V10.5C13.5 10.7761 13.2761 11 13 11C12.7239 11 12.5 10.7761 12.5 10.5V7.5C12.5 7.22386 12.7239 7 13 7Z" fill="white"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_115_6507)">
                      <path d="M6.98706 2.06589L6.27036 2.28192C4.96684 2.67484 4.00944 3.78801 3.81598 5.13565C3.519 7.20438 4.18323 9.62242 5.78368 12.3945C7.38077 15.1607 9.13867 16.9433 11.0739 17.7231C12.3435 18.2346 13.7948 17.9592 14.7886 17.018L15.3314 16.5039C16.0589 15.815 16.1643 14.694 15.5781 13.8815L14.2215 12.0014C13.8458 11.4807 13.1805 11.2569 12.5665 11.4446L10.5158 12.0716L10.4628 12.082C10.2366 12.115 9.7154 11.6259 9.06527 10.4999C8.38512 9.32181 8.24417 8.63298 8.43194 8.45541L9.47529 7.48248C10.2572 6.75332 10.4882 5.60728 10.0499 4.63213L9.38841 3.16075C8.97652 2.24451 7.94888 1.77597 6.98706 2.06589ZM8.47634 3.57077L9.13779 5.04215C9.40063 5.62682 9.26212 6.31395 8.7933 6.75113L7.74739 7.72645C7.0783 8.35918 7.29992 9.44218 8.19924 10.9999C9.04545 12.4655 9.81744 13.1898 10.6469 13.0642L10.7713 13.0376L12.8589 12.4009C13.0635 12.3383 13.2853 12.413 13.4105 12.5865L14.7671 14.4666C15.0603 14.8729 15.0076 15.4334 14.6438 15.7778L14.101 16.2919C13.3911 16.9642 12.3545 17.1609 11.4476 16.7955C9.74957 16.1113 8.14475 14.484 6.64971 11.8945C5.15161 9.29969 4.54531 7.09254 4.80583 5.27775C4.94402 4.31515 5.62787 3.52003 6.55896 3.23937L7.27566 3.02334C7.75657 2.87838 8.27039 3.11265 8.47634 3.57077Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_115_6507">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  )
                }
              </div>
              <div className="Option" >
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6C9.30964 6 8.75 5.44036 8.75 4.75C8.75 4.05964 9.30964 3.5 10 3.5C10.6904 3.5 11.25 4.05964 11.25 4.75C11.25 5.44036 10.6904 6 10 6ZM10 11.25C9.30964 11.25 8.75 10.6904 8.75 10C8.75 9.30964 9.30964 8.75 10 8.75C10.6904 8.75 11.25 9.30964 11.25 10C11.25 10.6904 10.6904 11.25 10 11.25ZM8.75 15.25C8.75 15.9404 9.30964 16.5 10 16.5C10.6904 16.5 11.25 15.9404 11.25 15.25C11.25 14.5596 10.6904 14 10 14C9.30964 14 8.75 14.5596 8.75 15.25Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
          <div className="ChatMessaging" >
            <div className="MessagesHolder" >
              {
                SelectedUser?.Messages?.length > 0 ? 
                SelectedUser?.Messages?.map(message => (
                  <>
                   {
                     message?.userId === user?.uid ?
                      <MessageComponent 
                        SelectedUser={SelectedUser}
                        message={message}
                      />
                     : (
                      <MessageComponent 
                        SelectedUser={SelectedUser}
                        message={message}
                      />
                     )
                   }
                  </>
                )) : (
                  <div className="SelectedComponent" >
                    <p className="SelectChat" >
                     No Message for Now , be the first . 
                    </p>
                  </div>
                )
              }
            </div>
          </div>
          <div className="UserMessageComponent" >
          {
              UploadedImagesToggle && (
                <div className="ImagesContainer" >
                  <div className="ImagesHolderInfo" >
                  <div className="ImageUserHolder" >
                    <div className="ImagesHodler" >
                      {UploadedImages.map(image => (
                        <div className="ImageHolder" key={image}>
                        <div className="ImageSettings" >
                          <div className="ImageItem" >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7">
                            <path d="M11.677 4.38444L15.613 8.32044L7.57506 16.359C7.36997 16.5641 7.12323 16.7217 6.85236 16.8215L6.68708 16.8744L2.63211 17.9803C2.28552 18.0748 1.96546 17.7862 2.00301 17.4457L2.01817 17.3663L3.12407 13.3113C3.20039 13.0315 3.33646 12.7723 3.52212 12.5513L3.63939 12.4234L11.677 4.38444ZM13.2452 2.81755C14.332 1.73074 16.0941 1.73074 17.1809 2.81755C18.2224 3.85907 18.2658 5.52075 17.3111 6.61395L17.1809 6.75322L16.32 7.61344L12.384 3.67744L13.2452 2.81755Z" fill="white"/>
                            </g>
                          </svg>
                          </div>
                          <div className="ImageItem"
                            onClick={()=>RemoveImage(image)}
                          >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7">
                            <path d="M10 1.25C11.4346 1.25 12.6126 2.34848 12.7388 3.75019L17 3.75C17.4142 3.75 17.75 4.08579 17.75 4.5C17.75 4.8797 17.4678 5.19349 17.1018 5.24315L17 5.25H16.417L15.1499 16.2292C15.0335 17.2384 14.179 18 13.1631 18H6.83688C5.821 18 4.9665 17.2384 4.85006 16.2292L3.582 5.25H3C2.6203 5.25 2.30651 4.96785 2.25685 4.60177L2.25 4.5C2.25 4.1203 2.53215 3.80651 2.89823 3.75685L3 3.75L7.26119 3.75019C7.38741 2.34848 8.56542 1.25 10 1.25ZM8.5 7.5C8.25454 7.5 8.05039 7.65477 8.00806 7.85886L8 7.9375V14.0625L8.00806 14.1411C8.05039 14.3452 8.25454 14.5 8.5 14.5C8.74546 14.5 8.94961 14.3452 8.99194 14.1411L9 14.0625V7.9375L8.99194 7.85886C8.94961 7.65477 8.74546 7.5 8.5 7.5ZM11.5 7.5C11.2545 7.5 11.0504 7.65477 11.0081 7.85886L11 7.9375V14.0625L11.0081 14.1411C11.0504 14.3452 11.2545 14.5 11.5 14.5C11.7455 14.5 11.9496 14.3452 11.9919 14.1411L12 14.0625V7.9375L11.9919 7.85886C11.9496 7.65477 11.7455 7.5 11.5 7.5ZM10 2.75C9.39524 2.75 8.89079 3.17947 8.77499 3.75005H11.225C11.1092 3.17947 10.6048 2.75 10 2.75Z" fill="white"/>
                            </g>
                          </svg>
                          </div>
                        </div>
                        <img className="UploadedImage" src={image} alt='UploadedImage' />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
              )
            }
          <form className="MessageForm" action="" 
           onKeyDown={SendMessageVerification}
          >
            <div className="UserFilesWithMessaging" >
              <label className="MessageOption" >
                <input type="file" className="FilesInput"
                onChange={ImageUploading}
                accept="image/png, image/jpg, image/gif, image/jpeg"
                id="file" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7717 3.74358C14.1132 1.4 17.9121 1.4 20.2553 3.74314C22.5384 6.02621 22.5969 9.69142 20.4309 12.0454L20.2428 12.2427L11.4427 21.0409L11.4062 21.0712C9.94492 22.3879 7.69092 22.3432 6.28355 20.9358C4.96453 19.6168 4.84241 17.5541 5.9172 16.0974C5.94054 16.0521 5.96879 16.0083 6.002 15.9672L6.05556 15.9075L6.14247 15.8198L6.28355 15.6719L6.28647 15.6748L13.7222 8.22047C13.9881 7.95385 14.4047 7.92909 14.6986 8.14656L14.7829 8.21906C15.0495 8.48497 15.0742 8.9016 14.8568 9.19551L14.7843 9.27972L7.18966 16.8928C6.47202 17.7684 6.5219 19.0627 7.3393 19.8801C8.16836 20.7091 9.48801 20.7486 10.3638 19.9985L19.1965 11.1681C20.952 9.41041 20.952 6.56116 19.1946 4.8038C17.4922 3.10136 14.765 3.04816 12.9986 4.6442L12.8307 4.8038L12.8181 4.81812L3.28179 14.3544C2.9889 14.6473 2.51403 14.6473 2.22113 14.3544C1.95487 14.0882 1.93066 13.6715 2.14852 13.3779L2.22113 13.2938L11.77 3.74314L11.7717 3.74358Z" fill="#8A8A8A"/>
                </svg>
              </label>
              <input type="text" className="MessageInput" placeholder="Write a message..." 
                required
                onChange={(e)=>{
                  e.preventDefault();
                  if(e.target.value !== '' || null  ){
                    SetUserMessage(e.target.value);
                  }
                }}
              />
              </div>
              <div className="EmojiHolderWithVocal" >
                <div className="MessageOption" >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12.0001 1.99902C17.5238 1.99902 22.0016 6.47687 22.0016 12.0006C22.0016 17.5243 17.5238 22.0021 12.0001 22.0021C6.47638 22.0021 1.99854 17.5243 1.99854 12.0006C1.99854 6.47687 6.47638 1.99902 12.0001 1.99902ZM12.0001 3.49902C7.30481 3.49902 3.49854 7.3053 3.49854 12.0006C3.49854 16.6959 7.30481 20.5021 12.0001 20.5021C16.6954 20.5021 20.5016 16.6959 20.5016 12.0006C20.5016 7.3053 16.6954 3.49902 12.0001 3.49902ZM8.46183 14.7839C9.31096 15.8616 10.602 16.5021 12.0001 16.5021C13.3963 16.5021 14.6858 15.8633 15.535 14.7881C15.7918 14.463 16.2634 14.4076 16.5884 14.6644C16.9135 14.9211 16.9689 15.3927 16.7122 15.7178C15.5814 17.1495 13.8602 18.0021 12.0001 18.0021C10.1374 18.0021 8.4142 17.1472 7.2836 15.7122C7.02725 15.3869 7.08319 14.9153 7.40855 14.6589C7.73391 14.4026 8.20548 14.4585 8.46183 14.7839ZM9.00053 8.75121C9.6905 8.75121 10.2498 9.31054 10.2498 10.0005C10.2498 10.6905 9.6905 11.2498 9.00053 11.2498C8.31057 11.2498 7.75124 10.6905 7.75124 10.0005C7.75124 9.31054 8.31057 8.75121 9.00053 8.75121ZM15.0005 8.75121C15.6905 8.75121 16.2498 9.31054 16.2498 10.0005C16.2498 10.6905 15.6905 11.2498 15.0005 11.2498C14.3106 11.2498 13.7512 10.6905 13.7512 10.0005C13.7512 9.31054 14.3106 8.75121 15.0005 8.75121Z" fill="#8A8A8A"/>
                  </svg>
                </div>
                <div className="MessageOption" id={SelectedMessageComponent.id} >
                 {
                  SelectedMessageComponent.Svg
                 }
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="SelectedComponent" >
           <p className="SelectChat" >
            Select Chat to start Messaging 
           </p>
        </div>
      ) 
    }
  </div>
 )
}