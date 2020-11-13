import {css, StyleSheet} from "aphrodite";
import React from 'react';
import GridStyles from "../utils/GridStyles";
import ActionBar from "./ActionBar";
import Conversations from "../containers/Conversations";
import ActiveConversation from "./ActiveConversation";
import {useSelector} from "react-redux";

const Chat = ({extraStyle}) => {
    const styles = StyleSheet.create({
            container: GridStyles.define("max-content 25px max-content", "auto"),
            actionBar: GridStyles.setRowCol(1, 1),
            chat: {
                ...GridStyles.setRowCol(3, 1),
                ...GridStyles.define("auto", "max-content auto"),
                gridColumnGap: 15
            },
            contacts: GridStyles.setRowCol(1, 1),
            conversation: GridStyles.setRowCol(1, 2)
        }),
        {activeConversationId} = useSelector(state => state.main);

    return (
        <div className={css(styles.container, extraStyle)}>
            <ActionBar extraStyle={styles.actionBar}/>
            <div className={css(styles.chat)}>
                <Conversations extraStyle={styles.contacts}/>
                {activeConversationId && <ActiveConversation activeConversationId={activeConversationId}
                                                             extraStyle={styles.conversation}/>}
            </div>
        </div>
    );
};

export default Chat;
