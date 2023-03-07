// import './Styles/App.scss';
// import Navbar from '../Components/Navbar';
// import { Signin } from "../Components/Signin";
// import { Register } from "../Components/Register";

// function App() {
//   return (
//   <>
//   <Navbar />
//   <Signin/>
//   <Register/>

//   </>)
// }

// export default App;

// Sign_in_up-page.js---------------------------
import { useState } from "react";
import "./Styles/App.scss";
import { Signin } from "../src/Components/Signin";
import { Register } from "../src/Components/Register";
import Navbar from "../Components/Navbar";

function App() {
  const [currentForm, setCurrentForm] = useState("signin");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <Navbar />

      {currentForm === "signin" ? (
        <Signin onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </>
  );
}

export default App;
