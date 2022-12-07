import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import logo_linkedIn from '../assets/icon/social-media/Black-Gmail-PNG-Image-removebg-preview.png';
import logo_email from '../assets/icon/social-media/GitHub-logo-removebg-preview.png';
import logo_github from '../assets/icon/social-media/linkedin.png';



function Footer() {
    return (
        <>
            <footer>
                <div className="footer-logo"><img src="/img/logo/narutomaiki-removebg-preview.png" alt="narutomaki logo"/></div>
                <div className="footer-links">
                    <ul>
                        <li><Link path="Training">Training</Link></li>
                        <li><Link path="About">About</Link></li>
                        <li><Link path="">Contact us</Link></li>
                    </ul>
                    <ul>
                        <li><Link path="menu_main">Menu</Link></li>
                    </ul>
                    <ul>
                        <li><Link path="menu_drinks">Ice-cream</Link></li>
                        <li><Link path="menu_main">Main-menu</Link></li>
                        <li><Link path="menu_drinks">Drinks</Link></li>
                    </ul>
                </div>
                <div className="socials">
                    <ul>
                        <li className="email-footer"><a href="mailto:shanecontact3@gmail.com"><img src={logo_email} alt="Email"/></a></li>
                        <li className="linkedin-footer"><a href="https://www.linkedin.com/in/ramah-naik-shane-50b023250/"><img src={logo_linkedIn} alt="LinkedIn"/></a></li>
                        <li className="github-footer"><a href="https://github.com/RshaneTD"><img src={logo_github} alt="Github"/></a></li>
                    </ul>
                </div>
            </footer>
            <Outlet />
        </>
    )
}

export default Footer