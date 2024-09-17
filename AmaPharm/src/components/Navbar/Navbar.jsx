import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from "react-icons/md";

import logo from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (

  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={logo.logo} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About Us</a></li>
      <li className='p__opensans'><a href="#menu">Shop</a></li>
      <li className='p__opensans'><a href="#awards">Blog</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='p__opensans'>Log In / Register</a>
      
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} className='overlay__open' onClick={() => setToggleMenu(true)}/>
      
      {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
      <ul className='app__navbar-smallscreen-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About Us</a></li>
      <li className='p__opensans'><a href="#menu">Shop</a></li>
      <li className='p__opensans'><a href="#awards">Blog</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
      </div>
      )}

    </div>
  </nav>
  )
};

export default Navbar;
