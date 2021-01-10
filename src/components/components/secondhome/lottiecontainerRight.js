import React from 'react'
import Lottie from 'react-lottie'


import './lottiecontainerRight.css'


function LottiecontainerRight({animationData,title,body}){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
       
    }
    return(
<div className="lottieLeft-container">

<div className="separatie"/>

<div className="content-info"> 
<h1>{title}</h1>
<p>{body}</p>
</div>
<div className="lottie-file">
   <Lottie options={defaultOptions}
      height={400}
    width={400}/>
</div>

</div>
    );
}

export default LottiecontainerRight;