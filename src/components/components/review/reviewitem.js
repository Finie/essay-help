import React from 'react'
import { FaRegUser } from 'react-icons/fa'

import './reviewitem.css'

function Reviewitem({data}){
    return(
        <div className="review-item">
          <div className="image-holder">
            <div className="image-bg">
              <FaRegUser className="icon"/>
            </div>
          </div>
          <div className="message-holder">
            <div className="the-message">
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