import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Contact from "./Contact";
import images from "../assets/logo/narutomaiki-removebg-preview.png"

import x from '../components/Footer'

function SharedNav() {
    let [isClicked, setIsClicked] = useState(false)
    return (
        <>
             <header className="header">
                <div className="logo">
                  <Link to="/"><img src={images} alt=""/></Link>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><Link to="Training">Training</Link></li>
                        <li><Link to="about">About us</Link></li>
                        <li><button className="contactus" onClick={()=>setIsClicked(!isClicked)}>Contact us</button></li>
                       
                    </ul>
                  
                </nav>
            </header>
            {isClicked ? <Contact cancel={()=> setIsClicked(false)}/> : null}
  
            <Outlet />
        </>
    )
}

export default SharedNav