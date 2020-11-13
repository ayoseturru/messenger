import {css, StyleSheet} from "aphrodite";
import React from 'react';
import GridStyles from "../utils/GridStyles";

const Contact = ({extraStyle, contact, onClick}) => {
    const styles = StyleSheet.create({
        container: {
            ...GridStyles.define("max-content", "max-content"),
            padding: 5,
            border: "1px solid green",
            cursor: "pointer"
        }
    });

    return (
        <div className={css(styles.container, extraStyle)} onClick={onClick}>
            {contact.name}
        </div>
    );
};

export default Contact;
