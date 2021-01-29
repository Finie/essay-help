import React from 'react'

import { AiOutlineLogin } from 'react-icons/ai'

import './button.css'


function Button(props){

    let Icon = null;
    let buttonClass = "button-container";

    if(props.icon === 'AiOutlineLogin'){
        buttonClass = "button-container";
        Icon =  <AiOutlineLogin  style={{ marginTop: 0, marginRight:4}}/>;
    }
    else{
        buttonClass="button-container-bg"
    }


    return(
        <div  click={props.onclick} className={buttonClass}>
            {Icon}
            {props.children}
            
            </div>
    );
}

export default Button;