import React, { useState } from "react";
import './styles.css';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
             <h2>Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>
          <label className = "auth-label" htmlFor="name">Full name</label>
          <input value={name} name="name" id="name" placeholder="Full name" />
          <label className = "auth-label" htmlFor="email">Email</label>
          <input value={email} onChange = {(e) => setEmail(e.target.value)} type="email" placeholder = 'youremail.gmail.com' id="email" name="email"/>
          <label className = "auth-label" htmlFor="password">Password</label>
          <input value={password} onChange = {(e) => setPassword(e.target.value)}type="password" placeholder = "**********" id="password" name="password"/>
          <button type="submit">Log In</button>
     
          </form>
          <button className="link-btn" onClick = {()=> props.onFormSwitch('signin')}>Aleady have an accout? Login here.</button>
      </div>
    
    )
}
