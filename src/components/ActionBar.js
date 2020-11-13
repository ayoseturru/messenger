import {css, StyleSheet} from "aphrodite";
import React, {useState} from 'react';
import GridStyles from "../utils/GridStyles";
import {useDispatch} from "react-redux";
import {newConversation} from "../actions/creators/main.creators";
import ConversationsManager from "../utils/ConversationsManager";

const ActionBar = ({extraStyle}) => {
    const styles = StyleSheet.create({
            container: {
                ...GridStyles.define("max-content", "auto 25px max-content"),
                padding: 5,
                border: "1px solid green"
            },
            filterBar: GridStyles.setRowCol(1, 1),
            newButton: GridStyles.setRowCol(1, 3),
            filterInput: {
                width: "-webkit-fill-available"
            }
        }),
        [contactFromBar, setContactFromBar] = useState(""),
        dispatch = useDispatch();

    function onFilterChange(e) {
        setContactFromBar(e.target.value);
    }

    function createNewConversation() {
        if (contactFromBar) {
            dispatch(newConversation(ConversationsManager.createNewConversation(contactFromBar)));
            setContactFromBar("");
        }
    }

    return (
        <div className={css(styles.container, extraStyle)}>
            <form className={css(styles.filterBar)} onSubmit={e => e.preventDefault()}>
                <input placeholder={"Contact name..."} autoComplete="off" className={css(styles.filterInput)}
                       onChange={onFilterChange} value={contactFromBar}/>
            </form>
            <button onClick={createNewConversation} className={css(styles.newButton)}>New conversation</button>
        </div>
    );
};

export default ActionBar;
