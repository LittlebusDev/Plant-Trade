import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

// signin/signup components
import { Signin } from "../src/Components/Signin";
import { Register } from "../src/Components/Register";


function App() {

  // sign in page logics
  const [currentForm, setCurrentForm] = useState('signin');

  const toggleForm = (formName) => {
    setCurrentForm(formName);

  }
  return (
    <div className="App">

     
      {
        currentForm === "signin" ? <Signin onFormSwitch={ toggleForm } /> : <Register onFormSwitch={ toggleForm }/>
      }





    </div>
  );
}

export default App;
