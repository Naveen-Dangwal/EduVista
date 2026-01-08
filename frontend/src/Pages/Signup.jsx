import React, { useState } from 'react';
import './Signup.css'; // Optional: Styling for the form

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setError('');
    console.log('Sign-Up Data:', { name, email, password });
    // Add your sign-up logic here (e.g., API call)
  };

  return (
    <div className="sign-up-form-container">
      <form onSubmit={handleSubmit} className="sign-up-form">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
