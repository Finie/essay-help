import React,{ useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Pricingcomp from '../../../components/pricing/pricingcomp'
import Essay from '../../../components/essay/newessay'
import { pricingData } from '../../../../assets/data/pricingData'
import './pricing.css'

function Pricing(){
    
    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])

return(
    <div className="pricing-container">

        <div className="price-info">
            <div className="right-description">
               <div className="right-content">
                   <header>Online Class Help</header>

                   <header>Full class help</header>
                   <section>For online classes we have an amazing offer of 100-160 per week on this package we do all assignments and exams due within 7 days regardless of the amount of assignments, quizzes or exams per week.</section>

                   <header>Exams</header>
                   <section>We charge $100-$360 per exam, please chat with support to get the exact quote. We do proctored exams.</section>
                  
               </div>
                </div>
            <div className="left-description">
                <Essay />
            </div>
        </div>
        <div className="bottom">
            <div className="pricetag">
            <header>Pricing List</header>
            </div>
        <div className="price-holder">
        {pricingData.data.map((item)=><Pricingcomp data={item}/>)}
        </div>

        <div className="notice">
        <section>
        <b>Please note: </b>all prices in the table are presented in US dollars, but any other currency will be automatically converted when you make the payment. The prices are specified without the VAT. It will be charged additionally if you live in the EU.
        </section>
        </div>
        </div>
      
    </div>
);
}


export default Pricing;