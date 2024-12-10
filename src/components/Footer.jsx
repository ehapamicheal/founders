import './footer.css';
import {Link, NavLink} from 'react-router-dom';
import { footerLogo } from '../data';
import { links } from '../data';
import React, { useState } from "react";

const Footer = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  
  return (
    <div className="footer_container">
        <div className="footer_main">
            <div className="footer_left">
               {footerLogo.map( footer => (
                 <Link className="social_links" key={footer.id} to={footer.link}  target="_blank"  rel="noopener noreferrer">
                    {footer.icon}
                 </Link>
               ))}
            </div>

            <div className="footer_right">
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
            </div>
        </div>
    </div>
  )
}

export default Footer;