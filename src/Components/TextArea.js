import React from "react";
import  "../Styles/Components.scss";

function TextArea(props) {
    return ( 
        <textarea placeholder={props.PlaceHolderText} ></textarea>    
     );
}

export default TextArea;