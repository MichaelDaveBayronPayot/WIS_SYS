import React from 'react';
import logo from '../Static/Images/logo.png';  
import '../index.css';

export default function LoginPage() {
  return (
    <div className="body">

      

      <div className="content">


                  <div className="header">
                      <img src={logo} alt="TMC Logo" /> 
                      <h1>TRINIDAD MUNICIPAL COLLEGE</h1>
                  </div>


                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                        <p>Only 2nd-year Students are eligible.</p>
                          <button onClick={()=>({})}>
                            Login
                            </button>

      </div>

    </div>
  );
}
