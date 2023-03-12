import React from "react";
import "../Styles/App.scss";

function Header(props) {
  return (
    <div className="header-container">
      <div className="intro-image">
        <div className="header-text-box">
          <h1 className="header-text">{props.headerName}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
