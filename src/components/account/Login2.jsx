import { TextField, Box, Button, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";


// Styled Components
const Component = styled(Box)`
  margin: auto;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #1a1a1a; /* Darker background for form area */
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
`;

const Image = styled("img")({
  display: "block",
  margin: "20px auto",
  width: "150px", // Adjust size as needed
});

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    margin: 10px 0;
  }
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

// Login Component
const Login1 = () => {
  const [account, toggleAccount] = useState("login");
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const imageURL = ""; // Set your image path

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (account === "login") {
      setLoginInfo({ ...loginInfo, [name]: value });
    } else {
      setSignupInfo({ ...signupInfo, [name]: value });
    }
  };

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const handleSubmit = async () => {
    if (account === "login") {
      try {
        const response = await axios.post("https://your-backend-url.com/api/login", loginInfo);
        
        console.log("Login successful:", response.data);
        
        // Save token (if your backend sends a token)
        localStorage.setItem("token", response.data.token);
        
        // Redirect or update UI after login
      } catch (error) {
        console.error("Error during login:", error.response ? error.response.data : error.message);
      }
    } else {
      try {
        const response = await axios.post("http://localhost:4000/api/users/signup", signupInfo);
        
        console.log("Signup successful:", response.data);
        
        // Optionally save token or perform other actions
      } catch (error) {
        console.error("Error during signup:", error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <>
      <Component>
        <Box>
          <Image src={imageURL} alt="NPB" />
          {account === "login" ? (
            <Wrapper>
              <StyledTextField label="Email" variant="outlined" fullWidth name="email" value={loginInfo.email} onChange={handleChange} required/>
              <StyledTextField label="Password" type="password" variant="outlined" fullWidth name="password" value={loginInfo.password} onChange={handleChange} required/>
              <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} >Login</Button>
              <StyledTypography>OR</StyledTypography>
              <Button onClick={toggleSignup} variant="outlined" fullWidth>Create an account</Button>
            </Wrapper>
          ) : (
            <Wrapper>
              <StyledTextField label="Name" variant="outlined" fullWidth name="name" value={signupInfo.name} onChange={handleChange} required />
              <StyledTextField label="Email" variant="outlined" fullWidth name="email" value={signupInfo.email} onChange={handleChange} required />
              <StyledTextField label="Password" type="password" variant="outlined" fullWidth name="password" value={signupInfo.password} onChange={handleChange} required />
              <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Signup</Button>
              <StyledTypography>OR</StyledTypography>
              <Button variant="outlined" fullWidth onClick={toggleSignup}>Already have an account</Button>
            </Wrapper>
          )}
        </Box>
      </Component>
    </>
  );
};

export default Login1;
