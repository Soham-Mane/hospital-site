import React, { useState } from 'react'
import './Navbar.css';
// import Hamburger from 'hamburger-react';
import { GiHamburgerMenu } from "react-icons/gi";

import search from "../../../src/images/Group 175.png";
const Navbar = () => {
    const [showMediaIcons,setShowMediaIcons]=useState(false);
    
  return (
    <>
     <nav className="main-nav">
     <div className="logo"><span>MED</span><span>DICAL</span></div>
        <div className='menu-link '>
            <ul>
                <li><a>Home</a></li>
                <li><a>About us</a></li>
                <li><a>Services</a></li>
                <li><a>Doctors</a></li>
                <li><a>News</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
        <div className="search">
            <img src={search} className='search' />
            <a href=''>
            <button className='btn' >Appointment</button>
            </a>
 
 {/* <div className='hamburger-menu'>
        <a href="#" onClick={()=>{setShowMediaIcons(!showMediaIcons)}}>
            < GiHamburgerMenu />
        </a>
     </div> */}
     </div>
     
     </nav>
  
    </>
  )
}

export default Navbar
