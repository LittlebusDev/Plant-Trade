import React from "react";
import "../Styles/Components.scss";
import PrimaryButton from "./PrimaryButton";
import Input from "./Input";

function SearchBar(props) {
  return (
    <div className="wrapper">
      <div className="vertical-wrapper">
        <input placeholder="Search for your next leafy friend here"></input>
        <PrimaryButton label="search" />
      </div>
    </div>
  );
}

export default SearchBar;
