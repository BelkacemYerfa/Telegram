import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SelectedGroup } from '../Config/NavBarComponentsArray';

export const NavBar = () => {
 const [SelectedChat , setSelectedChat] = useState(true);
 const HandleStrockeColor = ()=>{
  setSelectedChat(!SelectedChat)
 }
 const HandleStrockeColorFalse = ()=>{
  setSelectedChat(false)
 }
 
 return (
  <div className="NavBar" >
    <div className="NavComponentsOptions" >
     {
       SelectedGroup.map( Component => (
        <Link to='/' key={Component?.id}
          className="ChatOptionSelector group " 
          onClick={
            SelectedGroup[0].id === Component?.id ? 
            HandleStrockeColor : HandleStrockeColorFalse 
          }>
          <div className="SelectedType" ></div>
            <div className="chatItem">
            <div className="ChatOptionHolderIcon " >
              {Component?.Svg}
            </div>
            {Component?.Tag}
          </div>
        </Link>
       ))
     }
    </div>
  </div>
 )
}