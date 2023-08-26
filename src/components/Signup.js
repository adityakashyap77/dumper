import axios from 'axios';
import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [show,setshow] = useState("")
  const handleSignup =()=>{
    if(password!=confirmPassword){
        alert("passwords doesnot match");
        return;
    }
    try {
        const response = axios.post("http://127.0.0.1:5000/signup",{username,password})
        .then((res)=>{
            console.log(res.data.message)
            setshow(res.data.message)
        })
    
    } catch (error) {
        console.error(error)
    }
    
  }
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <div className="message">{show}</div>
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="signup-button" onClick={handleSignup}>Sign Up</button>
        <div className="signup-link">Already have an account? <a href="/login">Log in</a></div>
      </div>
    </div>
  );

}

export default Signup;