const Config = {
    nextUserId: 0,
    nextMessageId: 0
};

export default class ConversationsManager {
    static createNewConversation(contactName) {
        Config.nextUserId++;

        return {
            name: contactName,
            id: Config.nextUserId
        }
    }

    static createNewMessage(message) {
        Config.nextMessageId++;

        return {
            id: Config.nextMessageId,
            message
        }
    }
}
