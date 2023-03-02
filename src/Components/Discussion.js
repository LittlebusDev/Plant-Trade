import React from "react";
import MessageBubble from "./MessageBubble";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import TextArea from "./TextArea";

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
            <TextArea placeholder = "placeholder here"/>
            <PrimaryButton label ='post message'/>
        </div>
        </div>
     );
}

export default Discussion;