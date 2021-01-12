import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Lottie from 'react-lottie'

import './lottiecontainerLeft.css'


function LottiecontainerLeft({animationData,title,body}){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
       
    }

    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])
    
    return(
    <div className="lottieLeft-container">

        <div data-aos="fade-right" className="lottie-file">
           <Lottie options={defaultOptions}
              height={400}
            width={400}/>
        </div>

        <div data-aos="fade-left" className="content-info"> 
        <h1>{title}</h1>
        <p>{body}</p>
        </div>

        <div className="separatie"/>
    </div>
    );
}


export default LottiecontainerLeft;