import React from "react";
import "../Styles/Components.scss";

function PrimaryButton(props) {
    const label = props.label;
    return ( 
        <button id='primary-button' /* type="button" onClick={handleClick}*/>
            {label}
        </button>
     );
}

export default PrimaryButton;