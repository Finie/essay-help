import React from 'react'
import { Link } from 'react-router-dom'

import './DashboardSide.css'

function DashboardSide(props) {
    let sideBarClass = 'dash-side-bar open';

    if(props.show){
        sideBarClass = 'dash-side-bar'
    }

    return(
        <nav className={sideBarClass}>
            <div className="logo-holder">Legal<span style={{color:' #F4D140'}}>essay</span></div>
            <ul className="nav-list">
                <li><Link to={"/"} onClick={props.backdropClick} className="links">dashboard</Link></li>
                <li><Link to={"/orders"} onClick={props.backdropClick} className="links">Order</Link></li>
                <li><Link to={"/my-orders"} onClick={props.backdropClick} className="links">My Orders</Link></li>
                <li><Link to={"/user-management"} onClick={props.backdropClick} className="links">User Management</Link></li>
                <li><Link to={"/settings"} onClick={props.backdropClick} className="links">Settings</Link></li>
            </ul>
        </nav>
    );
}

export default DashboardSide
