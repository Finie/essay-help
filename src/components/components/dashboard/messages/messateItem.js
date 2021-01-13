import React from 'react'
import Iconcomp from '../../icons/iconcomp'


import './messageitem.css'


function MessageItem(){
    return(
        <div className='item-container'>
            <div>
            <Iconcomp/>
            </div>
            <div className="message-info">
                <header>Username or user Id</header>
                <div className="message">the message here and it says this text and some more text and more text to reach the end</div>
            </div>
        </div>
    );
}


export default MessageItem