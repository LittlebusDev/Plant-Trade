import React from "react";
import styles from "../Styles/Components.scss";
import upload from "../Images/upload";
import Input from "../Components/Input"

function Upload() {
    return (
        <div className="upload-container">
            <h2> 1. Upload photos(upto 10photos)</h2>
            <div className="upload-img-box">
                <img src={ upload } alt="upload"></img>
            </div>
            <h2 className="upload-h2">2.Title</h2>
            <Input/>
            <h2 className="upload-h2"> 3. Type</h2>
            <Input/>
            <h2 className="upload-h2">4. Price </h2>
            <Input/>
            <h2 className="upload-h2">5.Description</h2>
            <Input/>

        </div>
    )
}
export default Upload;