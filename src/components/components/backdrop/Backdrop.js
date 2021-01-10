import React from 'react'
import "./Backdrop.css";

const backdrop = props => (
    <div onClick={props.backdropClick} className="backdrop" />

);

export default backdrop;