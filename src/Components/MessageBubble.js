import React from "react";
import "../Styles/Components.scss";

function MessageBubble(props) {
    const userName = props.userName;
    const content = props.content;
    return ( 
        <div className="message">
            <img src={ require('../Images/User.png')}/>
            <div id="textbox-container">
            <h4>{userName}</h4>
            <p>{content}</p>
            </div>
        </div>

    );
}

export default MessageBubble;