import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


import './secondhomecomponent.css'
import legit from '../../../assets/lottie/legit.json'
import securiry from '../../../assets/lottie/securiry.json'
import read from '../../../assets/lottie/read.json'
import LottieLeft from './lottiecontainerLeft'
import LottieRight from './lottiecontainerRight'
import {lottieDataOne,lottieDataTwo,lottieDataThree} from '../../../assets/data/lottiedata'
import Button from "../Button/Button"
 
function Secondhomecomponent(){

    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])

    return(
        <div className="second-container">
            <div className="essay" >
            <div className="essay-service">
        <header data-aos="fade-up">Essay<span style={{color:' #F4D140'}}>help</span> A grade services</header>
        <section data-aos="fade-up">Our platform is generated for quick and simple fixes as well as long-term guidance. As a top paper writing service, we work with sophisticated and complex requests alongside simple ones. We are very experienced in working with a multitude of academic tasks; this includes admission assignments, research papers, term papers, etc. Also, our company is a reliable consultation dissertation writing service..</section>
        <section data-aos="fade-up">Our team understands the importance of the content we present. That is why we take it upon ourselves to implement legitimacy within the work we provide. Moreover, our website blog includes free writing tips and tutorials to help potential clients as well as for students who just need academic guidance.</section>
            </div>
            </div>
            <div className="guarantee">
                <h1 data-aos="fade-up">Our 100% guarantee plan</h1>
            </div>            
           <LottieLeft animationData={securiry} title={lottieDataOne.lottie_title} body={lottieDataOne.lottie_body} />
           <LottieRight animationData={legit} title={lottieDataTwo.lottie_title} body={lottieDataTwo.lottie_body}/>
           <LottieLeft animationData={read} title={lottieDataThree.lottie_title} body={lottieDataThree.lottie_body} />

           <div className="button-holer">
               <Button>View Samples</Button>
           </div>
        </div>
    );

}


export default Secondhomecomponent;