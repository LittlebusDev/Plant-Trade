import React from "react";
import styles from "../Styles/Components.scss";

function PrimaryButton(props) {
    return ( 
        <button id='primary-button' text={props.text} /* type="button" onClick={handleClick}*/>
        </button>
     );
}

export default PrimaryButton;