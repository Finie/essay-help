import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


import { FaRegUser } from 'react-icons/fa'

import './reviewitem.css'

function Reviewitem({data}){

  useEffect(() => {
    AOS.init({ duration: 700});
}, [])


    return(
        <div className="review-item">
          <div className="image-holder">
            <div data-aos="fade-up" className="image-bg">
              <FaRegUser className="icon"/>
            </div>
          </div>
          <div className="message-holder">
            <div data-aos="fade-up" className="the-message">
              <div className="client-name">
              <p>{`Client Name: ${data.name}`}</p>
              <p>{`Type: ${data.type_essay} | writer: ${data.writer}`}</p>
              </div>             
              <section>{data.message}</section>   
              <div className="time-posted">
                <p>{data.time}</p></div>
            </div>
          </div>
        </div>
    );
}


export default Reviewitem;