import React from 'react'

import './whatsappbutton.css'


function Whatsappbutton(props){

    return(
        <div className="whatsapp-button-container">
           
            {props.children}
            
            </div>
    );
}

export default Whatsappbutton;