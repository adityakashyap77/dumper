import React from 'react'
import { useState } from 'react';
import './Insta.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Insta() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    }
  };
  const navigate = useNavigate();
  const handlesignup=()=>{
    navigate('/Signup')
  }


    return (
        <div className="App">
          <div className="login-container">
            {loggedIn ? (
              <div>
                <h1>Welcome, {username}!</h1>
                <button onClick={() => setLoggedIn(false)}>Logout</button>
              </div>
            ) : (
              <div>
                <h1>Login</h1>
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
                <button className="login-button" onClick={handleLogin}>Login</button>
                <p className="signup-link">Don't have an account? <a onClick={handlesignup}>Sign up</a></p>
              </div>
            )}
          </div>
        </div>
    );
}

export default Insta