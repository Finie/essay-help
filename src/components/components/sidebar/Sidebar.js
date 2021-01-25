import React from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'
function Sidebar(props){

    let sideBarClass = 'side-bar';
    if(props.show){
        sideBarClass = 'side-bar open'
    }

    return(
        <nav className={sideBarClass}>
            <div className="logo-holder">Legal<span style={{color:' #F4D140'}}>essay</span>writers</div>
            <ul className="nav-list">
                <li><Link to={"/"} onClick={props.backdropClick} className="links">Home</Link></li>
                <li><Link to={"/howitworks"} onClick={props.backdropClick} className="links">How It Works</Link></li>
                <li><Link to={"/reviews"} onClick={props.backdropClick} className="links">Review</Link></li>
                <li><Link to={"/pricing"} onClick={props.backdropClick} className="links">Pricing</Link></li>
            </ul>
        </nav>
    );
}


export default Sidebar;