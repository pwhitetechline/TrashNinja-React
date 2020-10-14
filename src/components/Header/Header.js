import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import './Header.css';

class Header extends Component {
    render(){
        return(
            <header>
                <nav className="navbar">
                    <div className="branding">
                        <img className="logo" src="./images/trash-ninja-logo.svg" alt="Trash Ninja Logo" />
                    </div>
                    <div className="mobile-icon">
                        <FaBars />
                    </div>  
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Request A Quote</Link>
                        </li>
                    </ul> 
                </nav>
            </header>
        );
    }
}

export default Header;