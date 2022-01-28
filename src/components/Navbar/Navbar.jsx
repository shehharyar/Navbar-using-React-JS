import React from 'react';
// import { FaTimes } from "react-icons/fa";
import { MenuList } from './MenuList';
import './Navbar.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const menuList = MenuList.map(({url,title},index)=>{
    return(

        <li key={index}>
          <Link to ={url} activeclassname ="active">{title}</Link>
        </li>
    )
})

const Navbar = ()=>{
     const [clicked,setClicked] = useState(false);
  return (
    <nav>
        <div className='logo'>
          VPN<font>Lab</font>  
          </div>
          <div className='menu-icon' onClick={()=> setClicked(!clicked)}>
          <GiHamburgerMenu />
        {/* ( icon={clicked} )?  <GiHamburgerMenu /> : return <FaTimes/> */}
          </div>
            <ul className={clicked ? 'menu-list' : 'menu-list close'}>
              {menuList}
            </ul>
        
    </nav>
    )
}
export default Navbar;