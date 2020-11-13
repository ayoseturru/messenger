import {css, StyleSheet} from "aphrodite";
import React from 'react';
import GridStyles from "../utils/GridStyles";
import {useDispatch, useSelector} from "react-redux";
import Contact from "../components/Contacts";
import {setActiveConversation} from "../actions/creators/main.creators";

const Conversations = ({extraStyle}) => {
    const {conversations, contacts} = useSelector(state => state.main),
        styles = StyleSheet.create({
            container: {
                ...GridStyles.define("20px auto", "max-content"),
                gridRowGap: 5,
                border: "1px solid blue",
                padding: 5
            },
            title: {
                ...GridStyles.setRowCol(1, 1),
                color: "blue"
            },
            contacts: {
                ...GridStyles.define("repeat(auto-fit, 30px)", "auto"),
                ...GridStyles.setRowCol(2, 1),
                gridRowGap: 2
            }
        }),
        dispatch = useDispatch();

    function onClick(contactId) {
        dispatch(setActiveConversation(contactId));
    }

    return (
        (Object.keys(conversations).length > 0) && <React.Fragment>
            <div className={css(styles.container, extraStyle)}>
                <div className={css(styles.title)}>
                    Contacts
                </div>
                <div className={css(styles.contacts)}>
                    {Object.keys(conversations).sort((a, b) => conversations[b].touched - conversations[a].touched).map(key =>
                        <Contact onClick={() => onClick(key)} contact={contacts[key]} key={key}/>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Conversations;
