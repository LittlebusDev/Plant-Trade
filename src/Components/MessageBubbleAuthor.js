import React from "react";
import "../Styles/Components.scss";

function MessageBubbleAuthor(props) {
    const userName = props.userName;
    const content = props.content;
    return ( 
        <div className="message" id="message-author">
            <div id="textbox-container-author">
            <h4>{userName}</h4>
            <p>{content}</p>
            </div>
            <img src={ require('../Images/User.png')}/>
        </div>

    );
}

export default MessageBubbleAuthor;