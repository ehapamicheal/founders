import './navbar.css';
import Logo from '../images/Frame 8.png';
import { FaArrowRight } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { links } from '../data';
import React, { useState } from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  
    const toggleMenu = () => {
      setIsNavShowing(!isNavShowing);
    };
  
    return (
      <nav>
        <div className="container nav-container">
          <NavLink to="/">
            <img className="logo" src={Logo} alt="Nav Logo" />
          </NavLink>
  
          <div className={`nav_links_box ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
            <ul className="nav-links">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? 'active-nav' : '')}
                    onClick={() => setIsNavShowing(false)} 
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
  
            {/* <NavLink to="/register" className="register_link" onClick={() => setIsNavShowing(false)}>
              <p>Register</p>
              <FaArrowRight className="arrow" />
            </NavLink> */}

            <Link  className="register_link">
                <p>Register</p>
                <FaArrowRight className="arrow" />
            </Link>
          </div>

            <button type='button' className="nav-toggle-btn" onClick={toggleMenu}>
                <RxHamburgerMenu className={`open ${isNavShowing ? 'hidden' : ''}`} />
                <AiOutlineClose className={`close ${isNavShowing ? 'hidden' : ''}`} />
            </button>
        </div>
      </nav>
    );
};
  




export default Navbar;
