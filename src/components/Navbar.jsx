import React, { useState } from 'react';
import './main.css';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

  return (
    <>
        <div className="wl-navbar-container">
            <div className="wl-navbar">
                <div className="wl-navbar-logo">
                      <Link to={'/'}>
                        <img src={logo} alt="WorryLess Logo" />
                    </Link>
                    <p>Worryless Ent.</p>
                </div>
                <nav className="wl-navbar-menu">
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/#about">ABOUT</a></li>
                        <li><a href="/">GALLERY</a></li>
                        <li><a href="/contact-us">CONTACT</a></li>
                    </ul>
                </nav>
                <div className={`wl-navbar-toggle ${toggleMenu ? 'active' : ''}`} onClick={handleToggle}>
                    {toggleMenu ? <RiCloseLine size={25} color='white'/> : <RiMenuLine size={25} color='white'/>}
                    {toggleMenu && (
                    <nav className="wl-navbar-menu-mobile">
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">ABOUT</a></li>
                            <li><a href="/">GALLERY</a></li>
                            <li><a href="/contact-us">CONTACT</a></li>
                        </ul>
                    </nav>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar