import React from "react";
import {ReactComponent as Heart} from '../Images/Heart.svg';

function Cards() {
  return ( 
    <div className="plantCardStandard">
    <div className="top">
    <h2>$00</h2>
    <Heart className="cardIcon"/>
    </div>
        <h3>Plant Name</h3>
</div>
   );
}

export default Cards;