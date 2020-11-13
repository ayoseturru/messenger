import {NEW_CONVERSATION, NEW_MESSAGE, SET_ACTIVE_CONVERSATION} from "../actions/names/main.actions";
import InitialState from "../config/InitialState";

const mainReducer = (state = InitialState.main, action) => {
    switch (action.type) {
        case NEW_CONVERSATION:
            return {
                ...state,
                conversations: {
                    ...state.conversations,
                    [action.conversation.id]: {
                        messages: [],
                        touched: new Date().getTime()
                    },
                },
                contacts: {
                    ...state.contacts,
                    [action.conversation.id]: {
                        ...action.conversation
                    }
                },
                activeConversationId: action.conversation.id,
            };
        case NEW_MESSAGE:
            return {
                ...state,
                conversations: {
                    ...state.conversations,
                    [action.conversationId]: {
                        ...state.conversations[action.conversationId],
                        messages: [{...action.message}, ...state.conversations[action.conversationId].messages],
                        touched: new Date().getTime()
                    }
                }
            };
        case SET_ACTIVE_CONVERSATION:
            return {
                ...state,
                activeConversationId: action.conversationId
            }
        default:
            return state
    }
};

export default mainReducer;
