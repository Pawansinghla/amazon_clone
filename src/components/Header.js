import React from 'react'
import "./Header.css";
import {Link} from 'react-router-dom';

 function Header() {
    

    return (
    <nav className="header" >
        <Link to="/">
        <img className="header_logo" src="../.././amazon_logo.png" alt="logo"/>
        </Link>
        <input type="text" className="header_searchInput"/>

    </nav>
            
    
    );
 }
export default Header;
