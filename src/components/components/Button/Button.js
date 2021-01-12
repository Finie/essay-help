import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { AiOutlineLogin } from 'react-icons/ai'

import './button.css'


function Button(props){
        useEffect(() => {
            AOS.init({ duration: 700 })
        }, [])
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
        <div data-aos="fade-up" className={buttonClass}>
            {Icon}
            {props.children}
            
            </div>
    );
}

export default Button;