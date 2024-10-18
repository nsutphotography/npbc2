import { TextField, Box, Button, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import axios from "axios";

const Component = styled(Box)`
  margin: auto;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #333; /* Darker background for form area */
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  color: #ffffff; /* White text */
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-input {
    color: white; /* White text inside input */
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white; /* White border */
    }
    &:hover fieldset {
      border-color: #ff5722; /* Hover color */
    }
    &.Mui-focused fieldset {
      border-color: #ff5722; /* Focus color */
    }
  }
  label {
    color: #bbbbbb; /* Label color */
  }
`;

const SignupPage = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSubmit = async () => {
    try {

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/signup`, signupInfo, { withCredentials: true });

      
      // Check if OTP was sent successfully
      if (response.status === 200) {
        navigate("/signup/otp"); // Redirect to the OTP page
      } else {
        setErrorMessage("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.message : "An error occurred. Please try again. from fruntend catch");
    }
  };

  return (
    <Component>
      <StyledTypography variant="h5">Sign Up</StyledTypography>
      <StyledTextField label="Name" variant="outlined" fullWidth name="name" value={signupInfo.name} onChange={handleChange} required />
      <StyledTextField label="Email" variant="outlined" fullWidth name="email" value={signupInfo.email} onChange={handleChange} required />
      <StyledTextField label="Password" type="password" variant="outlined" fullWidth name="password" value={signupInfo.password} onChange={handleChange} required />
      {errorMessage && (
        <Typography color="error" style={{ marginBottom: "20px" }}>
          {errorMessage}
        </Typography>
      )}
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Sign Up</Button>
    </Component>
  );
};

export default SignupPage;
