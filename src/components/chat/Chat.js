import React, { useState, useEffect } from 'react'
import ChatHeader from '../chatheader/ChatHeader';
import "./Chat.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from '../messages/Message';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import db from '../../firebase';
import firebase from 'firebase';

function Chat() {
    const [messages, setMessages] = useState([]);
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState('');
    useEffect(() => {
        if (channelId) {
            db.collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map(doc => doc.data()))
                });
        }
    }, [channelId])
    const sendMessage = e => {
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user
        });
        setInput('');
    };
    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />
            <div className="chat__messages">
                {messages.map(message => (<Message timestamp={message.timestamp} message={message.message} user={message.user} />))}
            </div>
            <div className="chat_input">
                <AddCircleIcon fontSize='large' />
                <form>
                    <input placeholder={`message ${channelName}`} disabled={!channelId} onChange={(e) => { setInput(e.target.value) }} value={input} />
                    <button disabled={!channelId} type="submit" className='chat__inputButton' onClick={sendMessage}>Send Message</button>
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
