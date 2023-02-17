import { EmojiList, MessageSettings } from '../Config/MessageParameters';
import {useDataLayervValue} from '../Config/dataLayer';


export const MessageDropDown = ({
 userId
})=>{
 const [{user}] = useDataLayervValue();
 return (
  <div className="MessageDropDown" >
    <div className="EmojiListReactiopn" >
      {
       EmojiList.map( emoji => (
        <div className="Emoji" >
          {emoji}
        </div>
       ) )
      }
    </div>
    <div className="MessageSettings">
     {
      MessageSettings.map(Setting => (
       <div className="MessageSettingsItem">
         {
          (Setting.Item === 'Delete' || 'Edit') && userId === user?.uid  ?
          (
           <>
              {Setting.Svg}
              <p>{Setting.Item}</p>
           </>
          ) : null
         }
       </div>
      ))
     }
    </div>
    <div className="ReactedUsers">
      <div className="ReactedUsersHeader">
       <div className="ReactedUsersInfo" >
       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.185 6.16628C14.3837 6.37903 14.3739 6.71404 14.1631 6.91456L5.84325 14.827C5.5942 15.0639 5.20326 15.0566 4.96307 14.8106L2.15091 11.9306C1.94757 11.7224 1.95003 11.3872 2.15641 11.1821C2.36278 10.9769 2.69493 10.9794 2.89827 11.1876L5.42234 13.7725L13.4435 6.14413C13.6543 5.94362 13.9863 5.95353 14.185 6.16628Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8581 6.16834C18.0563 6.38162 18.0456 6.7166 17.8342 6.91655L9.44075 14.8567C9.22939 15.0566 8.89741 15.0458 8.69926 14.8325C8.5011 14.6193 8.51181 14.2843 8.72318 14.0843L17.1166 6.1442C17.328 5.94425 17.66 5.95506 17.8581 6.16834Z" fill="white"/>
       </svg>
       <p>1 Reacted</p>
       </div>
       <div className="ReactedUsersPics" >
        <img className="UserReactedImage" src='https://i.pinimg.com/originals/4f/3c/76/4f3c7690241a8956f82c3611afeae4a0.jpg' 
        alt="ReactedUserPic" />
       </div>
      </div>
    </div>
  </div>
 )
}