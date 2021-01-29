import React from 'react'
import { RiDashboardLine,RiUserHeartLine,FaUsersCog,RiFileList3Fill,GiShoppingCart } from 'react-icons/all'

import { Link } from 'react-router-dom'
import image_url from '../../../../assets/background.jpg';

import './DashboardSide.css'


function DashboardSide({backdropClick,hide}){

    let isDashboardVisible= "dashboard-side-bar"

    if (!hide) {
        isDashboardVisible= "dashboard-side-bar close"
        
        console.log("sidebar closed")
    }

    return(
        <nav className={isDashboardVisible}>
                <div className="dash-logo-holder"> 
                <img className="user-image" alt="user_icon" src={image_url} /> 
                <p>User: Name of user</p></div>
            <ul className="nav-list">
                <li><Link to={"/"}  className="links"><RiDashboardLine/> Dashboard</Link></li>
                <li><Link to={"/orders"}  className="links"><GiShoppingCart/> Place Orders</Link></li>
                <li><Link to={"/my-orders"}  className="links"><RiFileList3Fill/> My Orders</Link></li>
                <li><Link to={"/user-management"}  className="links"><RiUserHeartLine /> Manage users</Link></li>
                <li><Link to={"/settings"} className="links"><FaUsersCog style={{marginTop:14}}/> Settings</Link></li>
            </ul>
        </nav>
    );
}


export default DashboardSide;