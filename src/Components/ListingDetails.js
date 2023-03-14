import React from "react";
import "../Styles/Components.scss";
import { ReactComponent as Heart } from "../Images/Heart.svg";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function ListingDetails(props) {
  const title = props.title;
  const species = props.species;
  const price = props.price;
  const details = props.details;

  return (
    <div id="item">
      <div>
        <img src={require("../Images/Aglaonema.png")}></img>
      </div>
      <div id="details">
        <div className="top">
          <div>
            <h1>{title}</h1>
            <h3>{species}</h3>
          </div>
          <div id="price">
            <h1>{price}</h1>
            <Heart className="icon" />
          </div>
        </div>
        <div className="bottom">
          <h4>Description</h4>
          <p>{details}</p>
        </div>
        <div className="detail-btn" id="buttons">
          <SecondaryButton label="Add to Cart" />
          <PrimaryButton label="Buy Now" />
        </div>
      </div>
    </div>
  );
}

export default ListingDetails;
