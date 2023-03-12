import { useState } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Components.scss";
import { Signin } from "../Components/Signin";
import { Register } from "../Components/Register";

export function Authentication() {
  const [currentForm, setCurrentForm] = useState("signin");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <Navbar/>

      {currentForm === "signin" ? (
        <Signin onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </>
  );
}
