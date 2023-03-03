import './Styles/App.scss';
import Navbar from './Components/Navbar';
import { Signin } from "../src/Components/Signin";
import { Register } from "../src/Components/Register";

function App() {
  return ( 
  <>
  <Navbar /> 
  <Signin/>
  <Register/>

  </>)
}

export default App;


// app.js---------------------------
// import { useState } from "react";
// import './App.css';
// import { Signin } from "../src/Components/Signin";
// import { Register } from "../src/Components/Register";


// function App() {
//     const [currentForm, setCurrentForm] = useState('signin');
       
        // const toggleForm = (formName) => {
        //     setCurrentForm(formName);
        // }



//     return ( 
//     <>
//     <Navbar /> 

//     {
//         currentForm === "signin" ? <Signin onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
//     }
    
  
//     </>
//     );
//   }
  
//   export default App;