import React from 'react'
import { RiMessage3Line } from 'react-icons/all'

import Analysis from '../../../components/dashboard/analysis/analysis'
import MessageItem from '../../../components/dashboard/messages/messateItem'



import './dashboard.css'



function Dashboard(){

    return(<div className="dashboard-container">

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

                </div>

            </div>

            <h1> hello guys gdfdfdfg ckggfgf vhhkvhkh nbvvnvmn vklvvl xfjf ffccg jljhjh this is the dashboard section</h1>
        </div>
    </div>)
}


export default Dashboard;