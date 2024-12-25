import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { getUserByToken } from "../../services/UserService";
import AccountProfile from "../../components/AccountProfile/AccountProfile";
import Button from "../../components/Button/Button";
import { toast } from "sonner";
import "./Accounts.css";

const Accounts: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if(!token) {
          toast.error("You must be authentificated !");
          navigate("/login");
          return;
        }

        const fetchedUser = await getUserByToken(token);
        switch(fetchedUser) {
          case "No Token provided !": {
            toast.error("You must be authentificated !");
            navigate("/login");
            break;
          }
          case "Token not available !": {
            toast.error("Session expired, please sign in !");
            navigate("/login");
            break;
          }
          default: {
            setUser(fetchedUser as User);
          }
        }
      }
      catch(err) {
        toast.error("Internal server error !");
        navigate("/login");
        return;
      }
    }

    fetchUser();
  }, []);

  return (
    <div className="Accounts">
      <h1 className="title">Who's watching ?</h1>
      <div className="AccountsContainer">
        {user?.accounts.map((account) => (
          <Link to={`/home/${account.id}`}>
            <AccountProfile key={account.id} name={account.username} profilePicture={account.profilePicture ? account.profilePicture : "./assets/placeholder.png"} />
          </Link>
        ))}
        <AccountProfile name="Create an account" profilePicture="./assets/icon-plus.png" />
      </div>
      <Button text="Manage profiles" color="gray" onClick={() => console.log(user)} />
    </div>
  );
};

export default Accounts;
