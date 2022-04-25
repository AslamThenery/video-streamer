import React from 'react'
import {faHome} from "@fortawesome/react-fontawesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import navicon from "../Icons/nav-icon.svg"
import searchIcon from "../Icons/search.svg"
import "./NavBar.css"

function NavBar() {
  return (
    <div className='nav-bar'>
        
        <img className='nav-icon' src={navicon} alt="" />
        <div className="search-bar">
       
       
        {/* <FontAwesomeIcon icon={faHome} /> */}
        
            <input placeholder='Search...'  type="text" name="" id="search-bar" />
       <img className='search-icon' src={searchIcon} alt="" />
        <i class="fa fa-solid fa-magnifying-glass"></i> 
            {/* <h1 className='search-icon'>Search</h1> */}
        </div>
        {/* <div className="avatar">Profile</div> */}
    </div>
  )
}

export default NavBar 