import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import profile from "../../assets/user.png"
import style from "../Layout/layout.css"
import Menu from '../Menu'

const Layout = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };
  
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} width={100}></img>
        </div>
        <div className='menu'>

        {isMenuVisible ? '' : <Menu/>}
        </div>
        <div>
          <div className='logout' onClick={toggleMenu}>
            <img src={profile} width={50}></img>
          </div>
        </div>
    </div>
  )
}

export default Layout