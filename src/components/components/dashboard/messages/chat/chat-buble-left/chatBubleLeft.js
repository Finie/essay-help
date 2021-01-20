import React from 'react'
import Iconcomp from '../../../../icons/iconcomp';


import './chatBubleLeft.css'


function ChatBubleLeft(){

    return(
        <div className="chat-bubble-left">
            <div>
            <Iconcomp/>
            </div>
            <div className="message-and-time">
            <div className="message-container-chat">
                <p>hey this is how the message box will be like here is some more text form the client</p>
            </div>
            <div className="message-time">@ 11:20AM </div>
            </div>
        </div>
    )
}


export default ChatBubleLeft;