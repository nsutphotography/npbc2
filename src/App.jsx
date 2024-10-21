import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use 'Routes' instead of 'Switch'
import OtpPage from "./components/account/OtpPage";
import SignupPage from "./components/account/SignupPage"; // Assuming you have this component
import LoginPage from "./components/account/LoginPage"; // Assuming you have this component
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/home/Navbar";
// import CheckCookieButton from "./components/test/CheckCookieButton";
import HomePage from "./components/home/HomePage";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import BlogList from "./components/blogComponent/BlogList";
import Greeting from "./components/home/Greeting";

const App = () => {
  return (
    <Router>
      <HomePage />
      <Routes>
        {/* <Route path="/test" element={<CheckCookieButton />} /> */}
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<Greeting />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/signup/otp-varify" element={<OtpPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
