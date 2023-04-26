import styles from './chatbubble.module.css';

const ChatBubble = (props) => {

    return(
        <div className={styles.chatbubble}>
            <span>{props.message}</span>
        </div>
    )

}

export default ChatBubble;