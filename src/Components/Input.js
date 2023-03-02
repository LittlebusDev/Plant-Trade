import React from "react";
import styles from "../Styles/Components.scss";

function Input(props) {
    const label = props.label;

    return ( 
        <div>
        <label className="Label">{label}</label>
        <input type='text' placeholder={props.PlaceHolderText}></input>    
        </div>
     );
}

export default Input;