<<<<<<< HEAD
import React, { useState } from "react";
import logo from './logo.svg';
=======

>>>>>>> c6ea90ec629e5488fcf841b74fb837abd3d990b1
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

// signin/signup components
import { Signin } from "../src/Components/Signin";
import { Register } from "../src/Components/Register";


function App() {
<<<<<<< HEAD

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
=======
  return ( <Navbar /> )
>>>>>>> c6ea90ec629e5488fcf841b74fb837abd3d990b1
}

export default App;
