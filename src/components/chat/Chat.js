import React from 'react'
import ChatHeader from '../chatheader/ChatHeader';
import "./Chat.css";

function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <ChatHeader />
            </div>
        </div>
    )
}

export default Chat
