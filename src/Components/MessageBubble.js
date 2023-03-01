import React from "react";
import styles from "../Styles/Components.scss";

function MessageBubble(props) {
    return ( 
        <div className="message">
            <img src="../logo.svg"/>
            <div id="textbox-container">
            <h4>username</h4>
            <p>text here</p>
            </div>
        </div>

    );
}

export default MessageBubble;