import React from 'react';
import { useState } from 'react';
import logo from '../Static/Images/logo.png';  
import '../index.css';

export default function LoginPage() {
 const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

    if (username === "admin@example.com" && password === "1234") {
      alert("Login successful ✅");
    } else {
      alert("Invalid credentials ❌");
    }
  }
  return (
    <div>
      <div className="login-container">
          <img src={logo} alt="Logo" className="logo" />
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" 
            id="username" 
            name="username" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)} 
            required 
            />

          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" 
            id="password" 
            name="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required 
            />
          </div>
          <button type="submit" className="login-button" >Login</button>
        </form>
      </div>
    </div>
  )
    
}
