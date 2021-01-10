import React from 'react'



import './home.css'
import HomeFirst from "../../components/firstcomponent/componentone";
import SecondItem from '../../components/secondhome/secondhomecomponent'
import ThirdItem from '../../components/thirdcomponent/thirdcomponent'
import FourthItem from '../../components/fouthcomponent/fouthcompnent'
import Services from '../../components/onlineinfo/serviceinfo'
import Features from '../../components/features/features'
import {featuretData} from '../../../assets/data/featuredata'

function Home(){



return(

    <div className="home-container">
        <HomeFirst />        
        <FourthItem>            
         <Services />
        </FourthItem>
        <ThirdItem >
         <h1 className="our-feature">OUR FEATURES</h1>
            <div className="feature-item-holder">
                {featuretData.data.map((item)=> <Features data={item} />)}  
            </div>
        </ThirdItem>        
        <SecondItem />
    </div>

);
}


export default Home;