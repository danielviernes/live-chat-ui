import { useState } from "react";
import ChatBubble from "./ChatBubble";
import styles from './chatbox.module.css';

const Chatbox = () => {

    const [messages, setMessages] = useState([{
        message: "",
        timestamp: ""
    }]);

    const sendMessage = () => {
        var newMessage = document.getElementsByClassName("message-input")[0].value;
        console.log(newMessage)
        setMessages([
            ...messages,
            {message: newMessage, timestamp: Math.floor(Date.now() / 1000)}
        ])
    }

    return(
        <div className="wrapper is-three-quarters">
            <div className={styles.chatbox}>
                <ul>
                {messages.map(item => {
                    //TODO: add message ID (?) as <li> key
                    return(<li><ChatBubble message={item.message} timestamp={item.timestamp} /></li>);
                })}
                </ul>
            </div>
            <div className="chat-messaging field is-grouped">
                <div className="control is-medium">
                    <input className="message-input" type="text" placeholder="Enter message"/>
                </div>
                <div className="control is-medium">
                    <button className="button" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chatbox;