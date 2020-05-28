import React from 'react'
import '../index.css'
const NavBar = () => {
    return(
        <div className="nav">
            <div className="container">
                <div id="navigation-bar">
                    <a href="#" className="logo">Personal Website</a>
                    <ul>

                        <li><a href="#maps">MAPS</a></li>
                        <li><a href="#skills">SKILLS</a></li>
                        <li><a href="#motto">MOTTO</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><a href="#">HOME</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar;