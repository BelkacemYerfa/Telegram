

export const UserList = ()=>{
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
  </div>
 )
}