// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulate an auth check function
const isAuthenticated = () => {
  // Check for token or other method of authentication
  const token = localStorage.getItem('token');
  return token !== null;
};

const ProtectedRoute = ({ children }) => {
  // If user is authenticated, render the children components, otherwise redirect to login
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
