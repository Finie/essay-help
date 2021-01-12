import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


import Lottie from 'react-lottie'


import './lottiecontainerRight.css'


function LottiecontainerRight({animationData,title,body}){

    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])
    

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
       
    }
    return(
<div className="lottieLeft-container">

<div className="separatie"/>

<div data-aos="fade-right" className="content-info"> 
<h1>{title}</h1>
<p>{body}</p>
</div>
<div data-aos="fade-left" className="lottie-file">
   <Lottie options={defaultOptions}
      height={400}
    width={400}/>
</div>

</div>
    );
}

export default LottiecontainerRight;