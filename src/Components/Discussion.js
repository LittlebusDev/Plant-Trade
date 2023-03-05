import React from "react";
import MessageBubble from "./MessageBubble";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import TextArea from "./TextArea";
import MessageBubbleAuthor from "./MessageBubbleAuthor";

function Discussion() {
    return ( 
        <div id="discussion-container">
        <h1 id="discussion-title">Discussion</h1>
        <div id="message-feed">
        <MessageBubble userName = "username" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <MessageBubble userName = "username" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
        <MessageBubbleAuthor userName = "luv2sell2008" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."/>
        <MessageBubble userName = "username" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
        <MessageBubble userName = "username" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <MessageBubble userName = "username" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
        <MessageBubbleAuthor userName = "luv2sell2008" content = "Lorem ipsum dolor sit amet."/>
        
        </div>
        <div id="create-message">
            <TextArea placeholder = "placeholder here"/>
            <PrimaryButton label ='post message'/>
        </div>
        </div>
     );
}

export default Discussion;