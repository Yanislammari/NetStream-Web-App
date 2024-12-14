import React from "react";
import AccountProfile from "../../components/AccountProfile/AccountProfile";
import Button from "../../components/Button/Button";
import "./Accounts.css";

const Accounts: React.FC = () => {
  return (
    <div className="Accounts">
      <h1 className="title">Who's watching ?</h1>
      <div className="AccountsContainer">
        <AccountProfile name="Username" profilePicture="./assets/placeholder.png" />
        <AccountProfile name="Username" profilePicture="./assets/placeholder.png" />
        <AccountProfile name="Username" profilePicture="./assets/placeholder.png" />
        <AccountProfile name="Username" profilePicture="./assets/placeholder.png" />
        <AccountProfile name="Username" profilePicture="./assets/placeholder.png" />
      </div>
      <Button text="Manage profiles" color="gray" onClick={() => console.log("")} />
    </div>
  );
};

export default Accounts;
