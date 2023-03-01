import React from "react";
import styles from "../Styles/Components.scss";

function Input(props) {
    return ( 
        <input placeholder={props.PlaceHolderText}></input>    
     );
}

export default Input;