import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import MessageParser from "../chatbot/MessageParser";
import config from "../chatbot/config";
import ActionProvider from "../chatbot/ActionProvider";
import {BiMessageAltDots} from 'react-icons/bi'
import "./ChatBox.css";

function ChatBox() {
  const [active, showChatBox] = useState(false);

  // toggle the chat box
  const toggleChatBox = () => {
    showChatBox(!active);
  };
  return (
    <div className="bot-container">
      <div className={active ? "chat-box-active" : "chat-box"}>
        <div className="chat-header" onClick={toggleChatBox}><BiMessageAltDots style={{ marginTop:4}}/> Legal<span style={{color:' #F4D140'}}>Essay</span>Writers  chat</div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

export default ChatBox;
