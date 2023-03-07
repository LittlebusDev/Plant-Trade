import React from "react";

function DetailRow(props) {
    const label = props.label;
    const value = props.value;
    return ( 
        <span className="detail-row">
            <h4>{label}</h4>
            <h4>{value}</h4>
        </span>
     );
}

export default DetailRow;