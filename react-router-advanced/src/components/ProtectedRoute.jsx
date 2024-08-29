import React from 'react';
import { Navigate } from 'react-router-dom';

// This is just a simulated authentication function.
// Replace this with actual authentication logic in a real application.
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the children components
  return children;
}

export default ProtectedRoute;
