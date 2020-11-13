import {css, StyleSheet} from "aphrodite";
import React, {useState} from 'react';
import GridStyles from "../utils/GridStyles";
import {useDispatch, useSelector} from "react-redux";
import {newMessage} from "../actions/creators/main.creators";
import Message from "./Message";
import ConversationsManager from "../utils/ConversationsManager";

const ActiveConversation = ({extraStyle, activeConversationId}) => {
    const styles = StyleSheet.create({
            container: {
                ...GridStyles.define("minmax(400px, max-content) auto max-content 10px", "auto"),
                border: "1px solid blue"
            },
            messages: GridStyles.setRowCol(1, 1),
            create: GridStyles.setRowCol(3, 1)
        }),
        [message, setMessage] = useState(""),
        {conversations} = useSelector(state => state.main),
        conversation = conversations[activeConversationId],
        dispatch = useDispatch();

    function sendMessage() {
        if (message) {
            dispatch(newMessage({
                conversationId: activeConversationId,
                message: ConversationsManager.createNewMessage(message)
            }));
            setMessage("");
        }
    }

    return (
        <div className={css(styles.container, extraStyle)}>
            <div className={css(styles.messages)}>
                {conversation.messages.map((message) =>
                    <Message key={message.id} message={message}/>
                )}
            </div>
            <form className={css(styles.create)} onSubmit={e => e.preventDefault()}>
                <input autoComplete="off" className={css(styles.create)}
                       onChange={(e) => setMessage(e.target.value)} value={message}/>
                <button onClick={sendMessage}>Send</button>
            </form>
        </div>
    );
};

export default ActiveConversation;
