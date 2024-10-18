import { TextField, Box, Button, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

// Styled Components
// ... (same styled components as before)
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

const Login1 = () => {
  const [account, toggleAccount] = useState("login");
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState(""); // State for OTP
  const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent
  const [verified, setVerified] = useState(false); // Track if OTP is verified

  const imageURL = ""; // Set your image path

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (account === "login") {
      setLoginInfo({ ...loginInfo, [name]: value });
    } else {
      setSignupInfo({ ...signupInfo, [name]: value });
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const handleSubmit = async () => {
    if (account === "login") {
      // Existing login logic
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
      // Handle OTP request
      if (!otpSent) {
        try {
          const response = await axios.post("http://localhost:4000/api/users/signup/request-otp", signupInfo);
      
          // Assuming your backend sends a status code or message indicating success
          if (response.status === 200 ) {
            console.log("OTP sent successfully:", response.data);
            setOtpSent(true); // OTP has been sent, update the state
          } else {
            console.error("OTP sending failed:", response.data);
            alert("Failed to send OTP. Please try again.");
          }
      
        } catch (error) {
          console.error("Error during OTP sending:", error.response ? error.response.data : error.message);
          alert("An error occurred. Please try again later.");
        }
      } else if (!verified) {
        // Handle OTP verification
        try {
          const response = await axios.post("http://localhost:4000/api/users/signup/verify-otp", {
            email: signupInfo.email,
            otp,
          });
          if (response.status === 200 ) {
            setVerified(true); // OTP is verified
            console.log("OTP verified successfully");
          } else {
            console.error("OTP verification failed");
          }
        } catch (error) {
          console.error("Error during OTP verification:", error.response ? error.response.data : error.message);
        }
      } else {
        // Complete signup after OTP is verified
        try {
          const response = await axios.post("http://localhost:4000/api/users/signup/complete", signupInfo);
          console.log("Signup completed:", response.data);
          
        } catch (error) {
          console.error("Error during final signup:", error.response ? error.response.data : error.message);
        }
      }
    }
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="NPB" />
        {account === "login" ? (
          <Wrapper>
            <StyledTextField label="Email" variant="outlined" fullWidth name="email" value={loginInfo.email} onChange={handleChange} required/>
            <StyledTextField label="Password" type="password" variant="outlined" fullWidth name="password" value={loginInfo.password} onChange={handleChange} required/>
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Login</Button>
            <StyledTypography>OR</StyledTypography>
            <Button onClick={toggleSignup} variant="outlined" fullWidth>Create an account</Button>
          </Wrapper>
        ) : (
          <Wrapper>
            <StyledTextField label="Name" variant="outlined" fullWidth name="name" value={signupInfo.name} onChange={handleChange} required />
            <StyledTextField label="Email" variant="outlined" fullWidth name="email" value={signupInfo.email} onChange={handleChange} required />
            <StyledTextField label="Password" type="password" variant="outlined" fullWidth name="password" value={signupInfo.password} onChange={handleChange} required />
            
            {!otpSent && <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Request OTP</Button>}
            
            {otpSent && !verified && (
              <>
                <StyledTextField label="Enter OTP" variant="outlined" fullWidth name="otp" value={otp} onChange={handleOtpChange} required />
                <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Verify OTP</Button>
              </>
            )}
            
            {verified && <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Complete Signup</Button>}
            
            <StyledTypography>OR</StyledTypography>
            <Button variant="outlined" fullWidth onClick={toggleSignup}>Already have an account</Button>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login1;
