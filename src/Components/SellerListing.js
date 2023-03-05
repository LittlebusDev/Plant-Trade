import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import {ReactComponent as Star} from '../Images/Star.svg';
import Cards from "./Cards";

function SellerListing(props) {

    const UserName = props.UserName;

    return (  
        <div id="seller-details">
            <div id="left">
            <div id="username-icon">
                <img id='seller-icon' src={ require('../Images/User.png')}/>
                <div id="username">
                <h3>{UserName}</h3>
                <span className="rating"><Star/><Star/><Star/><Star/><Star/></span>
                </div>
                </div>
                <div className="buttons">
                <PrimaryButton label='View profile'/>
                <SecondaryButton label='Rate seller'/>
                </div>
            </div>
            <div id="reel">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>                
            </div>
        </div>
    );
}

export default SellerListing;