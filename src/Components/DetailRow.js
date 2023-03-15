import React from "react";

function DetailRow(props) {
  const label = props.label;
  const value = props.value;
  return (
    <span className="detail-row">
      <div>
        <h4>{label}</h4>
      </div>
      <div>
        <h4>{value}</h4>
      </div>
    </span>
  );
}

export default DetailRow;
