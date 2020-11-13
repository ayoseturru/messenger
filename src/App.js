import {css, StyleSheet} from "aphrodite";
import React, {useEffect} from 'react';
import Config from "./config/Config";
import GridStyles from "./utils/GridStyles";
import Chat from "./components/Chat";

const App = ({extraStyle}) => {
    const styles = StyleSheet.create({
        container: {
            ...GridStyles.define("max-content", "auto"),
            padding: 15
        },
        chat: GridStyles.setRowCol(1, 1)
    });

    useEffect(() => {
        setDocumentTitle();
    }, []);

    function setDocumentTitle() {
        document.title = Config.APP_NAME;
    }

    return (
        <div className={css(styles.container, extraStyle)}>
            <Chat extraStyle={styles.chat}/>
        </div>
    );
};

export default App;
