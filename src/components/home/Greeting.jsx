// src/components/Greeting.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Greeting = () => {
    return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to NSUT Photography Blog!
            </Typography>
            <Typography variant="body1">
                Enjoy exploring our content.
            </Typography>
        </Container>
    );
};

export default Greeting;
