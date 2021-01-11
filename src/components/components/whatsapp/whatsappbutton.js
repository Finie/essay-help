import React from 'react'

import './whatsappbutton.css'


function Whatsappbutton(props){

    return(
        <a target="_blank" rel="noreferrer" href={props.url} className="whatsapp-button-container">
           
            {props.children}
            
            </a>
    );
}

export default Whatsappbutton;