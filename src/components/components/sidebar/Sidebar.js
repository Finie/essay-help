import React from 'react'

import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

import './sidebar.css'
function Sidebar(props){

    let sideBarClass = 'side-bar';
    if(props.show){
        sideBarClass = 'side-bar open'
        console.log("sidebar opened")
    }

    return(
        <nav className={sideBarClass}>
            <div className="logo-holder">Essay<span style={{color:' #F4D140'}}>help</span></div>
            <ul className="nav-list">
                <li><Link to={"/"} onClick={props.backdropClick} className="links">Home</Link></li>
                <li><Link to={"/howitworks"} onClick={props.backdropClick} className="links">How It Works</Link></li>
                <li><Link to={"/reviews"} onClick={props.backdropClick} className="links">Review</Link></li>
                <li><Link to={"/pricing"} onClick={props.backdropClick} className="links">Pricing</Link></li>
                <li><Link to={"/blogs"} onClick={props.backdropClick} className="links">Blog</Link></li>
                <li><Link to={"/orders"} onClick={props.backdropClick} className="links">Order</Link></li>
            </ul>
        </nav>
    );
}


export default Sidebar;