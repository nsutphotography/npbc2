import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use 'Routes' instead of 'Switch'
import OtpPage from "./components/account/OtpPage";
import SignupPage from "./components/account/SignupPage"; // Assuming you have this component
import LoginPage from "./components/account/LoginPage"; // Assuming you have this component
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/home/Navbar";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup/otp" element={<OtpPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
