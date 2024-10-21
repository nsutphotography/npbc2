import React from 'react';
import axios from 'axios';

const CheckCookieButton = () => {
    const checkCookies = async () => {
        try {
            const response = await axios.get('http://localhost:4000', {
                withCredentials: true, // Important to include cookies in the request
            });
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error fetching cookies:', error);
        }
    };

    return (
        <button onClick={checkCookies}>
            Check Cookies
        </button>
    );
};

export default CheckCookieButton;
