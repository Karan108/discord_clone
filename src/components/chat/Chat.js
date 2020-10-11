import React from 'react'
import ChatHeader from '../chatheader/ChatHeader';
import "./Chat.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from '../messages/Message';

function Chat() {
    return (
        <div className='chat'>
            <ChatHeader />
            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat_input">
                <AddCircleIcon fontSize='large' />
                <form>
                    <input placeholder={'messag #TESTCHANNEL'} />
                    <button type="submit" className='chat__inputButton'>Send Message</button>
                </form>
                <div className="chat_inputIcons">
                    <KeyboardIcon fontSize='large' />
                    <GifIcon fontSize='large' />
                    <EmojiEmotionsIcon fontSize='large' />
                </div>
            </div>
        </div>
    )
}

export default Chat
