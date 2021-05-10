import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import imgBg from '../images/FAlogo.jpg'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarElements'
import '../components/aboutUs/about.css'

function Navbar() {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <>
         <Nav scrollNav={scrollNav}>
             <div className="logo">
                 <a href="/"><img src={imgBg} alt="" /></a>
                 {/* <NavLogo to= '/'>
                     Feed Afrique
                 </NavLogo> */}
             </div>
             
             <NavbarContainer>
                 <MobileIcon>
                     <FaBars />
                 </MobileIcon>
                 <NavMenu>
                     <NavItem>
                       <NavLinks to="/about">About</NavLinks>
                     </NavItem>
                     <NavItem>
                       <NavLinks to="/service">Services</NavLinks>
                     </NavItem>
                     {/* <NavItem>
                       <NavLinks to="/vision">Vision</NavLinks>
                     </NavItem> */}
                     <NavItem>
                       <NavLinks to="/contact">Contact Us</NavLinks>
                     </NavItem>
                 </NavMenu>

             </NavbarContainer>
         </Nav>
          
          {/* <nav className="navbar">
              <div className="navbar-container">
                <NavLink to = '/' className = 'navbar-logo'>
                    FeedAfrique
                </NavLink>
                <NavLink to = '/' className = 'navbar-logo'>
                    About Us
                </NavLink>
                <NavLink to = '/' className = 'navbar-logo'>
                    Services
                </NavLink>
                <NavLink to = '/' className = 'navbar-logo'>
                    Contact US
                </NavLink>
              </div>
              <div className='menu-icon'>
                  <i className={click ? 'fas fa-times'}
              </div>
          </nav> */}
        </>
    )
}

export default Navbar