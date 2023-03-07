// import React, { useState } from "react";
// import './styles.css';

// export const Signin = (props) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//
//     return (
//         <div className="auth-form-container">

//           <h2>Sign In</h2>
//           <form className="signin-form" onSubmit={handleSubmit}>
//             <label className = "auth-label" htmlFor="email">Email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder = 'youremail.gmail.com' id="email" name="email"/>
//             <label className = "auth-label" htmlFor="password">Password</label>
//             <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder = "**********" id="password" name="password"/>
//             <button type="submit">Log In</button>

//           </form>
//           <button className="link-btn" onClick = {()=> props.onFormSwitch('register')}>Don't have an accout? Register here.</button>
//         </div>

//     )
// }

// Validation----------------------------
import React, { useEffect, useState } from "react";
import "../Styles/App.scss";

function Signin(props) {

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(email));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(email);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters! ";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters! ";
    }
    return errors;
  };

  return (
    <div className="auth-form-container">
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <label className="auth-label" htmlFor="email">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // onChange={handleChange}
          type="text"
          placeholder="youremail.gmail.com"
          id="email"
          name="email"
        />
        <p>{formErrors.email}</p>
        <label className="auth-label" htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // onChange={handleChange}
          type="password"
          placeholder="**********"
          id="password"
          name="password"
        />
        <p>{formErrors.password}</p>
        <button type="submit">Log In</button>
   
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an accout? Register here.
      </button>
      </form>
    </div>
  );
}

export default Signin;
