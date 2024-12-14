import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./../../components/button/Button";
import { Toaster, toast } from "sonner";
import "./Main.css";

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="Main">
      <div className="hero-banner">
        <div className="hero-banner-top">
          <img src="./assets/netstream-logo.png" onClick={() => navigate("/")}></img>
          <div className="hero-banner-buttons">
            <Button text="Sign In" color="cornflowerblue" onClick={() => navigate("/login")} />
            <Button text="Sign Up" color="cornflowerblue" onClick={() => navigate("/register")} />
          </div>
        </div>
        <div className="hero-banner-content">
          <h1 className="hero-banner-title">Movies, TV Shows, Series... Welcome to <span>NetStream</span> !</h1>
          <p className="hero-banner-subtitle">Ready to watch ? Click here to create or restart your membership.</p>
          <Button text="Click here !" color="cornflowerblue" onClick={() => navigate("/register")} />
        </div>
      </div>
    </div>
  );
};

export default Main;
