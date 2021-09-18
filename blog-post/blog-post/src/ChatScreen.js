import React from 'react'
import Chats from './Chats'
import Right from './Right'
import './ChatScreen.css'


function ChatScreen() {
    return (
        <div className="chatScreen">
            <div className="chatScreen__right">
                <Right />
            </div>  
            <div className="chatScreen__chats">    
            <Chats />
            </div>         
        </div>
    )
}

export default ChatScreen
