import { TextField, Box, Button, Typography, styled } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
const Component = styled(Box)`
  margin: auto;
`;
const Image = styled("img")({
  display: "flex",
  margin: "auto",
});
const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Login = () => {
  const [account, toggleAccount] = useState("login");

  const imageURL = "";
  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
}
  return (
    <>
      <Component>
        <Box>
          <Image src={imageURL} alt="NPB" />
          {account === "login" ? (
            <Wrapper>
              <TextField />
              <TextField />
              <Button variant="contained">Login</Button>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <Button onClick={() => toggleSignup()} variant="outlined">Create an account</Button>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField />
              <TextField />
              <TextField />
              <Button variant="contained">Signup</Button>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <Button variant="outlined" onClick={() => toggleSignup()}>Already have an account</Button>

            </Wrapper>
          )}
        </Box>
      </Component>
    </>
  );
};

export default Login;
