// src/components/RegistrationForm.js
import React, { useState } from 'react';

function RegistrationForm() {
  // Initialize state for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for form errors
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    let tempErrors = {};
    if (!username.trim()) tempErrors.username = "Username is required";
    if (!email.trim()) tempErrors.email = "Email is required";
    if (!password.trim()) tempErrors.password = "Password is required";

    setErrors(tempErrors);

    // Proceed only if there are no errors
    if (Object.keys(tempErrors).length === 0) {
      // Here you would typically send the data to a server
      alert(`User registered: ${username}, ${email}, ${password}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={errors.username ? 'error' : ''}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={errors.password ? 'error' : ''}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
