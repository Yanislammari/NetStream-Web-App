import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/AuthService";
import { toast } from "sonner";
import "./Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = await login(email, password);
    switch(token) {
      case "User dosent exist !": {
        toast.error("User dosent exist !");
        break;
      }
      case "Invalid password !": {
        toast.error("Invalid password !");
        break;
      }
      case "Internal servor error !": {
        toast.error("Sorry, internal server error !");
        break;
      }
      default: {
        localStorage.setItem("token", token);
        toast.success("Logged in successfully !");
        navigate("/accounts");
        break;
      }
    }
  }

  return (
    <div className="Login">
      <div className="hero-banner-login">
        <div className="hero-banner-top-login">
          <img src="./assets/netstream-logo.png" alt="Logo" onClick={() => navigate("/")} />
        </div>
        <div className="form-container">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address !" required />
              <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character !" required />
            </div>
            <p className="forgot-password">Forgot your password ?</p>
            <button type="submit" className="submit-btn">Sign In</button>
          </form>
          <p className="redirect-text">Don't have an account ? <span onClick={() => navigate("/register")} className="redirect-link">Sign up here !</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
