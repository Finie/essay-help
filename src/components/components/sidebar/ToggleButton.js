import React from 'react'
import './ToggleButton.css'

const drawerButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
    </button>
)



export default drawerButton;