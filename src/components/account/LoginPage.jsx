import { TextField, Box, Button, Typography, styled } from "@mui/material";
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import { UserDataContext } from "../../context/UserDataContext";

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

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const { setUser } = useContext(UserDataContext); // Get setUser and setToken from context

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

const handleSubmit = async () => {
  try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, loginInfo, { withCredentials: true });

      if (response.status === 200) {
          const { name, email } = response.data;
          setUser({ name, email });
          navigate('/profile');
      }

  } catch (error) {
    
      if (error.response.status === 403) {
        alert(error.response.data.message); // Notify user about OTP
        navigate('/signup/otp-varify');
    } else {
        alert(error.response.data.error || 'Login failed. Please try again.');
    }
  }
};


  return (
    <Component>
      <StyledTypography variant="h5">Login</StyledTypography>
      <StyledTextField label="Email" variant="outlined" fullWidth name="email" value={loginInfo.email} onChange={handleChange} required />
      <StyledTextField label="Password" type="password" variant="outlined" fullWidth name="password" value={loginInfo.password} onChange={handleChange} required />
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Login</Button>
    </Component>
  );
};

export default LoginPage;
