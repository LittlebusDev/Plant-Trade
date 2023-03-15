import React from "react";
import MessageBubble from "./MessageBubble";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import TextArea from "./TextArea";
import "../Styles/Components.scss";


function Discussion() {
    return ( 
        <div>
        <h1 id="discussion-title">Discussion</h1>
        <div id="message-feed">
        <MessageBubble userName = "username" content = "content goes here"/>
        <MessageBubble userName = "username" content = "content goes here"/>
        <MessageBubble userName = "username" content = "content goes here"/>
        </div>
        <div id="create-message">
            <p><TextArea placeholder = "placeholder here"/></p>
            <PrimaryButton label ='Post message'/>
        </div>
        </div>
     );
}

export default Discussion;