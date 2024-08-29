import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* This is where the nested routes will be rendered */}
    </div>
  );
}

export default Profile;