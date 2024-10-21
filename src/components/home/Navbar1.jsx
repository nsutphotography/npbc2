import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar1.css';

const Navbar1 = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
      <Typography variant="h6" className="navbar-title navbar-link" component={Link} to="/">NPB</Typography>


        <Box className="navbar-links">
          <Button component={Link} to="/" color="inherit">Home1</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/blogs" color="inherit">Blogs</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>
        </Box>

        <Box className="navbar-buttons">
          <Button component={Link} to="/login" color="inherit">Login</Button>
          <Button component={Link} to="/signup" color="inherit" variant="outlined" className="signup-button">Sign Up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar1;
