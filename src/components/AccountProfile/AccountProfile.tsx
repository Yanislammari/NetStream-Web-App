import React from "react";
import "./AccountProfile.css";

interface AccountProfileProps {
  name: string;
  profilePicture: string;
}

const AccountProfile: React.FC<AccountProfileProps> = ({ name, profilePicture }) => {
  return (
    <div className="AccountProfile">
      <img className="profile-picture" src={profilePicture} alt="Profile Picture" />
      <h1 className="username">{name}</h1>
    </div>
  );
};

export default AccountProfile;
