import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles.css'

const NavBar = () => {
    return(
        <nav>
            <div className="navbar">
                <NavLink to = "/" className="nav-link" activeClassName="active-link">Home</NavLink>
                <NavLink to ="/about" className="nav-link" activeClassName="active-link">About</NavLink>
                <NavLink to ="/contact" className="nav-link" activeClassName="active-link">Contact</NavLink>
                <NavLink to ="/projects" className="nav-link" activeClassName="active-link">Projects</NavLink>
            </div>
        </nav>
    );
}
export default NavBar;