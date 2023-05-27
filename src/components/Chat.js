import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifBoxIcon from '@mui/icons-material/GifBox';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Message from './Message'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName, selectDepId, selectDepName, selectYearId, selectYearName } from '../features/appSlice';
import db from '../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useRef } from 'react';

function Chat() {

    const user = useSelector(selectUser);
    const departmentName = useSelector(selectDepName);
    const departmentId = useSelector(selectDepId);
    const yearId = useSelector(selectYearId);
    const yearName = useSelector(selectYearName)
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const dummy = useRef()

    useEffect(() => {
        if (channelId && departmentId && yearId) {
            db.collection("departments").doc(departmentId).collection("years").doc(yearId).collection("channels").doc(channelId).collection('messages').orderBy('timestamp','asc')
            .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ); 
        }
        
    },[channelId,yearId,departmentId]);

    const sendMessage = e => {
        e.preventDefault();

        db.collection("departments").doc(departmentId).collection("years").doc(yearId).collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });

        setInput("");

        dummy.current.scrollIntoView({ behaviour: 'smooth'})

    };

  return (
    <div className="chat">
        <ChatHeader channelName={ channelName }/>
        {/* <ChatHeader /> */}
        <div className="msg-scroll">
            <div className="messages">
                {messages.map((message) => (
                    <Message 
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}
                <div ref={dummy}></div>
            </div>
        </div>
        <div className="input">
            <AddCircleIcon />
            <form>
                <input value={ input } disabled={!channelId} onChange={e => setInput(e.target.value)} placeholder={`Message in ${channelName}...`} />
                <button disabled={!channelId} className='send' type='submit' onClick={sendMessage}>Send Message</button>

                {/* <input placeholder="Message here"/>
                <button className='send'>Send Message </button> */}

            </form>

            <div className="inputicons">
                <AttachFileIcon />
                <GifBoxIcon />
                <EmojiEmotionsIcon />
            </div>
        </div>
    </div>
    )
}

export default Chat