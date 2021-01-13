import React from 'react'

import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'


import Button from '../Button/Button'
import MenuButton from '../sidebar/ToggleButton'
import './navbar.css'



function Navbar({clickHandler,backdropClick}){

return(
<header className="navbar-container">
    <nav className="navbar">
        <div className="button-toggle"><MenuButton click={clickHandler}/></div>
        <div className="logo">Essay<span style={{color:' #F4D140'}}>help</span></div>
        <div className="nav-items">
            <ul className="nav-list">
                <li><Link to={"/"} className="links">Home</Link></li>
                <li><Link to={"/howitworks"} className="links">How It Works</Link></li>
                <li><Link to={"/reviews"} className="links">Review</Link></li>
                <li><Link to={"/pricing"} className="links">Pricing</Link></li>
                <li><a target="_blank" rel="noreferrer" href="https://wa.me/254727213245" className="whatsapp">Whatsapp us <FaWhatsapp  style={{ marginTop: 4, marginLeft:2}}/>  </a></li>
            </ul>
        </div>
        
        <div className="sigin-button"><Link style={{ textDecoration: 'none' }} to={"/login"}><Button onclick={backdropClick} icon="AiOutlineLogin"> Sign in</Button></Link></div>
    </nav>
</header>
);

}


export default Navbar;