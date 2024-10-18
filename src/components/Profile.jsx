// src/components/Profile.jsx
import React from 'react';
import { useContext } from 'react';
import { UserDataContext } from '../context/userDataContext';
const Profile = () => {
  const { user } = useContext(UserDataContext);

  // Simulate fetching user data (in reality, you might fetch this from an API)
  // const user = {
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   profilePicture: "https://via.placeholder.com/150",
  // };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Profile Page</h1>
      {/* <img
        src={user.profilePicture}
        alt="Profile"
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      /> */}
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
