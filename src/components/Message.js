import {css, StyleSheet} from "aphrodite";
import React from 'react';

const Message = ({extraStyle, message}) => {
    const styles = StyleSheet.create({
        container: {
            margin: 5
        }
    });

    return (
        <div className={css(styles.container, extraStyle)}>
            {message.message}
        </div>
    );
};

export default Message;
