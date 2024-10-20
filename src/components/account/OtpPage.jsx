import { useState } from "react";
import { TextField, Box, Button, Typography, styled } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // assuming you're using react-router-dom v6

const debugging = true;

const Component = styled(Box)`
  margin: auto;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  color: #ffffff;
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-input {
    color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: #ff5722;
    }
    &.Mui-focused fieldset {
      border-color: #ff5722;
    }
  }
  label {
    color: #bbbbbb;
  }
`;

const ErrorMessage = styled(Typography)`
  color: #ff5722; /* Error message in red */
  margin-top: 10px;
  text-align: center;
`;

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const navigate = useNavigate(); // Hook to handle navigation

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleOtpSubmit = async () => {
    try {
      const token_email = localStorage.getItem('token_email'); // Retrieve the token_email from localStorage
      if(debugging){
        console.log("token_email got from local storage",token_email);
      }
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/signup/verify-otp`, { otp ,token_email }, { withCredentials: true });
      console.log("OTP verified:", response.data);

      if (response.status === 200) {
        navigate("/login"); // Redirect to login page on successful OTP verification
      }
    } catch (error) {
      console.error("Error during OTP verification:", error.response ? error.response.data : error.message);
      setErrorMessage(error.response ? error.response.data.message : "An error occurred. Please try again. error form client side");
    }
  };

  return (
    <Component>
      <StyledTypography variant="h5">Enter OTP</StyledTypography>
      <StyledTextField label="OTP" variant="outlined" fullWidth name="otp" value={otp} onChange={handleChange} required
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleOtpSubmit}>
        Verify OTP
      </Button>
      
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} {/* Display error message */}
    </Component>
  );
};

export default OtpPage;
