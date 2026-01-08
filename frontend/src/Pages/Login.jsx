import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css'; // Optional: Styling for the form
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for different user credentials and navigate accordingly
    if (email === 'student@gmail.com' && password === 'student123') {
      navigate('/student');
    } else if (email === 'staff@gmail.com' && password === 'staff123') {
      navigate('/staffportal');
    } 
      else if (email === 'admin@gmail.com' && password === 'admin123') {
        navigate('/adminportal');
      }
    else {
      toast.error('Error while logging in')
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <br/>
          <p>Don't have an acoount ?<NavLink to='/signup'><span>SignUP</span></NavLink></p>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
