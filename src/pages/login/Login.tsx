import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="Login">
      <div className="hero-banner">
        <div className="hero-banner-top">
          <img src="./assets/netstream-logo.png" onClick={() => navigate("/")}></img>
        </div>
        <div className="hero-banner-content">
          {/* Formulaire */}
        </div>
      </div>
    </div>
  );
};

export default Login;
