import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import {BsCheckCircle} from 'react-icons/bs'
import Essay from '../essay/newessay'
import Button from '../Button/Button'
import './componentone.css'


function Componentone(){
    useEffect(() => {
        AOS.init({ duration: 700});
    }, [])
return(
    
    <div className="first-container">
    
    <div className="spacer"/>

    <div className="info-holder">

        <h1 data-aos="fade-up" >Get an A or refund Take our online class help. We specialise in:</h1>
        <ul data-aos="fade-down" className="services">
            <li><BsCheckCircle/> Homework help</li>
            <li><BsCheckCircle/> Take my exam</li>
            <li><BsCheckCircle/> Take my online class help</li>
            <li><BsCheckCircle/> Take my quiz and test</li>
            <li><BsCheckCircle/> We do proctored exams and exams on zoom too.</li>
        </ul>

        <div className="disclaimer-top">
            <header>Zero plagiarism papers, any deadline 3-24 hours</header>
            <Button>Click here to place your order  &gt; &gt;</Button>
        </div>
    </div>

    <div data-aos="zoom-in" className="order-holder">
        <Essay />
    </div>

    </div>
);

}


export default Componentone;