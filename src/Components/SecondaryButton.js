import React from "react";
import "../Styles/Components.scss";

function SecondaryButton(props) {
    const label = props.label;
    return ( 
        <button id="secondary-button"/* type="button" onClick={handleClick}*/>
            {label}
        </button>
     );
}

export default SecondaryButton;



