import {NEW_CONVERSATION, NEW_MESSAGE, SET_ACTIVE_CONVERSATION} from "../names/main.actions";

const newConversation = (conversation) => ({type: NEW_CONVERSATION, conversation}),
    newMessage = ({conversationId, message}) => ({type: NEW_MESSAGE, conversationId, message}),
    setActiveConversation = (conversationId) => ({type: SET_ACTIVE_CONVERSATION, conversationId});

export {newConversation, newMessage, setActiveConversation};
