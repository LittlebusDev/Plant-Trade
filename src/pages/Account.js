import React from "react";
import "../Styles/AccountPage.scss";
import Navbar from "../Components/Navbar";
import PrimaryButton from "../Components/PrimaryButton";
import DetailRow from "../Components/DetailRow";
import Reel from "../Components/Reel";
import SecondaryButton from "../Components/SecondaryButton";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export function AccountPage(props) {
  var username = props.username;

  return (
    <div class="page-container">
      <Navbar />
      <Header headerName="Hello, Rachael!"/>
     
      <div id="account-details-2">
        <div id="account-details">
          <h3>Account Details</h3>
          <div>
            <DetailRow label="Name" value="Rachael" />
            <DetailRow label="Membership Level" value="Plant PRO" />
            <DetailRow label="Email" value="loremipsum123@gmail.com" />
            <DetailRow label="Phone" value="0211635375" />
            <DetailRow label="No of listings" value="23" />
            <DetailRow label="Member since" value="March 2020" />
            <DetailRow label="Location" value="Wellington" />
          </div>
          <PrimaryButton label="update details" />
        </div>
        <div id="payment-details">
          <h3>Payment Details</h3>
          <div>
            <DetailRow label="Name on card" value="R M WILLIAM" />
            <DetailRow label="Card Number" value="XXXX-0654" />
            <DetailRow label="CCV" value="XXX" />
            <DetailRow label="Expiry" value="10/25" />
          </div>
          <PrimaryButton label="update details" />
        </div>
      </div>
      <hr/>


      <div className="reel-container">
        <div className="reel-label">
          <h2>All listings</h2>
          <div className="buttons">
            <PrimaryButton label="See All" />
            <SecondaryButton label="List New Plant" />
          </div>
        </div>
      </div>
      <Reel/>
{/* 
      <div className="reel-container">
        <div className="reel-label">
          <h2>Favourites</h2>
          <div className="buttons">
            <PrimaryButton label="See All" />
          </div>
        </div>
       
      </div> */}
    
      <Footer />
    </div>
  );
}


