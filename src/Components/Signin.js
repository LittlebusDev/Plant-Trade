import React, { useState } from "react";
import './signin-up.css';

export const Signin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (
        <div className="auth-form-container">
          <h2>Sign In</h2>
          <form className="signin-form" onSubmit={handleSubmit}>
            <label className = "auth-label" htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder = 'youremail.gmail.com' id="email" name="email"/>
            <label className = "auth-label" htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder = "**********" id="password" name="password"/>
            <button type="submit">Log In</button>
     
          </form>
          <button className="link-btn" onClick = {()=> props.onFormSwitch('register')}>Don't have an accout? Register here.</button>
      </div>
    )
}