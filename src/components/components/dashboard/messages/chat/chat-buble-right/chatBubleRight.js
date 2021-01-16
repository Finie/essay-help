import React from "react";
import Iconcomp from "../../../../icons/iconcomp";

import "./chatBubleRight.css";

function ChatBubleRight() {
  return (
    <div className="chat-bubble-right">
      <div className="message-and-time-right">
        <div className="message-time-right">@ 11:20AM </div>
        <div className="message-container-chat-right">
          <p>
            hey this is how the message box will be like here is some more text
            form the client
          </p>
        </div>
      </div>
      <div className="icon-chat">
        <Iconcomp />
      </div>
    </div>
  );
}

export default ChatBubleRight;
