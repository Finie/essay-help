import React from "react";
import { RiMessage3Line } from "react-icons/all";

import Analysis from "../../../components/dashboard/analysis/analysis";
import ChatBubleLeft from "../../../components/dashboard/messages/chat/chat-buble-left/chatBubleLeft";
import ChatBubleRight from "../../../components/dashboard/messages/chat/chat-buble-right/chatBubleRight";
import MessageItem from "../../../components/dashboard/messages/messateItem";
import Iconcomp from "../../../components/icons/iconcomp";

import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dash-item-holder">

            <div className="analysis">
                <Analysis />
                <Analysis />
                <Analysis />
            </div>

            <div className="message-container">

                <div className="message-items">
                    <div className="message-header-tag">
                        <header><RiMessage3Line /> Messages</header>
                    </div>
                    <MessageItem/>
                    <MessageItem/>
                    <MessageItem/>
                    <MessageItem/>
                    <MessageItem/>

                    <div className="message-header-tag">
                        <header>Messages conversation list</header>
                    </div>
                </div>

                <div className="chat-ui">

                <div className="message-items">
                    <div className="message-header-tag">
                        <header><RiMessage3Line /> Conversation view</header>
                    </div>
                    <div className="conversations">
                    <ChatBubleLeft/>
                    <ChatBubleRight/>
                    <ChatBubleLeft/>
                    <ChatBubleRight/>
                    <ChatBubleLeft/>
                    <ChatBubleRight/>
                    <ChatBubleLeft/>
                    <ChatBubleRight/>
                    </div>
                    <div className="message-header-chat-bot">
                      
                        <div className="text-filed">
                        <textarea placeholder="Type your message here"/>
                        </div>

                        <div className="send-button">
                            <Iconcomp/>
                        </div>


                    </div>
                    </div>
                </div>

            </div>

            <h1>Dashboard footer will go here</h1>
        </div>
    </div>
  );
}

export default Dashboard;
