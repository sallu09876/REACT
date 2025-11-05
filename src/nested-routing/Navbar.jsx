import React, { useState } from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div>
      {/* Logo */}
      <NavLink to='/' className='logo'>Mywebsite</NavLink>

      {/* Hamburger menu icon */}
      <div className='menu-icon' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* nav links */}
      <ul className={menuOpen ? "show" : ""}>
        <li>
            <NavLink to='/' className={({isActive})}>

            </NavLink>
        </li>
      </ul>

    </div>
  )
}

export default Navbar
