import React from 'react'
import {  NavLink } from 'react-router-dom';
import "../../routes/Routes"
export default function ShopRoutesContainer() {
  return (
    <div className='routesContainer'>
      <div className="routes">
        <NavLink to={"/"}>Home </NavLink>  
        <p>/</p>  
        <NavLink to={"/shop"}>Shop </NavLink>    
        
      </div>
    </div>
  )
}
