import React from "react";
import styles from "../Styles/Components.scss";
import PrimaryButton from "./PrimaryButton";
import Input from "./Input";

function SearchBar(props) {
    return ( 
        <div className="wrapper">
        <label className="Label">input label</label>
        <div className="vertical-wrapper">
        <Input PlaceHolderText = "Search for your next leafy friend here"/>
        <PrimaryButton/>
        </div>
        </div>
     );
}

export default SearchBar;