import React from "react";
import "../Styles/Components.scss";

function Card() {
  return (
    <div className="plantCardStandard">
      <div className="cardIcon">
        <img src="/Vector.png" alt="" />
      </div>
      <div className="innerBox">
        <img src="https://unsplash.it/400/200" alt="Probably a plant" />
      </div>
      <div className="outerBox">
        <div className="textTop">
          <h2>Plant Name</h2>
          <h2>$00</h2>
        </div>
        <div className="textBottom">
          <p>SOME INFO ABOUT THE PLANT GOES HERE</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
