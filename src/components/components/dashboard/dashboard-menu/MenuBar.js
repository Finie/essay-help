import React from 'react'
import { AiOutlineLogout,AiOutlineMessage } from 'react-icons/ai'

import MenuButton from '../../sidebar/ToggleButton'
import './MenuBar.css'

const MenuBar = ({clickHandler,backdropClick}) =>(
    <header className='menu-container'>
        <nav className="dashboard-menu-nav">
            <div className="dash-button-toggle"><MenuButton click={clickHandler}/></div>
            <div className="dash-logo"><h2>Essays<span style={{color:' #F4D140'}}>help</span></h2></div>
            <div className="menu-separator"/>
            <div className="navigation-items">
                <ul className="list-items">
                    <li><AiOutlineMessage className="menu-icon" /> inbox</li>
                    <li><AiOutlineLogout className="menu-icon"/> log out</li>
                </ul>
            </div>
        </nav>
    </header>
);


export default MenuBar;